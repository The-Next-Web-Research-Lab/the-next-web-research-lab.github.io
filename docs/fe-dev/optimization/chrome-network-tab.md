---
title: 크롬 개발자 도구에서 네트워크탭 이해하기
---
# 크롬 개발자 도구에서 네트워크탭 이해하기
## 네트워크 탭 열기
네트워크 탭은 크롬 개발자 도구에 있습니다. Ctrl + Shift + i 단축키나 메뉴를 통해서 열 수 있습니다.

![개발자 도구 접근 방법](./img/devtools.png)
![네트워크 탭](./img/network-tab.png)

## 네트워크 탭
네트워크 탭에서는 웹 사이트의 이미지, 영상, HTML, CSS, JS 등과 같은 리소스를 확인 할 수 있습니다. 대체로 리소스를 정상적으로 다운로드 했는 지 확인하거나 리소스의 용량과 다운로드 시간을 확인해서 최적화를 진행합니다.

- Disable cache: HTTP Cache 사용 유무를 체크합니다.
- No throttling: 네트워크 속도를 조절해서 느린 네트워크 환경을 테스트할 때 사용합니다.
- Fetch/XHR: JS를 통해서 HTTP Request/Response를 확인 할 수 있습니다.
- WS: WebSocket 을 확인 할 수 있습니다.

​
## 네크워크 속도 조절 관련 용어

크롬 개발자 도구에서 네크워크 관련 용어는 다음과 같이 사용됩니다.

- Network 탭 > Throttling
  - Download / Upload / Latency
- Lighthouse 탭
  - 40 ms TCP RTT / 10,240 Kbps throughput (Simulated)

### 용어 정의
여기서 사용되는 용어의 의미는 다음과 같습니다. 

#### Download / Upload
- 리소스를 다운로드, 업로드하는 속도를 의미합니다.

#### Latency(대기시간)
- 데이터를 요청한 시점과 데이터가 도착한 시점 사이에 걸린 시간을 의미합니다.

#### RTT
- Round Trip Time의 약자로 왕복 시간을 의미합니다.
- 네트워크 시작 지점에서 패킷이 타겟으로 전송되는 데 걸리는 시간과 해당 패킷의 승인이 네트워크 시작 지점에 다시 전송되는 시간을 의미합니다.

#### Throughput(처리량)
- 초당 전송 가능한 데이터를 의미합니다
