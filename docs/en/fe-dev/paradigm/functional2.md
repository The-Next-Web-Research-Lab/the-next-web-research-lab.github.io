---
title: Functional programming theorem 2
---
# Functional programming theorem 2

## purpose of writing
We researched the characteristics of functional types through a language that only supports functional types. It was found that the contents summarized in the [Functional programming theorem](/en/fe-dev/paradigm/functional.md) covered only a small number of features of functional types. Also, I could see that my knowledge lacked understanding of functional types.

It suddenly occurred to me that in order to understand functional types more deeply, I would need to learn a language that strongly supports functional types. So, I learned through books written in languages ​​other than JavaScript. The books referenced are the following three.

- Chris Okasaki. 『Pure Functional Data Structure』. Oh Hyun-seok (translation). Acorn Publishing, 2019.
- Neil Ford. 『Functional Thinking』. Kim Jae-wan (translation). Hanbit Media, 2016.
- Stuart Holloway. 『Programming Closure』. Yoo Chan-woo (translation). Insight, 2010.

I summarized the features of functional types learned through this book.

## index
- Special syntax supported by functional languages
  - Operator overloading
  - pattern matching
- Shift to functional thinking
  - recursive thinking
  - Memoization
  - Lazy evaluation
- Functional data structure
  - Lazy Lists
  - persistent data structures

## Special syntax supported by functional languages
This is about the special grammar I learned while learning functional languages.

### Operator overloading
A common feature of functional languages ​​is operator overloading. Operator overloading is a function that defines new operators such as `+`, `-`, and `*`, applies them to new data types, and performs new actions. I think this is possible because in functional languages, operators are viewed not simply as operators but as functions.

