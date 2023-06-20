---
title: Immer.js 기능 만들기
sidebar: auto
---

::: tip Immer.js 
[Immer.js](https://immerjs.github.io/immer/docs/introduction): Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way. It is based on the copy-on-write mechanism.
:::

::: tip 객체 
이 글에서 사용된 객체는 JavaScript의 Object를 의미합니다.
:::

## Immer.js 특징
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
`obj`의 상태가 변경되어 객체를 새로 만든다. 하지만 `obj.inner`는 변경이 되지 않았기 때문에 기존 상태를 유지한다.

상태에 변화가 필요할 때 새로운 상태를 반환하고, 변화가 필요없는 부분은 이전 상태를 계속 유지하는 자료구조. 즉, **영속 자료 구조**의 특징이다.

## Immer.js의 원리
Immer.js의 코드를 분석할 결과 Immer.js의 원리는 이렇다.
- [Proxy API](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)의 setter로 변경을 감지한다.
- Proxy API의 getter가 호출될 때, 값이 객체면 Proxy API로 감싸서 반환한다.
- 상태 변경 시, 해당 객체와 상위 객체를 모두 새로운 객체로 변경한다.

## Proxy API 기반 다지기
### 객체 감시하기
Proxy API의 기본 사용방법은 이렇다.

```js
const createProxy = target => {
  const handler = {
    get (target, key) {
      console.log('GET', key)
      return target[key]
    },
    set (target, key, value) {
      console.log('SET', key, value)
      target[key] = value
    }
  }
  return new Proxy(target, handler)
}

const target = {
  message: ''
}
const proxy = createProxy(target)

proxy.message = 'World!'
console.log('LOG', proxy.message)
```
##### 실행 결과
```
SET message World!
GET message
LOG World!
```

### 감시 취소하기
`Proxy.revocable`를 사용하면 감시를 취소할 수 있다. 
`Proxy.revocable`의 반환은 `proxy`와 감시해제를 위한 `revoke`함수를 반환한다. `revoke` 함수 호출 뒤에는 
Proxy를 사용할 수 없다.

```js
const createProxy = target => {
  const handler = {
    get (target, key) {
      console.log('GET', key)
      return target[key]
    },
    set (target, key, value) {
      console.log('SET', key, value)
      target[key] = value
    }
  }
  return Proxy.revocable(target, handler)
}

const target = {
  message: ''
}
const {proxy, revoke} = createProxy(target)

proxy.message = 'World!'
console.log('LOG', proxy.message)

revoke()

console.log(proxy.message) // Error
```
##### 실행 결과
```
SET message World!
GET message
LOG World!
console.log(proxy.message) // Error
                  ^
```

### 깊은 객체 감시하기
Proxy API는 객체의 프로퍼티에 할당된 깊은 객체를 감시하지 않는 다.
`get`에서 객체의 프로퍼티값이 객체인지 판단하고, Proxy로 만들어주면, 깊은 객체도 감시할 수 있다.

```js
const createProxy = (state, revokes) => {
  const handler = {
    get (target, key) {
      const value = target[key]
      if (typeof value === 'object') {
        const {proxy} = createProxy(value, revokes)
        return proxy
      } else {
        return value
      }
    },
    set (target, key, value) {
      console.log('SET', target, key, value)
      target[key] = value
    }
  }

  const {proxy, revoke} = Proxy.revocable(state, handler)
  revokes.push(revoke)
  return {proxy, revoke, revokes}
}

const proxyAll = (base, fn) => {
  const {proxy, revokes} = createProxy(base, [])

  fn(proxy)
  revokes.forEach(fn => fn())

  return base
}
```
```js
const baseState = {
  done: false,
  inner: {
    txt: 'World',
  }
}

proxyAll(baseState, (draft) => {
  draft.done = true
  // draft.inner 접근 시, Proxy를 반환한다.
  draft.inner.txt = 'Hello'
})
```
##### 실행 결과
```
SET done true
SET txt Hello
```

## 영속 자료 구조 만들기
### 자료 구조 만들기
객체와 내부 객체의 연결 구조를 LinkedList로 구성했다.
LinkedList가 객체의 연결 구조와 유사하고, 간단하게 구현 가능했기 때문이다.
 
이 로직은 객체를 LinkedList로 변경하는 로직이다. 

##### 함수 정의
```js
const toLinkedListItem = (base, parent = null, propName = null) => {
  return {
    base,
    parent,
    propName,
    copy: null,
  }
}

const toLinkedList = (base, parent = null, propName = null, list = []) => {
  const state = toLinkedListItem(base, parent, propName)

  list.push(state)

  for (const propName in base) {
    if (typeof base[propName] === 'object') {
      toLinkedList(base[propName], state, propName, list)
    }
  }

  if (parent) {
    return state
  } else {
    return list
  }
}
```
##### 함수 사용
```js
const base = {
  value: 'Hello',
  inner: {message: 'Hello World'}
}
const state = toLinkedList(base)

console.log(state)
```
##### 실행 결과
```
[
  {
    base: {value: 'Hello', ...},
    parent: null,
    propName: null,
    copy: null,
  },
  {
    base: {message: 'Hello World'},
    parent: { // linked
      base: {value: 'Hello', ...},
      parent: null,
      propName: null,
      copy: null,
    },
    propName: 'inner',
    copy: null,
  }
]
```

### 자료 변경하기
아이템 변경 시, parent에 값이 있으면 부모값도 변경한다.

##### 함수 정의
```js
const changeLinkedList = (state, propName, value) => {
  if (state.copy) {
    state.copy[propName] = value
  } else {
    state.copy = Object.assign({}, state.base, {[propName]: value})
  }

  if (state.parent) {
    changeLinkedList(state.parent, state.propName, state.copy)
  }
}
```
##### 함수 사용
```js
const base = {
  value: 'Hello',
  inner: {message: 'Hello World'}
}
const state = toLinkedList(base)
changeLinkedList(state[1], 'message', 'World')
console.log(state)
```
##### 실행 결과
```
[
  {
    base: {value: 'Hello', ...},
    copy: {value: 'Hello', ...},
    parent: null,
    propName: null,
  },
  {
    base: {message: 'Hello World'},
    copy: {message: 'World'},
    parent: { // linked
      base: {value: 'Hello'},
      copy: {value: 'Hello', ...},
      parent: null,
      propName: null,
    },
    propName: 'inner',
  }
]
```

### 원본자료 사용하기
최상위 객체의 copy가 있으면 상태가 변경됬다는 의미이다. 즉, copy가 있을 때 copy를 반환하고 없으면 base를 반환하면 된다.

##### 함수 정의
```js
const toBase = (list) => {
  return list[0].copy ? list[0].copy : list[0].base
}
```

##### 함수 사용
```js
const base = {
  value: 'Hello',
  inner: {message: 'Hello World'}
}
const state = toLinkedList(base)

console.log(base === toBase(state))
// true

changeLinkedList(state[1], 'message', 'World')
console.log(base === toBase(state))
// false
```

## Proxy API와 영속 자료 구조 병합하기
### 상태를 자료 구조로 사용
##### 함수 정의
```js
const toLinkedListItem = (base, parent = null, propName = null) => {
  return {
    base,
    parent,
    propName,
    copy: null,
  }
}

const changeLinkedList = (state, propName, value) => {
  if (state.copy) {
    state.copy[propName] = value
  } else {
    state.copy = Object.assign({}, state.base, {[propName]: value})
  }

  if (state.parent) {
    changeLinkedList(state.parent, state.propName, state.copy)
  }
}

const createProxy = (base, revokes, parentState, propName) => {
  const state = toLinkedListItem(base, parentState, propName)
  const handler = {
    get (target, key) {
      const value = state.copy ? state.copy[key] : state.base[key]
      if (typeof value === 'object') {
        const {proxy} = createProxy(value, revokes, state, key)
        return proxy
      } else {
        return value
      }
    },
    set (target, key, value) {
      console.log('SET', target, key, value)
      changeLinkedList(state, key, value)
    }
  }

  const {proxy, revoke} = Proxy.revocable(base, handler)
  revokes.push(revoke)
  return {proxy, revoke, revokes, state}
}

const produce = (base, fn) => {
  const {proxy, revokes, state} = createProxy(base, [])

  fn(proxy)
  revokes.forEach(fn => fn())

  return state.copy ? state.copy : state.base
}
```

이 코드는 [Immer.js의 원리](#immer-js의-원리)에서 설명했던 원리와 동일하다.

- [Proxy API](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)의 setter로 변경을 감지한다.
- Proxy API의 getter가 호출될 때, 값이 객체면 Proxy API로 감싸서 반환한다.
- 상태 변경 시, 해당 객체와 상위 객체를 모두 새로운 객체로 변경한다.

##### 함수 사용
```js
const baseState = {
  done: false,
  inner: { done: false }
}

const nextState = produce(baseState, (draft) => {
  draft.done = true
})

console.log(baseState.done === nextState.done)
// false
console.log(baseState.inner === nextState.inner)
// true
```
##### 실행 결과
```
SET { done: false, inner: { done: false } } done true
false
true
```

### 프리미티브 타입과 배열 타입 사용 가능하도록 수정
[프리미티브 타입](https://developer.mozilla.org/ko/docs/Glossary/Primitive)은 영속 자료 구조의 대상이 아님으로 `produce` 실행 시 바로 반환한다. 
배열과 객체는 영속 자료 구조로 구현된다.

##### 함수 정의
```js
const isArray = value => Array.isArray(value)
const canProduce = value => {
  return value === undefined || value === null ?
    false :
    isArray(value) || typeof value === 'object'
}

const assign = (...obj) => Object.assign(...obj)

const shallowCopy = obj => {
  if (!canProduce(obj)) return obj
  if (isArray(obj)) return obj.concat()
  return assign({}, obj)
}

const toLinkedListItem = (base, parent = null, propName = null) => {
  return {
    base,
    parent,
    propName,
    copy: null,
  }
}

const toBase = (state) => {
  return state.copy ? state.copy : state.base
}

const changeLinkedList = (state, propName, value) => {
  const nextValue = {[propName]: value}

  state.copy ?
    assign(state.copy, nextValue) :
    assign(state, {
      copy: assign(shallowCopy(state.base), nextValue)
    })

  if (state.parent) {
    changeLinkedList(state.parent, state.propName, state.copy)
  }
}

const createProxy = (base, revokes, parentState, propName) => {
  const state = toLinkedListItem(base, parentState, propName)
  const handler = {
    get (target, key) {
      const value = toBase(state)[key]
      if (canProduce(value)) {
        const {proxy} = createProxy(value, revokes, state, key)
        return proxy
      } else {
        return value
      }
    },
    set (target, key, value) {
      changeLinkedList(state, key, value)
    }
  }

  const {proxy, revoke} = Proxy.revocable(base, handler)
  revokes.push(revoke)
  return {proxy, revoke, revokes, state}
}

const produceBase = (base, fn) => {
  const {proxy, revokes, state} = createProxy(base, [])

  fn(proxy)
  revokes.forEach(fn => fn())

  return toBase(state)
}

const produce = (fn) => (base) => {
  return canProduce(base) ? produceBase(base, fn) : base
}
```
##### 함수 사용
```js
const baseState = [
  { message: 'Hello' },
  { message: 'World' }
]

const nextState = produce((draft) => {
  draft[0].message = `${draft[0].message} World`
})(baseState)

console.log(baseState[0].message === nextState[0].message)
// false
console.log(baseState[1] === nextState[1])
// true
```

### Array 메소드 사용 가능하도록 수정
Array 메소드를 사용하면 Proxy handler의 set에서 에러가 발생한다. set에 반환을 해주지 않아 발생한 현상이다.

`createProxy` 함수를 아래와 같이 변경하면 정상동작한다.

```js {15}
const createProxy = (base, revokes, parentState, propName) => {
  const state = toLinkedListItem(base, parentState, propName)
  const handler = {
    get (target, key) {
      const value = toBase(state)[key]
      if (canProduce(value)) {
        const {proxy} = createProxy(value, revokes, state, key)
        return proxy
      } else {
        return value
      }
    },
    set (target, key, value) {
      changeLinkedList(state, key, value)
      return true
    }
  }

  const {proxy, revoke} = Proxy.revocable(base, handler)
  revokes.push(revoke)
  return {proxy, revoke, revokes, state}
}
```

### ImmerJs 예제로 확인해보기
[ImmerJs Example](https://immerjs.github.io/immer/docs/produce#example)에 작성된 코드와 동일하게 동작하는지 확인하는 코드이다.

```js
const baseState = [
  {
    todo: "Learn typescript",
    done: true
  },
  {
    todo: "Try immer",
    done: false
  }
]

// const nextState = produce(baseState, draftState => {
//   draftState.push({todo: "Tweet about it"})
//   draftState[1].done = true
// })
const nextState = produce(draftState => {
  draftState.push({todo: "Tweet about it"})
  draftState[1].done = true
})(baseState)

// the new item is only added to the next state,
// base state is unmodified
console.log(baseState.length === 2) // expect(baseState.length).toBe(2)
console.log(nextState.length === 3) // expect(nextState.length).toBe(3)

// same for the changed 'done' prop
console.log(baseState[1].done === false) // expect(baseState[1].done).toBe(false)
console.log(nextState[1].done === true) // expect(nextState[1].done).toBe(true)

// unchanged data is structurally shared
console.log(nextState[0] === baseState[0]) // expect(nextState[0]).toBe(baseState[0])
// changed data not (dûh)
console.log(nextState[1] !== baseState[1]) // expect(nextState[1]).not.toBe(baseState[1])
```

##### 실행 결과
```
true
true
true
true
true
true
```

## 불변성만 필요할 때
영속적 자료 구조가 필요하지 않고 불변성만 필요할 때는 간단하게 구현 가능하다.

##### 함수 정의
```js
const clone = json => JSON.parse(JSON.stringify(json))

const produce = (state, recipe) => {
  const clonedState = clone(state)
  recipe(clonedState)
  return clonedState
}
```

##### 함수 사용

```js
const baseState = [
  {
    todo: "Learn typescript",
    done: true
  },
  {
    todo: "Try immer",
    done: false
  }
]

const nextState = produce(baseState, (draftState) => {
  draftState.push({todo: "Tweet about it"})
  draftState[1].done = true
})

console.log(baseState.length === 2) // true
console.log(nextState.length === 3) // true

console.log(baseState[1].done === false) // true
console.log(nextState[1].done === true) // true

console.log(nextState[0] === baseState[0]) // false
console.log(nextState[1] !== baseState[1]) // true
```

immer를 사용했을 때와 다른 점은 `nextState[0] === baseState[0]`이 부분이다. 변경하지 않는 부분도 새로 만든 점이 다르다.
