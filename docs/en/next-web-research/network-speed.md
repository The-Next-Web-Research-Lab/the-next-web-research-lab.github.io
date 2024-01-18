---
title: Internet Speed Test
---

# How to measure internet speed with JavaScript
You can check the internet speed using `navigator.connection.effectiveType`. It measures the internet speed after accessing the site in the browser and tells you one of the results: slow-2g, 2g, 3g, 4g.

## Browser support range
- Not supported by Firefox / Safari, but mostly supported by others.
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType#browser_compatibility)

::: normal-demo Demo

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

```js
document.querySelector("#root").textContent = `navigator.connection.effectiveType: ${navigator.connection.effectiveType}`;
```

:::

## Detailed specifications by item
### Terminology
- RTT
  - Stands for Round Trip Time, which means round-trip time.
  - It means the time it takes for a packet to be sent from the network starting point to the target and the time it takes for the acknowledgment of the packet to be sent back to the network starting point.
- Downlink
  - The link from the base station to the terminal.

### slow-2g
- Minimum RTT: 2000ms
- Maximum Downlink: 50Kbps
- Suitable for small transfers such as text-only pages.

### 2g
- Minimum RTT: 1400ms
- Maximum Downlink: 70Kbps
- Suitable for small image transfers.

### 3g
- Minimum RTT: 270ms
- Maximum Downlink: 700Kbps
- Suitable for large resource transfers such as high-resolution images, audio, and SD video.

### 4g
- Minimum RTT: 0ms
- Maximum Downlink: ∞
- Suitable for HD video and real-time video.
