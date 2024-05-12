---
title: 인터넷 속도 측정
---
# 자바스크립트로 인터넷 속도 측정하기
`navigator.connection.effectiveType`을 사용해서 인터넷 속도를 조회할 수 있습니다. 브라우저에서 사이트 접속 후 인터넷 속도를 측정하며 결과값은 slow-2g, 2g, 3g, 4g 중에 하나를 알려줍니다.

## 브라우저 지원 범위
- Firefox / Safari 에서 미지원하고, 대부분 지원한다.
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType#browser_compatibility)

::: code-group 

```html [데모.html]
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

```js [scripts.js]
document.querySelector("#root").textContent = `navigator.connection.effectiveType: ${navigator.connection.effectiveType}`;
```

:::

## 항목별 상세 스펙
### 용어정의
- RTT
  - Round Trip Time의 약자로 왕복 시간이라 한다.
  - 네트워크 시작 지점에서 패킷이 타겟으로 전송되는 데 걸리는 시간과 해당 패킷의 승인이 네트워크 시작 지점에 다시 전송되는 시간을 의미한다.
- Downlink
  - 기지국에서 단말기 방향의 링크다.

### slow-2g
- 최소 RTT: 2000ms
- 최대 Downlink: 50Kbps
- 텍스트 전용 페이지와 같은 소규모 전송에 적합하다.

### 2g
- 최소 RTT: 1400ms
- 최대 Downlink: 70Kbps
- 작은 이미지 전송에 적합하다.

### 3g
- 최소 RTT: 270ms
- 최대 Downlink: 700Kbps
- 고해상도 이미지, 오디오 및 SD 비디오와 같은 큰 리소스 전송에 적합하다.

### 4g
- 최소 RTT: 0ms
- 최대 Downlink: ∞
- HD 비디오, 실시간 비디오에 적합하다.