---
title: Shifting to imperative programming thinking
---

# Shifting to imperative programming thinking

## Imperative vs. functional

### Compare two lists by concatenating them
> Reference: Purely Functional Data Structures, Chris Okasaki 

#### Imperative
In the imperative method, two lists can be concatenated in O(1) by maintaining pointers to the first and last cells of the list. This can be easily implemented by changing the last cell of the first list to point to the first cell of the second list. Note that it destroys both lists. You cannot reuse two lists after concatenating them.

#### Functional
In the functional method, the last cell of the first list cannot be changed in this way. Instead, as we copy the last cell, we make the pointer to the next cell in the copy point to the first cell in the second list. Then, copy the second-to-last cell, making sure the tail pointer points to the copy of the last cell you just created. This process is repeated until all of the first list has been copied. In this case, instead of creating persistence, there is an additional cost of O(n) for copying.

### Error handling comparison
#### Imperative
**A way to catch and throw exceptions in imperative** code is try-catch error handling. Things that may throw exceptions are wrapped in a try, and if an exception occurs, it is handled in a catch. By solving the drawback of passing failure as a return value, you can separate the code that describes what you want to do and the handling of failure.

#### Functional
From a functional perspective, try-catch error handling has the following characteristics.

- It cannot be composed or chained like other functional devices.
- Throwing an exception is looking for a loophole in a function call, which violates the principle of referential transparency, which aims for a single, predictable value.
- Unexpected stack unwinding causes side effects that go beyond the scope of the function call and affect the entire system.

**Functional** error handling takes a completely different approach to solving software system challenges. The basic idea is similar. The idea is to place a safety net (a container, so to speak) around potentially dangerous code.

In a functional program, the concept of wrapping the intended code can be retained, but the try-catch block can be removed. This is the biggest difference from the imperative. By using functional data types, we make separation from impurity a first-class citizen.

### Iterative processing comparison
**Imperative programming** describes the flow or path in great detail by exposing all the steps required to perform a task. Usually, the steps to perform a task are filled with loops, branch statements, and variables whose values ​​change for each statement.

**Functional programming** has a high level of abstraction because independent black box operations are connected simply, that is, through minimal control structures. In fact, functional programs treat the data and control flow themselves as simple connections between high-level components.

#### 1. Filter out users who are over 30 years old.

::: code-tabs#js

@tab Imperative
```js
const temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
```
@tab Functional
```js
const over_30 = users.filter(({age}) => age >= 30);
```

:::

#### 2. Collect the names of users over 30 years of age.

::: code-tabs#js

@tab Imperative
```js
const names = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
```
@tab Functional
```js
const names = over_30.map(({name}) => name);
```

:::

#### 3. Filter out users under 30 years of age.

::: code-tabs#js

@tab Imperative
```js
const temp_users2 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users2.push(users[i]);
  }
}
```
@tab Functional
```js
const under_30 = users.filter(({age}) => age < 30);
```

:::

#### 4. Collect the ages of users under 30 years of age.

::: code-tabs#js

@tab Imperative
```js
const ages = [];
for (let i = 0; i < temp_users2.length; i++) {
  ages.push(temp_users2[i].age);
}
```
@tab Functional
```js
const ages = under_30.map(({age}) => age)
```

:::

## Distinguish between imperative/object-oriented/functional paradigms
### Imperative
First, imperatives create a flow or path in great detail by exposing all the steps required to perform a task. Examples of steps required to perform a task include loops, branches, and variables whose values ​​change.

##### [Example 2.1] Imperative code example
```js
const todoList = []

addItem(todoList, 'New Year’s greetings', 20200101)
addItem(todoList, 'Watering flower pots', 20200102)
addItem(todoList, 'Separate recycling', 20200103)

printTodoList(todoList)

/* Execution result
[20200101] New Year’s greetings
[20200102] Watering flower pots
[20200103] Separate recycling
*/
```
```js
const addItem = (todoList, subject, date) => {
  const todoItem = toTodoItem(subject, date)
  todoList.push(todoItem)
}
const printTodoList = (todoList) => {
  const {length} = todoList
  let log = ``
  for (let i = 0; i < length; i++) {
    const todoItem = todoList[i]
    log += `${todoItemToString(todoItem)}`
    if (i < length - 1) {
      log += `\n`
    }
  }
  console.log(log)
}

const toTodoItem = (subject, date) => ({subject, date})
const todoItemToString = ({subject, date}) => `[${date}] ${subject}`
```

### Object-oriented
Next, object orientation assigns roles and responsibilities to autonomous objects with state and behavior and cooperates with other objects to form a system.

##### [Example 2.2] Object-oriented code example
```js
const todoList = new TodoList()
todoList.addItem('New Year’s greetings', 20200101)
todoList.addItem('Watering flower pots', 20200102)
todoList.addItem('Separate recycling', 20200103)
todoList.print()

/* Execution result
[20200101] New Year’s greetings
[20200102] Watering flower pots
[20200103] Separate recycling
*/
```
```js
class TodoList {
  constructor() {
    this.todoList = []
  }
  addItem(subject, date) {
    const todoItem = new TodoItem(subject, date)
    this.todoList.push(todoItem)
  }
  print() {
    const str = this.todoList
      .map((todoItem) => todoItem.toString())
      .join('\n')
    console.log(str)
  }
}

class TodoItem {
  constructor(subject, date) {
    this.subject = subject
    this.date = date
  }
  toString() {
    return `[${this.date}] ${this.subject}`
  }
}
```

### Functional
Lastly, functional types avoid mutable states and pursue immutable states. Mutable state runs the risk of behaving differently than expected depending on the timing or order of operations, so immutable state is sought.

##### [Example 2.3] Functional code example
```js
const todoList = TodoList.create([])
  .addItem('New Year’s greetings', 20200101)
  .addItem('Watering flower pots', 20200102)
const todoList2 = todoList
  .addItem('Separate recycling', 20200103)
```
```js
console.group('todoList')
console.log(todoList.toString())
console.groupEnd()

console.group('todoList2')
console.log(todoList2.toString())
console.groupEnd()

/* Execution result
todoList
  [20200101] New Year’s greetings
  [20200102] Watering flower pots
todoList2
  [20200101] New Year’s greetings
  [20200102] Watering flower pots
  [20200103] Separate recycling
 */
```
```js
class TodoList {
  constructor(todoList) {
    this.todoList = todoList
  }
  addItem(subject, date) {
    const todoItem = TodoItem.create(subject, date)
    const addedTodoList = this.todoList.concat(todoItem)
    return TodoList.create(addedTodoList)
  }
  toString() {
    return this.todoList
      .map(TodoItem.todoItemToString)
      .join('\n')
  }
  static create(todoList) {
    return new TodoList(todoList)
  }
}

class TodoItem {
  static create (subject, date) {
    return {subject, date}
  }
  static todoItemToString ({subject, date}) {
    return `[${date}] ${subject}`
  }
}
```

## end
