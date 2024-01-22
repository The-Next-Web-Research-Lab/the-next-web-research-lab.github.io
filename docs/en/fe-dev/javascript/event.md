---
title: History and Definition of DOM Event
---
# History and Definition of DOM Event
## History of DOM Event
- The DOM Event API was an attempt to logically standardize in DOM Level 2.
- Before the revision of DOM Level 2, IE and Netscape adopted opposite `event flow`.
- IE supported event bubbling, and Netscape supported event capturing.
- Currently, both event flows are supported.

## Definition of DOM Event
- Responsible for interaction between javascript and HTML.
- Listeners are executed only when events occur using the observer pattern.

### Event Bubbling
- It starts from the element that is located most deeply in the document tree in the event flow and goes up.
- It looks like bubbles rising as it flows up from the element located most deeply.

### Event Capturing
- The event occurs first at the top node and last at the most explicit node.
- Event capturing is designed to catch events before they reach the intended element.

### API
```
addEventListener(
  [event name],
  [handler],
  [call time true: capturing, false: bubbling]
)
```

```js
const onLoad = () => {};
window.addEventListener(
  'load',
  onLoad ,
  false
)
```