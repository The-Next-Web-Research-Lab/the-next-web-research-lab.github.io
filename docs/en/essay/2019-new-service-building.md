---
title: Experience of a new service in the company
---

# Experience of a new service in the company

## Introduction
Since September 2019, I have been in charge of a new service that is used internally in the company. The service is only used within the company, so I will not use the official name, but the name of the new service. It was the first time that I was in charge of a new service by myself after changing jobs, so I wanted to share my experience of running the service so far and the experience of doing the new service, so I organized this article.

The organized article is a summary of what I have experienced so far, so it may not be the answer. But I hope it will be a small information for those who are planning to develop a new service or something.

The order of this article is organized as follows.

## Order of the article
- Analyze the requirements carefully
- Design the structure before implementation
- Set the coding rules
- Five meaningful coding guidelines

## Analyze the requirements carefully
### Why do you need to analyze the requirements carefully?

> Requirements must be reflected in the early stages of development to develop a satisfactory system. If the requirements are missing and derived during the system development process, the entire structure is likely to shake. The reality is that omissions of requirements often occur and interest is lacking. To properly design the architecture, you need to pay attention to the requirements development.
>
> - Oh Byung-gon. 『Pragmatic Software Development』. Roadbook, 2017.

The difference between service operation and new service development that I felt this time was the volume of implementation. The new service requires developing all functions from scratch, but relatively small functions are added and modified during service operation. The new service had many implementation elements to identify for reuse or policy elements to discuss with collaborators. So I analyzed and recorded the requirements carefully in the early stages of development.

The analyzed requirements were not only used for development, but also became topics for consultation with collaborators before development. For example, about the chart library,

```
Q. Front end: Can I select the chart library according to the requirements? Or is there anything you want to apply?
  A. Planner: Please use the chart library that was used in the Family Site.
Q. Designer: What parts can be customized when using the chart library?
  A. Front end: Label, color, text size, etc. are possible.
Q. Markup: How do I work on the area where the chart library is used?
  A. Front end: I will apply the chart library to the area if you just set the area.
```
Since the policy is established in the early stages of development, it is possible to focus on implementation in the development stage, so I discussed and decided on such policy issues in the early stages of development.

Then I will explain how I analyzed and recorded the requirements.

### Requirement analysis method
I think there are different ways to analyze the requirements. The way I analyze the requirements is to write user stories and feature lists based on the planning document. Here, user stories and feature lists are defined by empirical content. If you know a different definition and post it, it would be nice to distinguish it as something else.

First, I will explain the user story.

#### User story
A user story is a way of using a function written from the user's point of view based on the function expressed in the planning document. By writing from the user's point of view, you can identify whether there are functions that need to be supplemented, so you write the service usage method from the user's point of view, not the developer's point of view.

The writing format is **~then ~can** and defines when and what to do, and expresses only one function. And you have to write each user story by looking at the planning document from left to right and from top to bottom.

Since you can understand the function with the user story instead of the planning document, I recommend that you write it even if it is an existing function.

##### [Example 1.1] User story example
I write in list form with a memo program. Use the abbreviation of User Story (user story) [US] to distinguish user stories.

```
- [US] When you click the pay button, you can go to the payment page.
- [US] When you access the payment page, you can see the product name, price, shipping address, and check box to agree to the terms.
```

After writing the user story, write the feature list.

#### Feature list
The feature list is a list of features to implement. The feature list is based on the user story and lists all the features that need to be implemented to meet one user story. The writing format is **[responsible] work content**.

I am in charge of the front end, so I mainly collaborate with the back end and markup staff. So I used [API] for the part that requires collaboration with the back end, and [markup] for the part that requires markup collaboration.

When the writing is completed, group the common features. It is easy to identify the reuse code and determine the abstraction method by making a group.

##### [Example 1.2] Feature list example

```
- [US] When you click the pay button, you can go to the payment page.
  - [Markup] Payment page markup
  - [Front] Payment page markup reflection
  - [Front] Page move link work
- [US] When you access the payment page, you can see the product name, price, shipping address, and check box to agree to the terms.
  - [API] Product inquiry API
  - [Front] Product inquiry API connection
```

##### [Example 1.3] Common feature list example
An example of writing a common feature list. As you can see below, you can see that the common feature in 3 and 6 is date selection through the calendar. So I wrote a separate common feature for date selection through the calendar.

