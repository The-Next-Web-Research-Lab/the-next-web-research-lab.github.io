---
title: In JavaScript, this means
---
# In JavaScript, this means
> Source: [Nicholas Zakas] JavaScript Programming for Front-End Developers

### Purpose of the article
In order to deal with this in JavaScript, you need to have a deep understanding of this. And if you're a front developer, it's also a regular question that you've probably been asked about during technical interviews. This article summarizes this, which was a mountain when I was introduced to JavaScript.

### What is this?
`this`is **a reference to the call book**. There are four ways to determine the reference of a call book.

#### First, when executing a standalone function, the global object becomes the default binding.
If you call a function globally and the function references this, it will use a global object.
```js
function foo() {
  console.log(this.a);
}
var a = 'Hello World';
foo(); // Hello World
```

#### Second, when there is a context object in the invocation, the object is implicitly bound.
When you call a function (a method, to be exact), you are referencing an object if it exists.

```js
function foo () {
  console.log(this.a);
}
const obj = {
  a: 2019,
  foo
};
obj.foo(); // 2019
```
If you call an object method after assigning it to a variable, it will be **implicitly lost**.
```js
const myFoo = obj.foo;
myFoo(); // undefined
```

#### Third, if you use call, apply, and bind, you get an explicit bind.
When you call a function, you explicitly define what this refers to, and that object is used as this.
```js
function foo () {
  console.log(this.a);
}
const obj = { a: 2019 };
foo.call(obj); // 2019
foo.apply(obj); // 2019
foo.bind(obj)(); // 2019
```

#### Fourth, if you call the function with new, it binds the created object to this.
```js
function foo () {
  setTimeout(() => {
    console.log(this.a); // 2019
  });
}
const bar = new foo();
bar.a = 2019;
```

### In ES6 this
Starting with ES6, there are special functions that don't follow these rules. It's called an arrow function, and instead of the four standard rules, it looks at the Enclosing Scope and binds this.

#### Common HTML Code
```html
<button>0</button>
```

#### ES5
```js
var app = {
  count: 0,
  init: function () {
    document.querySelector('button')
      .addEventListener('click', this.upCount.bind(this))
  },
  upCount: function () {
    this.count++
    this.render()
  },
  render: function () {
    document.querySelector('button')
      .textContent = this.count
  }
}
app.init()
```

#### ES6
```js
const app = {
  count: 0,
  init() {
    document.querySelector('button')
      .addEventListener('click', () => {
        this.upCount()
      })
  },
  upCount() {
    this.count++
    this.render()
  },
  render() {
    document.querySelector('button')
      .textContent = this.count
  }
}
app.init()
```
