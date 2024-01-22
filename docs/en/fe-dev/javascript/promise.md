---
title: Summary of Promises in One Sheet
---

# Summary of Promises in One Sheet
### Contents
- Promise status
- How to deliver response results
- Microtasks
- Continuous motion
- Promise API
- Catch Case Study
- Application Examples

### Promise status
Promises have two states: pending, fulfilled, and rejected. The status can only be changed from Pending to Fulfill/Reject.
- pending : Initial state
- fulfilled : success status, resolve(), Promise.resolve()
- rejected : Failed status, reject(), Promise.reject()

The status of the fulfilled can be handled by then. The value passed through resolve is passed as an argument to then.
```js
Promise.resolve(10)
  .then(result => console.log(result)) // 10
```

The rejected state can be handled with a catch. The value passed through reject is passed as an argument to the catch.
```js
Promise.reject({code: 404})
  .catch(({code}) => console.log(code)) // 404
```

### How to deliver response results
There is a difference between callback and promise in the delivery of response results.
#### [Promise] Active Async Control
Promises require you to call then to get the result, and you can call then when you need it to receive the data.
```js
let result;
const promise = new Promise(r => $.post(url1, data1, r));
promise.then(v => {
    result = v;
});
```
```js
const promise1 = new Promise(r => $.post(url1, data1, r));
const promise2 = new Promise(r => $.post(url2, data2, r));
promise1.then(result => {
    promise2.then(v => {
        result.nick = v.nick;
        report(result);
    });
});
```
#### [Callback] Passive Async Control
You can send a callback, but you don't know when it will come.
```js
$.post(url. data, () => {
  // you don't know when it will come.
})
```

Realistically, the results are generated through a large number of API requests, so it matters when the response comes.
```js
let result;
$.post(url1, data1, v => {
    result = v;
});
$.post(url2, data2, v => {
    result.nick = v.nick;
    report(result);
});
```

### Microtasks
Among the tasks that are registered asynchronously, there is a microtask that is executed first. Microtasks can be registered through Promise.

#### JavaScript Engine
The JavaScript engine basically runs on a single thread. One thread means you have one stack, and you can only do one thing at the same time. The secret lies in the event loop and queues.

#### Event Loops and Queues
The event loop keeps iterating and checking the work between the call stack and the queue. If the call stack is empty, the job is taken from the queue and put into the call stack.

If there is no work in the call stack, the microtask queue is checked first. If the microtask queue is empty and there are no more tasks to process, check the task queue. If you have a task in the task queue, you can take it out and put it in the call stack.

#### JavaScript Handling
1. Tasks that are registered as asynchronous tasks are divided into Task, Microtask, and AnimationFrame tasks.
2. Microtask processes tasks before Tasks.
3. After the microtask is processed, requestAnimationFrame is called, followed by browser rendering.

```js
console.log('script start')

setTimeout(() => console.log('setTimeout'), 0)

Promise.resolve()
  .then(() => console.log('promise1'))
  .then(() => console.log('promise2'))

requestAnimationFrame(() => console.log('requestAnimationFrame'))

console.log('script end')
```
```
$ script start
$ script end
$ promise1
$ promise2
$ requestAnimationFrame
$ setTimeout
```

### Continuous actions
Promises can treat asynchronous as a value. A function that is processed as a promise can perform continuous actions through the returned promise. On the other hand, functions that are handled by callbacks have no value returned and must be processed internally.
```js
const add10 = (a, callback) => {
  setTimeout(() => callback(a + 10), 100);
};

add10(10, res => {
  add10(res, res => {
    console.log(res);
  });
});

const add20 = (a, callback) => {
  return new Promise(resolve => setTimeout(() => resolve(a + 20), 100));
};

add20(10)
  .then(add20)
  .then(console.log);
```

### Promise API
#### resolve/reject
```javascript
const promise = new Promise((resolve, reject) => {
  getData(
    response => resolve(response.data), 
    error => reject(error.message)
  )
})
```
#### then/catch
```javascript
promise
  .then(data => console.log(data))
  .catch(err => console.error(err))
```
#### all
Promise.all will receive the result through then when all of them are in the fulfillment state.
```javascript
Promise
  .all([
    getPromise(),
    getPromise(),
    getPromise()
  ])
   //response all data 
  .then(data => console.log(data))
  .catch(err => console.error(err))
```

If any of them are rejected, the catch will be executed.
```javascript
Promise
  .all([
    Promise.resolve(1),
    Promise.reject(2),
  ])
  .catch(err => console.error(err))
  // 2
```

#### race
Promise.race completes when any of them are fulfilled or rejected. When complete, it will execute either a then or a catch, depending on the status.
```javascript
Promise
  .race([
    getPromise(), //1000ms 
    getPromise(), //500ms 
    getPromise() //250ms
  ])
  //response of 250ms 
  .then(data => console.log(data))
```

```javascript
Promise
  .race([
    getPromise(), //1000ms 
    getPromise(), //500ms 
    getPromiseReject() //250ms
  ])
   //response of 250ms 
  .catch(err => console.error(err))
```

### Catch Case Study
#### Returning the Synchronous Value from a Catch
If the catch returns a value, it will be received in the next then. Even if you get a catch when HTTP Status is not 2XX, sometimes you want to treat it as a success. It seems to be useful in this case.
```js
const fetchData = _ => new Promise((_, reject) => {
  reject(100)
})
const fetchWrapper = _ => fetchData()
  .catch(() => 'fail')

fetchWrapper()
  .then(response => console.log(`response ${response}`))
// response fail
```

#### Returning Promise.reject() from catch
If you return Promise.reject() from a catch, you will receive it from the catch. It seems to be easy to handle common errors.
```js
const fetchData = _ => new Promise((_, reject) => {
  reject(100)
})
const fetchWrapper = _ => fetchData()
  .catch(() => Promise.reject('fail'))

fetchWrapper()
  .catch(error => console.log(`error ${error}`))
// error fail
```

### Application Examples
#### Asynchronous processing with minimum request time
If a response is received before 5 seconds, the request will be made again after 5 seconds, and if a response is received after 5 seconds, the request will be made again.
```js
const recur = () => Promise.all([
  new Promise(resolve => setTimeout(resolve, 5000)),
  getData
]).then(recur)
```

#### async, await + Promise.all
You can use async and await to write code similar to synchronous code. You can use Promise.all to implement parallelism. There is a delay function that executes resolve after a certain period of time, as shown below.
```js
const delay = ms => new Promise(resolve => {
  setTimeout(() => resolve(ms), ms)
});
```
When you use a function that returns a promise, you can receive the resolve value via await. The result of the main function is returned after 6000ms.
```js
const main = async () => {
  console.time('main');
  const delay1s = await delay(1000);
  const delay2s = await delay(2000);
  const delay3s = await delay(3000);
  console.timeEnd('main');
  return delay1s + delay2s + delay3s;
};
main().then(console.log);
// main: 6005.81787109375ms
// 6000
```
If each promise doesn't affect each other, it needs to be processed in parallel. At the end of every promise, it is checked via Promise.all. The result of the function is returned after 3000ms. If you do parallel processing, you can get a quick response.
```js
const main = async () => {
  console.time('main');
  const [delay1s, delay2s, delay3s] = await Promise.all([delay(1000), delay(2000), delay(3000)]);
  console.timeEnd('main');
  return delay1s + delay2s + delay3s;
};
main().then(console.log);
// main: 3001.468017578125ms
// 6000
```

