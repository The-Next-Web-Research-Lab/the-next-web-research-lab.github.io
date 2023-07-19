---
title: 테스트가 필요한 부분과 명세 기반 테스트 방법
---

# 테스트가 필요한 부분과 명세 기반 테스트 방법

우선 테스트가 필요한 이유는 결함이 해결되지 않은 상태에서 서비스가 Production 단계로 배포된다면 장애가 발생하여
사용자들이 손실을 입고 나아가 회사 전체 비즈니스에 영향을 줄 수 있기 때문이다.

## 테스트가 필요한 부분
테스트의 경제성을 설명하는 격언 중 "테스트를 적게 하는 것은 죄지만 그렇다고 무조건 테스트를 많이 하는 것이 반드시 미덕은 아니다"라는 말이 있다. 테스트를 수행할 자원은 유한하므로 완벽한 테스트는 현실적으로 불가능하다. 그렇다면 위험이 높은 기능 및 비기능 요구사항을 집중적으로 테스트해야 한다.

### 테스트 케이스에 작성해야 하는 것
- 가장 중요한 것
- 실패 가능성이 있는 것
- 위험 요소가 있는 것
- 결함 발생 시 파급효과가 심각하고 이로 인한 막대한 손실이 발생하는 기능

### 위험 요소
- 장애 발생 가능성
  - 소스코드의 복잡도
  - 구현 난이도
  - 구현 크기(Line of Code)
  - 개발자 등급
- 장애 발생 시 비즈니스 영향도
  - 기능 요구사항을 구현한 후 장애가 발생했을 때, 비즈니스적으로 미치는 정도

### 명세 기반 테스트 방법
명세 기반 테스트는 요구사항 정의 문서, 설계서 등 명세를 바탕으로 테스트 케이스를 도출, 실행하여 중대한 결함을 없음을 보장하는 기법이다.

#### 명세 기반 테스트 기법 종류
**동등분할**
- 테스트 대상 데이터의 구간을 일정 간격으로 분할하여 케이스를 구성한다.
- 보통 데이터의 구간에 중간값을 대푯값으로 사용한다.
```js
const convertToGrade = score => {
  switch (true) {
    case score <= 100 && score > 80 :
      return 'A'
    case score <= 80 && score > 60 :
      return 'B'
    case score <= 60 && score > 40 :
      return 'C'
    case score <= 40 && score > 20 :
      return 'D'
    case score <= 20 && score > 0 :
      return 'E'
    default :
      return null
  } 
}
```
```js
describe('convertToGrade', () => {
  it('A 학점', () => {
    // Given
    const score = 90
    // When
    const grade = convertToGrade(score)
    // Then
    expect(grade).toEqual('A')
  })
  it('B 학점', () => {
    // Given
    const score = 70
    // When
    const grade = convertToGrade(score)
    // Then
    expect(grade).toEqual('B')
  })
})
```

**경곗값 분석**
- 분기 또는 반복 구문의 경곗값을 기준으로 케이스를 구성한다.(min, min+, normal, max-, max)
```js
const convertToGrade = score => {
  switch (true) {
    case score <= 100 && score > 80 :
      return 'A'
    case score <= 80 && score > 60 :
      return 'B'
    case score <= 60 && score > 40 :
      return 'C'
    case score <= 40 && score > 20 :
      return 'D'
    case score <= 20 && score > 0 :
      return 'E'
    default :
      return null
  } 
}
```
```js
describe('convertToGrade', () => {
  it('A 학점 - min', () => {
    // Given
    const score = 81
    // When
    const grade = convertToGrade(score)
    // Then
    expect(grade).toEqual('A')
  })
  it('A 학점 - min+', () => {
    // Given
    const score = 82
    // When
    const grade = convertToGrade(score)
    // Then
    expect(grade).toEqual('A')
  })
  it('A 학점 - normal', () => {
    // Given
    const score = 90
    // When
    const grade = convertToGrade(score)
    // Then
    expect(grade).toEqual('A')
  })
  it('A 학점 - max-', () => {
    // Given
    const score = 99
    // When
    const grade = convertToGrade(score)
    // Then
    expect(grade).toEqual('A')
  })
  it('A 학점 - max', () => {
    // Given
    const score = 100
    // When
    const grade = convertToGrade(score)
    // Then
    expect(grade).toEqual('A')
  })
})
```

