---
title: Scheduling API for Main Thread Optimization
---

# Scheduling API for Main Thread Optimization
## What is scheduling?
The main thread performs various roles such as rendering, network response, GC, etc. besides executing JavaScript.
If many tasks are scheduled on the main thread, the performance and usability experience of the web site will degrade. Therefore, scheduling is used to efficiently register and control tasks with different priorities.

## Browser support range
- Supported browsers: Chrome / Edge / Opera
- Unsupported browsers: Firefox / Safari
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#browser_compatibility)

## Why Native Scheduling API is needed?
### 1. Coordination among cooperating actors on the main thread
An application can consist of 1st-party, 1st-party library, 3rd-party library and framework scripts. At the same time, the browser has tasks to run on the main thread such as `fetch()` and GC, rendering.

Having a shared priority concept through Native Scheduling API can help the browser make more efficient scheduling decisions and improve user experience.

### 2. Different Scheduling APIs
Despite the need to schedule script chunks, the platform lacks an integrated API. Developers can choose `setTimeout`, `requestAnimationFrame`, `requestIdleCallback`, `postMessage` when scheduling tasks.

These different Scheduling APIs make it more difficult for developers to write scheduling code, and require knowledge of the browser's event loop.

### 3. Deciding when to yield to the browser
For usability, the browser should be appropriately yielded the main thread. However, yielding has overhead. The overhead of task registration and context switching, the cost of acquiring control, etc. can increase the task delay time.

In Native Scheduling API, you can check when to yield with `isInputPending()` and `isFramePending()`. You can also yield with `scheduler.yield()` and find control.

## Scheduling API features
It provides a standardized way to specify the priority of all tasks belonging to the application, such as web site developer code or 3rd-party library and framework.

The API is Promise-based and supports setting and changing task priorities, delaying tasks added to the scheduler, aborting tasks, and monitoring priority change and abort events.

### Feature check
If you test the `scheduler` property in the global `this` exposed in the current scope, the following code prints **Feature: Supported** if the API is supported in this browser.
```js
if ("scheduler" in this) {
  console.log("Feature: Supported");
} else {
  console.log("Feature: Not Supported");
}
```

### Priority
You can set the task priority using the `priority` property in the second argument option. The priorities are `user-blocking`, `user-visible`, `background` and the detailed execution time is as follows:

- `user-blocking`
  - Tasks that stop the user from interacting with the page
  - Stops the task of rendering or responding to user input until the page is usable
- `user-visible`
  - Default priority
  - Tasks that the user can see but do not necessarily need to block user actions
  - Used for rendering non-essential images or animations on the page
- `background`
  - Tasks that are not time-sensitive
  - Used for log processing or 3rd-party library initialization that is not required for rendering
 
```js
const log = txt => () => console.log(txt);

if ("scheduler" in this) {
  scheduler.postTask(log("background 1"), { priority: "background" });
  scheduler.postTask(log("user-visible 1"), { priority: "user-visible" });
  scheduler.postTask(log("user-blocking 1"), { priority: "user-blocking" });

  scheduler.postTask(log("background 2"), { priority: "background" });
  scheduler.postTask(log("user-visible 2"), { priority: "user-visible" });
  scheduler.postTask(log("user-blocking 2"), { priority: "user-blocking" });

  scheduler.postTask(log("user-visible 3 (default)"));
}
```

The following log shows the output of the above tasks.

```
user-blocking 1
user-blocking 2
user-visible 1
user-visible 2
user-visible 3 (default)
background 1
background 2
```

### Task delay
You can delay the task by specifying an integer millisecond in the `delay` property in the second argument option. This effectively adds the task to the priority queue when the timeout occurs, as if it could be created using `setTimeout()`. `delay` is the minimum time before the task is added to the scheduler, so the time may be longer.

```js
if ("scheduler" in this) {
  scheduler
    .postTask(() => "Task delayed by 2000ms", { delay: 2000 })
    .then((taskResult) => console.log(taskResult));
  scheduler
    .postTask(() => "Next task should complete in about 2000ms", { delay: 1 })
    .then((taskResult) => console.log(taskResult));
}
```

The second string is displayed in the log after about 2 seconds.
```
Next task should complete in about 2000ms
Task delayed by 2000ms
```

### Task cancellation
You can cancel tasks in exactly the same way using `TaskController` or `AbortController`. The difference is that you need to use `TaskController` if you also want to set the task priority.

The following code creates a `TaskController` and passes it to `signal`. When `abortTaskController.abort()` is executed, the `Promise` is rejected and caught by the `catch` block and logged.

```js
if ("scheduler" in this) {
  const abortTaskController = new TaskController();

  scheduler
    .postTask(() => console.log("Task executing"), {
       signal: abortTaskController.signal,
    })
    .then((taskResult) => console.log(taskResult))
    .catch((error) => console.log(`Error: ${error}`));

  abortTaskController.abort();
}
```

The following log shows the task cancellation log.
```
Error: AbortError: signal is aborted without reason
```

### Priority change
You can specify a `TaskController` in the `signal` property of the second argument option and set the initial priority.

Then you can use `addEventListener()` to receive events for priority changes, and call `setPriority()` to change the priority.

```js
if ("scheduler" in this) {
  const controller = new TaskController({ priority: "user-blocking" });
  
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  scheduler.postTask(() => console.log("Task"), { signal: controller.signal });

  controller.setPriority("background");
}
```
The output below shows that the priority has changed from `user-blocking` to `background`.

```
Priority changed from user-blocking to background.
Task
```