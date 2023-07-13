---
title: 코루틴으로 지연평가 구현하기
---

# 코루틴을 사용한 지연 평가
### 글의 목적
기존에 사용하던 콜스택 구조를 코루틴으로 변경하고, 코루틴를 통해 지연 평가를 발생시켜 콜스택과 차이를 설명한다.

### 콜스택과 코루틴 비교
배열을 인자로 받아 홀수만 리턴하는 **odd**함수와 숫자를 인자로 받아 숫자만큼 리턴하는 **take**를 콜스택과 코루틴 동작을 비교한다.

#### 콜스택
중첩함수 중 내부에 사용된 **odd**가 실행된 뒤, **take**가 실행된다. 배열의 크기만큼 루프가 반복되는 것을 알 수 있다.
```js
function odd(arr) {
  const newArr = []
  for (const v of arr) {
    console.log(`odd ${v}`)
    if (v % 2) {
      newArr.push(v)
    }
  }

  return newArr
}

function take(arr, n) {
  const newArr = []
  let count = 0
  for (const v of arr) {
    console.log(`take ${v}`)
    count++
    newArr.push(v)
    if (count === n) {
      break;
    }
  }

  return newArr
}
```
```js
const arr = [0,1,2,3,4,5]

console.log(...take(odd(arr), 2))
// odd 0
// odd 1
// odd 2
// odd 3
// odd 4
// odd 5
// take 1
// take 3
// 1 3
```

#### 코루틴
코루틴을 통한 코드는 **odd**에서 **yield**를 만나면 **take**로 커서가 이동되고 **take**에서 **yield**를 사용하면 **odd**로 커서가 이동된다.
이러한 작업이 반복 된 뒤 **break**를 만나게 되면 **done**을 반환하여 루프가 종료하게 된다.
```js
function* odd(arr) {
  for (const v of arr) {
    console.log(`odd ${v}`)
    if (v % 2) {
      yield v
    }
  }
}

function* take(arr, n) {
  let count = 0
  for (const v of arr) {
    console.log(`take ${v}`)
    count++
    yield v
    if (count === n) {
      break;
    }
  }
}
```
```js
const arr = [0,1,2,3,4,5]

console.log(...take(odd(arr), 2))
// odd 0
// odd 1
// take 1
// odd 2
// odd 3
// take 3
// 1 3
```

### 코루틴이란
코루틴은 실행 지점을 코드 블럭으로 저장하여, 해당 지점을 실행/중단/재시작을 하는 것을 말한다. 그래서 자발적/주기적으로 유휴상태를 만들 수 있기 때문에 **비선점 멀티태스킹**이 가능하다. **동시성**과 **병렬 처리**가 가능하다. 그리고 코루틴 사이의 전환은 **컨텍스트 전환**이 발생하지 않는다.

#### 컨텍스트 전환
기존의 프로세스의 상태 또는 레지스터값을 저장 후 다음 프로세스를 수행하도록 새로운 프로세스의 상태 또는 레지스터값을 교체하는 작업이다.

#### 서브 루틴과 코루틴
**서브루틴**은 **호출자**가 호출되면 **호출자**에게 항상 **return**을 한다.
반면에 **코루틴**은 특정 지점에서 실행/중단/재시작을 할 수 있다.

#### 스레드와 코루틴
**스레드**는 **선점식 멀티태스킹**을 한다. 즉 **동시성**은 제공하만 **병렬 처리**는 제공하지 않는다. 반면에 **코루틴**은 **컨텍스트 전환**없이 **동시성**, **병렬처리**가 가능하다.

#### 재귀와 코루틴
**재귀**는 반복적인 호출을 위해 새로운 **스택 프레임**이 필요하여 최악의 경우에는 **스택 오버플로우**가 발생한다. 반면에 **코루틴**은 특정 지점 코드 블럭이 저장되므로 데이터가 쌓이지 않는 다.
