---
title: Summary of abstraction
---

# Summary of abstraction
When developing a service, we write a lot of code. There are always duplicate elements or logic in those codes. Duplicate elements or logic can be reduced by abstraction.

The process of abstraction is to generalize duplicate elements or logic, and ultimately increase reusability. Abstraction is an essential process for structure design because it minimizes the scope of modification when requirements change.

Abstraction is explained by generalization and simplification. Let's take a closer look below.

## Generalization
Generalization means finding duplicate elements or logic in the code we write and generalizing them.

As this says, generalization is done in two steps.
1. Identify duplicate elements or logic.
2. Generalize duplicate elements according to their nature.

### Generalization
Here, generalization is different depending on the nature of the duplicate elements. The nature can be classified as follows.
- **Duplicate numbers, characters, option values** are defined as **constants**.
- **Duplicate logic** is defined as a **function**.
- **Duplicate logic and state** are defined as a **class**.
- **Duplicate UI and logic or state** are defined as a **component**.

## Simplification
When separating common elements, simplification work must be done. Separating common elements means that you want to reuse them. When reusing, it should be easy to use so that there is less burden when using it.

### Constants
**Constants** are simplified by naming. Constants are simplified by combining the minimum words that can mean the value of the constant.
Naming simplification is required for functions, classes, and components. Therefore, naming explanation is omitted later.

### Functions
**Functions** need to simplify arguments and return values.

The fewer arguments, the better. A function with one argument is easier to understand than a function with two arguments.
The fewer arguments, the easier to understand, so the arguments that need to be passed from the outside should be minimized.

The return value should always return the same type. If it returns a different type, the user side needs type branching.

And the return value should always have idempotence for the same argument. Then the return value can always be guessed according to the argument.
On the contrary, if the return value is different for the same argument, it becomes a difficult function to guess.

### Classes
**Classes** are better when they have simple responsibilities. To understand the responsibility of a class, you need to understand the role and authority. You can understand the responsibility according to the role and authority by understanding what role and authority the class has.

To understand the role, you need to understand what the class knows and does. Knowing means the state that the class handles and the class related to itself. Doing means creating an object or calculating something and manipulating another object.

The more these elements, the more roles and authorities, and the more responsibilities. Therefore, it should be kept simple.

### Components
**Components** are the same as classes, and it is better to have simple responsibilities. The responsibility of the component varies depending on the role of the UI it manipulates.

There are typical UIs like this.
- UI such as buttons and input boxes
- Form area UI that combines buttons and input boxes
- Page that combines form area UI, title, and navigation

The responsibility varies depending on the UI. Therefore, the state and logic that each UI should have should be componentized according to the scale. And it is good to simplify the communication method between components.
