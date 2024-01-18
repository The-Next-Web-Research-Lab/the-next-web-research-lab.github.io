---
title: safeChain for safe chaining
---
# safeChain for safe chaining
> This post was organized on December 7, 2019.

#### Purpose of the article
Various techniques are used to safely use objects and arrays. The methods include assigning a default value when undefined or using a conditional statement. And recently, [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) syntax is also used to safely chain.

What I tried this time was to create a function for safe chaining. I made it to prevent readability and complexity from increasing with basic value assignment or conditional statements, or in environments that do not support optional chaining-like syntax.

#### Order
First, I organized the order of how to use the function and the implementation code. And I wrote a case that can be applied in practice.

- How to use
- Code
- Use case

#### How to use
In normal situations, it extracts normal values.
```js
const obj = {a: {b: {c: 'c'}}}
const dot = safeChain(obj, (obj) => obj.a.b.c)
const destruct = safeChain(obj, ({a: {b: {c}}}) => c)

console.log(dot) // c
console.log(destruct) // c
```

In abnormal situations, it returns `undefined`.
```js
const obj = {a: {b: {c: 'c'}}}
const dot = safeChain(obj, (obj) => obj.c.b.a)
const destruct = safeChain(obj, ({c: {b: {a}}}) => a)

console.log(dot) // undefined
console.log(destruct) // undefined
```

If you use the basic syntax, this error will occur.
```js
const obj = {a: {b: {c: 'c'}}}
const {c: {b: {a}}} = obj
// Uncaught TypeError: Cannot read property 'b' of undefined
```

#### Code
##### safeChain main function
- Wraps the state received as an argument in a proxy.
- Executes the mapper function received as an argument.
- If the result of the mapper function is wrapped (isPack), it is unpacked (unpack).
  - Otherwise, it returns immediately.
- Finally, cancel all proxies and return the result.

```js
const safeChain = (state, mapper) => {
  const revokes = []
  const proxy = toProxy(state, revokes)
  const mappedResult = mapper(proxy)
  const result = isPack(mappedResult) ? unpack(mappedResult) : mappedResult

  revokes.forEach(fn => fn())
  return result
}
```

##### Helper code
```js
const symbol = Symbol('safe')

const isNullish = value => value === undefined || value === null
const isPack = pack => typeof pack === 'object' && symbol in pack

const pack = value => ({ [symbol]: value })
const unpack = pack => pack[symbol]
```

##### Core function
- toProxy wraps (pack) the state and creates a proxy.
- trap handles the state when it is queried.
  - If it is a key (symbol) defined internally, it returns the value.
  - Otherwise
    - When undefined or null, wrap undefined in a proxy.
    - If it is a normal value, wrap the normal value in a proxy.

```js
const toProxy = (state, revokes) => {
  const wrap = pack(state)
  const handler = trap(revokes)
  const {proxy, revoke} = Proxy.revocable(wrap, handler)
  revokes.push(revoke)
  return proxy
}

const trap = (revokes) => {
  return {
    get (target, key) {
      const unpacked = unpack(target)
      return key === symbol ?
        unpacked :
        toProxy(isNullish(unpacked) ? undefined : unpacked[key], revokes)
    }
  }
}
```

#### Use case
The backend API response can be used after the API response occurs. However, if you query the value in the getter and use it in the vue, angular component, a reference error occurs. In this case, you can prevent errors by using safeChain.

It is a code that assumes the use of the backend API.

```js
const backendApi = {
  fetchResponse() {
    this.response = {
      result: { message: 'Success' },
      status: 200,
      statusCode: 'Ok'
    }
  },
  response: null,
  get result () {
    if (this.response && this.response.result) {
      return this.response.result
    }
    return undefined
  }
}

console.log(backendApi.result) // undefined
backendApi.fetchResponse()
console.log(backendApi.result) // { message: 'Success' }
```

You can remove the conditional statement by using the safeChain function.
```js
const backendApi = {
  fetchResponse() {
    this.response = {
      result: { message: 'Success' },
      status: 200,
      statusCode: 'Ok'
    }
  },
  response: null,
  get result () {
    return safeChain(this.response, ({result}) => result)
  }
}

console.log(backendApi.result) // undefined
backendApi.fetchResponse()
console.log(backendApi.result) // { message: 'Success' }
```

#### End