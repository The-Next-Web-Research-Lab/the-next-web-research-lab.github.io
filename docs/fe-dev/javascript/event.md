---
title: DOM Event의 역사와 정의
---
# DOM Event의 역사와 정의
## DOM Event의 역사
- DOM Event API는 DOM Level 2에서 논리적으로 표준화하려는 시도했음
- DOM Level 2의 개정 전, IE와 Netscape가 서로 정반대 `이벤트 흐름`을 채택함
- IE는 이벤트 버블링, Netscape는 이벤트 캡쳐링을 지원함
- 현재는 두 이벤트 흐름을 모두 지원함

## DOM Event의 정의
- javascript와 HTML 간의 상호작용을 담당
- 옵져버 패턴으로 이벤트가 발생할 때만 리스너가 실행

### 이벤트 버블링
- 이벤트 흐름상 문서 트리에서 가장 깊이 위치한 요소에서 시작해 거슬러 올라감
- 가장 깊이 위치한 요소에서 시작해 거슬러 흐르는 모양이 마치 거품이 올라가는 것 같아 버블링이라함

### 이벤트 캡처링
- 최상위 노드에서 처음으로 이벤트가 발생하며 가장 명시적인 노드에서 마지막으로 발생
- 이벤트 캡처링은 이벤트가 의도한 요소에 도달하기 전에 잡아채려는 목적으로 디자인

### API
```
addEventListener(
  [이벤트 이름],
  [핸들러],
  [호출 시점 true: 캡쳐링, false: 버블링]
)
```

```js
const onLoad = () => {};
window.addEventListener(
  'load',
  onLoad ,
  false
)
```