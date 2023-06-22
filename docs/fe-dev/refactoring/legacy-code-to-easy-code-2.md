---
title: 레거시 코드에서 이해하기 쉬운코드로 리팩토링 2
---
# 레거시 코드에서 이해하기 쉬운코드로 리팩토링 2
> 2019년 6월 1일에 작성한 포스트입니다.

### 글의 목적
프로젝트 코드에 레거시 코드가 존재하는 데 **모든 레거시 코드를 이해하기 쉬운 코드로 작성이 불가능한가**의 생각으로
각 코드별로 방법에 대한 정리를 시작했다.

프로젝트 코드 하나하나 확인한 뒤 이해하기 힘든 부분을 찾아 이해하기 쉬운 코드로 바꾸는 방법을 작성해봤다.
다른 사람이 작성한 코드를 보고 개선하는 것만큼 현실세계에 발생할 만한 사항이다.

### 용어정의
- 테크니컬 라이터: 소프트웨어의 전문적인 지식을 비전문가에게 이해하기 쉽게 전달하는 매체(음성, 영상, 글)을 생산하는 역할이다.
- 책임연쇄패턴: 문제를 처리에 적합한 요소를 **연쇄적**으로 찾아 **책임을 부여**하는 패턴이다.

### 카테고리
- 스타일과 문구
- 객체
- 조건문
- 배열과 반복문

먼저 가벼운 내용부터 시작하겠다.
### 스타일과 문구
**스타일과 문구**는 정책적인 사항이라고 볼 수 있다. **스타일**은 **디자인 정책**, **문구**는 **용어 정책**이다. 

**스타일**은 색상, 요소의 위치, 라운딩값 등 시각적인 요소를 의미한다. **스타일**은 디자이너의 의견이 반영된 **디자인 정책**이다.

**문구**는 타이틀, 가이드 문구, 툴팁 문구, 일시적인 오류에 따른 문구 등 문구에 관련된 요소들을 의미한다. **문구**는 기획자 또는 테크니컬 라이터의 의견이 반영된 **용어 정책**이다.

#### 차트 라이브러리 옵션
차트 라이브러리에 사용되는 **옵션값**도 **디자인 정책**에 해당된다.
이러한 정책 사항들은 로직이 있는 코드와 같이 기술되면 **불필요하게 해석**하게 된다.
```js
const chartOption = {
  label: {
    xAxis: {x: 10, y: 10, color: '#000'},
    yAxis: {x: 100, y: 100, color: '#000'}
  }
}
```
**상수**로 정의하여 **네이밍에 의미를 전달**하고 **불변성**을 전달하여 이해하기 쉽게 할 수 있다.
```js
const CHART_LABEL_STYLE = {
  xAxis: {x: 10, y: 10, color: '#000'},
  yAxis: {x: 100, y: 100, color: '#000'}
}
const chartOption = {
  label: CHART_LABEL_STYLE
}
```

#### 가이드 문구
**약관 동의 시 이메일, 휴대폰 번호가 수집됩니다**와 같은 가이드 문구는 **용어 정책**사항이다. 마크업파일에 정의되든 스크립트파일에 정의되든 모두 분리가 필요한 사항이다.
```js
const terms = [
  {
    title: '광고 동의',
    guide: '약관 동의 시 광고성 이메일을 받을 수 있습니다.'
  },
  {
    title: '서비스 이용동의',
    guide: '약관 동의 시 이메일, 휴대폰 번호가 수집됩니다.'
  }
]
```
**문구**도 하나의 정책 사항이기 때문에 **상수**로 정의한다. **문구변경**은 **굉장히 빈번**하게 발생된다. **파일로 분리**할 경우 세밀하게 로직을 피해 수정할 필요없이 문구만 수정 가능하다.
```js
// constants/terms.js
export const AD_TITLE = '광고 동의'
export const AD_GUIDE = '약관 동의 시 광고성 이메일을 받을 수 있습니다.'
export const SERVICE_TITLE = '서비스 이용동의'
export const SERVICE_GUIDE = '약관 동의 시 이메일, 휴대폰 번호가 수집됩니다.'

// component/terms.js
import {
  AD_TITLE, AD_GUIDE,
  SERVICE_TITLE, SERVICE_GUIDE
} from 'constants/terms'

const terms = [
  {title: AD_TITLE, guide: AD_GUIDE},
  {title: SERVICE_TITLE, guide: SERVICE_GUIDE}
]
```

