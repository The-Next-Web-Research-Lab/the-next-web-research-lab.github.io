---
title: 기기의 진동 컨트롤

---
# 기기의 진동 컨트롤
`navigator.vibrate`를 사용해서 진동의 발생 횟수나 진동 시간을 조정할 수 있습니다. 진동 세기는 기기의 진동 세기 설정 중 알람의 진동 세기와 동일하며 진동 세기는 변경할 수 없습니다.

## 브라우저 지원 범위
- Chrome / Edge / Firefox / Opera / Android 에서 지원한다. 
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate#browser_compatibility)

## 코드 예제
::: code-group 

```html [데모.html]
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