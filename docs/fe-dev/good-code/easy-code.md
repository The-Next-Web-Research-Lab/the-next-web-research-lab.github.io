---
title: 이해하기 쉬운 코드 작성방법 정리
---
# 이해하기 쉬운 코드 작성방법 정리

> 2019년 5월 1일에 카카오 FE 플랫폼팀에서 발표 후 자료를 추가해서 작성한 포스트입니다.

### 글의 목적
코드 리뷰를 받다보면 본인이 작성한 **네이밍의 의미가 모호**하다는 피드백을 받거나 **로직이 이해하기 힘들다**는 피드백을 받을 때가 있다.
동료들이 본인이 작성한 코드를 이해하지 못했을 때는 코드 작성 방법에 변경할 필요가 생긴 것이다.
이 부분을 개선하기 위해 **이해하기 쉬운 코드 작성 방법**을 리서치를 했다.
이 포스트는 리서치한 자료들을 정리한 포스트이다.

### 왜 코드는 이해하기 쉬워야 할까?
우리는 코드를 작성하는 시간보다 **코드를 보고만 있는 시간**을 대부분 차지한다. 우리에게는 시간은 유한하고
제한시간에 요구사항을 개발하는 게 하나의 목표이다. 그렇기 때문에 서비스를 운영하고 있는 내 자신 또는 동료가
**코드를 이해하는 데 소비되는 시간을 최소화**해야 한다.

### 코드를 완전히 이해한다는 것은 무엇을 의미할까?
코드를 이해한다는 것은 세가지를 충족했을 때를 의미한다.
- 첫째, 코드를 자유롭게 수정이 가능하다.
- 둘째, 버그를 짚어내는 것이 가능하다.
- 셋째, 수정된 내용이 작성한 다른 부분의 코드와 어떻게 상호작용 하는지를 알 수 있어야 한다.

요약하면 코드를 수정가능하고, 버그를 짚어내는 것이 가능하며 수정 시 사이드 이펙트 없이 수정할 수 있을 때,
코드를 완전히 이해한다고 할 수 있다.

## 이제 본론으로 들어가겠습니다.
이해하기 쉬운 코드를 작성하기 위해 6개의 카테고리로 분류했다.
- 네이밍 
- 코드의 미학 
- 논리 단순화 
- 작은 것이 아름답다 
- 테스트 코드 
- 함수형 프로그래밍 

### 네이밍
변수명/함수명/클래스명의 이름을 결정할 때는 항상 같은 원리가 적용된다. 이름은 **일종의 설명문**으로 간주해야 한다. 적절한 이름을 붙일 수 있다는 것은 해당 요소가 바르게 이해되고 바르게 설계되어 있다는 뜻이다. 반대로 어울리지 않는 이름을 붙여졌다는 것은 해당 요소가 달성해야 할 역할에 대해 프로그래머 자신이 충분히 이해하지 못했다는 뜻이다.

#### 효과적인 네이밍 작성
네이밍을 통해 프로그래머끼리 의사소통을 이루어지므로 이름이 적절하지 않으면 코드상의 대화는 성립하지 않는다. **효과적인 이름**을 작성하기 위해서는 이러한 과정이 필요하다.

- 이름은 효과와 목적을 설명하도록 한다.
- 이름은 발음 가능한 것으로 한다.
- 이름은 검색 가능하도록 한다.

#### 네이밍을 잘했는 지 확인하려면?
명명에는 **이름 가역성**이라는 개념이 있다. 이는 **이름이란 명명의 기반이 된 내용의 설명문을 복원할 수 있어야 한다**는 명명 방침이다. 이 방침을 충족하려면 **루프백 확인**을 수행해야 한다.

**루프백 확인**은 내용의 설명문으로 부터 이름을 떠올렸다면 반대로 이름을 추측할 수 있는 설명문을 생각해보는 것이다. **설명 -> 이름 -> 설명**의 순으로 한 바퀴 돌아서 원래로 돌아왔을 때 설명이 일치하면 좋은 이름이고, 일치하지 않으면 주의가 필요하다.

```js
const add = (a, b) => a + b
```
```
(a, b) => a + b -> add -> (a, b) => a + b
```

#### 이름에 정보를 담아내는 방법
**1. 보편적인 단어를 피하고 구체적인 단어를 선택한다.**

**어디에서 가져오는 지**, **무엇을 수행하는 지**, **무엇을 반환하는 지**에 따라 구체적인 단어를 선택할 수 있다. 예를 들어 페이지를 요청할 때는 `getPage()`보다는 `fetchPage()`, 사이즈를 가져올 때는 `size`보다는 `height`, `nodesLength`, `memoryBytes`와 같이 구체적인게 정확한 의도를 전달할 수 있다.

