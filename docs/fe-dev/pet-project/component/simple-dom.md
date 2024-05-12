---
title: 2020.07.24 Simple DOM

---

현실적으로 서비스를 운영할 때, 마크업은 탬플릿 형태로 반영된다.
탬플릿 형태를 사용하는 형태로 심플한 패치 기능 프로젝트다.

## Interface
```ts
interface FragmentAST {
  tagName: string
  children: FragmentAST[] | string
  options: {
    attrs: object
    events: object
  }
}

type parse = (template) => FragmentAST[]
type generate = (FragmentAST[], events) => FragmentDOM
type patch = (FragmentDOM, AutualDOM) => void
```

## Core
[Fragment DOM](/fe-dev/pet-project/component/fragment-dom.html)에서 영감을 얻은 코어.

### parse
<<< @/docs/fe-dev/pet-project/component/simple-dom/core/parse.js

### generate
<<< @/docs/fe-dev/pet-project/component/simple-dom/core/generate.js

### fragment-dom
#### patch
<<< @/docs/fe-dev/pet-project/component/simple-dom/core/fragment-dom-20200725/patch.js

#### render
<<< @/docs/fe-dev/pet-project/component/simple-dom/core/fragment-dom-20200725/render.js

## 사용예
<<< @/docs/fe-dev/pet-project/component/simple-dom/main.js
