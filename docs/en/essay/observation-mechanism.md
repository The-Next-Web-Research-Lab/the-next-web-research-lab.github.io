---
title: Observer mechanism
---
# Observer mechanism
> This post was organized on May 20, 2019.

### Purpose of the article
> This post is written for the purpose of organizing data rather than delivering information, so it is not well organized.

I remember finding a solution to performance issues day and night in a project using AngularJs. Because of that experience, I sometimes look at how the observer mechanisms of libraries are implemented. Personally, I think VueJs's observer mechanism is the most ideal. This is a material that summarizes the observer mechanisms implemented by each library.

### Table of contents
- AngularJs
- Angular
- VueJs
- React

### Observer mechanism by library
#### AngularJs
First, I summarized why performance issues occurred in AngularJs.

AngularJs uses **$digest loop** to detect changes, and **$digest loop** checks the changes of the models registered in **$watcher** and executes the event handlers registered in **$watcher** when changed.

If the model changes, the **$digest loop** is executed again and this is called **Dirty Checking**. Performance issues occur in this process, and performance decreases sharply when using a lot of models and directives.

#### VueJs
> [Vue 2.0 Reactivity in Depth](https://kr.vuejs.org/v2/guide/reactivity.html)

**Vue 2.0** is implemented through **Object.defineProperty**. 
All properties passed through the **data** option are detected for changes through **Object.defineProperty**. However, there are limitations to **Object.defineProperty**.

```
- Only works on ES5 supported browsers
- Cannot detect property addition
- data cannot be declared as an array
```

Despite these drawbacks, all reactive properties are declared in advance and used as component state schemas, which is an advantage in terms of code maintenance. Detailed implementation can be found at [Vue Mastery - Build a Reactivity System](https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system).

**Vue 3.0** is implemented through **Proxy**.
```
- Property addition / deletion
- Array index / length mutation
- Map, Set, WeakMap, WeakSet
- Classes
```
In the [video introducing Vue 3.0](https://www.youtube.com/watch?v=8Hgt9HYaCDA), Evan You explained the advantages of Proxy-based. It was possible to complement the drawbacks of **Object.defineProperty**, and the performance was improved. [Evan You on Proxies](https://www.vuemastery.com/courses/advanced-components/evan-you-on-proxies) seemed to show his intention to change.

#### Angular
> [Angular defineProperty](https://github.com/angular/angular/search?l=TypeScript&q=defineProperty&type=) search

From Angular, change detection was implemented through **Object.defineProperty**. And RxJs's Observable is implemented in Vanilla Js as **Subject and Observable pattern**.

#### React
> [React defineProperty](https://github.com/facebook/react/search?utf8=%E2%9C%93&q=defineProperty&type=) search

React also implemented change detection through **Object.defineProperty**. The scope of application is events, input forms, Props, etc.

### End
There is no official data on how Angular and React are implemented.
So I wrote it through the process of checking the Github code.
