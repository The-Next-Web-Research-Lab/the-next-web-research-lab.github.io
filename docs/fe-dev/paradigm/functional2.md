---
title: 2020.02.12 함수형 프로그래밍 정리2
---
# 함수형 프로그래밍 정리2

## 글의 목적
함수형만 지원하는 언어를 통해 함수형에 대한 특징을 리서치했다. [함수형 프로그래밍 정리](/fe-dev/paradigm/functional.md)에서 정리했던 내용은 함수형에서 극히 일부의 특징을 다뤘다는 것을 알 수 있었다. 또한 내가 알고 있던 지식이 함수형에 대한 이해가 부족했음을 알 수 있었다.

함수형을 좀 더 깊게 이해하기 위해서는 함수형을 강력하게 지원하는 언어를 학습할 필요가 있겠다고 문득 떠올랐다. 그래서 자바스크립트 언어가 아닌 다른 언어로 작성된 도서를 통해 학습을 했다. 참고한 도서는 다음 세가지 도서이다.

```
- 크리스 오카사키. 『순수 함수형 데이터 구조』. 오현석(역). 에이콘출판사, 2019.
- 닐 포드. 『함수형 사고』. 김재완(역). 한빛미디어, 2016.
- 스튜어트 할로웨이. 『프로그래밍 클로저』. 유찬우(역). 인사이트, 2010.
```

이 도서를 통해 알게된 함수형의 특징에 대한 정리를 했다.