**결정 테이블**
- 조건(입력 값)과 행위(결괏값)를 테이블로 구성하여 케이스 및 절차를 구성한다.
- 프로세스 수행 중 요구되는 결정 또는 조건과 프로세스와 관련된 모든 동작을 기술한다.
```js
const login = (email, password) => {
  if (!email) {
    return INVALID_EMAIL
  }
  if (!password) {
    return INVALID_PASSWORD
  }
  return LOGIN
}
```
```js
describe('login', () => {
  const EMAIL = 'EMAIL'
  const PASSWORD = 'PASSWORD'
  it('이메일/비밀번호 유효하지 않을 때', () => {
    // Given
    const email = ''
    const password = ''
    // When
    const status = login(email, password)
    // Then
    expect(status).toEqual(INVALID_EMAIL)
  })
  it('이메일 유효하고, 비밀번호 유효하지 않을 때', () => {
    // Given
    const email = EMAIL
    const password = ''
    // When
    const status = login(email, password)
    // Then
    expect(status).toEqual(INVALID_PASSWORD)
  })
  it('이메일 유효하지 않고, 비밀번호 유효할 때', () => {
    // Given
    const email = ''
    const password = PASSWORD
    // When
    const status = login(email, password)
    // Then
    expect(status).toEqual(INVALID_EMAIL)
  })
  it('이메일/비밀번호 유효할 때', () => {
    // Given
    const email = EMAIL
    const password = PASSWORD
    // When
    const status = login(email, password)
    // Then
    expect(status).toEqual(LOGIN)
  })
})
```

**조합**
- 테스트하는 데 필요한 값이 다른 파라미터의 값과 최소한 한 번씩은 조합을 하여 케이스를 구성한다.
- 대부분의 결함이 두 개 요소의 상호작용에 기인한다는 것에 착안하여, 두 개 요소의 모든 조합을 다룬다.
```js
const convertToTitle = ({repeat: boolean, base: boolean, eq: boolean}) => {
  return {
    repeat: repeat ? '전체반복' : '한곡반복',
    base: base ? '설정' : '해제',
    eq: eq ? '설정' : '해제',
  }
}
```
```js
describe('convertToTitle', () => {
  it('repeat: 전체반복, base: 설정, EQ: 설정', () => {
    // Given
    const repeat = true
    const base = true
    const eq = true
    // When
    const result = convertToTitle({repeat, base, eq})
    // Then
    expect(result.repeat).toEqual('전체반복')
    expect(result.base).toEqual('설정')
    expect(result.eq).toEqual('설정')
  })
  it('repeat: 전체반복, base: 해제, EQ: 해제', () => {
    // Given
    const repeat = true
    const base = false
    const eq = false
    // When
    const result = convertToTitle({repeat, base, eq})
    // Then
    expect(result.repeat).toEqual('전체반복')
    expect(result.base).toEqual('해제')
    expect(result.eq).toEqual('해제')
  })
  it('repeat: 한곡반복, base: 설정, EQ: 해제', () => {
    // Given
    const repeat = false
    const base = true
    const eq = false
    // When
    const result = convertToTitle({repeat, base, eq})
    // Then
    expect(result.repeat).toEqual('한곡반복')
    expect(result.base).toEqual('설정')
    expect(result.eq).toEqual('해제')
  })
  it('repeat: 한곡반복, base: 해제, EQ: 설정', () => {
    // Given
    const repeat = false
    const base = false
    const eq = true
    // When
    const result = convertToTitle({repeat, base, eq})
    // Then
    expect(result.repeat).toEqual('한곡반복')
    expect(result.base).toEqual('해제')
    expect(result.eq).toEqual('설정')
  })
})
```

**상태전이**
- 시스템의 각 상태를 중심으로 케이스를 도출하고 전이 상태를 절차로 구성한다.
- 객체의 상태를 구분하고 이벤트에 의해 어느 한 상태에서 다른 상태로 전이되는 경우의 수를 테스트 케이스로 구성
- 상태 머신을 사용하는 UI 컴포넌트 테스트 시 유용
```js
describe('MovieComponent', () => {
  it('영화관을 선택할 때', () => {
    // Given
    const component = mount(MovieComponent)
    // When
    component.trigger('click')
    // Then
    expect(component.hasClass('active')).toBe(true)
  })
})
```