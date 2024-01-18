---
title: Device Vibration Control

---
# Device Vibration Control
You can adjust the number or duration of vibrations using `navigator.vibrate`. The vibration intensity is the same as the alarm vibration intensity in the device's vibration intensity settings, and the vibration intensity cannot be changed.

## Browser support range
- Supported by Chrome / Edge / Firefox / Opera / Android.
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate#browser_compatibility)

## Code example
::: normal-demo Demo

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Document</title>
  <style>button { padding: 20px; user-select: none }</style>
</head>
<body>
<button
  type="button"
  onclick="navigator.vibrate(200)">
  Basic Vibrate
</button>
<button
  type="button"
  ontouchstart="navigator.vibrate(100)"
  ontouchend="navigator.vibrate(100)">
  Mouse Down / Up
</button>
<button
  type="button"
  ontouchstart="window.timer = setTimeout(() => navigator.vibrate(50), 500)"
  ontouchend="clearTimeout(window.timer)">
  Long Press
</button>
</body>
</html>
```

:::