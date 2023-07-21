---
title: JavaScript - Decorators
---

# JavaScript - Decorators Proposal과 실용성
## Decorators Proposal
- [tc39/proposal-decorators](https://github.com/tc39/proposal-decorators)에 제안서 정의됨
- [Orthogonal Classes](https://github.com/erights/Orthogonal-Classes)와 [Class Evaluation Order](https://onedrive.live.com/view.aspx?resid=A7BBCE1FC8EE16DB!442046&app=PowerPoint&authkey=!AEeXmhZASk50KjA) 제안을 바탕으로 Decorators와 [Class Field](https://tc39.github.io/proposal-class-fields/) 및 [Private methods](https://github.com/tc39/proposal-private-methods)를 함께 작동시키는 방법에 대한 결합된 비전을 제안
- Decorators는 이미 정의된 클래스, 함수, 변수의 코드를 수정하기 않고, 기능을 추가하는 것에 유용함
- 메모이제이션, 접근 제어, 인증, 계측, 타이밍 처리, 로깅, 속도 제한 등에 사용된다.

## Decorators 실용성
JavaScript에서는 Decorators를 사용할 수 없지만 [TypeScript에서 Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)를 사용할 수 있다.
그래서 Node.js Framework [nestjs](https://docs.nestjs.com/controllers)와 Front-end Framework [Angular](https://angular.kr/guide/what-is-angular)에서는 공식적으로 사용 중이다.

### 코드 사용 예시
- `@defineElement`: 커스텀 엘레멘트를 생성하는 기능
- `@bound`: 디바운스 처리 기능
- `@observed`: 필드를 감시하며 변경 시 자동으로 `render()`를 호출하는 기능
```js
@defineElement('num-counter')
class Counter extends HTMLElement {
  @observed #x = 0;

  @bound
  #clicked() {
    this.#x++;
  }

  constructor() {
    super();
    this.onclick = this.#clicked;
  }

  connectedCallback() {
    this.render();
  }

  @bound
  render() {
    this.textContent = this.#x.toString();
  }
}
```