---
title: 크롬 개발자 도구에서 네트워크탭 이해하기
---

# 크롬 개발자 도구에서 네트워크탭 이해하기
크롬 개발자 도구에서 네크워크 관련 용어는 다음과 같이 사용됩니다.

- Network 탭 > Throttling
  - Download / Upload / Latency
- Lighthouse 탭
  - 40 ms TCP RTT / 10,240 Kbps throughput (Simulated)

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
