---
title: Implementing Latency Assessment with Coroutines
---

# Implementing Latency Assessment with Coroutines
### Purpose of the article
Change the existing callstack structure to a coroutine, and use the coroutine to generate latency evaluation to explain the difference from the callstack.

### Callstack vs. Coroutines
Compare the callstack and coroutine behavior of the odd function, which takes an array as an argument and returns only an odd number, and take, which takes a number as an argument and returns a number.

#### Callstack
After the odd used inside the nested function is executed, take is executed. You can see that the loop repeats itself by the size of the array.
```js
function odd(arr) {
  const newArr = []
  for (const v of arr) {
    console.log(`odd ${v}`)
    if (v % 2) {
      newArr.push(v)
    }
  }

  return newArr
}

function take(arr, n) {
  const newArr = []
  let count = 0
  for (const v of arr) {
    console.log(`take ${v}`)
    count++
    newArr.push(v)
    if (count === n) {
      break;
    }
  }

  return newArr
}
```
```js
const arr = [0,1,2,3,4,5]

console.log(...take(odd(arr), 2))
// odd 0
// odd 1
// odd 2
// odd 3
// odd 4
// odd 5
// take 1
// take 3
// 1 3
```

#### Coroutines
Code via coroutines moves the cursor to take when it encounters yield on odd, and moves the cursor to odd when it uses yield on take. If this is repeated and a break is encountered, it returns done and the loop ends.
```js
function* odd(arr) {
  for (const v of arr) {
    console.log(`odd ${v}`)
    if (v % 2) {
      yield v
    }
  }
}

function* take(arr, n) {
  let count = 0
  for (const v of arr) {
    console.log(`take ${v}`)
    count++
    yield v
    if (count === n) {
      break;
    }
  }
}
```
```js
const arr = [0,1,2,3,4,5]

console.log(...take(odd(arr), 2))
// odd 0
// odd 1
// take 1
// odd 2
// odd 3
// take 3
// 1 3
```

### What is a coroutine?
A coroutine is a code block that stores an execution point and executes, stops, and restarts that point. Therefore, it is possible to create a spontaneous/periodic idle state, which allows for non-preemptive multitasking. Concurrency and parallelism are possible. And transitions between coroutines don't result in context switching.

#### Context Switching
It is the operation of storing the state or register value of an existing process and replacing the state or register value of a new process so that the next process can be performed.

#### Subroutines and coroutines
The subroutine always returns to the caller when it is called. Coroutines, on the other hand, can run/stop/restart at a certain point.

#### Threads and Coroutines
Threads do preemptive multitasking. In other words, it provides concurrency, but not parallelism. Coroutines, on the other hand, can be concurrent and parallel without context switching.

#### Recursion and coroutines
Recursion requires a new stack frame for repeated calls, resulting in a stack overflow in the worst case. Coroutines, on the other hand, store blocks of code at a specific point, so data doesn't accumulate.
