---
title: RAIL 모델 - 웹 성능 최적화 기본
---
# RAIL 모델 - 웹 성능 최적화 기본
[RAIL](https://web.dev/rail/)은 웹 사이트의 주요 작업인 Response, Animation, Idle, Load에서 각 단어의 첫번째 글자를 따서 RAIL로 네이밍되었습니다. RAIL을 통해서 사용자의 경험을 주요 작업으로 나누고 각각의 성능 목표를 정의하는 데 도움이 됩니다. RAIL에서 권장하는 성능 목표는 [사용자가 지연을 인식하는 방식에 대한 컨텍스트 및 UX 연구](https://www.nngroup.com/articles/response-times-3-important-limits/)를 기반으로 정의되었습니다.

## Response
Response는 버튼 클릭, 애니메이션 시작과 같은 대부분의 입력 후 반응하는 것을 의미합니다. 터치 드래그와 스크롤은 Animation에 해당합니다.

사용자가 버튼 클릭과 같이 입력이 시작하고 반응이 즉각적인 것처럼 느끼도록 하려면 100ms 이내에 반응해야 합니다.
100ms 이내 반응하기 위해서 입력과 관련된 이벤트의 자바스크립트 처리 시간은 50ms 이내에 처리해야 합니다.
만약에 50ms 이내 처리가 어렵다면 사용자에게 다른 반응을 먼저 제공하는 것이 좋습니다.

### 100ms 이내 반응해야 하는 데, 처리시간이 50ms밖에 안되는 이유
> [1] [Idle Time Garbage Collection Scheduling > 4. Idle Task Scheduling](https://static.googleusercontent.com/media/research.google.com/ko//pubs/archive/45361.pdf)

크롬 브라우저에서는 Idle Time(유휴 시간)을 50ms로 제한합니다. 그래서 사용자가 발생하는 입력은 최대 50ms 동안 대기할 수 있으므로 입력 처리 시간의 기준을 50ms로 가정하는 것입니다. 

## Animation
Animation은 비주얼 애니메이션, 로딩, 스크롤, 터치 드래그와 같은 것을 의미합니다.

사람은 모션 추적이 능숙하므로 애니메이션이 부드럽다고 느끼기 위해서는 프레임의 최대 시간은 16ms 시간 내에 응답해야 합니다.

프레임의 최대 시간은 16ms이지만 브라우저는 렌더링하는 데 약 6ms가 필요하므로 프레임의 처리시간은 10ms로 가정해야 합니다.
16ms 시간 내에 응답하기 힘들 때는 [렌더링 성능](https://developers.google.com/web/fundamentals/performance/rendering)을 참조해서 해결합니다.

## Idle
Idle은 브라우저가 작업이 없는 상태를 의미합니다. Idle 상태일 때 데이터 로드, 사용자 입력 응답이 발생하는데, Idle을 가지지 않으면 이것들은 방해할 수 있습니다.

## Load
Load는 사용자가 웹 사이트에 접속할 때 사이트의 로드를 완료하는 것을 의미합니다.
로드에 영향을 미치는 것은 네트워크 속도 및 대기 시간, 하드웨어(예: 느린 CPU), 캐싱, 자바스크립트 구문 분석 등이 영향을 미칩니다.     

사용자가 웹 사이트에 처음 접속할 때는 모바일 사용자 장치와 느린 네트워크를 고려해서 5초 이내에 로드되어야 합니다.
다른 페이지로 이동하는 후속 로드가 발생할 때는 2초 이내에 로드하는 것이 좋습니다.

### 네트워크 상태와 하드웨어에 따른 사용자의 성능 지연 경험
사용자는 본인의 네트워크 상태와 하드웨어에 따라 성능 지연을 다르게 인식합니다.
빠른 네트워크와 빠른 하드웨어 상태에서는 1초 이내로 웹 사이트가 로드되는 것이 익숙합니다.
하지만 느린 네트워크 또는 모바일 기기에서는 더 오래 걸리기 때문에 기다리는 것에 익숙합니다. 그래서 모바일 환경에서는 5초 이내에 로드하는 것이 현실적으로 좋습니다.
