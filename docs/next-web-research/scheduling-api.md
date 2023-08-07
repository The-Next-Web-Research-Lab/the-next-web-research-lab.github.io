---
title: 메인 스레드 최적화를 위한 Scheduling API
---

# 메인 스레드 최적화를 위한 Scheduling API
## 스케줄링이란?
메인 스레드는 자바스크립트 실행 이외 렌더링, 네트워트 응답, GC 등 다양한 역할을 수행합니다.
메인 스레드에 많은 작업들이 예약되면 웹 사이트의 성능과 사용성 경험이 저하됩니다. 그러므로 스케줄링을 통해 우선순위가 다른 작업을 효율적으로 등록하고 제어합니다.

## 브라우저 지원 범위
- 지원 브라우저: Chrome / Edge / Opera
- 미지원 브라우저: Firefox / Safari
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#browser_compatibility)

## Native Scheduling API가 필요한 이유?
### 1. 메인 스레드에서 협력하는 행위자들 간의 조정
애플리케이션은 1st-party, 1st-party 라이브러리, 3rd-party 라이브러리 및 프레임워크 스크립트로 구성될 수 있습니다. 동시에 브라우저는 `fetch()` 및 GC, 렌더링 같은 메인 스레드에 실행할 작업들이 있습니다.

Native Scheduling API를 통해 공유된 우선순위 개념을 갖는 것은 브라우저가 더 효율적인 스케줄링 결정을 내리는 데 도움이 되고 사용자 경험을 향상시키는데 도움이 될 수 있습니다.

### 2. 서로 다른 Scheduling API
스크립트 청크를 스케줄링해야 함에도 불구하고 플랫폼에는 통합 API가 부족합니다. 개발자는 작업을 스케줄링할 때 `setTimeout`, `requestAnimationFrame`, `requestIdleCallback`, `postMessage`을 선택할 수 있습니다.

이러한 다른 Scheduling API는 개발자가 스케줄링 코드를 작성하는 것을 더욱 어렵게 하며 이를 위해서는 브라우저의 이벤트 루프에 대한 지식이 필요합니다.

### 3. 브라우저에 양보할 시기 결정
사용성을 위해서 브라우저에게 적절하게 메인 스레드를 양보해야 합니다. 하지만 양보에는 오버헤드가 있습니다. 작업 등록 및 컨텍스트 전환에 따른 오버헤드, 제어권 획득 비용이 등으로 인해 작업 지연 시간이 증가할 수 있습니다.

Native Scheduling API에서는 `isInputPending()` 및 `isFramePending()`으로 양보할 시기를 체크할 수  있습니다. 또한 `scheduler.yield()`로 양보하고 제어권을 찾을 수 있습니다.

## Scheduling API 기능
웹 사이트 개발자 코드 또는 3rd-party 라이브러리 및 프레임워크처럼 애플리케이션에 속한 모든 작업의 우선순위를 지정하는 표준화된 방법을 제공합니다.

API는 Promise 기반이며 작업 우선순위를 설정 및 변경하고, 스케줄러에 추가되는 작업을 지연하고, 작업을 중단하고, 우선순위 변경 및 중단 이벤트를 모니터링하는 기능을 지원합니다.

### 기능 체크
현재 스코프에 노출된 global `this`에서 `scheduler` 속성을 테스트하여 API가 이 브라우저에서 지원되는 경우 아래 코드는 **Feature: Supported**을 출력합니다.
```js
if ("scheduler" in this) {
  console.log("Feature: Supported");
} else {
  console.log("Feature: Not Supported");
}
```

### 우선 순위
두 번째 인자 옵션에서 `priority` 프로퍼티를 사용하여 작업 우선순위를 설정할 수 있습니다. 우선순위는 `user-blocking`, `user-visible`, `background`로 자세한 실행 시점은 다음과 같습니다:

- `user-blocking`
  - 사용자의 페이지와 상호 작용하는 것을 중지하는 작업
  - 페이지를 사용할 수 있는 지점까지 렌더링 하거나 사용자 입력에 응답하는 작업을 중지함
