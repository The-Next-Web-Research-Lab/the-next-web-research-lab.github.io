---
title: Functional programming theorem
---
# Functional programming theorem

## Understanding functions is half the job.

The functions discussed in functional types are functions handled in mathematics. Functions in mathematics calculate input values ​​and return output values. And the input value always corresponds to the same output value. The functions discussed in functional types work the same way. A function receives input values ​​called arguments, calculates them, and returns an output value called a return value.

JavaScript can create other types of functions than those handled in mathematics. Variables defined outside a function are called external variables, and JavaScript allows access to external variables within a function. Because external variables can be accessed within a function, other types of functions other than those discussed in functional types can be defined. However, in functional form, we pursue not accessing external variables. In other words, understanding functional types of functions and defining functions that do not access external variables is half the battle.

Now, we will say that the function discussed in functional type is a function.

By using functions, you can declare a function to which a role has been assigned. A function to which a role is assigned is called a declarative function, and declarative functions are assembled to create high-level operations. And because it always returns the same return value to the argument, the execution time can be changed. This is because the same value is returned even if the execution time is changed.

Now let’s find out through detailed explanations and examples.

## What is a function

A function is a unit of operation.

- action of calculating
- Actions that pass values ​​instead
- An action that executes a function on behalf of

All of these operations can be assigned roles to functions.

There are three compositions of the function. It consists of a function name that indicates the operation, arguments passed from the outside of the function to the inside, and a return value passed from the inside of the function to the outside. Functions are implemented as code that does not access external variables. And there is always a return value.

### Arguments and return values

Arguments and return values ​​are related. The return value always corresponds to the argument. Arguments must not correspond to more than one return value. Having a different return value each time a function is executed means accessing an external variable. In other words, the function cannot be called a function.

Arguments and return values ​​are related to function assembly, which will be explained in **Assembling functions**. Let's assume there are two functions, `f` and `g`. `f` takes `x` as an argument and returns a return value called `y`. And `g` takes `y` as an argument and returns a return value called `z`. At this time, since the return value of `f` and the argument of `g` are the same, it can be expressed as `g(f(x))`. This expression is called function assembly.

This is an example of function assembly.

```text
y = f(x)
z = g(y)
That is, z = g(f(x)) is possible.
```

### Procedures and Functions

A procedure refers to an operation unit that changes internal variables according to a set procedure. Operations that change internal variables cannot exist autonomously. In other words, procedures exist in objects. A procedure changes internal variables directly as a result of a calculation. So it does not return a return value. Because it does not return a return value, it also has another name, Command.

A procedure changes internal variables

```javascript
const counter = {
  count: 0,
  up () {
    this.count += 1 
  },
  down () {
    this.count -= 1
  }
}

counter.up() // count 1
counter.up() // count 2
counter.down() // count 1
```

On the other hand, functions do not change variables directly. And functions always return a return value. In other words, rather than modifying the variable directly, the variable is modified externally through the return value. So because it always returns a return value, it also has another name, Query.

A function allows variables to be modified externally through its return value.

```javascript
const up = count => count + 1
const down = count => count - 1

let count = 0
count = up(count) // count 1
count = up(count) // count 2
count = down(count) // count 1
```

### Pure and impure functions

The function is a pure function. Pure functions return the same return value even if the execution time changes. Because it always returns the same return value, it becomes an easy-to-handle function.

Pure functions do not access external variables.

```javascript
const add = (a, b) => a + b
const result = add(1, 2) // result 3
```

A procedure is a non-pure function. Use or change external variables. Therefore, because it has different effects depending on the execution time, the execution time must be handled in detail.

Non-pure functions access external variables.

```javascript
let result
const add = (a, b) => {
  result = a + b
}
add(1, 2) // result 3
```

## Assembling functions

Assembling a function means passing the return value of a function as an argument to another function without using a variable. For example, the return value of the `f` function can be passed in a variable as an argument to the `g` function.