**2. 시간의 양이나 바이트의 수 같이 측정치를 포함한다면, 단위를 포함시킨다.**

##### Not Cool
```js
const start = new Date().getTime()
...
const end = new Date().getTime() - start
console.log(`Load time was: ${end} seconds`) // Wrong!!
```
##### Cool
```js
const startMs = new Date().getTime()
...
const endMs = new Date().getTime() - startMs
console.log(`Load time was: ${endMs / 1000} seconds`)
```

##### 파일 사이즈 경우
```js

if (isValidFile && file.size > this.maxFileSizeInBytes) {
  this.tooltipService.show(`파일 용량은 ${this.maxFileSizeInBytes / 1000}KB를 초과할 수 없습니다`)
  isValidFile = false
}

{
  get maxFileSizeKB (): number {
    return Math.floor(this.maxFileSizeInBytes / 1000)
  }

  get currentFileSizeKB (): number {
    return Math.floor(this.currentFileSize / 1000)
  }
}
```

**3. 위험한 요소 표현**

나중에 잘못 이해했을 때 심각한 버그를 만들 가능성 있는 것들을 표현하는 게 좋다.
- 패스워드가 암호화 안되있다면 : `password` => `plainTextPassword`
- URL Encoded 데이터라면 : `data` => `dataURLEnc`
- 이스케이프 처리가 되어야 한다면 : `comment` => `unescapedComment`

#### 이름은 얼마나 길어야 할까?
**좁은 범위**에서는 짧은 이름이 괜찮다. 좁은 범위에서만 사용되는 변수의 이름에 많은 정보를 담을 필요가 없기 때문이다. 좁은 범위에서는 변수의 타입, 초기값 등 모든 정보가 쉽게 한눈에 보이므로 짧은 이름을 사용해도 좋다.

범위에 따라 불필요한 단어를 제거할 수 있다. 정보의 손실하지 않으면서 이름에 포함된 단어를 제거할 수 있다. `convertToString()` => `toString()`

**약어와 축약형**을 사용하는 것은 특정 프로젝트에 국한된 의미를 가지기 때문에 좋은 생각이 아니다. 새로 합류한 사람에게는 비밀스럽고 위협적인 모습이다. **팀에 새로합류한 사람이 이름을 의미하는 바를 이해할 수 있을 까**를 기준으로 생각하는 게 좋다.

#### 이름 포맷팅으로 의미 전달
문법적 차이가 드러나게 서로 다른 개체의 이름에 각자 **다른 포맷팅 방식**을 적용하는 방식은 코드를 더 읽게 쉽게 해준다. 아래는 자바스크립트에서 보편적으로 사용하는 포맷팅 방식이다.
- 클래스 : PascalCase
- 변수, 함수, 메소드 : camelCase
- 상수 : CONSTANT_NAME

### 코드의 미학
미학적으로 보기 좋은 코드가 사용하기 더 편리하다는 사실은 명백하다. 잘 생각해보면 소비되는 시간이 **코드를 바라보는 데 많이 소요**된다.
코드를 훑어보는 데 걸리는 시간이 적을 수록, 사람들은 코드를 더 쉽게 사용할 수 있다.

#### 일관성과 간결성을 위해서 줄바꿈을 재정렬
##### Not Cool
```js
fetch().then(() => {})
  .catch(() => {})
```
##### Cool
```js
fetch()
  .then(() => {})
  .catch(() => {})
```