```
1. [US] When you click the vacation application menu, you will be taken to the vacation application page.
2. [US] On the vacation application page, you can see the calendar and reason input form.
3. [US] On the vacation application page, you can select a date through the calendar.
4. [US] When you click the report menu, you will be taken to the report page.
5. [US] On the report page, you can see the calendar and chart.
6. [US] On the report page, you can change the date through the calendar.
```
```
1. [Common] You can select a date through the calendar.
```

Next, I summarized the need and examples of structure design before implementation.

## Design the structure before implementation
### Why do you need to design?

> Architecture design should be done before development. From the initial stage of the project, the architecture structure should be created through close communication with each system stakeholder. The biggest issue related to architecture design is that there is still a lack of awareness of the need for architecture design and understanding of the architecture design method.
>
> - Oh Byung-gon. 『Pragmatic Software Development』. Roadbook, 2017.

I often had to think about which folder and what form to solve when I needed to reuse some files or code during implementation. I realized that this was consuming a lot of time in my work. So I decided to design the structure before going into implementation. The structure design here means the design of the folder structure.

The purpose of the structure design is to minimize the time spent on implementation. And to keep the time spent on maintenance after the service launch low. In this topic, I will explain how I designed with what philosophy and principles.

### Philosophy and separation of concerns

#### Philosophy

> Paradigm determines what programming structure to use and when to use it.
>
> Paradigm tells you what not to do rather than what to do.
>
> - Robert C. Martin. 『Clean Architecture』. Junyi Song (trans.). Insight, 2019.

Including the design philosophy in the structure design is the same branch as writing consistent code. When developing a service with several developers, if there is no consistency in the code, more time was spent explaining and understanding the code. So the first thing I decided on the structure design of the new service was the programming paradigm.

For those who are not familiar with the programming paradigm, I can't explain enough, but briefly, the programming paradigm is popularly imperative, object-oriented, and functional.

First, imperative exposes all the steps required for task execution and writes the flow or path very detailed. Examples of steps required for task execution are loops, branches, and variables that change values.

