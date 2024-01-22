---
title: Immutable Data Structures and Persistent Data Structures
---
# Immutable Data Structures and Persistent Data Structures

## Immutable Data Structures
Immutable data structures refer to states that never change. When a change is needed, a new state is created and the value is changed.

### Example using JSON clone
```js
const clone = obj => JSON.parse(JSON.stringify(obj))

const obj = {
  message: 'Hello World',
  inner: { count: 1 }
}
const clonedObj = clone(obj);

console.log(obj === clonedObj) // false
console.log(obj.inner === clonedObj.inner) // false
```

## Persistent Data Structures
Persistence means preserving the state without removing it.

Persistent data structures return a new state when a change is needed, but maintain the previous state. When a state change is needed again, if it is the same as the previous state, the previous state is used.

Using persistent data structures can compensate for the memory inefficiency of immutable data structures, which create new states when changes are needed.

## Example using [immerJs](https://immerjs.github.io/immer/docs/introduction)

Although the object was recreated because the state was changed, `inner` was not changed, so the previous state is maintained.
```js
const obj = {
  message: 'Hello World',
  inner: { count: 1 }
}
const clonedObj = immer.produce(obj, (draft) => {
  draft.message = 'Hello'
})

console.log(obj === clonedObj) // false
console.log(obj.inner === clonedObj.inner) // true
```

## References
- [Immutable Data and React](https://ohgyun.com/585)
- [Persistent data structure wiki](https://en.wikipedia.org/wiki/Persistent_data_structure)
- [Immutable.js, persistent data structures and structural sharing](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2)