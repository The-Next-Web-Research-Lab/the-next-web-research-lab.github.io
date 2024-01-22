---
title: Summary of Concurrency and Parallelism
---
# Summary of Concurrency and Parallelism

## Concurrency
Concurrency is about how many **different tasks** can be controlled at the same time!

For example, when playing a video on a web browser,
concurrency implementation allows you to do various tasks such as scrolling through the playlist or writing comments together.

A web browser operates with one main thread. Therefore, to minimize stuttering, you need to secure Idle Time and minimize Long Task.

#### Definition of Terms
- [1] Idle Time: 50ms time when there is no work on the main thread. Time when user interaction can occur.
- [2] Long Task: Execution time of more than 50ms on the main thread

## Parallelism
Parallelism is about how many **tasks** can be done at the same time!

For example, if you run a task[1] that takes about 5 seconds with JavaScript by executing it with 5 web workers[2], you can complete it in a shorter time.

#### [1] Task that takes about 5 seconds with JavaScript
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

#### [2] Executing with 5 web workers
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