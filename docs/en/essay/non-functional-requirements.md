---
title: A summary of the core non-functional requirements of software
---
# The core non-functional requirements of software
### Purpose of the article
I think that professionals should be able to implement **functional requirements** regardless of the tools they use. Even if the software is perfectly designed in the document, the effort of writing the document and developing the software will not be recognized if the software does not work as intended.

To improve the **quality of software**, **non-functional requirements must be met**.
Non-functional requirements have a great impact on development, maintenance, operation, and efficient use of computer resources. Most of the failures that occur during operation after deployment are due to non-functional characteristics.

Despite its importance, non-functionality is neglected compared to functionality, and there is a tendency to ignore it separately and postpone it. This post is written to summarize what perspectives of non-functional requirements are.

### Non-functional requirements
**Non-functional requirements** are requirements that cover all aspects of functionality. 
The perspectives of non-functional requirements are as follows:

1. Changeability
2. Interoperability
3. Efficiency
4. Reliability
5. Testability
6. Reusability

#### 1. Changeability
**Changeability** is the ability of software to be easily improved. Specifically, it means the ability to easily modify/extend/reorganize software, or port it to another platform.

Software is never used as it was first deployed.
Software changes existing requirements and adds new requirements.
To respond to user requirements carefully and quickly over a long period of time, an architecture that makes code easy to change is required.

The **key to a good architecture design for changeability** is to identify **which part of the software has high flexibility for change**, and conversely, where the part that does not change is.
Then, the part that needs to have flexibility should increase the flexibility by using patterns that support design considering changes.

##### When using browser storage
```js
const BROWSER_STORAGE = sessionStorage
const setItem = (key, value) => {
  BROWSER_STORAGE.setItem(key, JSON.stringify(value))
}
const getItem = (key) => {
  return JSON.parse(BROWSER_STORAGE.getItem(key))
}
```
```js
const IS_OPENED = 'isOpened'
const DATE_IDS = 'dateIds'

setItem(IS_OPENED, true)
setItem(DATE_IDS, [1, 2, 3])

getItem(IS_OPENED) // true
getItem(DATE_IDS) // [1, 2, 3]
```

#### 2. Interoperability
**Interoperability** means the ability of software to exchange information with other software. Software requires the ability to connect with each other by exchanging data through the same exchange format, reading and writing files of the same format, or using the same protocol.

Software is part of a system and does not exist independently. It interacts frequently with other systems or environments. Being able to connect with other software means that existing assets can be utilized as they are.

In addition, it also reduces the amount of software that needs to be developed from scratch. Therefore, having good **connectivity** means that the software's range of applications is greatly expanded and leads to **shorter development time** and **significant cost reduction**. In other words, **ease of connection** increases the value of software.

#### 3. Efficiency
**Efficiency** means the ability of software to achieve appropriate performance in terms of **resource usage** while running. Efficiency is divided into **two perspectives**.

**First, time** defines the resource usage efficiency from the perspective of time. It is measured by the **throughput**, which means how many transactions can be completed within a certain time, the **response time**, which is the time it takes from the user's input operation to the response, and the **turnaround time**, which is the time it takes from the user's job initiation to the completion of the requested information output.

**Second, computer resources** defines the resource usage efficiency from the perspective of computer resources. It is measured by CPU usage time, memory usage, storage consumption, network transmission, etc.

To increase **efficiency**, **you need to optimize performance**. Essentially, **static resources** can be optimized using webpack's tree-shaking and code splitting. Network **speed** can be improved by requesting only the information you need at the moment, or by changing the parts that can be requested in parallel to parallel.

```js
// Not Cool
async () => {
  const data1 = await requestData1();
  const data2 = await requestData2();
  const data3 = await requestData3();
}

// Cool
async () => {
  const [data1, data2, data3] = await Promise.all([
    requestData1, requestData2, requestData3
  ]);
}
```

##### Tree shaking
Tree shaking is a technique that **removes unused code**. It **relies on the syntax of ES6 modules** to create a dependency tree and delete unused code. Code that causes side effects is not removed and left intact. Third-party tools such as `ModuleConcatenationPlugin` for webpack are required.

##### Code splitting
Code splitting is a technique that improves performance by dividing JavaScript into chunks and **distributing the chunks only to the application paths that need them**. To **prevent duplicate code**, use `SplitChunksPlugin` to separate common dependencies into different chunk files. To **lazy load**, use `import()` from the ES Proposal, which creates chunks.

#### 4. Reliability
**Reliability** is the ability of software to maintain its functionality in exceptional situations or when used in unexpected or improper ways. Reliability has **two aspects**.

**First, fault tolerance** is the ability of software to **continue normal operation** when a failure occurs. It guarantees proper behavior in the face of exceptions, while also performing internal recovery. As a countermeasure, when a failure occurs, the design should consider limiting the functionality provided and prioritizing the continuity of processing by providing only important functions.

**Second, robustness** is the ability of software to protect itself from **mistakes in usage or input**. It transitions to a system-defined state for various usage methods.
As a countermeasure, when a failure occurs, the design should consider isolating the affected part and ensuring safe operation even if the user makes a wrong operation.

And awareness is needed when a failure occurs. It is recommended to use a tool like [Sentry](https://sentry.io/welcome/) that allows the person in charge to be aware and track when a failure occurs.

#### 5. Testability
**Testability** is the ability to perform effective and efficient testing on software. Effective testing means that the testing is deep and high quality.

As the size and complexity of software increases, testing becomes more difficult and costly. Therefore, the architecture should not only allow the software to run smoothly, but also make testing easy.

To design for **testability**, the key is to **remove dependencies between modules**. If there are dependencies, the entire test may be hindered when encountering a difficult part to test. Dependencies should be removed as much as possible and designed to be testable in small units.

#### 6. Reusability
**Reusability** is the ability to reuse software in whole or in part for other software development. Reusability has **two aspects**.

**First, reusing software development** means using existing modules within the project, modules from previous projects, various libraries, etc. Reusable modules are integrated into the software under development as they are or modified.

**Second, developing software for reuse** means creating modules that can be reused in future projects during the current software development process. Software is developed for reuse in other software.

When **developing software for reuse**, the architecture should be configured to plug into existing structures or modules. This has the purpose of supporting software **composition**, which is assembling software from existing modules.