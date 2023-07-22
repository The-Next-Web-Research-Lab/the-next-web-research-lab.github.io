---
title: 불변 자료구조와 영속 자료구조
---

# 불변 자료구조와 영속 자료구조

## 불변 자료구조 - Immutable Data Structures
불변 자료 구조는 영원히 변하지 않는 상태를 말합니다. 변화가 필요할 때 새로운 상태를 만들어 내고 값을 변경합니다.

### JSON 클론을 사용한 예시
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

## 영속 자료 구조 - Pesistent Data Structures
영속성은 상태를 제거하지 않고 보존하는 것을 의미합니다.

영속 자료 구조는 상태에 변화가 필요할 때 새로운 상태를 반환하지만 이전 상태를 계속 유지하고 있는 자료구조입니다. 다시 상태 변화가 필요한 시점에 이전에 만들었던 상태와 동일하면 이전 상태를 사용합니다.

영속 자료 구조를 사용하면 변화가 필요할 때 새로 만듦으로 메모리 효율성이 비교적 떨어지는 불변 자료구조의 단점을 보완할 수 있습니다.

## [immerJs](https://immerjs.github.io/immer/docs/introduction)을 사용한 예시

상태가 변경되어 객체를 새로 만들었지만 `inner`는 변경이 되지 않았기 때문에 기존 상태를 유지한다.
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

## 참고자료
- [Immutable Data and React](https://ohgyun.com/585)
- [Persistent data structure 위키](https://en.wikipedia.org/wiki/Persistent_data_structure)
- [Immutable.js, persistent data structures and structural sharing](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2)