```javascript
y = f(x)
z = g(y)
```

At this time, the return value `y` of the `f` function and the argument of the `g` function match. If you assemble the function and express it, it can be expressed like this.

```text
z = g(f(x))
```

Assembling functions involves minimizing variables and listing functions to obtain the desired result.

There are two reasons why function assembly is possible. The first is because a function’s arguments and return value always correspond. Second, functions do not modify external variables. Because it has these two characteristics, functions can be assembled.

We introduce three ways to assemble functions. The first is to assemble only with functions. The second is Compose, which describes an assembly consisting of only functions in an easy-to-read manner. The third is Pipe, which operates in the opposite order to Compose.

### Assemble only with functions

Assembling only with functions is a method of writing actions by listing functions in a row. For example, let's say there are functions `f`, `g`, and `h`. When the return value of `f` has the same arguments as `g` and the return value of `g` has the same arguments as `h`, it can be written as `h(g(f(x)))`. Writing like this is a way to assemble using only functions.

If you change the function assembly to the code below,

```javascript
const extract = ({a, b}) => [a, b]
const add = ([a, b]) => a + b
const isEven = num => num % 2 === 0

const obj = {a: 2, b: 4}
const nums = extract(obj)
const total = add(nums)

isEven(total) // true
```

Write as follows:

```javascript
const extract = ({a, b}) => [a, b]
const add = ([a, b]) => a + b
const isEven = num => num % 2 === 0

const obj = {a: 2, b: 4}
isEven(add(extract(obj)))  // true
```

### Assemble with Compose

Compose is one of the tools for assembling functions. The composition of Compose uses function type arguments and a function that can receive arguments as the return value. When the return value is executed, all Compose arguments are executed and the calculation result is returned.

Starting with the last argument of Compose, the functions are executed in the order of the first argument. Expressed in code, it is as follows.

```javascript
const compose = (f1, f2, f3) => value => {
  return f1(f2(f3(value)))
}
```
If you change the example used in Assembling only with functions to Compose, it is written as follows.

```javascript
const extract = ({a, b}) => [a, b]
const add = ([a, b]) => a + b
const isEven = num => num % 2 === 0
const isEvenObj = compose(isEven, add, extract)

const obj = {a: 2, b: 4}
isEvenObj(obj) // true
```

### Assemble with Pipe

Pipe is one of the tools for assembling functions. It has the same configuration as Compose. But there is one difference. Unlike Compose, Pipe executes functions starting with the first argument and starting with the last argument. Expressed in code, it is as follows.

```javascript
const pipe = (f1, f2, f3) => value => {
  return f3(f2(f1(value)))
}
```
If you change the example used in Assembling only with functions to use Pipe, it is written as follows.

```javascript
const extract = ({a, b}) => [a, b]
const add = ([a, b]) => a + b
const isEven = num => num % 2 === 0
const isEvenObj = pipe(extract, add, isEven)

const obj = {a: 2, b: 4}
isEvenObj(obj) // true
```

### Compare Compose and Pipe

When assembling functions, I use Pipe rather than Compose. This is because the function can be defined in the same direction as the direction in which Hangul is read. When defined as a pipe, it is read from left to right or top to bottom. However, when defined as Compose, it is read from right to left or bottom to top. I prefer Pipe over Compose because there is a difference in readability.

When defined as a pipe, it can be interpreted from left to right or top to bottom.

```javascript
// horizontal definition
const isEvenObj = pipe(extract, add, isEven)

// vertical definition
const isEvenObj = pipe(
  extract,
  add, 
  isEven
)
```

When defined as Compose, it must be interpreted from right to left or bottom to top.

```javascript
// horizontal definition
const isEvenObj = compose(isEven, add, extract)

// vertical definition
const isEvenObj = compose(
  isEven,
  add,
  extract
)
```

## Tools that can be used to create functions

