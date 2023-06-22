---
title: 선언형으로 대체 가능한 문법들 정리
---
# 선언형으로 대체 가능한 문법들 정리
> 2019년 6월 1일에 레거시 코드를 분석하면서 정리했던 방법을 정리한 포스트입니다.

### 글의 목적
프로젝트 코드를 모두 리뷰를 했을 때 알 수 있는 것은 소프트웨어의 구성은 대부분 **객체 또는 객체간의 관계**, **조건문**, **반복문**으로 이뤄졌다는 것이다.

**if, for**같은 기본 문법을 사용하는 것보다 **선언형**으로 작성하면 이해하기 쉬운 코드를 작성할 수 있다.
**객체**, **조건문**, **반복문**을 이해하기 쉽게 작성하는 **선언형 함수**를 정리해봤다.

### 카테고리
- 객체
- 배열

### 객체
객체를 순회하기 위해서 **for...in**을 사용하는 데, 선언형 함수를 통해서 **for...in**를 대부분 대체 가능하다.
#### mapValues
각 Object의 요소들을 순회하면서 연산을 하는 코드이다.
이런 형태의 코드를 mapValues를 통해 이해하기 쉽게 작성 가능하다.
```js
const obj = {a: 1, b: 2, c: 3}
for (const key in obj) {
  obj[key] = obj[key] + 10
}
```
mapValues는 Object의 요소들을 순회하면서 주어진 함수의 평가결과를 value에 할당한다.
```js
const obj = {a: 1, b: 2, c: 3}
mapValues(n => n + 10, obj)
// {a: 11, b: 12, c: 13}
```
```js
const mapValues = (f, obj) => Object
  .entries(obj)
  .map(([k, v]) => ({[k]: f(v)}))
  .reduce((acc, obj) => Object.assign(acc, obj))
```

#### mapKeys
mapKeys는 Object의 요소들을 순회하면서 주어진 함수의 평가결과를 key에 할당한다.
```js
const obj = {a: 1, b: 2, c: 3}
mapKeys(n => n.repeat(2), obj)
// {aa: 1, bb: 2, cc: 3}
```
```js
const mapKeys = (f, obj) => Object
  .entries(obj)
  .map(([k, v]) => ({[f(k)]: v}))
  .reduce((acc, obj) => Object.assign(acc, obj))
```

#### filterObject
filterObject는 Object의 요소들을 순회하면서 주어진 함수의 평가결과가 참인 것만 새로운 객체로 반환한다.
```js
const obj = {a: 1, b: 2, c: 3}
filterObject(n => n == 2, obj)
// {b: 2}
```
```js
const obj = {a: {age: 10}, b: {age: 15}, c: {age: 20}}
filterObject(({age}) => age < 20, obj)
// {a: {age: 10}, b: {age: 15}}
```
```js
const filterObject = (f, obj) => Object
  .entries(obj)
  .filter(([_, v]) => f(v))
  .map(([k, v]) => ({[k]: v}))
  .reduce((acc, obj) => Object.assign(acc, obj))
```

#### pick
pick는 객체에서 특정한 프로퍼티만 추출할 때 사용된다.
```js
const obj = {a: 1, b: 2, c: 3}
pick(['a', 'b'], obj)
// {a: 1, b: 2}
```
```js
const pick = (keys, obj) => keys
  .map(key => ({[key]: obj[key]}))
  .reduce((acc, obj) => Object.assign(acc, obj))
```

#### Object#entries
entries는 Object의 key와 value를 2차원 배열로 담아 반환해준다.
```js
Object.entries({a: 1, b: 2, c: 3})
// [['a', 1], ['b', 2], ['c', 3]]
```

#### fromEntries
fromEntries는 entries의 반대 동작을 한다.
```js
const arr = [['a', 1], ['b', 2], ['c', 3]]
fromEntries(arr) // {a: 1, b: 2, c: 3}
```
```js
// map + reduce
const fromEntries = arr => arr
  .map(([k, v]) => ({[k]: v}))
  .reduce((acc, obj) => Object.assign(acc, obj))

// reduce
const fromEntries = arr => arr
  .reduce((obj, [k, v]) => {
    return Object.assign(obj, {[k]: v})
  }, {})
```

#### Object#values
객체의 값만 추출하여 배열에 담는 로직이다.
```js
const values = []
const obj = {name: 'AA', age: 20}
for (const key in obj) {
  values.push(obj[key])
}

// ['AA', 20]
```
Object.values를 사용하면 객체의 값만 추출해 배열로 만들어준다. 
```js
const values = Object.values({name: 'AA', age: 20})
// ['AA', 20]
```

#### clone
객체를 복사하는 방법은 다양한 방법이 있는 데, JSON.parse와 JSON.stringify를 사용하면 **깊은 복사**를 할 수 있다.
```js
const clone = obj => JSON.parse(JSON.stringify(obj))
```
```js
const a = {}
const b = a
const c = clone(a)

console.log(a === b)
// true
console.log(a === c)
// false
```
JSON의 지원 타입만 복사되므로 메소드가 있을 경우 삭제된다.
```js
clone({
  fn() {}
})
// {}
```

### 배열
배열을 위한 선언형 함수를 작성하면 대부분의 **조건문**과 **반복문**을 이해하기 쉽게 작성 가능하다.

