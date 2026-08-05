---
title: Nginx Disk 버퍼 초과로 인한 JS 청크 손상 재현 및 해결
lang: ko-KR
description: Nginx 디스크 버퍼 초과 및 HTTP/1.0 프록시 통신으로 인해 발생하는 JS 청크 손상 문제의 원인과 해결 방안을 다룹니다.
---

# Nginx Disk 버퍼 초과로 인한 JS 청크 손상 재현 및 해결

## 1. 개요 및 증상

- **현상**: 웹 사이트 접속 시 빈 화면 노출. 브라우저 콘솔에 `Uncaught SyntaxError: Unexpected end of input` 에러 발생.
- **네트워크 상태**: 에러가 발생한 JS 청크 파일의 응답 코드는 HTTP `200 OK`로 기록됨.
- **특징**: 브라우저 캐시 삭제 시 정상 동작함. 상태 코드가 200이므로 서버 및 APM 모니터링에서는 에러(5xx)로 탐지되지 않음.
- **발생 조건**: 아래 3가지 조건이 동시에 충족될 때 발생함.
  1. **3-Tier 구조**: Client ↔ ALB ↔ Nginx(Edge) ↔ Node.js(Next.js)
  2. **프로토콜**: ALB와 Nginx, 혹은 Nginx와 Node.js 간의 프록시 통신이 `HTTP/1.0`으로 설정됨.
  3. **디스크 고갈**: Nginx가 사용하는 디스크(또는 `tmpfs`) 여유 공간이 요청되는 정적 파일(JS 청크) 크기보다 작음.

## 2. 장애 재현 환경 구성

장애 지점을 Nginx 계층으로 격리하고, 디스크 용량 부족(`ENOSPC`) 상황을 유도하기 위해 Docker로 아래와 같이 환경을 구성함.

### 2.1. 인프라 설정

- **ALB 계층**: 디스크 버퍼링 비활성화 (`proxy_max_temp_file_size 0;`)
- **Nginx 계층**: RAM 버퍼 최소화 및 디스크 용량 제한
  - `proxy_buffer_size 4k;`, `proxy_buffers 4 4k;` (즉시 디스크 스필 유도)
  - Nginx 임시 폴더(`/tmp/nginx-proxy`)를 `tmpfs`로 마운트하고 10MB로 용량 제한.

### 2.2. 통신 프로토콜 설정

Nginx에서 Node.js로의 통신을 HTTP/1.0으로 강제하는 설정:

```nginx
location / {
    proxy_http_version 1.0; 
    proxy_pass http://127.0.0.1:3000;
}
```

## 3. 장애 발생 메커니즘

k6를 통해 5MB 이상의 대용량 응답을 동시에 요청하여 디스크 고갈을 유도했을 때 확인된 장애 흐름은 다음과 같음.
 * Nginx가 Upstream(Next.js)으로부터 대용량 응답을 수신하기 시작하며, 클라이언트에게 즉시 HTTP 200 OK 헤더를 전송함.
 * Nginx의 제한된 RAM 버퍼가 가득 차면서, 응답 데이터를 디스크(/tmp/nginx-proxy)에 임시 저장(Spill)하기 시작함.
 * 동시 요청으로 인해 10MB 크기의 디스크 공간이 가득 차면서 ENOSPC (No space left on device) 에러 발생.
 * 더 이상 버퍼링이 불가능해진 Nginx는 Upstream과의 연결을 강제 종료함.

::: danger 핵심 원인
HTTP/1.0 통신에서는 연결 종료 시점을 응답의 끝으로 간주하는 경우가 발생합니다. 클라이언트는 잘려나간 불완전한 파일을 정상적으로 다운로드 완료한 것으로 판단하고 이를 브라우저에 캐싱합니다. 이후 브라우저는 불완전한 파일을 파싱하다 구문 오류(SyntaxError)를 발생시킵니다.
:::

## 4. 해결 방안: HTTP/1.1 프로토콜 전환
이 장애의 근본적인 문제는 **파일이 중간에 끊겼음에도 브라우저가 이를 정상 파일로 인지하고 캐싱한다**는 점입니다. 이를 해결하기 위해 Nginx의 프록시 통신 프로토콜을 HTTP/1.1로 변경합니다.
### 4.1. HTTP/1.1 변경 시점의 차이 (Transfer-Encoding: chunked)
 * HTTP/1.1은 스트리밍 응답 시 Transfer-Encoding: chunked 방식을 사용합니다.
 * 이 방식은 데이터 전송이 완전히 끝났을 때 **0바이트 청크(Zero-length chunk, 0\r\n\r\n)**를 보내 끝을 명확히 알립니다.
 * Nginx 디스크 고갈로 전송이 중간에 끊어지면, 클라이언트는 0바이트 청크를 받지 못합니다.
 * 브라우저는 전송이 비정상적으로 종료되었음을 인지하고 네트워크 에러(ERR_INCOMPLETE_CHUNKED_ENCODING)를 발생시키며, 해당 파일을 캐싱하지 않습니다.
 * 이후 새로고침 시 캐싱된 파일이 없으므로 정상적으로 재요청이 가능해집니다.
### 4.2. Nginx 설정 변경 내역
Nginx 설정 파일에서 Upstream 서버와 통신할 때 HTTP/1.1을 사용하도록 변경하고, Keep-alive 연결이 유지되도록 Connection 헤더를 초기화합니다.

```nginx
upstream nextjs_backend {
    server 127.0.0.1:3000;
    keepalive 32; # Keep-alive 커넥션 풀 유지를 위해 명시적 추가
}

server {
    listen 80 default_server;
    
    location / {
        # proxy_http_version 1.0; (기본값) 대신 1.1 명시
        proxy_http_version 1.1;
        proxy_set_header Connection ""; # Keep-alive 통신을 위해 Connection 헤더 비움
        
        proxy_pass http://nextjs_backend;
    }
}
```

### 4.3. HTTP/1.1 전환 시 주의사항 (사이드 이펙트 고려)
​프록시 통신을 HTTP/1.1로 전환하고 Keep-alive를 활성화하면, 트래픽이 많은 환경에서 Node.js(Upstream) 서버가 Nginx와 맺은 커넥션을 더 오래 유지하게 됩니다. 설정된 keepalive 개수나 keepalive_timeout 값이 인프라 규모에 맞지 않으면 Node.js의 연결 풀이 고갈될 우려가 있으므로, 전환 후에는 서버 부하와 커넥션 상태를 모니터링하여 적절히 튜닝하는 것이 좋습니다.

#### 4.4. 결론
::: tip 요약 및 권장 사항
프록시 통신을 HTTP/1.1로 전환함으로써, 디스크 버퍼 부족으로 인한 연결 단절 시에도 불완전한 파일이 클라이언트에 캐싱되어 영구적인 장애(빈 화면)로 이어지는 문제를 원천 차단할 수 있습니다. 추가적으로, 근본적인 버퍼 부족 문제 해결을 위해 Nginx의 proxy_buffer_size 상향 조정 및 정적 자산의 CDN 오프로딩을 병행하는 것을 권장합니다.
:::