##### [Example 2.1] Imperative code example
```js
const todoList = []

addItem(todoList, 'New Year's greeting', 20200101)
addItem(todoList, 'Watering plants', 20200102)
addItem(todoList, 'Separate recycling', 20200103)

printTodoList(todoList)

/* Execution result
[20200101] New Year's greeting
[20200102] Watering plants
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

Next, object-oriented assigns roles and responsibilities to autonomous objects with state and behavior, and builds a system by collaborating with other objects.

##### [Example 2.2] Object-oriented code example
```js
const todoList = new TodoList()
todoList.addItem('New Year's greeting', 20200101)
todoList.addItem('Watering plants', 20200102)
todoList.addItem('Separate recycling', 20200103)
todoList.print()

/* Execution result
[20200101] New Year's greeting
[20200102] Watering plants
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

Finally, functional programming avoids mutable (可變) state and pursues immutable (不變) state. Mutable state is risky because it can behave differently depending on the timing or order of manipulation, so it pursues immutable state.

##### [Example 2.3] Functional code example
```js
const todoList = TodoList.create([])
  .addItem('New Year's greeting', 20200101)
  .addItem('Watering plants', 20200102)
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
  [20200101] New Year's greeting
  [20200102] Watering plants
todoList2
  [20200101] New Year's greeting
  [20200102] Watering plants
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
 
JavaScript supports multiple paradigms, such as imperative, object-oriented, and functional. Because it supports many paradigms, developers can approach and implement requirements from the perspective of the paradigm they want. I knew from experience that it was easy to implement inconsistent code if developers implemented it from the perspective of the paradigm they wanted in the same service. So I think the decision of the programming paradigm is important in the JavaScript development environment that supports multiple paradigms.

##### [Case 2.1] Nuxt.js structure design case
> [Nuxt.js: A framework for creating Vue.js applications](https://ko.nuxtjs.org/)

This is a case of designing additional folder structure based on the folder structure of Nuxt.js and reflecting the functional philosophy. It distinguishes between immutable components that always display the same result and components that handle mutable state, and defines a space to hold pure functions.

In Nuxt.js, the space to [add independent behavior to the Vue instance](https://vuejs.org/v2/guide/plugins.html) is plugins. Here, we decided to use [ES Module](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules) instead of adding to the Vue instance.

###### Folder structure

```
├─ layouts
├─ pages
├─ components
│  ├─ pages
│  └─ <Feature>
└─ plugins
```

- layouts: Mutable layout component folder
- pages: Mutable page component folder
- components/pages: Mutable component folder to use in pages folder
- components/\<Feature\>: Immutable component folder to use in pages folder
- plugins: Immutable logic folder that can be used independently

#### Separation of concerns

> Concern means the function or purpose of software. Separating concerns means collecting code related to each concern and making it into an independent module separated from other code. Most patterns in design techniques have the goal of realizing the separation of concerns. The most representative pattern is the MVC pattern. In the MVC pattern, business logic, display for users, and input processing are separated.
>
> - Isao Ueda. 『The Essence of Programming』. Ryu Dujin (trans.). Freelec, 2017.

I think the location of code or files can be easily determined by creating a folder as a space according to the function or purpose. When implementing requirements, the task of extracting common functions occurred frequently. Each time, deciding the location of code or files consumed a lot of time comprehensively, and it was solved by setting the space in advance.

The task of separating concerns by function or purpose always came up new every time I set up a project. So I felt the need for a checklist to manage and prevent omissions. I designed the folder structure based on the checklist before starting the new service.

##### Folder structure checklist

The following items are the folder structure checklist. There are some items that are mandatory and some that are optional. I recommend adding them if they are necessary for the project but are missing.

```
1. Is there a component that contains uncompiled assets?
2. Is there a component that contains static files?
3. Is there a component that defines a custom function to execute before accessing a page or component?
4. Is there a component that defines a router?
5. Is there a component that manages state?
6. Is there a component that connects external libraries to the application?
7. Is there a component that defines constants?
8. Is there a component that contains components?
9. Is there a component that can reduce the volume of components?
10. Is there a component that can separate pages by units?
11. Is there a component that contains project environment settings?
12. Is there a component that contains test files?
```

##### [Case 2.2] Applying checklist to Angular-based service
> [Angular: A framework for web and mobile at the same time](https://angular.kr/)

This is a case of applying it to a service called Open Builder. I added the folder structure based on the folder structure of Angular.

###### Folder by item

```
1. [assets] Is there a component that contains uncompiled assets?
2. [assets] Is there a component that contains static files?
3. [guards] Is there a component that defines a custom function to execute before accessing a page or component?
4. [app.routing.ts] Is there a component that defines a router?
5. [states] Is there a component that manages state?
6. [helpers] Is there a component that connects external libraries to the application?
7. [constants] Is there a component that defines constants?
8. [shared/components, modules] Is there a component that contains components?
9. [pipes, directive] Is there a component that can reduce the volume of components?
10. [feature.module.ts] Is there a component that can separate pages by units?
11. [src/environments] Is there a component that contains project environment settings?
12. [e2e/src, *.spec.ts] Is there a component that contains test files?
```

###### Folder structure

```
├─ src
│  ├─ assets
│  ├─ app
│  │  ├─ app.module.ts
│  │  ├─ app.routing.ts
│  │  ├─ constants
│  │  ├─ modules
│  │  │  └─ <feature>
│  │  │     ├─ feature.module.ts
│  │  │     ├─ feature.spec.ts
│  │  │     ├─ feature.page.ts
│  │  │     └─ feature.page.html
│  │  ├─ core
│  │  │  ├─ core.module.ts
│  │  │  ├─ apis
│  │  │  ├─ guards
│  │  │  ├─ helpers
│  │  │  └─ states
│  │  └─ shared
│  │     ├─ shared.module.ts
│  │     ├─ components
│  │     ├─ directives
│  │     └─ pipes
│  └─ environments
├─ e2e
│  └─ src
```

Next, I summarized the experience of establishing coding rules to increase the consistency of the code.

## Coding rules
### Why do you need to set coding rules?

> All programs can be expressed with only three structures: sequence, branch, and loop.
>
> - Robert C. Martin. 『Clean Architecture』. Junyi Song (trans.). Insight, 2019.

Before writing code, I decided on the programming paradigm in the structure design. Even if you decide on the programming paradigm, there are countless ways to reflect it in the code. The code is mostly composed of sequence, branch, and loop, and there are elements that are frequently used, such as comparison operations, structure decomposition assignments. There are many ways to write branches, such as if, if/else, switch, ternary operator, etc.

I thought that if these implementation elements with the same purpose and intention were written differently every time they were written in the code, it would be inconsistent and difficult to understand. I wrote the rules of the implementation method to prevent irregular code in advance.

### Coding rule writing case

I have excerpted some of the contents that I wrote while developing the new service. It may not be the right answer, but I hope you think that there are such cases.

#### Use declarative functions

> Declarative expression means expressing in a declarative way rather than imperative when you want to convey the intention of the code. Imperative programming describes the solution of the problem, that is, the data structure and algorithm. On the other hand, declarative programming describes the definition of the problem, that is, the nature of the problem to be solved or the constraints to be satisfied at that time.
>
> - Isao Ueda. 『The Essence of Programming』. Ryu Dujin (trans.). Freelec, 2017.

A declarative function is a function that describes the problem to be solved. Instead of using JavaScript loops, branch statements, etc. to describe the logic, you describe the logic through the function name. I have been actively using declarative functions in the new service, and what I felt was that declarative functions are easy to identify duplicate elements and have high reusability, so I prefer to use declarative functions.

##### [Example 3.1] Array#map function

One of the methods I use frequently lately is the Array method. For example, map can replace this imperative code that was written with a loop with a declarative one.

```js
// Imperative
const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 10
}
console.log(arr)
// [10, 20, 30]

// Declarative
[1, 2, 3].map(v => v * 10)
// [10, 20, 30]
```

#### Asynchronous sequential processing
> [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

There are several ways to implement asynchronous, such as callback pattern, [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Among them, I use async/await to write synchronously in the new service.

I did not choose the callback pattern because it shows the asynchronous flow in a non-sequential direction and requires passing the authority to call the function. I use Promise, but I write it synchronously with async/await.
 
For error handling, I use then or catch instead of try/catch. There are cases where error handling is unpredictable when using try/catch in the function definition part. I do error handling in the function usage part, not in the function definition part, because it is easier to understand that error handling is predictable.

##### [Example 3.2] Asynchronous sequential processing example

```js
// Mock function
const backendApi = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
}

// Function definition part
async function foo() {
  await backendApi()
  await backendApi()
  return 'ok'
}

// Function usage part
foo().then(console.log) // ok
```

##### [Example 3.3] Error handling example

```js
// Mock function
const backendApi = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
}
const errorApi = () => Promise.reject('Error occurred!')

// Function definition part
async function foo() {
  await backendApi()
  await errorApi()
  return 'ok'
}

// Function usage part
foo().catch(console.log) // Error occurred!
```

#### Loop
When writing a loop, I use declarative functions such as map, filter, etc. instead of statements such as for, while, etc. I use the functions defined by the Array method in the service.

##### [Example 3.4] Loop usage example

```js
const shoppingBasket = [
  { name: 'water', price: 500, count: 3, checked: true },
  { name: 'instant rice', price: 1000, count: 2, checked: true },
  { name: 'ramen', price: 1000, count: 1, checked: true },
  { name: 'tangerine', price: 10000, count: 1, checked: false },
  { name: 'sponge', price: 2000, count: 1, checked: false }
]
 
const totalPrice = shoppingBasket
  .filter(({checked}) => checked)
  .map(({price, count}) => price * count)
  .reduce((totalPrice, producePrice) => totalPrice + producePrice)
 
console.log(totalPrice) // 4500
```

#### Data structure decomposition and assignment
When decomposing and assigning data structures, I use declarative functions instead of destructuring and assignment syntax. For decomposition, I use pick and pluck functions. Pick is a function that extracts only the keys passed as arguments and recreates them as data structures. Pluck is a function that extracts only the values of the keys passed as arguments and returns them as an array. For assignment, I use the assign function. I prefer to use the assign function that wraps [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

##### [Example 3.5] Decomposition, assignment function usage example

```js
// Common function definition
const pick = (keys, obj) => keys
  .map(key => ({[key]: obj[key]}))
  .reduce((acc, obj) => Object.assign(acc, obj))
const pluck = (keys, obj)=> keys.map(key => obj[key])
const assign = (...objs) => Object.assign(...objs)

// Function usage
const obj = {key1: 'value1', key2: 'value2'}

pick(['key1'], obj) // { key1: 'value1' }
pluck(['key1'], obj) // ['value1']

assign({}, {key3: 'value3'}, obj)
// {key1: 'value1', key2: 'value2', key3: 'value3'}
```

Finally, I summarized the guidelines that were useful when coding.

## Five meaningful coding guidelines
### Guidelines for keeping the degree

The last order is to introduce you to the five development principles that I prefer. No matter how good the technology or design is, it is important to keep the degree. These five principles have been very helpful in keeping the degree of development. Since the range of measuring the scale and the part that feels easy are different for each person, I summarized the abstract guidelines rather than the concrete examples.

### Five guidelines

#### Naming is important

Being able to attach an appropriate name means that the element is correctly understood and designed. On the contrary, if an inappropriate name is attached, it means that the person did not fully understand the role that the element should achieve.

The name is a communication between developers through the code, so if the name is not appropriate, the conversation on the code will not be established.

##### [Case 4.1] Unit notation for variables

This is a case where the unit is not marked on the variable. I often saw cases where it was difficult to know what unit the value of the variable was using if it was not the author himself. If the amount of time or the number of bytes contains a measurement, it was better to include the unit to express the intention.

```js
// Not Cool
const start = new Date().getTime()
...
const end = new Date().getTime() - start
console.log(`Load time was: ${end} seconds`) // Wrong!!
 
// Cool
const startMs = new Date().getTime()
...
const endMs = new Date().getTime() - startMs
console.log(`Load time was: ${endMs / 1000} seconds`)
```

#### KISS(Keep It Short and Simple)

When writing code, I put the highest value on simplicity and conciseness. Complex code is hard to read and hard to modify. You should always ask yourself what is the simplest way for the code to work while programming.

##### [Case 4.2] reduce usage case

This is a case where I received a comment when I was a reviewer in a code review. This is a case where KISS was reflected by using the second argument of the Array method reduce.

```js
// AS IS
const toTotalPrice = (prices) => {
  if (prices.length) {
    return prices.reduce((totalPrice, price) => totalPrice + price)
  } else {
    return 0
  }
}
 
toTotalPrice([1000, 500, 1500]) // 3000
toTotalPrice([]) // 0

// TO BE
const toTotalPrice = (prices) => {
  return prices.reduce(
    (totalPrice, price) => totalPrice + price,
    0
  )
}
 
toTotalPrice([1000, 500, 1500]) // 3000
toTotalPrice([]) // 0
```

#### DRY(Don't Repeat Yourself)

If the same code is in multiple places, it is hard to guarantee the overall consistency unless you modify all places accurately. I would like to recommend defining duplicate numbers, characters, option values as constants, defining duplicate logic as functions, and defining duplicate logic and state as modules.

The duplication of thinking about solutions is solved by design patterns. One of the techniques that prevents duplication of thinking about solutions to the same problem is design patterns.

#### SLAP(Single Level of Abstraction Principle)

When writing code, it is a principle that separates high-level abstraction concepts and low-level abstraction concepts and abstracts only one level. The abstraction level is divided into multiple layers according to the complexity of the function. As a result, code that matches the level of abstraction is like a great book. The highest level to intermediate level processing becomes the table of contents of the book, and the lowest level processing becomes the main text of the book.

```
function highLevel() { midLevel1(); midLevel2(); } // Level 1 table of contents
function midLevel1() { lowLevel1(); lowLevel2(); } // Level 2 table of contents-1
function lowLevel1() { }
function lowLevel2() { }
function midLevel2() { lowLevel3(); }
function lowLevel3() { }
```

#### YAGNI(You Aren't Going to Need it)

Even if you put in a design considering scalability, most of the expectations are often missed. Missing means that the time spent there is useless. Generality brings reusability and scalability, but I would like to think of simplicity that values ​​being able to use first.

## Conclusion

The summary of the small tips I have delivered so far is as follows.

- Requirements need to be analyzed carefully in the beginning, and in the new service, it is solved through user stories and feature lists.
- You need to proceed with structure design before implementation, and in the new service, it is solved through programming paradigm and separation of concerns.
- I think you need implementation rules for the overall consistency of the code.
- I think it is better to implement it simply and concisely by keeping the degree, and only implement the parts that are currently needed.

It will be more helpful when developing a new service, but I think some parts can be applied while operating the project. I have summarized the experience based on the standards I have set up. I hope it will be good knowledge by adding flesh to this standard.

Thank you for reading so far.