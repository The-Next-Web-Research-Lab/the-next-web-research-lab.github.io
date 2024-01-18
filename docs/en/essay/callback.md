---
title: When to use callbacks
---
# When to use callbacks
### Purpose of the article
When writing JavaScript code, I use callbacks clearly at different times. When writing asynchronous code, I use them only with Promise, and when writing synchronous code, I use them as arguments for functions like map, filter, reduce.

When writing asynchronous code, I want to remind myself of the obvious reason why I don't use callbacks as arguments. And I want to summarize the meaning of using callbacks as arguments in synchronous code.

### Table of contents
- Why is the callback pattern not appropriate for asynchronous processing?
- What is the meaning of using callbacks as arguments in synchronous code?

### Why is the callback pattern not appropriate for asynchronous processing?
Using the callback pattern for asynchronous processing makes the code hard to read with nesting and indentation. But this is a secondary factor that distracts the eye, and there are other reasons.

There are two reasons why you should not use the callback pattern for asynchronous processing.

**First**, the callback pattern shows the asynchronous flow in a nonlinear, non-sequential direction. Therefore, to understand the implemented code, you have to hop around the entire code base to follow the sequential flow from one function to another and then to the next function.

People are used to planning in a sequential, single-threaded way, but the callback pattern makes it hard for people to infer.

**Second**, the callback pattern implicitly passes control to the calling part, which leads to a trust issue.

You need additional coding to filter out situations where you can prevent unwanted repetitive calls, receive success/error signals simultaneously or not at all.

Because of the problems with asynchronous flow control and function control, receiving callbacks as arguments is a hindrance to writing easy-to-understand code.

The solution is to use `Promise`, which we all know. Using `Promise`, you can have asynchronous flow control and function control.

### What is the meaning of using callbacks as arguments in synchronous code?
The meaning of using callbacks as arguments in synchronous code is to share control. By sharing control, you can achieve reusability and polymorphism.

I explained earlier that using callbacks causes problems with control. When asynchronous, callbacks are hard to guarantee order, so callbacks have no return value.
But in synchronous code, the order is guaranteed, so you can have a return value. As a result, control is also shared.

Let's assume that there is an add function that iterates over an array and adds 1. This function has both iteration and operation control.
```js
const add = (arr) => {
  const newArr = []
  for (const item of arr) {
    newArr.push(item + 1)
  }
  return newArr
}

const arr = [1, 2, 3]
const result = add(arr)
console.log(result) // [2, 3, 4]
```

Now let's take control by taking a callback as an argument. By taking a callback as an argument, you can get the operation control of the iteration and operation.

The add function user side controls the operation of adding 1. And you can also do other operations.
```js
const add = (arr, callback) => {
  const newArr = []
  for (const item of arr) {
    newArr.push(callback(item))
  }
  return newArr
}

const arr = [1, 2, 3]
const added1 = add(arr, (item) => item + 1)
const added10 = add(arr, (item) => item + 10)
console.log(added1) // [2, 3, 4]
console.log(added10) // [11, 12, 13]
```

Now let's move on to the story of polymorphism. Polymorphism can be easily explained as a phenomenon that describes a function that works on two or more types as having polymorphism. In other words, it is a phenomenon of operations that can be used by two or more types.

The add function not only adds numbers, but also modifies the items of the array.
Such a function is called map. This is an example of using the add function name as map.
```js
const map = (arr, callback) => {
  const newArr = []
  for (const item of arr) {
    newArr.push(callback(item))
  }
  return newArr
}
```
```js
const arr = [1, 2, 3]
const result = map(arr, (item) => item + 1)
// [2, 3, 4]
```
```js
const product = [
  { price: 1000, count: 2, total: 0 },
  { price: 2000, count: 3, total: 0 }
]
const changedProduct = map(product, ({price, count}) => {
  return {
    price,
    count,
    total: price * count
  }
})
// [
//   { price: 1000, count: 2, total: 2000 },
//   { price: 2000, count: 3, total: 6000 }
// ]
```

#### Conclusion
When using callbacks as arguments in asynchronous code, there are problems with non-sequential flow control and trust issues due to control inversion, but
in synchronous code, you can achieve reusability and polymorphism by sharing control.
The same callback pattern, but it brings a lot of benefits depending on the situation. I think it will be a part of easy-to-understand code if used appropriately.
