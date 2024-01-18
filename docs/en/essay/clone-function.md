---
title: Clone functions depending on the case
---
# Clone functions depending on the case
> This post was organized on December 2, 2019.

### Purpose of the article
I often create and use a function that clones the state while handling immutability. There are various methods, and this is an article that summarizes what functions exist depending on the case.

### Table of contents
- JSON cloning
- Array-Object cloning
- Collection cloning

### JSON cloning
This is a function that is used when using the type supported by [JSON](https://www.json.org/json-en.html). It changes to a string and then parses it back to JSON.

```js
const clone = json => JSON.parse(JSON.stringify(json))
```

### Array-Object cloning
This is a function that is used to clone Arrays and Objects. Built-in objects such as `Set`, `Map` provided by ES6+ are not cloned.

Primitive types are returned immediately, and Arrays and Objects are cloned and returned. When there are more than 1000 items, the performance is better than **JSON cloning**.

```js
const clone = objOrArr => {
  switch (true) {
    case isPrimitive(objOrArr):
      return objOrArr
    case Array.isArray(objOrArr):
      return objOrArr.map(clone)
    default:
      return cloneObject(objOrArr)
  }
}
```
```js
const isPrimitive = value => {
  switch (true) {
    case value === undefined:
    case value === null:
      return true
    case typeof value === 'object':
    case typeof value === 'function':
    case Number.isNaN(value):
      return false
    default:
      return true
  }
}

const cloneObject = obj => {
  const cloned = Object.create(Object.getPrototypeOf(obj))
  for (const key in obj) {
    cloned[key] = clone(obj[key])
  }
  return cloned
}
```

### Collection cloning
This is a function that is used to clone Collection objects, including Map and Set, in ES6+. This is a function that adds the responsibility of handling Map and Set from **Array-Object cloning**.

```js
const clone = value => {
  switch (true) {
    case isPrimitive(value):
      return value
    case isArray(value):
      return value.map(clone)
    case isMap(value):
      return new Map(value)
    case isSet(value):
      return new Set(value)
    default:
      return cloneObject(value)
  }
}
```

```js
const isPrimitive = value => {
  switch (true) {
    case value === undefined:
    case value === null:
      return true
    case typeof value === 'object':
    case typeof value === 'function':
    case Number.isNaN(value):
      return false
    default:
      return true
  }
}
const isArray = target => Array.isArray(target)
const isMap = target => target instanceof Map
const isSet = target => target instanceof Set

const cloneObject = obj => {
  const cloned = Object.create(Object.getPrototypeOf(obj))
  for (const key in obj) {
    cloned[key] = clone(obj[key])
  }
  return cloned
}
```

### End
