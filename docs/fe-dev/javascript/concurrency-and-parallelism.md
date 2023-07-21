---
title: 동시성과 병렬성 한 장에 정리
---
# 동시성과 병렬성 한 장에 정리

## 동시성
동시성은 동시에 얼마나 **다양한 일**들을 컨트롤할 수 있는지!

예를 들어 웹 브라우저에서 동영상을 재생하고 있을 때,
플레이 리스트 스크롤이나 댓글 작성 등 다양한 일을 함께 할 수 있는 것이 동시성 구현이다.

웹 브라우저는 메인 스레드 하나로 동작한다. 때문에 버벅임 현상 최소화를 위해 Idle Time[1]을 확보하고, Long Task[2]를 최소화해야 한다.

#### 용어 정의
- [1] Idle Time: 메인 쓰레드의 작업이 없는 50ms 시간. 사용자 인터렉션이 발생할 수 있는 시간.
- [2] Long Task: 50ms 이상 메인 쓰레드의 실행 시간

## 병렬성
병렬성은 동시에 얼마나 **많은 일**들을 할 수 있는지!

예를 들어 자바스크립트로 약 5초 걸리는 작업[1]을 웹 워커 5개로 실행[2]하면 좀 더 빠른 시간에 완료할 수 있다.

#### [1] 자바스크립트로 약 5초 걸리는 작업
```js
const sumRange = ([start, end]) => {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
};


console.time('sumRange');
sumRange([0, 10_000_000_000]);
console.timeEnd('sumRange');

// sumRange: 5089.886962890625 ms
```

#### [2] 웹 워커 5개로 실행
```js
const sumRange = ([start, end]) => {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
};

const runWorker = (fn, arg) => {
  return new Promise(resolve => {
    const blob = new Blob([`onmessage =e=>postMessage((${fn})(e.data));`], {
      type: 'text/javascript'
    });
    const url = URL.createObjectURL(blob);
    const worker = new Worker(url);
    worker.onmessage = e => resolve(e.data);
    worker.onerror = e => resolve(null);
    worker.postMessage(arg);
  });
};

console.time('runWorker');
Promise.all([
  runWorker(sumRange, [0, 2_000_000_000]),
  runWorker(sumRange, [2_000_000_001, 4_000_000_000]),
  runWorker(sumRange, [4_000_000_001, 6_000_000_000]),
  runWorker(sumRange, [6_000_000_001, 8_000_000_000]),
  runWorker(sumRange, [8_000_000_001, 10_000_000_000]),
])
  .then(results => {
    results.reduce((a, b) => a + b, 0);
    console.timeEnd('runWorker');
    // runWorker: 1597.4150390625 ms
  });
```