### 객체
#### 객체 추출하여 다른 객체 만들기
객체에서 특정한 프로퍼티만 추출하여 다른 객체를 만들고 싶을 때가 있다.
새로운 객체를 만들어 객체의 값을 할당하는 형태이다. 이 코드는 이해하기 어렵지 않지만 **chatBot 변수사용의 중복**이 발생한다.
```js
const httpBody = {
  name: chatBot.name,
  fallbacks: chatBot.fallbacks,
  config: chatBot.config,
  tags: chatBot.tags,
}
```
**해체**를 통해 프로퍼티을 추출하고 할당하는 방식을 사용하면 중복을 줄일 수 있다.
```js
const {name, fallbacks, config, tags} = chatBot
const httpBody = {name, fallbacks, config, tags}
```
만약에 프로퍼티의 중복을 줄이고 싶으면 **pick함수**으로 해결 가능하다.
```js
const httpBody = pick(['name', 'fallbacks', 'config', 'tags'], chatBot)
```
```js
const pick = (keys, obj) => keys
  .map(key => ({[key]: obj[key]}))
  .reduce((acc, obj) => Object.assign(acc, obj))
```
#### 깊은 객체 비교
config.source.appId와 config.target.appId가 다른지를 비교하는 함수이다.
각 프로퍼티가 없을 때 반환을 하여 안전하게 비교가능하게 작성한 코드이다.

source, target의 유무와 각 appId의 유무를 확인하고 appId를 비교하는 등 많은 기능으로 해석하기 힘들게 한다.
```js
const isSameAppId = config => {
  const {source, target} = config
  if (!target || !target.appId || !source || !source.appId) {
    return false
  }
  return target.appId !== source.appId
}
```
해체에 **기본값**을 사용하면 가장 얕은 프로퍼티의 유무를 확인 할 필요없이 작성이 가능하다. 즉, 함수의 역할에 맞게 appId를 중심으로 표현이 가능하다.
```js
const isSameAppId = config => {
  const {source = {}, target = {}} = config
  if (target.appId && source.appId) {
    return target.appId !== source.appId
  }
  return false
}
```
#### 객체 할당
객체의 프로퍼티에 값를 할당하는 코드이다.
이해하기 쉬운 코드지만 프로퍼티에 값을 할당하는 부분이 중복된다.
```js
const circle = new Circle()
circle.radius = 100
circle.x = 50
circle.y = 50
```
**Object.assign**을 사용하면 중복을 제거할 수 있다.
```js
const circle = Object.assign(new Circle(), {
  radius: 100,
  x: 50,
  y: 50
})
```

### 조건문
#### 동일한 값을 비교할 경우
**if/else**로 작성되면 에러코드에 따른 동작을 파악하기 위해 시선이
**Z형태**(**errorCode -> 211 -> navigate**)로 이동되어 한번에 읽기 어렵게 한다.
```js
if (errorCode === 211) {
  navigate('/signup')
} else if (errorCode === 208) {
  navigate('/user/registration')
} else if (errorCode === 202) {
  navigate('/home')
} else if (errorCode === 212 || errorCode === 213) {
  navigate('/signup')
} else {
  navigate('/login')
}
```
**switch/case**로 작성되면 에러코드와 동작이 **수직**으로 위치하여 시선이 수직으로 이동되어 읽기 쉽게 만든다.
그리고 숫자를 작은 것부터 높은 순서로 작성하고 동일한 동작을 하는 코드는 같이 작성하였다.
```js
switch (errorCode) {
  case 202: navigate('/home')
    break
  case 208: navigate('/user/registration')
    break
  case 211:
  case 212:
  case 213: navigate('/signup')
    break
  default: navigate('/login')
    break
}
```
#### 다른 값을 비교할 경우
조건문에 다른 값들을 비교할 때이다. 결과에 따라 각자 다른 동작을 하고 있다.
일관성이 없기 때문에 읽기 어렵고 이해하기 쉽게 작성되어 있다.
```js
if (error.httpStatus === 0) {
  openToast('알 수 없는 오류가 발생했습니다.')
} else if (error.response && error.response.name === 'TimeoutError') {
  openToast('타임아웃이 발생했습니다.')
} else if (error.code === 211) {
  navigate('/signup')
} else if (error.code === 208) {
  navigate('/user/registration')
} else {
  navigate('/login')
}
```

먼저 **switch/case**를 통해 **책임연쇄패턴**을 작성하여 조건문과 동작을 동일 시선으로 만들 수 있다.
```js
switch (true) {
  case error.httpStatus === 0:
    openToast('알 수 없는 오류가 발생했습니다.')
    break
  case error.response && error.response.name === 'TimeoutError':
    openToast('타임아웃이 발생했습니다.')
    break
  case error.code === 211:
    navigate('/signup')
    break
  case error.code === 208:
    navigate('/user/registration')
    break
  default:
    navigate('/login')
    break
}
```
그리고 마지막으로 조건문을 함수로 만들면 일관성있는 코드가 작성되어 이해하기 쉽게 한다.
```js
const isUnknownError = error => error.httpStatus === 0
const isTimeoutError = error => error.response && error.response.name === 'TimeoutError'
const isUnregist = error => error.code === 211
const isUnauth = error => error.code === 208

switch (true) {
  case isUnknownError(error):
    openToast('알 수 없는 오류가 발생했습니다.')
    break
  case isTimeoutError(error):
    openToast('타임아웃이 발생했습니다.')
    break
  case isUnregist(error):
    navigate('/user/registration')
    break
  case isUnauth(error):
    navigate('/signin')
    break
  default:
    navigate('/login')
    break
}
```