I would like to introduce three representative tools that can be used to create functions. The three are closure, curry, and partial application. Among the three, curry and partial application were created as applications of closure. Now, let’s look at closures one by one in detail.

### closure

**A closure** is a function that captures arguments for later use. Variables captured by a closure are called free variables. Closures not only provide private access, but also provide abstraction techniques. For example, you can use closures to create different functions depending on certain **settings captured at creation time**.

For example, if you use a closure add function,

```javascript
const add = a => b => a + b
```

When you execute add, `b => a + b` becomes the return value. This return value is a closure.

Let’s look at an example of a closure through the pluck function.

pluck receives key values ​​from the first function. In the second function, an object is injected. And it returns the value of searching the object using the key value.

```javascript
const pluck = key => collection => collection[key]
```

```javascript
const extractTitle = pluck('title')
const extractThird = pluck(2)

extractTitle({title: 'My Book'}) // My Book
extractThird([0, 1, 2]) // 2
```

### curry

Curry is used for functions consisting of two or more arguments. A curry is a function that returns a closure corresponding to each argument of the function. Given the function `f : (X ⋅ Y) → Z`, currying creates a new function `h : X → (Y → Z)`. `h` takes an element of `X` and returns a function that maps `Y` to `Z`. `h(x)(y) = f(x, y)` is defined like this, and `curry(f) = h` is also used like this.

For example, the curry corresponding to a function that takes two arguments is as follows.

```javascript
const curry = fn => a => b => fn(a, b)
```

And there is a function that takes two arguments.

```javascript
const add = (a, b) => a + b
add(1, 2) // 3
```

If you define a new add function using curry, you can use it as follows.

```javascript
const curriedAdd = curry(add)
curriedAdd(1)(2) // 3
```

### Partial application

**Partial application** is a function that is partially executed and then immediately executed along with the remaining arguments. Partial application receives a function as the first argument, and receives arguments to be remembered after the second argument. And the return value of partial application is a closure. When a closure is executed, the remaining arguments are injected into the first function of partial application and executed.

Partial application is used under the name partial. An example of partial is as follows.

```javascript
const partial = (fn, x) => y => fn(x, y)
```

This is an example of partial use of the add function that takes two arguments.

```javascript
const add = (a, b) => a + b
const add10 = partial(add, 10)

add10(5) // 15
```

## What is the essence of functional types?

A functional type treats the system like a function. Construct the system using functions. Functions are combined through arguments and return values ​​to form high-level actions. High-level behavior is assembling functions to create new behavior. The functional type uses the basic data structure of the JavaScript language without creating a new data structure. Apply high-level actions using basic data structures.

### first-class function

A first-class function is a function that can be treated as a value. It has this characteristic because functions can be treated as values.

#### It can be stored in a variable, array, or object.

```javascript
const fn = () => {}
const arr = [() => {}, () => {}]
const obj = {
fn: () => {}
}
```

#### You can inject functions as arguments.
```javascript
const partial = (fn, x) => y => fn(x, y)
const add = (a, b) => a + b

const add10 = partial(add, 10)
add10(5) // 15
```

#### This can be done with the return value of the function.
```javascript
const curry = fn => a => b => fn(a, b)
```

Through these features, higher-order functions that perform high-dimensional operations can be implemented.

The functional type is based on first-class functions. JavaScript supports first-class functions. Therefore, you can create a new function by combining functions. Additionally, closures can be implemented. Because closures can be implemented, curries and partial applications can be performed.

### container pattern

It involves installing a safety net \(container\) around potentially dangerous code. The act of containerizing values ​​is a basic design pattern for functional programs. Direct access is blocked to handle values ​​reliably and maintain immutability. The only way to access these wrapped values ​​is to map the operation to a container.

Let's compare function assembly and containers.

First, let us assume that there are functions `f` and `g`.

```javascript
const f = x => x + 2
const g = x => x * x
```

