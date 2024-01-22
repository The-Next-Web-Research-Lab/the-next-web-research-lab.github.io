---
title: async await summarized in one sheet
---
# async await summarized in one sheet

### async function
The async function returns a Promise.
```js
const f = async () => {}
f() // Promise
```
If you return a value in normal behavior, you can get it from then.
```js
const f = async () => 'Hi!'
f().then(console.log) // Hi!
```

If an error occurs due to abnormal behavior, it can be received from the catch.
```js
const f = async () => die;
f().catch(error => console.log('Error!')) // Error!
```

### Returning a Promise from async
If you use a Promise as the return value of an async function, the caller will use it in the same way as if you were using an async function. If it's in the resolve state, it's handled as then, and if it's in the reject state, it's handled in catch.
```js
const f = async () => Promise.resolve('Hi!')
f().then(console.log) // Hi!
```
```js
const f = async () => Promise.reject('Hi!')
f().catch(error => console.log('Error!')) // Error!
```

### async throws a Promise return
If an exception occurs inside a promise that returns async, it will be in the reject state of async.
```js
const f = async () => {
  return new Promise(() => die)
}
f().catch(() => console.log('Error!'))
```

### async await
If you need multiple skills to code that returns a promise, you can use await to make it easier to read. await binds the value of the resolve state to the left term, and the reject state is passed to the catch of async.

```js
const delay = (time, value) => new Promise(resolve => {
  setTimeout(() => resolve(value), time);
});
```

```js
async function f() {
  const a = await delay(1000, 'a');
  const b = await delay(2000, 'b');
  return `${a}${b}`;
}

f().then(console.log) // ab
```

```js
async function f() {
  const a = await delay(1000, 'a');
  const b = await Promise.reject('Error!');
  return `${a}${b}`;
}

f().catch(console.log) // Error!
```

### async await throw
If an exception is thrown by a function that uses await, it is passed as a catch.
```js
const g = () => Promise.resolve(die)
const f = async () => {
  return await g()
}

f().catch((err) => console.log('Error!', err)) // Error!
```

### await synchronous code error
If an error occurs in synchronous code in await, it is passed to a catch.
```js
const g = () => die
const f = async () => {
  return await g()
}

f().catch(() => console.log('Error!')) // Error!
```
