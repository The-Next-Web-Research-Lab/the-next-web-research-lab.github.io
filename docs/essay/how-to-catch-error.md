---
title: 2019.05.23 에러 처리 정리
---
# 에러 처리 정리
## 글의 목적
**에러 처리**는 소프트웨어의 비정상적인 동작에 대한 큰 사고로 이어지지 않도록 **예방**하는 것이다.
서비스 운영에 있어서는 사용자들이 서비스를 비정상적으로 사용하는 부분이 있는 지 감지를 할 수 있다.

오랜 시간동안 에러 처리에 대한 연구가 계속 되었고 지금까지 발전이 되어왔다.
어떠한 과정을 통해서 지금의 에러 처리 방법을 가지게 되었는 지 정리한 포스트이다.

## 목차
- 실패를 전달하는 방법
  - 반환값으로 실패 전달
  - try-catch 에러 처리
  - throw 명시적 선언
- 어떻게 에러 처리를 해야 할까
  - 컨테이너
  - 같은 타입 반환
  - async 함수로 에러 처리
- 종합적인 결론

## 실패를 전달하는 방법
사고 발생 시 큰 사고로 이어지지 않도록 **실패를 알리는 구조**가 **에러 처리**이다.

### 반환값으로 실패 전달
```js
const getCountry = (student) => {
  const school = student.getSchool()
  if (school !== null) {
    const addr = school.getAddress()
    if (addr !== null) {
      const country = addr.getCountry()
      return country
    }
    return null 
  }
  throw new Error('국가 조회 중 에러 발생!')
}
```
에러 처리 중 반환값으로 실패를 전달하는 방법이 있다.
호출하는 코드에서 반환값을 체크해서 에러를 처리하는 방법이다.

하지만 이 방법에는 두가지 문제점이 있다.
- **첫번째**는 프로그래머가 반환값 확인을 잊어버렸을 때 **실패를 놓치게 된다**.
실패를 놓쳐 **연쇄적으로 문제가 발생**할 수 있다.
- **두번째**는 **원래 하고 싶은 것을 기술한 코드**사이에 **실패했을 경우의 코드**가 채워져 코드를 해석하기 어려워진다.

### try-catch 에러 처리
```js
const getCountry = (student) => {
  try {
    const school = student.getSchool()
    const addr = school.getAddress()
    const country = addr.getCountry()
  } catch (error) {
    console.log('국가 조회 중 에러 발생!', error)
  }
}
```
명령형 코드에서 예외를 붙잡아 던지는 방법은 **try-catch 에러 처리**가 있다.
예외를 던질 가능성이 있는 것들을 **try**를 감싸고 예외를 발생하면 **catch**에서 처리하는 것이다.
**반환값으로 실패 전달**의 단점을 해결하여 **원래하고 싶은 것을 기술한 코드**와 **실패했을 때의 처리**를 분리할 수 있다.

하지만 try-catch에서도 단점이 존재한다.

- **첫번째**는 다른 함수형 장치처럼 **합성**이나 **체이닝**을 할 수 없다.
- **두번째**는 예외를 던지는 행위는 함수 호출에서 빠져나갈 구멍을 찾는 것임으로 단일한, 예측 가능한 값을 지향하는 참조 **투명성 원리**에 위배된다.
- **세번째**는 예기치 않게 스택이 풀리면 함수 호출 범위를 벗어나 전체 시스템에 영향을 미치는 **부수 효과**를 일으킨다.

### throw 명시적 선언
Java에서는 try-catch의 단점을 해결하기 위해 **어떤 예외를 전달지 명시적으로 선언**하는
구조를 채택해서 사용했다. 예외 처리에 대한 세분화하여 처리를 한다.
- 예외 처리를 하지 않아도 되는 중요한 문제
- 예외 처리를 해도 좋은 실행 시 예외
- 예외 처리를 해도 좋은 기타 예외

여기서 기타 예외가 명시적으로 선언해줄 필요가 있는 부분이다. 그것을 위해 준비되어 있는 것이 **throw 절**이다. 다음 코드에는 `void shippai () throws MyException`라고 쓰여있다. 이것은 메소드는 **MyException 예외를 던질 가능성이 있다**는 선언이다.

```js
class Foo {
  void shippai () throws MyException {
    throw new MyException();
  }
}
```

검사 예외 사용을 깜박하고 예외를 던질 가능성을 놓쳐버리는 일 따위는 발생하지 않게 된다. 예외를 던질 가능성이 있는 메소드를 호출할 경우 메소드가 던지는 예외를 그대로 호출처로 전달할지 아니면 메소드가 던지는 예외를 자신이 처리할지 둘 중 하나를 선택해서 구현하게 된다. 어느 쪽도 동작하지 않는 경우는 놓친 것을 컴파일러가 지정해준다.

