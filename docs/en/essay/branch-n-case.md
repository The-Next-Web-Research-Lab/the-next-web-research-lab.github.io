---
title: n ways to write a branch
---
# n ways to write a branch
> This is a post I summarized on December 7, 2019.

### Purpose of the article
There are various ways to write a branch in JavaScript. In broad categories, there are statements and expressions. When I look at the branch writing code I use, statements are typically `switch` and `if`, and expressions are ternary operators and literals.

The main difference between statements and expressions is whether they can be values or not. Expressions are values, while statements cannot be values. The difference in whether they can be values or not shows the difference in branch writing between statements and expressions.

Let's take a closer look at what methods are available.

### Order
- Write a branch as a statement
- Write a branch as an expression
- Summary

### Write a branch as a statement
There are two main ways to write a branch as a statement.

#### switch statement
First, `switch`. `switch` is used when you want to branch the same value into multiple cases, and when you want to make judgments in a chain.

This is an example of branching the same value into multiple cases. It has different return values depending on the `num` value.
```js
const foo = num => {
  switch (num) {
    case 0: return 'A'
    case 1: return 'BB'
    case 2: return 'CCC'
  }
}

foo(0) // A
foo(1) // BB
foo(2) // CCC
```

This is an example of when you want to make judgments in a chain. It makes judgments in a chain and matches the [chain of responsibility pattern](https://the-next-web-research-lab.github.io/fe-dev/design-patterns/gof/behavioral.html#%E1%84%8E%E1%85%A2%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%89%E1%85%AB-chain-of-responsibility).

It moves on to the next condition when the condition is not true. The advantage of this form is that you can describe the code on the same line as the condition and the return statement.

```js
switch (true) {
  case isObject(char):
    return '{}'
  case isArray(char):
    return '[]'
  case isBoolean(char):
    return 'boolean'
  case isNull(char):
    return 'null'
  default:
    return ''
}
```

#### if statement
Next is `if`. `if` is used a lot when you want to handle something optionally. In my subjective judgment, when comparing the readability of `if else` with other syntaxes, the readability is reduced when using `if else` in combination. So I don't use `if` unless I want to handle something optionally.

This is a case of using `if else` and a case of using only `if`.
```js
// if else
const foo = num => {
  if (num === 0) {
    return 'A'
  } else if (num === 1) {
    return 'BB'
  } else if (num === 2) {
    return 'CCC'
  }
}

// if
const foo = num => {
  if (num === 0) {
    return 'A'
  }
  if (num === 1) {
    return 'BB'
  }
  if (num === 2) {
    return 'CCC'
  }
}
```

### Write a branch as an expression
There are also two ways to write a branch as an expression.

#### Literal
It is used to **remove the branch** when **data can be secured as much as the branch**. The more branches there are, the more difficult the code becomes. So I use one of the methods to remove the branch. Using literals, you can easily replace `switch`.

This is an example of replacing the code written in `switch` with a literal.
```js
// switch
const foo = num => {
  switch (num) {
    case 0: return 'A'
    case 1: return 'BB'
    case 2: return 'CCC'
  }
}

// literal
const arr = ['A', 'BB', 'CCC']
const obj = {A: 0, BB: 1, CCC: 2}

const foo = num => arr[num]
const bar = str => obj[str]

foo(0) // A
foo(1) // BB
foo(2) // CCC

bar('A') // 0
bar('BB') // 1
bar('CCC') // 2
```

#### Ternary operator
It is used when you want to **force the evaluation of true and false**. The codes written above can handle specific branches. But it does not force the cases other than the expected branches.

It is possible to handle cases other than the expected branches, but **not forcing them is a big difference from the ternary operator**. When you run `foo(3)`, the code below behaves differently from the intention.

```js
// switch
const foo = num => {
  switch (num) {
    case 0: return 'A'
    case 1: return 'BB'
    case 2: return 'CCC'
    // default: return 'Z' (not forced)
  }
}

// if
const foo = num => {
  if (num === 0) {
    return 'A'
  } else if (num === 1) {
    return 'BB'
  } else if (num === 2) {
    return 'CCC'
  }
  // return 'Z' (not forced)
}

// literal
const arr = ['A', 'BB', 'CCC']
const foo = num => arr[num]
```

But you can use the ternary operator to prepare for unexpected cases. **It reduces mistakes because it is mandatory**.
```js
const foo = num => {
  return num === 0 ?
    'A':
    num === 1 ?
      'BB':
      num === 2 ?
        'CCC':
        'Z'
}
```

### Conclusion
When judging from the perspective of readability for easy-to-understand code and the perspective of mandatory for code stability, it is hard to choose to use only one of the syntaxes. I think it is most ideal to use each code in the right place.

I have been using the code with these criteria recently.
```
- When only true is needed: if statement
- When true and false are needed, when the branch is less than or equal to 2: ternary operator
- When the branch is more than 3, when the condition is more than 3: switch statement
```

### Summary
#### Statement
```
switch statement
- When you want to judge the same value in multiple cases
- When you want to make judgments in a chain (chain of responsibility pattern)

if statement
- When you want to use it optionally
```

#### Expression
```
Literal
- When you want to remove the branch by securing data as much as the branch
- Easy to replace switch statement

Ternary operator
- When you want to force the evaluation of true and false
- Easy to replace if statement
```

### End
