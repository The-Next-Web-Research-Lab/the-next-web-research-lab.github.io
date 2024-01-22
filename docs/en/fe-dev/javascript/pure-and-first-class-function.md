---
title: Summary of Pure Functions and First-Class Functions
---
# Summary of Pure Functions and First-Class Functions

## Pure Functions
**Pure functions** are functions that have the same return value for the same arguments. Therefore, it becomes an easy-to-handle function because it returns the same result even if the evaluation time changes. If an object needs to be changed, a new object is created and returned.

If you use an external variable or change an external variable, it is not a pure function. Impure functions need to handle evaluation times finely because they have different results depending on the evaluation time.

```js
// Pure function
const add = (a, b) => a + b;
const add1 = (obj, b) => ({val : obj.val + b})

// Impure function
const add2 = (a, b) => a + b + c;
const add3 = (a, b) => {
  c = b;
  return a + b;
};
const add4 = (obj, b) => {
  obj.val += b;
};
```

## First-Class Functions
**First-class functions** refer to functions that can be treated as values. Because it can be treated as a value, it can be passed as an argument, returned, and defined at any time.

```js
const f1 = a => a * a;
const f2 = () => f1;
const f3 = f => f();
```