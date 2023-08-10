# 커밋 메시지 룰로 비용 절약하기
## 들어가며: 개발자가 이야기하는 비용이란?
간혹 협업할 때 "이것은 비용이 많이 드는 작업이다", "이렇게 하면 비용을 절약할 수 있다" 등 비용에 대한 이야기를 할 때가 있다.
여기서 비용은 개발자의 시간 사용을 의미하는데, 애플리케이션 개발에서 많이 발생되는 비용 중 하나가 개발자 인건비라 이런 식으로 비용 이야기를 하곤 한다.

개발자의 인건비는 경우에 따라 하루에 20만원 정도로 산정되고 하루에 8시간 근무로 봤을 때 1시간당 2만 5천원이다. 30분 정도 비효율적인 업무로 인해 낭비하면 1만 2천 5백원 정도 손해 보는 것이다. 월급을 받는 입장이지만 시간을 돈으로 환산하니 함부로 사용하는 게 아까워서 최대한 효율적으로 업무를 하려고 노력했었다.

::: tip
Note: 사실상 기업에서 개발자에게 사용되는 비용은 인건비 이외 오피스 자리, 복지, 보험 등 다른 비용들도 있다. 때문에 예상보다 더 많은 비용이 발생한다.
:::

## 커밋 메시지 룰을 쓰면 좋은 점
### 코드의 상태를 확인하는 비용이 줄어든다
커밋 메시지는 메시지만으로 배포할 소스 코드의 상태를 파악할 수 있게 도와준다. 커밋 메시지에 버그 픽스, 리팩터링 등 표현을 하면 배포하면 안 되는 사항인지 배포하기 전에 좀 더 꼼꼼하게 확인할 사항인지 파악 가능하다.

그래서 커뮤니케이션 및 확인 비용이 줄어들게 되는데, 예를 들어 배포 전에 크로스 체크를 할 때 커밋 로그를 캡처해서 메신저를 통해 로그에 있는 동료에게만 확인 요청할 수 있다. 해당 동료는 로그를 보고 직접 확인이 필요한지 아니면 확인 필요 없는 사항인지 알 수 있다.

### 릴리즈 노트 작성 비용이 줄어든다
커밋 메시지가 통일되어 있으면 라이브러리를 배포할 때도 도움 된다. 라이브러리를 배포할 때 릴리즈 노트를 작성하곤 하는 데, 릴리즈 노트에는 버그 수정, 기능 추가, 리팩터링을 헤더로 구분해서 작성한다. 커밋 메시지에 작성되어 있으면 메시지만으로 릴리즈 노트를 작성할 수 있고 심지어 자동화가 가능하다.

## 커밋 메시지 룰 작성 방법
기본적으로 커밋 메시지의 형태는 `[prefix]: [message]` 형태로 사용한다.

`[message]`에는 현재 커밋 하는 코드에 대해 한 줄로 요약해서 작성한다. 만약에 코드에 대한 설명이 어렵거나 많은 내용을 담아야 한다면 커밋 주기를 좀 더 빠르게 할 필요가 있다. 커밋은 자주 할수록 컨텍스트 스위칭과 코드 롤백에 도움이 되기 때문이다.

`[prefix]`에는 다음과 같은 것을 사용한다.
- `feat`은 기능을 추가할 때 사용한다.
- `fix`은 버그 수정할 때 사용한다.
- `refactor`은 기능 변경 없이 리팩터링할 때 사용한다.
- `chore`은 `package.json`에 패키지 추가나 설정 파일 수정할 때 사용한다.
- `docs`은 단순히 주석이나 마크다운을 작성할 때 사용한다.

## 마치며
아래 링크를 참고하면 여기서 소개된 내용 이외 더 풍부한 설명과 정보를 볼 수 있다.
[https://udacity.github.io/git-styleguide/](https://udacity.github.io/git-styleguide/)