#### range
range는 인자로 받은 길이만큼 인덱스배열은 만들어준다.
```js
range(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
```js
const range = length => Array.from({length}, (_, i) => i)
```

일반적인 **인덱스 루프**를 대체할 수 있다.
```js
// Not Cool
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// Cool
range(10).forEach(i => console.log(i))
```

#### takeWhile
takeWhile은 주어진 함수의 평가가 거짓일 때 순회를 멈추고 순회했던 요소들을 새로운 배열에 담아 반환한다.
```js
takeWhile(a => a, [1, 2, 3, 0, 4, 5])
/// [1, 2, 3]
```
```js
const takeWhile = (f, arr) => {
  const newArr = []
  arr.some((val, ...args) => {
    const result = !f(val, ...args)
    result || newArr.push(val)
    return result
  })
  return newArr
}
```
이러한 명령형을 대체할 수 있다.
```js
const arr = [1, 2, 3, 0, 4, 5]
const newArr = []

for (let i = 0; i < arr.length; i++) {
  const item = arr[i]
  if (!item) {
    break
  }
  newArr.push(item)
}

console.log(newArr)
// [1, 2, 3]
```

#### takeUntil
takeUntil는 주어진 함수가 참일 때 순회했던 요소들을 배열에 담아 반환한다.
```js
takeUntil(a => a, [0, false, undefined, null, 1, 2, 3])
// [0, false, undefined, null, 1]
```
```js
const takeUntil = (f, arr) => {
  const newArr = []
  arr.some((val, ...args) => {
    newArr.push(val)
    return f(val, ...args)
  })
  return newArr
}
```
이러한 명령형을 대체할 수 있다.
```js
const arr = [0, 0, 0, 0, 4, 5]
const newArr = []

for (let i = 0; i < arr.length; i++) {
  const item = arr[i]
  newArr.push(item)
  if (item) {
    break
  }
}

console.log(newArr)
// [0, 0, 0, 0, 4]
```

#### Array#reduce
reduce는 각 배열 요소를 주어진 함수의 결과와 누산하여 하나의 결과값을 반환한다.
```js
[1, 2, 3].reduce((acc, v) => v + acc)
// 6
```
이런 형태의 명령형을 대체할 수 있다.
```js
const total = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
total([1, 2, 3])
// 6
```

#### Array#map
map은 배열의 모든 요소를 주어진 함수의 결과로 변경한 새로운 배열을 반환한다.
```js
[1, 2, 3].map(v => v * 10)
// [10, 20, 30]
```
이런 형태의 명령형을 대체할 수 있다.
```js
const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 10
}
console.log(arr)
// [10, 20, 30]
```

#### Array#findIndex
findIndex는 주어진 함수가 참으로 평가되는 값을 찾으면 해당 인덱스를 반환한다.
일치하는 게 없을 때는 -1를 반환한다.
```js
[1, 2, 3].findIndex(v => v >= 2)
// 1

[1, 2, 3].findIndex(v => v > 3)
// -1
```
이런 형태의 명령형을 대체할 수 있다.
```js
const findItemIndex = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2) {
      return i
    }
  }
  return -1
}
findItemIndex([1, 2, 3])
// 0
findItemIndex([2, 3])
// -1
```

#### Array#find
find는 주어진 함수가 참으로 평가되는 값을 찾으면 해당 값을 반환한다.
일치하는 게 없을 때는 undefined를 반환한다.
```js
[1, 2, 3].find(v => v >= 2)
// 2

[1, 2, 3].find(v => v > 3)
// undefined
```
이런 형태의 명령형을 대체할 수 있다.
```js
const findItem = arr => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (item < 2) {
      return item
    }
  }
}
findItem([1, 2, 3])
// 1
findItem([2, 3])
// undefined
```

#### Array#filter
filter는 주어진 함수가 참으로 평가되는 값만 모아 새로운 배열로 반환한다.
```js
[1, 2, 3].filter(v => v >= 2)
// [2, 3]
```
이런 형태의 명령형을 대체할 수 있다.
```js
const arr = [1, 2, 3]
const newArr = []
for (let i = 0; i < arr.length; i++) {
  const item = arr[i]
  if (item >= 2) {
    newArr.push(item)
  }
}
console.log(newArr) // [2, 3]
```

#### Array#every
every는 모두 일치할 때 true를 반환하고, 하나라도 불일치 할 때 false를 반환한다.
```js
[1, 2, 3].every(v => v <= 3)
// true

[1, 2, 3].every(v => v < 2)
// false
```
이런 형태의 명령형을 대체할 수 있다.
```js
const hasAll = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      return false
    }
  }
  return true
}
hasAll([1, 2, 3])
// true
hasAll([4, null, 6])
// false
```

#### Array#some
some은 하나라도 일치하는 게 있으면 true를 반환하고, 없을 때 false를 반환한다.
```js
[1, 2, 3].some(v => v > 2)
// true

[1, 2, 3].some(v => v > 3)
// false
```
이런 형태의 명령형을 대체할 수 있다.
```js
const hasItem = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2) {
      return true
    }
  }
  return false
}
hasItem([1, 2, 3])
// true
hasItem([4, 5, 6])
// false
```

### 끝