이 방법은 **언어에서 검사 예외를 지원**해야 한다. 검사 예외는 매우 좋은 기능 처럼 보이지만 **다른 언어에서 잘 채용되지 않고 있다**. 그 이유는 throws나 try-catch에 기술하는 **예외의 갯수가 너무 방대**해 지거나. 어떤 메소드에서 던질 **예외를 하나 추가하면** 그 메소드를 호출하고 있는 **모든 메소드를 수정**해야 되기 때문이다.

## 어떻게 에러 처리를 해야 할까
**함수형 에러 처리**에서 아이디어를 얻을 수 있다.

**첫번째**는 잠재적으로 위험한 코드 주위에 **안전망**(**컨테이너**)를 설치하는 것이다.
값을 컨테이너화 하는 행위는 **함수형 프로그램의 기본 디자인 패턴**이다. 값을 안정적으로 다루도 불편성을 지키기 위해 직접 접근을 차단하는 것이다. 이렇게 감싼 값에 접근하는 유일한 방법은 연산을 컨테이너에 매핑하는 것이다.

**두번째**는 항상 같은 타입을 반환하도록 **값 흘리기**를 하는 것이다.
비정상적인 상황에도 에러를 발생하지 않고 인자와 동일한 타입으로 값을 리턴하는 것이다.
값을 리턴할 때는 빈값을 전달하게 된다.

### 컨테이너
```js
const f = a => a * a;
const g = a => a + 1;
```
함수 합성할 때 비정상적인 값이 할당되면 에러를 발생한다. 하지만 컨테이너에 담에 함수 합성을 하게 되면 비정상적인 효과를 만들지 않는 다.
```js
// Not Cool
f(g(1)); // 4
f(g()); // NaN

// Cool
[1].map(g).map(f); // [4]
[].map(g).map(f); // []
```

현실세계에서는 특정 데이터를 추출하고 함수를 사용하는 경우가 있다. 이럴 때도 컨테이너를 사용하면 안전하게 함수 합성을 할 수 있다.

```js
const users = [
  { name: 'AA', age: 12 },
  { name: 'BB', age: 15 },
  { name: 'CC', age: 17 },
]

// Not Cool
const user = users.find(u => u.name === 'DD')
console.log(user.name) // 'name' of undefined

// Cool
users
  .filter(u => u.name === 'DD')
  .slice(0, 1)
  .forEach(user => console.log(user.name))
```

### 같은 타입 반환
```js
const f = list => list
  .map(a => a + 10)
  .filter(a => a % 2)
  .slice(0, 2)
```
함수에서 에러가 발생하는 경우는 두가지를 볼 수 있다. `list` 인자가 배열이 아닐 때, `map`, `filter`에 사용된 함수들이 에러를 발생할 때이다. 이런 경우에 항상 같은 값을 반환하면 안전하게 함수 합성을 할 수 있다.

```js
const f = list => {
  try {
    return list
      .map(({num}) => num + 10)
      .filter(num => num % 2)
      .slice(0, 2)
  } catch (e) {
    return []
  }
}
```
```js
f([{num: 1}, {num: 2}, {num: 3}]) // [11, 13]
f([]) // []
f() // []
f(null) // []
```

### async 함수로 에러 처리
async 함수에서는 함수 내부에서 발생한 **동기에러**와 **Promise의 reject 상태**를 catch에서 처리할 수 있다.

#### 동기 에러
```js
const f = async () => die;
f().catch(error => console.log('에러 발생!')) // 에러 발생!
```

#### Promise reject
```js
const f = async () => Promise.reject('Hi!')
f().catch(error => console.log('에러 발생!')) // 에러 발생!
```

#### Promise 내부 에러
```js
const g = () => Promise.resolve(die)
const f = async () => {
  return await g()
}

f().catch((err) => console.log('에러 발생!', err)) // 에러 발생!
```

## 종합적인 결론
종합적으로는 **컨테이너**와 **async 함수**를 사용하는 방법으로 코드를 기술하는 방법을 선택하게 되었다.

데이터 상에서 잠재적으로 위험이 있는 사항은 **컨테이너**를 통해 **안전한 함수 합성**을
하고 **async 함수**를 통해 예외적인 상황을 알리는 형태로 에러 처리를 하는 것이다.
그리고 **에러 처리 부분**은 **제작과 사용 관심을 분리**하여
호출자에서 정의하면 기존의 에러 처리의 단점을 해결할 수 있다고 생각한다.

```js
// 에러 처리와 사용
const onClickSaveBtn = () => {
  save()
    .then(() => console.log('계획되로군'))
    .catch(() => console.log('되는게없네'))
}

// 로직 제작 부분
const save = async () => {
  let file
  const imageInfo = getImageInfo()

  if (imageInfo instanceof File) {
    file = getFile(imageInfo)
  } else {
    const imageFileInfo = extractFile(imageInfo)    
    file = getFile(imageFileInfo)
  }
  
  const token = await requestToken()
  return uploadFile(token, file)
}
```

## 끝

### 참고자료
- 함수형 자바스크립트 - 루이스 아텐시오
- 코딩을 지탱하는 기술
