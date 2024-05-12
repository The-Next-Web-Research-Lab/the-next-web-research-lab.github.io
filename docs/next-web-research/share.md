---
title: 공유 기능

---
# 공유 기능
navigator.share를 사용해서 URL, 텍스트, 파일을 공유할 때 커스텀해서 공유할 수 있습니다.


## 브라우저 지원 범위
- Firefox / WebView Android 에서 미지원하고, 대부분 지원한다. 
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API#browser_compatibility)


## 코드 예제
::: code-group 

```html [데모.html]
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>React</title>
</head>

<body>
<div id="root">
  <div>
    <button type="text">
      텍스트 공유하기
    </button>
  </div>
  <div>
    메시지: <span data-message1></span>
  </div>

  <hr />

  <div>
    파일 공유하기: <input type="file" />
  </div>

  <div>
    메시지: <span data-message2></span>
  </div>
</div>
</body>
</html>
```

```js [scripts.js]
const setMessage = (selector, message) => {
  document.querySelector(selector).textContent = message;
};

const shareText = async () => {
  try {
    await navigator.share({
      title: 'Web Share API',
      text: 'Share Text',
      url: 'https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Javascript/WebApis.html',
    })

    setMessage('[data-message1]', 'One Piece shared successfully')
  } catch (err) {
    setMessage('[data-message1]', `Error: ${err}`)
  }
};

const shareFiles = async (event) => {
  const files = event.target.files;

  if (files.length === 0) {
    setMessage('[data-message2]', 'No files selected.');
  } else {
    if (navigator.canShare) {
      if (navigator.canShare({
          files
        })) {
        try {
          await navigator.share({
            files,
            title: 'Files',
            text: 'My Files'
          })
          setMessage('[data-message2]', 'Shared!')
        } catch (error) {
          setMessage('[data-message2]', `Error: ${error.message}`)
        }
      } else {
        setMessage('[data-message2]', `Your system doesn't support sharing these files.`);
      }
    } else {
      setMessage('[data-message2]', `Your browser doesn't support the Web Share API.`);
    }
  }
};

const main = () => {
  document
    .querySelector('button')
    .addEventListener("click", shareText);
  document
    .querySelector('input')
    .addEventListener("change", shareFiles);
};

main();
```

:::
