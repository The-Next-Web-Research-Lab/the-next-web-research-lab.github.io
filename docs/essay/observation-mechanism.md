---
title: 옵져버 매커니즘
---
# 옵져버 매커니즘
> 2019년 5월 20일에 정리한 포스트입니다.

### 글의 목적
> 정보 전달 목적보다는 자료 정리 목적으로 작성된 포스트라 정돈이 안되있다.

AngularJs를 사용한 프로젝트에서 성능 이슈로 밤낮세며 개선 방안을 찾은 기억이 있다. 그 경험 때문에 라이브러리들의 옵져버 매커니즘은 어떻게 구현되는 지 가끔 살펴본다. 개인적으로는 그 중에 VueJs의 옵져버 매커니즘은 가장 이상적이라고 생각한다. 각 라이브러리 별로 구현된 옵져버 매커니즘을 정리해본 자료이다.

### 목차
- AngularJs
- Angular
- VueJs
- React

### 라이브러리별 옵져버 매커니즘
#### AngularJs
먼저 왜 AngularJs에서 성능 이슈를 발생했는 지 정리했다.

AngularJs는 **$digest loop**를 통해서 변경 감지를 하는 데, **$digest loop**는 **$watcher**에 등록된 모델의 변경 체크하고 변경 시 **$watcher**에 등록된 이벤트 핸들러를 실행한다.

만약에 모델의 변경이 됬다면 **$digest loop**를 다시 실행하게 되고 이것을 **Dirty Checking**이라고 불린다. 이 과정에서 성능이슈가 발생하게 되고 모델과 디렉티브를 많이 사용하게 되면 성능이 급격히 감소한다.

#### VueJs
> [Vue 2.0 반응형에 대해 깊이 알아보기](https://kr.vuejs.org/v2/guide/reactivity.html)

**Vue 2.0**에서는 **Object.defineProperty**를 통해서 구현되있다. 
**data** 옵션으로 전달되는 모든 속성을 **Object.defineProperty**를 통해 변경 감지를 한다. 하지만 **Object.defineProperty**의 한계는 존재한다.

```
- ES5 지원 브라우저만 동작
- 속성 추가 감지할 수 없음
- data는 배열로 선언할 수 없음
```

이러한 단점이 있지만 모든 반응 속성을 미리 선언하여 컴포넌트 상태 스키마로 사용 되기 때문에 코드 유지 관리 측면에서 장점이 있다.
자세한 구현내용은 [Vue Mastery - Build a Reactivity System](https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system) 에서 확인할 수 있다.

**Vue 3.0**에서는 **Proxy**를 통해서 구현되있다.
```
- Property addition / deletion
- Array index / length mutation
- Map, Set, WeakMap, WeakSet
- Classes
```
[Vue 3.0을 소개하는 영상](https://www.youtube.com/watch?v=8Hgt9HYaCDA)에서 Evan You는 Proxy-based의 장점을 설명했다.
**Object.defineProperty**의 단점을 보완이 가능해졌고, 성능도 향상되었다. [Evan You on Proxies](https://www.vuemastery.com/courses/advanced-components/evan-you-on-proxies)에서 변경하려는 의지를 보였던 거 같다.

#### Angular
> [Angular defineProperty](https://github.com/angular/angular/search?l=TypeScript&q=defineProperty&type=) 검색

Angular부터는 변경 감지를 **Object.defineProperty**를 통해 구현했다. 그리고 RxJs의 Observable는 Vanilla Js로 **Subject와 Observable 패턴**이 구현되있다.

#### React
> [React defineProperty](https://github.com/facebook/react/search?utf8=%E2%9C%93&q=defineProperty&type=) 검색

React도 변경감지를 **Object.defineProperty**를 통해 구현했다. 적용 범위는 이벤트, 입력폼, Props 등에 사용되었다.

### 끝
Angular와 React는 공식적으로 어떻게 구현되었는 지 자료가 없다.
그래서 Github 코드를 통해서 확인하는 과정으로 작성했다.
