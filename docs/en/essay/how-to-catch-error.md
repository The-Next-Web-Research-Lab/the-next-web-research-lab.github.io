---
title: Error handling summary
---
# Error handling summary
> This is a post that I wrote on May 23, 2019, while working on a project and thinking about how to handle errors.

## Purpose of the article
**Error handling** is to **prevent** software from causing major accidents due to abnormal behavior.
In service operation, it can detect whether users are using the service abnormally.

Error handling has been researched for a long time and has developed until now.
This is a post that summarizes how the current error handling method was obtained through what process.

## Table of contents
- How to deliver failure
  - Delivering failure with return value
  - try-catch error handling
  - throw explicit declaration
- How to handle errors
  - Container
  - Return the same type
  - Error handling with async function
- Comprehensive conclusion

## How to deliver failure
The structure that **notifies failure** to prevent major accidents in case of an accident is **error handling**.

### Delivering failure with return value
```js
const getCountry = (student) => {
  const school = student.getSchool()
  if (school !== null) {
    const addr = school.getAddress()
    if (addr !== null) {
      const country = addr.getCountry()
      return country
    }
    return null 
  }
  throw new Error('Error occurred while querying country!')
}
```
There is a way to deliver failure with return value in error handling.
It is a method of checking the return value and handling the error in the calling code.

However, this method has two problems.
- **First**, the programmer may **miss the failure** if he forgets to check the return value.
Missing the failure can cause **chain problems**.
- **Second**, the code that describes **what you want to do** is filled with **the code for when it fails**, making it difficult to interpret the code.

### try-catch error handling
```js
const getCountry = (student) => {
  try {
    const school = student.getSchool()
    const addr = school.getAddress()
    const country = addr.getCountry()
  } catch (error) {
    console.log('Error occurred while querying country!', error)
  }
}
```
The way to catch and throw exceptions in imperative code is **try-catch error handling**.
It wraps the things that can throw exceptions with **try** and handles the exceptions when they occur with **catch**.
It solves the disadvantage of **delivering failure with return value** and separates **the code that describes what you want to do** and **the handling when it fails**.

However, try-catch also has drawbacks.

- **First**, it cannot **compose** or **chain** like other functional devices.
- **Second**, throwing an exception is an act of finding a hole to escape from the function call, which violates the principle of **referential transparency** that aims for a single, predictable value.
- **Third**, if the stack is unexpectedly unwound, it causes **side effects** that affect the entire system by escaping the function call scope.

### throw explicit declaration
Java adopted a structure that **explicitly declares what exceptions to deliver** to solve the drawbacks of try-catch. It handles the exceptions in a granular way.
- Important problems that do not need to be handled
- Runtime exceptions that can be handled
- Other exceptions that can be handled

Here, other exceptions are the part that needs to be explicitly declared. What is prepared for that is the **throw clause**. The following code says `void shippai () throws MyException`. This is a declaration that the method has the **possibility of throwing a MyException exception**.

```js
class Foo {
  void shippai () throws MyException {
    throw new MyException();
  }
}
```

This prevents things like forgetting to use checked exceptions and missing the possibility of throwing exceptions. When calling a method that can throw an exception, you can choose to either pass the exception thrown by the method to the caller or handle the exception thrown by the method yourself. If neither works, the compiler will tell you what you missed.

This method requires **language support for checked exceptions**. Checked exceptions seem like a very good feature, but they are **not well adopted in other languages**. The reason is that the **number of exceptions** described in throws or try-catch becomes **too large**, or adding **one exception to throw** in a method requires **modifying all methods** that call it.

## How to handle errors
You can get ideas from **functional error handling**.

**First** is to install a **safety net** (**container**) around potentially dangerous code.
The act of containerizing values is a **basic design pattern of functional programming**. It blocks direct access to handle values stably and keep immutability. The only way to access the wrapped value is to map the operation to the container.

**Second** is to **flow values** by always returning the same type.
It returns a value of the same type as the argument without causing an error even in abnormal situations.
When returning a value, it delivers an empty value.

---
### Container
```js
const f = a => a * a;
const g = a => a + 1;
```
When composing functions, an error occurs if an abnormal value is assigned. However, if you compose functions in a container, it does not create abnormal effects.
```js
// Not Cool
f(g(1)); // 4
f(g()); // NaN

// Cool
[1].map(g).map(f); // [4]
[].map(g).map(f); // []
```

In the real world, there are cases where you extract specific data and use functions. In this case, you can also compose functions safely by using a container.

```js
const users = [
  { name: 'AA', age: 12 },
  { name: 'BB', age: 15 },
  { name: 'CC', age: 17 },
]

// Not Cool
const user = users.find(u => u.name === 'DD')
console.log(user.name) // 'name' of undefined

// Cool
users
  .filter(u => u.name === 'DD')
  .slice(0, 1)
  .forEach(user => console.log(user.name))
```

### Return the same type
```js
const f = list => list
  .map(a => a + 10)
  .filter(a => a % 2)
  .slice(0, 2)
```
There are two cases where an error occurs in a function. When the `list` argument is not an array, and when the functions used in `map`, `filter` cause an error. In this case, if you always return the same value, you can compose functions safely.

```js
const f = list => {
  try {
    return list
      .map(({num}) => num + 10)
      .filter(num => num % 2)
      .slice(0, 2)
  } catch (e) {
    return []
  }
}
```
```js
f([{num: 1}, {num: 2}, {num: 3}]) // [11, 13]
f([]) // []
f() // []
f(null) // []
```

### Error handling with async function
In an async function, you can handle **synchronous errors** and **Promise reject states** in catch.

#### Synchronous error
```js
const f = async () => die;
f().catch(error => console.log('Error occurred!')) // Error occurred!
```

#### Promise reject
```js
const f = async () => Promise.reject('Hi!')
f().catch(error => console.log('Error occurred!')) // Error occurred!
```

#### Promise internal error
```js
const g = () => Promise.resolve(die)
const f = async () => {
  return await g()
}

f().catch((err) => console.log('Error occurred!', err)) // Error occurred!
```

## Comprehensive conclusion
Comprehensively, I chose to describe the code using the method of using **container** and **async function**.

The potentially dangerous things on the data are **safe function composition** through **container** and **error handling** in the form of notifying exceptional situations through **async function**. And the **error handling part** is **separated from the production and use interests** and defined by the caller, which I think can solve the disadvantages of the existing error handling.

```js
// Error handling and use
const onClickSaveBtn = () => {
  save()
    .then(() => console.log('As planned'))
    .catch(() => console.log('Nothing works'))
}

// Logic production part
const save = async () => {
  let file
  const imageInfo = getImageInfo()

  if (imageInfo instanceof File) {
    file = getFile(imageInfo)
  } else {
    const imageFileInfo = extractFile(imageInfo)    
    file = getFile(imageFileInfo)
  }
  
  const token = await requestToken()
  return uploadFile(token, file)
}
```

## End

### References
- Functional JavaScript - Luis Atencio
- The Technology That Supports Coding