When functions `f` and `g` are assembled, it is written like this.

```javascript
g(f(2)) // 16
```

But what happens if no arguments are passed? The result has an unintended return value.

```javascript
g(f()) // NaN
```

It is difficult to predict what errors will occur when unintended results occur.

So let’s solve it through containers. You can create a container using Array in JavaScript. And function assembly is possible through the map method.

```javascript
[2].map(f).map(g) // [16]
```

What happens if no arguments are passed to the container? The result is that no effect occurs.

```javascript
[].map(f).map(g) // []
```

The map method only works when there are values ​​in the Array. So it doesn't work when there is no value. In other words, more predictable assembly is possible than assembling only with functions.

### state change

Functional types do not aim to completely eliminate state changes, but rather to minimize the region where changes occur. A state change means that a variable, array, or object that can hold a value changes. In JavaScript, side effects such as DOM and Ajax are manipulated. This side effect cannot be completely eliminated. Therefore, the key to state change is to separate the parts where side effects occur and those where they do not.

#### Separation of attention

Separating the parts where side effects occur and the parts where they do not is called separation of concerns. Interest refers to the function or purpose of the software. Separating concerns means gathering the code associated with each concern. Gather related code to create an independent module. Separation of concerns is separating a module from other modules through an independent module.

## So how do you do functional programming?

Functional programming uses functions as units of abstraction. Assemble functions to implement high-level operations. Rather than creating a new data structure to meet certain requirements, problems are solved using **common data structures such as arrays/objects/strings**.

In functional programming, a function refers to **a mathematical function**. A mathematical function must have both an input and an output, and the output according to the input must always correspond equally.

Practical functional programming aims not to completely eliminate state changes in a system, but to minimize as much as possible the regions where mutations occur.

```javascript
const add = (a, b) => a + b // mathematical function O
const rand = a => Math.random(a) // mathematical function X
```

### mathematical function

Mathematical functions handled in functional programming are called **pure functions**. **A pure function is a function that has the same return value** corresponding to the same arguments . Therefore, it is an easy-to-handle function because it returns the same result even if the evaluation point changes. When a pure function needs to change an object, it creates a new object and returns it.

If an external variable is used or an external variable is changed, it is not a pure function. Because non-pure functions have different result values ​​depending on the evaluation time, the evaluation time must be handled carefully.

```javascript
// pure functions
const add = (a, b) => a + b;
const add1 = (obj, b) => ({val : obj.val + b})

// non-pure functions
const add2 = (a, b) => a + b + c;
const add3 = (a, b) => {
  c = b;
  return a + b;
};
const add4 = (obj, b) => {
  obj.val += b;
};
```

### Think of everything as a function

**Functional programming** treats applications, function components, and even the language itself as functions, and places the highest priority on the concept of these functions. Functional thinking involves composing \(combining\) a solution to a problem with verbs \(functions\).

```javascript
// Putting functions first
moveLeft(dog);
moveRight(duck);
moveLeft({ x: 5, y: 2});
moveRight(dog);

// Prioritizing data (objects)
duck.moveLeft();
duck.moveRight();
dog.moveLeft();
dog.moveRight();
```

### Use functions instead of values

First, let's look at the simplest function, repeat. repeat is a function that takes a number and a value and creates an array with the same number of duplicate values.

```javascript
const repeat = (times, value) => {
  return _.map(_.range(times), () => value)
}
```

Implementing repeat that operates independently is fine, but it would be better if repeat could be implemented to have the generality of `repeatability`. In other words, repeating a value a certain number of times is okay, but repeating an action a certain number of times is even better.

```javascript
const repeatedly = (times, fun) => _.map(_.range(times), fun)

repeatedly(3, () => Math.floor(Math.random() * 10) + 1)
```

The repeatedly function clearly shows what effects can be achieved by thinking in a functional style. Using functions instead of values ​​opens up new possibilities for `repeatability`.

### end
