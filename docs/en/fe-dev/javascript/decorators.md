---
title: JavaScript - Decorators
---

# JavaScript - Decorators
## Decorators Proposal
- Proposal defined in [tc39/proposal-decorators](https://github.com/tc39/proposal-decorators)
- [Orthogonal Classes](https://github.com/erights/Orthogonal-Classes)and [Class Evaluation Order](https://onedrive.live.com/view.aspx?resid=A7BBCE1FC8EE16DB!442046&app=PowerPoint&authkey=!AEeXmhZASk50KjA) Based on the proposal, Decorators and [Class Field](https://tc39.github.io/proposal-class-fields/) and [Private methods](https://github.com/tc39/proposal-private-methods) propose a combined vision of how to make them work together
- Decorators are useful for adding functionality without modifying the code of already defined classes, functions, and variables.
- It is used for memoization, access control, authentication, instrumentation, timing processing, logging, rate limiting, etc.

## Decorators Practicality
Decorators are not available in JavaScript, but [Decorators in TypeScript](https://www.typescriptlang.org/docs/handbook/decorators.html) You can use it. That's why Node.js Framework [nestjs](https://docs.nestjs.com/controllers) and Front-end Framework [Angular](https://angular.kr/guide/what-is-angular) is officially in use.

### Code Usage Examples
- `@defineElement`: Ability to create custom elements
- `@bound`: Debounce processing function
- `@observed`: A function that monitors the field and automatically calls when it changes.
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