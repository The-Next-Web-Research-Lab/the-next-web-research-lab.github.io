---
title: Battery Status Inquiry
---

# Battery Status Inquiry
You can check the charging status, battery level, and remaining time until full charge of the battery using `navigator.getBattery`.

## Browser support range
- Supported by Chrome / Edge / Opera / Android.
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API#browser_compatibility)

## Code example
- When you connect the charger to the device, the "charging status" changes to "Yes".

::: normal-demo Demo

```html
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

```js
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
      <li>Charging status: ${charging ? "Yes" : "No"}</li>
      <li>Battery level: ${level * 100}%</li>
      <li>Remaining time until 100% charge: ${chargingTime} seconds</li>
      <li>Remaining battery usage time: ${dischargingTime} seconds</li>
    </ul>
  `;
};
```

:::