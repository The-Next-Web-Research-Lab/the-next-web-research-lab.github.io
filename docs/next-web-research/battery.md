---
title: 배터리 상태 조회
---

# 배터리 상태 조회
`navigator.getBattery`를 사용해서 배터리의 충전중 상태와 배터리량과 충전까지 남은 시간을 조회할 수 있습니다. 

## 브라우저 지원 범위
- Chrome / Edge / Opera / Android 에서 지원한다. 
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API#browser_compatibility)

## 코드 예제
- 기기에 충전기를 연결하면 "충전 중 상태"가 "Yes"로 변경됩니다.

::: code-group 

```html [데모.html]
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>navigator.getBattery</title>
</head>
<body>
<div id="root"></div>
</body>
</html>
```

```js [scripts.html]
navigator
  .getBattery()
  .then((battery) => {
    const handler = (event) => {
      render(event.currentTarget);
    };

    render(battery);

    battery.addEventListener("chargingchange", handler);
    battery.addEventListener("levelchange", handler);
    battery.addEventListener("chargingtimechange", handler);
    battery.addEventListener("dischargingtimechange", handler);
  });

const render = (batteryManager) => {
  const {
    charging,
    level,
    chargingTime,
    dischargingTime,
  } = batteryManager;

  document.querySelector("#root").innerHTML = `
    <ul>
      <li>충전 중 상태: ${charging ? "Yes" : "No"}</li>
      <li>베터리량: ${level * 100}%</li>
      <li>100% 충전까지 남은 시간: ${chargingTime} seconds</li>
      <li>남은 베터리 사용 시간: ${dischargingTime} seconds</li>
    </ul>
  `;
};
```

:::