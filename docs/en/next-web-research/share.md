---
title: Sharing feature

---
# Sharing feature
You can use navigator.share to share URL, text, and files with custom options.


## Browser support range
- Not supported by Firefox / WebView Android, but mostly supported by others. 
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API#browser_compatibility)


## Code example
::: code-group 

```html [Demo.html]
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
      Share Text
    </button>
  </div>
  <div>
    Message: <span data-message1></span>
  </div>

  <hr />

  <div>
    Share Files: <input type="file" />
  </div>

  <div>
    Message: <span data-message2></span>
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