#### 특정 값이 존재할 때 할당하는 경우
응답에러와 응답메시지가 있을 때 메시지변수에 할당을 하고, 둘다 없을 경우 공통 메시지를 할당하는 코드이다.
간단한 코드지만 메세지변수를 **let**으로 선언하여 **변경가능성**을 표현하였고,
시선이 한방향으로 흐르지 않고 있다.
```js
let message
if (response.error) {
  message = response.error
} else if (response.message) {
  message = response.message
} else {
  message = COMMON_MESSAGE
}
```
**OR**를 통해 작성하면 참일 때 메세지변수에 할당하게 된다.
메세지변수의 **불변**으로 선언하였고, 시선이 한방향으로 흐르게 하였다.
```js
const message = response.error || response.message || COMMON_MESSAGE
```
#### 각 인자값 분기
Angular의 HttpParams를 사용하여 쿼리스트링을 만드는 함수이다.
인자의 존재 유무에 따라 파라미터의 추가가 결정된다.
다른 값이 사용되어 각 값마다 분기가 사용되어 로직이 중복된다.
```js
const convertToParams = ({name, status, page, pageSize}) => {
  let params = new HttpParams()
  if (name) {
    params = params.append('name', name)
  }
  if (status) {
    params = params.append('status', String(status))
  }
  if (page) {
    params = params.append('page', String(page))
  }
  if (pageSize) {
    params = params.append('size', String(pageSize))
  }
  return params
}
```
결국 이 함수는 여러개의 값을 모아 하나의 값을 만드는 작업을 한다.
이때 **reduce**를 사용하면 params과 중복된 로직을 삭제할 수 있다.
```js
const convertToParams = ({botName, status, page, pageSize}) => {
  return [
    ['botName', botName],
    ['status', status],
    ['page', page],
    ['size', pageSize],
  ].reduce((params, [key, value]) => {
    if (value) {
      params = params.append(key, String(value))
    }
    return params
  }, new HttpParams())
}
```
이 코드에서도 개선 사항이 있다. 파라미터를 배열로 선언해야 하고, reduce 내부의 작업이 많다. 각 역할에 맞게 **선언형 함수**를 사용하면 좀 더 개선 가능하다.
```js
const convertToParams = ({botName, status, page, pageSize: size}) => {
  return Object
    .entries({botName, status, page, size})
    .filter(([key, value]) => value)
    .map(([key, value]) => [key, String(value)])
    .reduce((params, [key, value]) => {
      return params.append(key, String(value))
    }, new HttpParams())
}
```

### 배열과 반복문
#### 인덱스 반복문
**for (let i = 0; i < 7; i++)** 이런 형태의 인덱스 반복문을 많이 봤을 것이다. 이런 형태의 반복문은 바깥의 변수를 조작하는 **부수효과**를 만들게 된다.
```js
const days = []
for (let i = 0; i < 7; i++) {
  days.push('Day ' + i)
}
// ['Day 0', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6']
```
이러한 반복문은 **range**를 통해 작성이 가능하고 **부수효과를 제거**할 수 있다. 그리고 문자는 **템플릿 리터럴**로 정의하면 더 읽기 쉽게 정의할 수 있다.
```js
const days = range(7).map(i => `Day ${i}`)
```
```js
const range = length => Array.from({length}, (_, i) => i)
range(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### 배열의 요소 찾기
배열에 요소가 있는 지 찾는 코드를 indexOf를 통해 작성하는 코드 작성하기도 한다.
```js
const hasItem = (arr, item) => arr.indexOf(item) >= 0
hasItem(['a', 'b', 'c'], 'a')
```

하지만 요소를 찾는 역할은 includes로 변경 가능하다.
```js
const hasItem = (arr, item) => arr.includes(item)
hasItem(['a', 'b', 'c'], 'a')
```

#### 깊은 배열 탐색하기
이런 형태의 데이터를 현실세계에서는 자주볼 수 있다.
```js
const parents = [{
  value: '',
  children: [{value: ''}]
}]
```
중복된 이름인지 찾기 위한 작업을 할 때 이러한 코드를 볼 수 있다.
**for...of**를 통해 배열을 순회한 뒤 값을 비교한다.
동일한 이름을 사용될 때 **true**을 반환하고 없을 때 **false**을 반환한다.
```js
const isDupName = (parents, newName) => {
  for (const parent of parents) {
    if (parent.name === newName) {
      return true
    }
    for (const child of parent.children) {
      if (child.name === newName) {
        return true
      }
    }
  }
  return false
}
```
특정 값이 일치하는 지 찾는 동작은 **some**을 통해서 할 수 있다. 
```js
const isDupName = (parents, newName) => parents
  .some(({name, children}) => {
    if (name === newName) {
      return true
    }
    return children.some(({name}) => name === newName)
  })
```

### 끝
카테고리 별로 요약하면 아래와 같다.
- 스타일과 문구: 정책 사항과 로직을 분리하기
- 객체: 객체 접근 중복 제거
- 조건문: 시선을 한방향으로 흐르게 하기
- 배열과 반복문: 선언형 함수 사용하기