JavaScript is not yet supported, but the [proposal-operator-overloading](https://github.com/tc39/proposal-operator-overloading) proposal has been registered in tc39.

### pattern matching

As explained in words, pattern matching is a grammar that finds something that matches a pattern and executes the code block defined in that pattern. It is supported in various forms for each functional language, and although JavaScript is not yet supported, a [proposal-pattern-matching](https://github.com/tc39/proposal-pattern-matching) proposal has been registered in tc39.

#### tc39/proposal-pattern-matching
```js
const res = await fetch(url)
case (res) {
  when {status: 200 } ->
    console.log(`Ok`),
  when {status: 404} ->
    console.log('not found'),
  when {status} if (status >= 400) -> {
    console.log('something is wrong')
  },
}
```

## Shift to functional thinking
Functional writing involves writing code, but I felt that a change in thinking was necessary. He summarized what he believed to be functional thinking.

### recursive thinking
Recursion can be solved by separating the problem into smaller problems while hiding mutable state. Because functional types avoid mutable states, they solve problems through recursion rather than creating states.

For example, the range and map functions are as follows:
```js
function range(end, start=0, step=1) {
  if (start > end - 1) {
    return []
  }
  return [start, ...range(end, start+step, step)]
}

range(0) // []
range(3) // [0, 1, 2]
```

```js
function map(fn, [head, ...tail]) {
  if (head === undefined) {
    return []
  }
  return [fn(head), ...map(fn, tail)]
}
map(v => v * 10, [0, 1, 2]) // [0, 10, 20]
```

It is known that it is good to follow the following rules when creating a recursive function.

- You have to know when to stop.
- Decide what to do in a step.
- Separate the problem into smaller problems or problems that can be solved in one step.

However, because JavaScript has a limit on the number of recursive calls, stack corruption easily occurs if too many recursive calls are made. To prevent stack breakage, a structure called a trampoline can be used to avoid stack breakage.

#### trampoline structure
```js
// Code that causes stack corruption
const evenSteven = n => n === 0 ?
  true :
  oddJohn(Math.abs(n) - 1)
const oddJohn = n => n === 0 ?
  false :
  evenSteven(Math.abs(n) - 1)

evenSteven(100000)
// Uncaught RangeError: Maximum call stack size exceeded
```
```js
// trampoline application code
const evenSteven = n => n === 0 ?
  true :
  () => oddJohn(Math.abs(n) - 1)
const oddJohn = n => n === 0 ?
  false :
  () => evenSteven(Math.abs(n) - 1)

const trampoline = (fun, arg) => {
  let result = fun(arg)
  while (typeof result === "function") {
    result = result()
  }
  return result
}


trampoline(evenSteven, 100000) // true
```

### Memoization
The word memoization was first used by British artificial intelligence researcher Donald Michie. Memoization was first used to refer to caching continuously used operation values ​​at the function level. This is a typical computer science trade-off: speeding up calculations at the expense of consuming space. In functional languages, for example, Clojure supports the memoize function, and the SML language handles memoization in the language itself.

Since JavaScript does not provide a function to memoize user-written functions, it is sometimes necessary to create a function that performs memoization.

#### Example before using memoization
```js
const evenSteven = n => n === 0 ?
  true :
  oddJohn(Math.abs(n) - 1)
const oddJohn = n => n === 0 ?
  false :
  evenSteven(Math.abs(n) - 1)

console.time('recur1')
evenSteven(5000)
console.timeEnd('recur1')
console.time('recur2')
evenSteven(5000)
console.timeEnd('recur2')
console.time('recur3')
evenSteven(5000)
console.timeEnd('recur3')
```
```
recur1: 1.702880859375ms
recur2: 0.766845703125ms
recur3: 2.546142578125ms
```

#### Example after using memoization
```js
const memoize = (fn) => {
  const cache = {}
  return (n) => {
    if (!cache[n]) {
       cache[n] = fn(n)
    }
    return cache[n]
  }
}
const evenSteven = memoize(n => n === 0 ?
  true :
  oddJohn(Math.abs(n) - 1))
const oddJohn = memoize(n => n === 0 ?
  false :
  evenSteven(Math.abs(n) - 1))

console.time('recur1')
evenSteven(5000)
console.timeEnd('recur1')
console.time('recur2')
evenSteven(5000)
console.timeEnd('recur2')
console.time('recur3')
evenSteven(5000)
console.timeEnd('recur3')
```
```
recur1: 2.74169921875ms
recur2: 0.00634765625ms
recur3: 0.0029296875ms
```

### Lazy evaluation
Functional languages ​​can be classified as strict evaluation languages ​​or lazy evaluation languages ​​depending on the order of evaluation. The difference between the two operation orders can be seen in the processing of function arguments. Strict evaluation languages ​​precompute function arguments and then calculate the function body, even if function arguments are not needed. However, lazy evaluation languages ​​evaluate function arguments when they are needed in the function body.

Even if it is not a lazy evaluation language, it is sometimes used by implementing lazy evaluation. It is a data structure called variously in different books such as lazy sequence, stream, or lazy collection. Here we will call it a Lazy Lists. Some languages ​​support lazy lists through the keyword `lazy`, but in languages ​​that do not, they are implemented through `Iterator`. Delay lists in JavaScript will be discussed in the main article Delay Lists.

## Functional data structure
### Lazy Lists

Lazy Lists are implemented in a way that elements are evaluated when they are needed. The Lazy Lists uses a combination of lazy functions, and selects when evaluation is needed through a termination function. In JavaScript, it can be implemented through [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

First, as an example of a Lazy Lists using range, when the range function is executed, it does not return a list. However, when evaluation is performed, a list is returned.
```js
function* range(end, start=0, step=1) {
  if (start > end - 1) {
    return
  }
  yield start
  yield* range(end, start+step, step)
}

const lazyList = range(4)
console.log(lazyList) // range {<suspended>}
console.log(...lazyList) // 0 1 2 3
```

Now, for example, using the delay function map and the finalization function collect:
```js
function* map(fn, list) {
  const {value, done} = list.next()
  if (done) return
  yield fn(value)
  yield* map(fn, list)
}

const collect = list => [...list]
```

You can check the result of the evaluation by using the range function as the second argument of the map function and using the return value of the map function as an argument of the collect function.
```js
const lazyList = map(num => num * 10, range(4))
collect(lazyList) // [0, 10, 20, 30]
```

If we only get the first element, we can see that it is evaluated only once. If you add logging to the map function and check, it is as follows.

```js
const lazyList = map(num => {
  const result = num * 10
  console.log('LOG: lazyList', result)
  return result
}, range(10))

const [head] = lazyList
```
```js
// LOG: lazyList 0
```

### persistent data structures
Functional languages ​​use persistent data structures. Persistence means that even when data is updated, the previous version is not changed, and only the parts that need to be changed are copied from the original. And the parts that have not changed take the form of sharing. An efficient approach is taken by using new data and sharing the parts that do not change, without making any changes to existing data.

Simple examples include linked lists and the cons function. Because ys is connected to xs, xs data uses a copy and ys shares the state.
```js
const cons = ([x, xs], ys) => {
  return x === undefined ?
    ys :
    [x, cons(xs, ys)]
}
const xs = [0, [1, [2, []]]]
const ys = [3, [4, [5, []]]]
const zs = cons(xs, ys) // [0,[1,[2,[3,[4,[5,[]]]]]]]
```

And if you forcibly change it to confirm that the status has been shared, you can see that it is shared as follows.
```js
ys[0] = 'Changed'

console.log(ys) // ['Changed', [4, [5, []]]]
console.log(zs) // [0,[1,[2,['Changed',[4,[5,[]]]]]]]
```

## end