- `user-visible`
  - 기본 우선순위
  - 사용자가 볼 수 있지만 사용자 작업을 반드시 차단할 필요는 없는 작업
  - 페이지의 비필수적인 이미지 또는 애니메이션을 렌더링 하는 작업에서 사용됨
- `background`
  - 시간이 중요하지 않는 작업
  - 렌더링에 필요하지 않는 로그 처리 또는 3rd-party 라이브러리 초기화 작업에 사용됨
 
```js
const log = txt => () => console.log(txt);

if ("scheduler" in this) {
  scheduler.postTask(log("background 1"), { priority: "background" });
  scheduler.postTask(log("user-visible 1"), { priority: "user-visible" });
  scheduler.postTask(log("user-blocking 1"), { priority: "user-blocking" });

  scheduler.postTask(log("background 2"), { priority: "background" });
  scheduler.postTask(log("user-visible 2"), { priority: "user-visible" });
  scheduler.postTask(log("user-blocking 2"), { priority: "user-blocking" });

  scheduler.postTask(log("user-visible 3 (default)"));
}
```

아래 로그는 위 작업의 출력을 보여줍니다.

```
user-blocking 1
user-blocking 2
user-visible 1
user-visible 2
user-visible 3 (default)
background 1
background 2
```

### 작업 지연
두 번째 인자 옵션에서 `delay` 프로퍼티에 정수 밀리초를 지정하여 작업을 지연시킬 수 있습니다. 이렇게 하면 `setTimeout()`를 사용하여 생성될 수 있는 것처럼 시간 초과 시에 작업이 우선순위 큐에 효과적으로 추가됩니다. `delay`은 작업이 스케줄러에 추가되기 전까지의 최소 시간이므로 시간이 더 길 수도 있습니다.

```js
if ("scheduler" in this) {
  scheduler
    .postTask(() => "Task delayed by 2000ms", { delay: 2000 })
    .then((taskResult) => console.log(taskResult));
  scheduler
    .postTask(() => "Next task should complete in about 2000ms", { delay: 1 })
    .then((taskResult) => console.log(taskResult));
}
```

두 번째 문자열은 약 2초 후에 로그에 표시됩니다.
```
Next task should complete in about 2000ms
Task delayed by 2000ms
```

### 작업 중단
`TaskController` 또는 `AbortController`를 사용하여 정확히 같은 방식으로 작업을 중단할 수 있습니다. 차이점은 작업 우선 순위도 설정하려면 `TaskController`를 사용해야 합니다.

아래 코드는 `TaskController`를 생성하고 `signal`에 전달합니다. `abortTaskController.abort()`를 실행하면 `Promise`가 거부되고 `catch` 블록에 걸려 기록됩니다.

```js
if ("scheduler" in this) {
  const abortTaskController = new TaskController();

  scheduler
    .postTask(() => console.log("Task executing"), {
       signal: abortTaskController.signal,
    })
    .then((taskResult) => console.log(taskResult))
    .catch((error) => console.log(`Error: ${error}`));

  abortTaskController.abort();
}
```

아래 로그에는 작업 중단 로그가 표시됩니다. 
```
Error: AbortError: signal is aborted without reason
```

### 우선순위 변경
두 번째 인자 옵션에서 `signal` 프로퍼티에 `TaskController`를 지정할 수 있으며 초기 우선순위를 설정할 수 있습니다.

그런 다음 `addEventListener()`을 사용해서 우선순위 변경의 이벤트를 받을 수 있고, `setPriority()`을 호출하여 우선순위를 변경할 수 있습니다.

```js
if ("scheduler" in this) {
  const controller = new TaskController({ priority: "user-blocking" });
  
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  scheduler.postTask(() => console.log("Task"), { signal: controller.signal });

  controller.setPriority("background");
}
```
아래 출력은 우선순위가 `user-blocking`에서 `background`로 변경되었음을 보여줍니다.

```
Priority changed from user-blocking to background.
Task
```