## 목차
- [함수형 언어에서 지원하는 특별한 문법](#함수형-언어에서-지원하는-특별한-문법)
  - [연산자 오버로딩](#연산자-오버로딩)
  - [패턴 매칭](#패턴-매칭)
- [함수형 사고로 전환](#함수형-사고로-전환)
  - [재귀적인 사고](#재귀적인-사고)
  - [메모이제이션](#메모이제이션)
  - [지연 평가](#지연-평가)
- [함수형 자료구조](#함수형-자료구조)
  - [지연 리스트](#지연-리스트)
  - [영속적 자료구조](#영속적-자료구조)

## 함수형 언어에서 지원하는 특별한 문법
이번에 함수형 언어를 학습하면서 알게된 특별한 문법에 대한 내용이다.

### 연산자 오버로딩
함수형 언어의 공통적인 기능은 연산자 오버로딩이다. 연산자 오버로딩은 `+`, `-`, `*`와 같은 연산자를 새로 정의하여 새로운 자료형에 적용하고 새로운 행동을 하게 하는 기능이다. 함수형 언어에서는 연산자를 단순히 연산자로 바라보지 않고 함수로 바라보기 때문에 가능한것으로 생각한다.

자바스크립트는 아직 미지원하지만 tc39에 [proposal-operator-overloading](https://github.com/tc39/proposal-operator-overloading) 제안이 등록된 상태이다.

### 패턴 매칭
패턴 매칭은 단어로도 설명 되듯이 패턴과 매칭하는 것을 찾아 해당 패턴에 정의된 코드블럭을 실행하는 문법이다. 함수형 언어별로 다양한 형태로 지원하며 자바스크립트는 아직 미지원하지만 tc39에 [proposal-pattern-matching](https://github.com/tc39/proposal-pattern-matching) 제안이 등록된 상태이다.

#### tc39/proposal-pattern-matching
```js
const res = await fetch(url)
case (res) {
  when {status: 200 } ->
    console.log(`Ok`),
  when {status: 404} ->
    console.log('not found'),
  when {status} if (status >= 400) -> {
    console.log('something is wrong')
  },
}
```

## 함수형 사고로 전환
함수형을 하는 것은 코드를 작성하는 것도 있지만 사고의 전환이 필요하다고 느꼈다. 함수형 사고라고 생각되는 부분을 정리했다.

### 재귀적인 사고
재귀는 가변 상태를 숨기면서 문제를 작은 문제로 분리하여 해결할 수 있다. 함수형에서는 가변 상태를 멀리하기 때문에 상태를 만들기 보다는 재귀를 통해서 문제를 해결한다.

range와 map 함수로 예를 들면 다음과 같다. 
```js
function range(end, start=0, step=1) {
  if (start > end - 1) {
    return []
  }
  return [start, ...range(end, start+step, step)]
}

range(0) // []
range(3) // [0, 1, 2]
```

```js
function map(fn, [head, ...tail]) {
  if (head === undefined) {
    return []
  }
  return [fn(head), ...map(fn, tail)]
}
map(v => v * 10, [0, 1, 2]) // [0, 10, 20]
```

재귀 함수를 만들때는 다음과 같은 규칙을 지키는 것이 좋다고 알려져 있다.
```
- 언제 멈출지 알아야 한다.
- 한 단계에서 무엇을 실행할지 결정한다.
- 문제를 더 작은 문제나 아니면 한 단계로 풀 수 있는 문제로 작게 분리한다.
```

하지만 자바스크립트는 재귀 호출의 횟수에 제한이 있기 때문에 너무 많은 재귀 호출이 이루어지면 쉽게 스택 깨짐이 발생한다. 스택 깨짐을 방지하기 위해서 트램펄린(Trampoline)이라 불리는 구조를 이용해 스택 깨짐을 피할 수 있다.

#### 트램펄린 구조
```js
// 스택 깨짐 발생 코드
const evenSteven = n => n === 0 ?
  true :
  oddJohn(Math.abs(n) - 1)
const oddJohn = n => n === 0 ?
  false :
  evenSteven(Math.abs(n) - 1)

evenSteven(100000)
// Uncaught RangeError: Maximum call stack size exceeded
```
```js
// 트램펄린 적용 코드
const evenSteven = n => n === 0 ?
  true :
  () => oddJohn(Math.abs(n) - 1)
const oddJohn = n => n === 0 ?
  false :
  () => evenSteven(Math.abs(n) - 1)

const trampoline = (fun, arg) => {
  let result = fun(arg)
  while (typeof result === "function") {
    result = result()
  }
  return result
}


trampoline(evenSteven, 100000) // true
```

### 메모이제이션
메모이제이션이란 단어는 영국의 인공지능 연구학자인 도널드 미치가 처음 사용했다. 메모이제이션은 연속해서 사용되는 연산 값을 함수 레벨에서 캐시하는 것을 지칭하는 것으로 처음 사용하게 되었다. 공간을 소모하는 대신 계산 속도를 빠르게 만드는 전형적인 컴퓨터과학의 트레이드오프이다. 함수형 언어로 예를 들면 [Clojure](https://ko.wikipedia.org/wiki/%ED%81%B4%EB%A1%9C%EC%A0%80_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4))는 [memoize 함수](https://clojuredocs.org/clojure.core/memoize)를 지원하고, SML 언어는 언어 자체에서 [메모이제이션을 처리](https://www.cs.cmu.edu/~rwh/introsml/techniques/memoization.htm)한다.

자바스크립트는 사용자가 작성한 함수를 메모이제이션을 할 수 있는 기능을 제공하지 않으므로 메모이제이션을 해주는 함수를 만들기도 한다.

#### 메모이제이션 사용전 예
```js
const evenSteven = n => n === 0 ?
  true :
  oddJohn(Math.abs(n) - 1)
const oddJohn = n => n === 0 ?
  false :
  evenSteven(Math.abs(n) - 1)

console.time('recur1')
evenSteven(5000)
console.timeEnd('recur1')
console.time('recur2')
evenSteven(5000)
console.timeEnd('recur2')
console.time('recur3')
evenSteven(5000)
console.timeEnd('recur3')
```
```
recur1: 1.702880859375ms
recur2: 0.766845703125ms
recur3: 2.546142578125ms
```

#### 메모이제이션 사용후 예
```js
const memoize = (fn) => {
  const cache = {}
  return (n) => {
    if (!cache[n]) {
       cache[n] = fn(n)
    }
    return cache[n]
  }
}
const evenSteven = memoize(n => n === 0 ?
  true :
  oddJohn(Math.abs(n) - 1))
const oddJohn = memoize(n => n === 0 ?
  false :
  evenSteven(Math.abs(n) - 1))

console.time('recur1')
evenSteven(5000)
console.timeEnd('recur1')
console.time('recur2')
evenSteven(5000)
console.timeEnd('recur2')
console.time('recur3')
evenSteven(5000)
console.timeEnd('recur3')
```
```
recur1: 2.74169921875ms
recur2: 0.00634765625ms
recur3: 0.0029296875ms
```

### 지연 평가
함수형 언어는 평가 순서에 따라 엄격 평가(strict evaluation) 언어인지 지연 평가(lazy evaluation) 언어이지 구분할 수 있다. 두 연산 순서의 차이는 함수 인자를 처리하는 것으로 차이를 볼 수 있다. 엄격평가 언어는 함수 인자가 필요하지 않아도 미리 계산 한 뒤 함수 본문을 계산한다. 하지만 지연 평가 언어는 함수 본문에서 함수 인자가 필요할 때 계산한다.

지연 평가 언어가 아니여도 지연 평가를 구현해서 사용하기도 한다. 지연 시퀀스, 스트림, 게으른 컬렉션으로 도서마다 다양하게 불리는 자료구조이다. 여기서는 지연 리스트로 부르겠다. 지연 리스트는 언어에서 `lazy`라는 키워드를 통해 지원하는 언어도 있지만 없는 언어는 `Iterator`를 통해서 구현한다. 자바스크립트의 지연 리스트는 [지연 리스트](#지연-리스트) 본문에서 다루겠다.

## 함수형 자료구조
### 지연 리스트
지연 리스트는 원소가 필요할 때 평가하는 형태로 구현된다. 지연 리스트는 지연 함수를 조합하는 형태를 사용하고, 종결 함수를 통해서 평가가 필요한 시기를 선택한다. 자바스크립트에서는 [Iterator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators)를 통해서 구현 가능하다.

먼저 range로 지연 리스트의 예를 들면, range 함수를 실행했을 때는 리스트를 반환하지 않는 다. 하지만 평가를 하게 되면 리스트를 반환한다.
```js
function* range(end, start=0, step=1) {
  if (start > end - 1) {
    return
  }
  yield start
  yield* range(end, start+step, step)
}

const lazyList = range(4)
console.log(lazyList) // range {<suspended>}
console.log(...lazyList) // 0 1 2 3
```

이젠 지연 함수인 map과 종결 함수 collect를 사용하여 예를 들면,
```js
function* map(fn, list) {
  const {value, done} = list.next()
  if (done) return
  yield fn(value)
  yield* map(fn, list)
}

const collect = list => [...list]
```

map 함수의 두번째 인자에 range 함수를 사용하고, map 함수의 반환값을 collect 함수의 인자로 사용하면 평가의 결과를 확인할 수 있다.
```js
const lazyList = map(num => num * 10, range(4))
collect(lazyList) // [0, 10, 20, 30]
```

첫번째 요소만 가져오면 한번만 평가하는 것을 알 수 있다. map 함수에 로깅을 추가하고 확인하면 다음과 같다.

```js
const lazyList = map(num => {
  const result = num * 10
  console.log('LOG: lazyList', result)
  return result
}, range(10))

const [head] = lazyList
```
```js
// LOG: lazyList 0
```

### 영속적 자료구조
함수형 언어에서는 영속적 자료구조를 사용한다. 영속성은 데이터를 갱신해도 이전 버전을 변경하지 않고, 변경이 필요한 부분만 원본에서 복사해서 사용한다. 그리고 변경이 없는 부분은 공유하는 형태를 띈다. 기존 데이터에 변화가 가해지지 않고, 새로운 데이터를 사용하며 변경되지 않는 부분을 공유하여 효율적인 접근 방식을 취한다.

간단한 예를 들면 연결 리스트와 cons 함수로 예를 들 수 있다. xs에 ys를 연결하기 때문에 xs 데이터는 복사본을 사용하고 ys를 상태를 공유하게 된다.
```js
const cons = ([x, xs], ys) => {
  return x === undefined ?
    ys :
    [x, cons(xs, ys)]
}
const xs = [0, [1, [2, []]]]
const ys = [3, [4, [5, []]]]
const zs = cons(xs, ys) // [0,[1,[2,[3,[4,[5,[]]]]]]]
```

그리고 상태 공유가 된것을 확인하기 위해 강제적으로 변경을 해서 확인하면 다음과 같이 공유됨을 알 수 있다.
```js
ys[0] = 'Changed'

console.log(ys) // ['Changed', [4, [5, []]]]
console.log(zs) // [0,[1,[2,['Changed',[4,[5,[]]]]]]]
```

## 끄읕
이 글에서 정리된 내용에 잘못된 정보가 있다면 이메일(04whdydrn30@gmail.com)을 통해 피드백을 주시면 수정하겠습니다 :)