#### 불규칙적으로 정의된 로직은 메소드를 활용하여 정렬
##### Not Cool
```js
switch (true) {
  case char === `{` || char === `}`:
    char === `{` ? stack.forword({}) : stack.backword()
    break
  case char === `[` || char === `]`:
    char === `[` ? stack.forword([]) : stack.backword()
    break
  case char === 't' || char === 'f':
    const isTrue = input[cursor] === 't'
    stack.setValue(isTrue ? true : false)
    cursor = cursor + (isTrue ? 3 : 4)
    break
  case char === 'n':
    stack.setValue(null)
    cursor = cursor + 3
    break
}
```
##### Cool
```js
switch (true) {
  case isObject(char):
    parseObject(char, stack)
    break
  case isArray(char):
    parseArray(char, stack)
    break
  case isBoolean(char):
    cursor = parseBoolean(input, cursor, stack)
    break
  case isNull(char):
    cursor = parseNull(cursor, stack)
    break
}

const isObject = v => v === `{` || v === `}`
const isArray = v => v === `[` || v === `]`
const isBoolean = v => v === 't' || v === 'f'
const isNull = v => v === 'n'

const parseObject = (char, stack) => {
  char === `{` ? stack.forword({}) : stack.backword()
}
const parseArray = (char, stack) => {
  char === `[` ? stack.forword([]) : stack.backword()
}
const parseBoolean = (input, cursor, stack) => {
  const isTrue = input[cursor] === 't'
  stack.setValue(isTrue ? true : false)
  return cursor + (isTrue ? 3 : 4)
}
const parseNull = (cursor, stack) => {
  stack.setValue(null)
  return cursor + 3
}
```

#### 선언문을 블록으로 구성
우리의 뇌는 자연스럽게 **그룹과 계층 구조**를 따라서 동작한다.
논리 영역에 따라서 비슷한 생각을 묶어서 선언하면 성격이 다른 생각과 구분한다.
##### Not Cool
```js
const set = new Set()
const TXT_PATH = 'test.txt'
const {
  readFileSync,
  writeFileSync
} = require('fs')
const JSON_PATH = 'test.json'
```
##### Cool
```js
const {
  readFileSync,
  writeFileSync
} = require('fs')
const TXT_PATH = 'test.txt'
const JSON_PATH = 'test.json'
const set = new Set()
```

#### 추상화 수준 정리하기
코드를 정리할 때는 높은 수준의 추상화 개념과 낮은 수준의 추상화 개념을 분리하도록 한다. 추상화 단계는 상하가 아니라 기능의 복잡도에 따라 여러 계층으로 분리한다.

결과적으로 추상화 수준을 일치시킨 코드는 훌륭한 책과 같다. 최고 수준부터 중간 수준의 처리가 **책의 목차**가 되고 최저 수준의 처리가 **책의 본문 내용**이 된다.

```
function 고수준() { 중수준1(); 중수준2(); } // 수준1의 목차
function 중수준1() { 저수준1(); 저수준2(); } // 수준2의 목자-1
function 저수준1() { }
function 저수준2() { }
function 중수준2() { 저수준3(); }
function 저수준3() { }
```

```js
const onChangeImage = file => {
  if (!validateImageFile(file)) {
    alert('이미지 파일만 업로드 가능합니다.')
    return
  }
  uploadImageFile(file)
}
const validateImageFile = file => {
  return isImageFile(extractExtension(file))
}
const extractExtension = file => file.type.toLowerCase()
const isImageFile = ext => ['png', 'jpg'].includes(ext)
const uploadImageFile = file => {}
```

### 논리 단순화
조건, 루프, 흐름을 통제하는 선언문은 코드를 복잡하게 만드는 원인이다. 코드를 읽을 때 다시 되돌아가서 코드를 읽지 않아도 되게끔 만들어야 한다.

#### 조건문에서 인수의 순서
인수의 **왼쪽**은 **질문을 받는 표현**을 정의하고, **오른쪽**에는 **비교대상**을 두는 것이 통계적으로 가독성이 더 좋다. 이러한 가이드 라인은 영어 어순과 일치한다.
##### Not Cool
```js
if (10 <= length) {}
```
##### Cool
```js
if (length >= 10) {}
```

#### if/else 블록의 순서
`if/else`를 사용하는 경우 부정이 아닌 긍정을 먼저 다루는 게 좋다.
첫번째 블록을 생각할 때 한번 부정한 값을 생각해야 함으로 긍정부터 다루는 게 이해하기 쉽다.
##### Not Cool
```js
if (a !== b) {
} else {
}
```
##### Cool
```js
if (a === b) {
} else {
}
```

#### 중첩을 최소화하기
코드의 중첩이 심할 수록 코드를 읽는 사람의 마음속에 존재하는 정신적 스택에 추가적인 조건이 입력된다. 중첩을 제거하려면 함수 중간에 반환하기를 하여 제거할 수 있다.

##### Not Cool
```js
if (userResult === SUCCESS) {
  if (permissionResult !== SUCCESS) {
    reply.writeError('error reading permissions')
  } else {
    reply.writeError('')
  }
} else {
  reply.writeError(userResult)
}

reply.done()
```
##### Cool
```js
if (userResult !== SUCCESS) {
  reply.writeError(userResult)
  reply.done()
  return
}

if (permissionResult !== SUCCESS) {
  reply.writeError('error reading permissions')
  reply.done()
  return
}

reply.writeError('')
reply.done()
```

#### 거대한 구문 나누기
개별적인 표현은 그렇게 크지 않지만, 모두 한 곳에 있어서 코드를 읽는 사람의 머리를 강타하는 거대한 구문을 형성한다. 다행히도 표현하는 많은 부분이 동일하다. 따라서 동일한 부분을 **요약 변수**로 추출해서 함수의 앞부분에 놓아둘 수 있다.
##### Not Cool
```js
const updateHighlight = messageNum => {
  if ($(`#vote_value${messageNum}`).html() === "Up") {
    $(`#thumbs_up${messageNum}`).addClass("highlighted");
    $(`#thumbs_down${messageNum}`).removeClass("highlighted");
  } else if ($(`#vote_value${messageNum}`).html() === "Down") {
    $(`#thumbs_up${messageNum}`).removeClass("highlighted");
    $(`#thumbs_down${messageNum}`).addClass("highlihgted"); // Wrong!!
  } else {
    $(`#thumbs_up${messageNum}`).removeClass("highlighted");
    $(`#thumbs_down${messageNum}`).removeClass("highlighted");
  }
}
```
##### Cool
```js
const updateHighlight = messageNum => {
  const thumbsUp = $(`#thumbs_up${messageNum}`)
  const thumbsDown = $(`#thumbs_down${messageNum}`)
  const voteValueHtml = $(`#vote_value${messageNum}`).html()
  const ACTIVE_CLASS = "highlighted"

  if (voteValueHtml === "Up") {
    thumbsUp.addClass(ACTIVE_CLASS);
  } else {
    thumbsUp.removeClass(ACTIVE_CLASS);
  }
  if (voteValueHtml === "Down") {
    thumbsDown.addClass(ACTIVE_CLASS);
  } else {
    thumbsDown.removeClass(ACTIVE_CLASS);
  }
}
```

#### 드모르간의 법칙 사용하기
동일한 불리언 표현은 다음과 같이 두가지 방법으로 작성할 수 있다.
```
!(a || b || c) === !a && !b && !c
!(a && b && c) === !a || !b || !c
```

##### Not Cool
```js
if (!(fileExists && !isProtected)) {
  return '아이고 파일을 읽을 수 없습니다.'
}
```
##### Cool
```js
if (!fileExists || isProtected) {
  return '아이고 파일을 읽을 수 없습니다.'
}
```

### 작은 것이 아름답다
**작은 소프트웨어**는 단순하고 다루기 쉬우며 **큰 소프트웨어**보다 훨씬 뛰어나다. 따라서 소프트웨어는 작게 만들고 작게 유지하도록 한다.

작은 소프트웨어는 다음과 같은 장점이 있다.
1. 이해가 쉽다.
2. 수정이 쉽다.
3. 다른 소프트웨어와 조합하기 쉽다.

반면에 큰 소프트웨어는 다음과 같은 문제가 있다.
1. 복잡하고 코드를 이해하기 어렵다.
2. 예측하지 못하고 사태에 대응하기 힘들다.

#### 설명 변수
커다란 표현을 쪼개는 가장 쉬운 방법은 작은 하위 표현을 담을 추가 변수를 만드는 것이다. 하위표현의 의미를 설명하므로 **설명 변수**라고도 한다.

##### Not Cool
```js
if (line.split(':')[0] === "root") {}
```
##### Cool
```js
const username = line.split(':')[0]
if (username === "root") {}
```

#### 상관없는 하위문제 추출하기
엔지니어링은 커다란 문제를 작은 문제들로 쪼갠 다음, 각각의 문제에 대한 해결책을 구하고, 다시 하나의 해결책으로 맞추는 일련의 작업을 한다.
이러한 원리를 코드에 적용하면 코드가 더 튼튼해지며 가독성도 좋아진다.
큰 흐름과 관계가 적은 하위문제를 적극적으로 발견해서 추출하라는 것이다. 이 말이 의미하는 바는 다음과 같다.

1. 주어진 함수가 코드 블록을 보고, 스스로에게 질문하라 **상위수준에서 본 이 코드의 목적은 무엇인가?**
2. 코드의 모든 줄에 질문을 던져라 **이 코드는 직접적으로 목적을 위해서 존재하는 가?** 혹은 **목적을 위해서 필요하긴 하지만 목적 자체와 직접적으로 상관없는 하위문제를 해결하는가?**
3. 만약 상당히 원래의 목적과 직접적으로 관련되지 않은 하위문제를 해결하는 코드 분량이 많으면, 이를 추출해서 별도의 함수로 만든다.

다음 자바스크립트 코드의 **상위수준 목적**은 주어진 점과 가장 가까운 장소를 찾는 것이다.
```js
const findClosestLocation = (lat, lng, array) => {
  let closest
  let closestDist = Number.MAX_VALUE
  
  for (let i = 0, len = array.length; i < len; i++) {
    const latRad = radians(lat)
    const lngRad = radians(lng)
    const lat2Rad = radians(array[i].latitude)
    const lng2Rad = radians(array[i].longitude)
    
    // 코사인의 특별법칙 공식을 사용한다.
    const dist = Math.acos(
      Math.sin(latRad) * Math.sin(lat2Rad) +
      Math.cos(latRad) * Math.cos(lat2Rad) *
      Math.cos(lng2Rad - lngRad)
    )
    
    if (dist < closestDist) {
      closest = array[i]
      closestDist = dist
    }
  }
  return closest
}
```
루프의 내부에 있는 코드는 대부분 주요 목적과 **직접 상관없는 하위문제**를 다룬다.

```js
const sphericalDistance = (lat1, lng1, lat2, lng2) => {
  const latRad = radians(lat1)
  const lngRad = radians(lng1)
  const lat2Rad = radians(lat2)
  const lng2Rad = radians(lng2)
    
  return Math.acos(
    Math.sin(latRad) * Math.sin(lat2Rad) +
    Math.cos(latRad) * Math.cos(lat2Rad) *
    Math.cos(lng2Rad - lngRad)
  )
}
```
이제 원래 코드는 이렇게 변한다.
```js
const findClosestLocation = (lat, lng, array) => {
  let closest
  let closestDist = Number.MAX_VALUE
  
  for (let i = 0, len = array.length; i < len; i++) {
    const latRad = radians(lat)
    const lngRad = radians(lng)
    const lat2Rad = radians(array[i].latitude)
    const lng2Rad = radians(array[i].longitude)
    
    // 코사인의 특별법칙 공식을 사용한다.
    const dist = sphericalDistance(lat, lng, array[i].latitude, array[i].longitude)
    
    if (dist < closestDist) {
      closest = array[i]
      closestDist = dist
    }
  }
  return closest
}
```
코드를 읽는 사람도 밀도 높은 기하 공식에 방해받지 않고 **상위수준의 목적에 집중**할 수 있으니 전반적으로 코드의 가독성이 높아졌다.

#### 기존의 인터페이스를 단순화하기
라이브러리가 깔끔한 인터페이스를 제공하면 누구나 좋아한다.
하지만 자신이 사용하는 인터페이스가 깔끔하지 않다면, 깔끔한 **덮개**(Wrapper)로 보완할 수 있다.

예를 들어 자바스크립트가 브라우저 쿠키를 다루는 방식은 전혀 이상적이지 않다. 개념적으로 보면
쿠키는 이름/값 짝으로 이루어진다. 브라우저가 제공하는 인터페이스는 다음과 같은 문법으로 된
하나의 `document.cookie`를 사용한다.

```
name1=value1; name2=value2; ...
```

필요한 쿠키를 찾으려면 이 거대한 문자열의 구문분석을 직접 수행해야 한다.
다음은 `max_results`라는 이름을 가진 쿠키의 값을 읽는 코드이다.

```js
let maxResults
const cookies = document.cookie.split(';')
for (let i = 0, len = cookies.length; i < len; i++) {
  const cookie = cookies[i].replace(/^[ ]+/, '')
  if (cookie.indexOf('max_results') === 0) {
    maxResults = Number(cookie.substring(12, cookie.length))
  }
}
```

정말 지저분한 코드다. 다음과 같이 사용할 수 있는 `getCookie()`함수를 만들어야 할 것 처럼 보인다.

```js
const maxResults = Number(getCookie('max_results'))
```

여기서 **이상적이지 않은 인터페이스를 그냥 받아들일 이유가 없다**는 교훈을 얻을 수 있다.
이런 인터페이스가 있으면 언제나 이를 둘러싸는 함수를 작성하여 지저분한 내부를 감출 수 있다.

##### sessionStorage 경우
```js
const BROWSER_STORAGE = sessionStorage
const setItem = (key, value) => {
  BROWSER_STORAGE.setItem(key, JSON.stringify(value))
}
const getItem = (key) => {
  return JSON.parse(BROWSER_STORAGE.getItem(key))
}

setItem('isCanlender', true)
setItem('dateIds', [1, 2, 3])

console.log(getItem('isCanlender'))
console.log(getItem('dateIds'))
```

### 테스트 코드
**테스트 코드가 읽기 쉬워야 한다는 점**은 테스트와 상관없는 실제 코드와 마찬가지로 중요하다. 다른 프로그래머는 종종 테스트 코드를 실제 코드가 **어떻게 동작**하며 **어떻게 사용**되어야 하는지에 관한 **비공식적인 문서**라고 생각한다. 따라서 테스트 코드가 읽기 쉬우면, 사용자는 실제 코드가 어떻게 동작하는 지 그만큼 더 쉽게 이해할 수 있다.

일반적인 설계원리를 따르면 덜 중요한 세부 사항은 사용자가 볼 필요 없게 숨겨서 더 중요한 내용이 눈에 잘 띄게 해야 한다.

#### 명세 기반 테스트 기법 종류
테스트 기법을 정확히 알고 있어야 원하는 테스트와 테스트 코드의 목적을 명확히 할 수 있다. 테스트 코드에는 테스트 기법 하나씩 사용하여 읽기 쉬운 코드를 만들도록 해야 한다.

**1. 동등분할**

테스트 대상 데이터의 구간을 일정 간격으로 분할하여 케이스를 구성한다.
보통 데이터의 구간에 중간값을 대표값으로 사용한다.

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

**2. 경계값 분석**

분기 또는 반복 구문의 경계 값을 기준으로 케이스를 구성한다.
**min, min+, normal, max-, max** 다섯 경우의 케이스로 구성한다.

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

**3. 결정 테이블**

조건(입력 값)과 행위(결과 값)를 테이블로 구성하여 케이스 및 절차를 구성한다.
프로세스 수행 중 요구되는 결정 또는 조건과 프로세스와 관련된 모든 동작을 기술한다.

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

**4. 조합**

테스트하는 데 필요한 값이 다른 파라미터의 값과 최소한 한 번씩은 조합을하여 케이스를 구성한다.
대부분의 결함이 두 개 요소의 상호작용에 기인한다는 것에 착안하여, 두 개 요소의 모든 조합을 다룬다.

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

**5. 상태전이**

시스템의 각 상태를 중심으로 케이스를 도출하고 전이 상태를 절차로 구성한다.
객체의 상태를 구분하고 이벤트에 의해 어느 한 상태에서 다른 상태로 전이되는 경우의 수를 테스트 케이스로 구성한다.
상태 머신을 사용하는 UI 컴포넌트 테스트 시 유용하다.

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

### 함수형 프로그래밍
코드를 완전히 이해했다는 것의 조건 중 **코드를 사이드 이펙트 없이 자유롭게 수정할 수 있다**가 있다는 것을 위에서 설명했다.
이러한 방법은 **함수형 프로그래밍 기법**을 사용하면 대부분 해결 가능하다는 것을 알았다.

프로젝트를 운영하면서 기능이 추가되면 코드가 복잡해지지 않게 해야 한다. **복잡성**을 다스리는 비결은 코드베이스의 크기가 커질수록 복잡성이 증가하지 않도록 붙잡아 두는 것이다. 바로 여기서 **함수형 프로그래밍**이 요긴하게 쓰인다.

#### 함수형 프로그래밍이란?
함수형 프로그래밍은 추상화 단위를 함수로 한다. 함수들을 조립해서 고수준의 동작을 구현한다. 자료구조를 새로 만들어 어떤 요건을 충족시키는 게 아니라, **배열/객체/문자열 등의 흔한 자료구조**를 이용해 문제를 해결한다.

함수형 프로그래밍에서 함수는 **수학적 함수**를 의미한다. 수학적 함수는 입력과 출력이 모두 존재해야하고, 입력에 따른 출력은 항상 동일하게 대응되어야 한다.

함수형 프로그래밍에서는 관찰할 수 있는 **상태 변화**를 최소화하려고 애쓴다. 따라서 함수형 원칙을 고수하는 시스템에 새로운 기능을 추가할 때는 새로운 함수가 지역화되고 비파괴적인 데이터 전이 과정에서 어떻게 동작할 것인지를 파악하는 것이 핵심이다.

실용적인 함수형 프로그래밍은 어떤 시스템에서 상태 변화를 완전히 제거하는 것이 아니라 변이가 발생하는 지역을 가능한 최소화하는 것을 목표로 한다.

```js
const add = (a, b) => a + b // 수학적 함수 O
const rand = a => Math.random(a) // 수학적 함수 X
```

#### 수학적함수를 좀더 알아봅시다.
함수형 프로그래밍에서 다루는 수학적함수를 **순수함수**라고 부른다. 순수함수는 동일한 인자에 상응하는 **동일한 리턴값**을 가지는 함수이다. 그러므로, 평가시점이 변경이 되더라도 동일한 결과를 리턴하기 때문에 다루기 쉬운함수가 된다. 순수함수는 객체의 변경이 필요할 경우 새로운 객체를 생성하여 리턴한다.

외부변수를 사용하거나 외부변수를 변경하면 순수함수가 아니다. 비순수함수는 평가시점에 따라 다른 결과값을 가지기 때문에 평가시점을 미세하게 다뤄야 한다.

##### 순수함수
```js
const add = (a, b) => a + b;
const add1 = (obj, b) => ({val : obj.val + b})
```
##### 비순수함수
```js
const add2 = (a, b) => a + b + c;
const add3 = (a, b) => {
  c = b;
  return a + b;
};
const add4 = (obj, b) => {
  obj.val += b;
};
```

#### 모든 것을 함수로 생각한다.
**함수형 프로그래밍**은 애플리케이션, 함수의 구성요소, 더 나아가서 언어 자체를 함수처럼 여기도록 만들고,
이러한 함수 개념을 가장 우선순위에 놓는다. 함수형 사고방식은 문제의 해결 방법을 동사(함수)들로 구성(조합)하는 것.

##### 함수를 가장 우선순위에 놓는 것
```js
moveLeft(dog);
moveRight(duck);
moveLeft({ x: 5, y: 2});
moveRight(dog);
```
##### 데이터(객체)를 우선순위에 놓는 것
```js
duck.moveLeft();
duck.moveRight();
dog.moveLeft();
dog.moveRight();
```

#### 응용형 함수를 통해 다형성 만들기
응용형 함수는 인자로 받은 함수가 알고 있는 인자를 해당 함수에게 평가받아 로직을 완성해나가는 것을 말한다. map, filter 와 같은 함수가 응용형 함수라고 한다. 어떠한 데이터 형태인지 관심이 분리가 되고 다형성을 사용할 수 있기 때문에 재사용성이 높아진다.


```js
const filter = (iterable, predicate) => {
  return Array.from(iterable).filter(predicate);
};
const map = (iterable, mapper) => {
  return Array.from(iterable).map(mapper);
}

filter('123', (str) => Number(str) > 1); // ['2', '3']
filter([1,2,3], (str) => Number(str) > 1); // [2, 3]
filter(new Set([1, 2, 3]), (str) => Number(str) > 1); // [2, 3]
```

#### 값 대신 함수를 사용하라
우선 가장 간단한 함수인 repeat부터 살펴보자. repeat는 횟수와 값을 받아서 중복된 값을 횟수만큼 갖는 배열을 만드는 함수이다.
```js
const repeat = (times, value) => {
  return _.map(_.range(times), () => value)
}
```
독립적으로 동작하는 repeat를 구현하는 것도 괜찮지만 `반복성`이라는 일반성을 가지도록 repeat를 구현할 수 있다면
더 좋을 것이다. 즉, 어떤 숫자만큼 값을 반복하는 것도 괜찮지만 어떤 동작을 특정 횟수만큼 반복한다면 더 좋다.
```js
const repeatedly = (times, fun) => _.map(_.range(times), fun)

repeatedly(3, () => Math.floor(Math.random() * 10) + 1)
```
repeatedly 함수는 함수형 스타일로 생각하면 어떤 효과를 거둘 수 있는지 잘 보여 준다.
값 대신 함수를 사용함으로써 `반복성`이라는 새로운 가능성이 열렸다.

#### 명령형과 함수형 비교하기
**명령형 프로그램**은 작업 수행에 필요한 전 단계를 노출하여 흐름이나 경로를 아주 자세히 서술한다. 보통 작업을 수행하는 단계는 루프와 분기문, 구문마다 값이 바뀌는 변수들로 빼곡히 들어찬다.

반면, 선언적 프로그래밍, 특히 함수형 프로그래밍은 독립적인 블랙박스 연산들이 단순하게, 즉 최소한의 제어 구조를 통해 연결되어 추상화 수준이 높다. 실제로 함수형 프로그램은 데이터와 제어 흐름 자체를 고수준 컴포넌트 사이의 단순한 연결로 취급한다.

**1. 30세 이상인 users를 거른다.**

##### 명령형
```js
const temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
```
##### 함수형
```js
const over_30 = users.filter(({age}) => age >= 30);
```
**2. 30세 이상인 users의 names를 수집한다.**

##### 명령형
```js
const names = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
```
##### 함수형
```js
const names = over_30.map(({name}) => name);
```
**3. 30세 미만인 users를 거른다.**

##### 명령형
```js
const temp_users2 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users2.push(users[i]);
  }
}
```
##### 함수형
```js
const under_30 = users.filter(({age}) => age < 30);
```
**4. 30세 미만인 users의 ages를 수집한다.**

##### 명령형
```js
const ages = [];
for (let i = 0; i < temp_users2.length; i++) {
  ages.push(temp_users2[i].age);
}
```
##### 함수형
```js
const ages = under_30.map(({age}) => age)
```

#### 추상화 도구 클로저
> **바인딩**은 자바스크립트의 이름에 값을 할당하는 행위를 가르킨다. 변수 할당, 함수 인자 사용, this 전달, 프로퍼티 할당 등의 과정에 해당한다.

**클로저**는 나중에 사용할 목적으로 정의된 스코프에 포함된 외부 바인딩을 캡쳐하는 함수다. 클로저는 비공개 접근을 제공할 뿐만 아니라 추상화 기법도 제공한다. 예를 들어 클로저를 이용해서 생성 시에 캡쳐되는 어떤 **설정**에 따라 다른 함수를 만들 수 있다.

```js
const plucker = field => obj => (obj && obj[field])
```

```js
const best = { title: '인피니티워', author: 'Peter' }
const books = [{title: '스파이더맨'}, {title: '아이언맨'}, {title: '토르'}]

const extractTitle = plucker('title')
const extractThird = plucker(2)

extractTitle(best) // '인피니티워'
extractThird(books) // {title: '토르'}
```

#### 커링
다인자 함수의 각각의 논리적 인자에 대응하는 새로운 함수를 반환하는 함수를 **커리함수**라고 한다.
`f : (X ⋅ Y) → Z` 함수가 주어질 때 커링은 새로운 함수 `h : X → (Y → Z)`를 만든다. h는 X의 원소를 받아 Y가 Z에 매핑하는 함수를 반환한다. `h(x)(y) = f(x, y)` 이와 같이 정의되며
`curry(f) = h` 이렇게도 사용된다.

```js
const curry = fn => a => b => fn(a, b)
const add = (a, b) => a + b

curry(add)(1)(2) // 3
add(1, 2) // 3
```

#### 부분 적용
**부분적용**은 부분적으로 실행을 마친 다음에 나머지 인자와 함께 즉시 실행한 상태가 되는 함수다.

```js
const partial = (fn, ...arg1) => (...arg2) => fn(...arg1, ...arg2)

const add = (a, b) => a + b
const add10 = partial(add, 10)

add10(5) // 15
```

#### 함수조립으로 데이터 절반 날리기
레고 블록으로 다양한 물건을 만들듯이 여러 함수를 연결해서 더 풍부한 기능의 함수를 **조립**하는 방법을 설명한다.

먼저 라이브러리를 사용하지 않기 때문에 보편적으로 사용하는 `filter`, `map`, `pipe`를 정의한다.
```js
const filter = pred => iter => iter.filter(pred)
const map = mapper => iter => iter.map(mapper)
const pipe = (fn, ...fns) => (...arg) => {
  return fns.reduce((acc, fn) => fn(acc), fn(...arg))
}
```

그리고 **두번째에 정의된 아이템 삭제**, **이름 추출**를 정의한다.
```js
const removeInEarth = (_,i) => i%2 === 0
const extractName = ({name}) => name
```

이제 정의한 함수들을 조립해서 **핑거스냅**을 정의한다. 핑거스냅은 데이터를 삭제 후에 이름을 추출한다.
```js
const fingerSnap = pipe(filter(removeInEarth), map(extractName))
```

이제 함수 정의와 조립을 했으니 핑거스냅을 튕겨보자. 결과적으로 지구에 남은 사람은 3명만 남을 것을 확인할 수 있다.
```js
const avengers = [
  { name: '아이언맨'}, { name: '스파이더맨'},
  { name: '캡틴 아메리카'}, { name: '버키 반스'},
  { name: '로켓'}, { name: '그루트'}
]
fingerSnap(avengers) // ['아이언맨', '캡틴 아메리카', '로켓']
```

## 끝

### 참고 서적
- [읽기 좋은 코드가 좋은 코드다 - 더스틴 보즈웰, 트레버 파우커](https://search.daum.net/search?w=bookpage&bookId=1103346&tab=introduction&DA=LB2&q=%EC%9D%BD%EA%B8%B0%20%EC%A2%8B%EC%9D%80%20%EC%BD%94%EB%93%9C%EA%B0%80%20%EC%A2%8B%EC%9D%80%20%EC%BD%94%EB%93%9C%EB%8B%A4)
- [실용주의 소프트웨어 개발 - 오병곤](https://search.daum.net/search?w=bookpage&bookId=1498033&tab=introduction&DA=LB2&q=%EC%8B%A4%EC%9A%A9%EC%A3%BC%EC%9D%98%20%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%20%EA%B0%9C%EB%B0%9C)
- [프로그래밍의 정석 - 우에다 이사오](https://search.daum.net/search?w=bookpage&bookId=915008&tab=introduction&DA=LB2&q=%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%98%20%EC%A0%95%EC%84%9D)
- [함수형 자바스크립트 - 루이스 아텐시오](https://search.daum.net/search?w=bookpage&bookId=1607655&tab=introduction&DA=LB2&q=%ED%95%A8%EC%88%98%ED%98%95%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)
- [함수형 자바스크립트 - 마이클 포거스](https://search.daum.net/search?w=bookpage&bookId=945124&tab=introduction&DA=LB2&q=%ED%95%A8%EC%88%98%ED%98%95%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)
