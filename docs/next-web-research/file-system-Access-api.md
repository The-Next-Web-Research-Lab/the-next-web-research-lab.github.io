---
title: 파일 시스템 접근
---

# 파일 시스템 접근
파일 시스템 API를 사용해서 폴더/파일을 읽기/수정할 수 있습니다. 과거에는 파일 조회만 가능했으나 읽기/수정이 가능해지므로써 브라우저 기반 도구에서 작업 후 기기에 데이터를 저장할 수 있게 되었습니다.

## 브라우저 지원 범위
- 대부분 Chrome / Edge / Opera에서 지원하고, 모바일에서는 미지원한다. 
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API#browser_compatibility)


## 코드 예제
::: normal-demo 데모

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>File System</title>
</head>

<body>
  <div>
    <button type="button" data-button-getFile>Get File</button>
    <button type="button" data-button-getDir>Get Directory</button>
    <p data-message></p>
  </div>
  

  <hr />

  <div>
    <button type="button" data-button-createDir>Create Directory</button>
    <p data-message2></p>
  </div>

  <hr />

  <div>
    <button type="button" data-button-createFile>Step 1. Create File</button>
    <button type="button" data-button-closeFile>Step 2. Close File</button>
    <button type="button" data-button-readFile>Step 3. Read File</button>
    <p data-message3></p>

    <textarea style="display: none; width: 200px; height: 200px"></textarea>
  </div>
</body>

</html>
```

```js
const setMessage = (selector, message) => {
  document.querySelector(selector).textContent = message;
};

const getFile = async () => {
  try {
    const [fileHandle] = await window.showOpenFilePicker({
      types: [{
        description: 'Images',
        accept: {
          'image/*': ['.png', '.gif', '.jpeg', '.jpg']
        }
      }, ],
      excludeAcceptAllOption: true,
      multiple: false
    });
    setMessage('[data-message]', `fileHandle.kind is ${fileHandle.kind}`)
  } catch (error) {
    setMessage('[data-message]', `error: ${error}`)
  }
}
const getDir = async () => {
  try {
    const dirHandle = await window.showDirectoryPicker({
      mode: 'read',
      startIn: 'desktop'
    });
    setMessage('[data-message]', `dirHandle.kind is ${dirHandle.kind}`)
  } catch (error) {
    setMessage('[data-message]', `error: ${error}`)
  }
}

const createDir = async () => {
  try {
    const dirHandle = await window.showDirectoryPicker({
      mode: 'readwrite',
      startIn: 'desktop'
    });
    const directoryName = `new-${Date.now()}`;
    await dirHandle.getDirectoryHandle(directoryName, {
      create: true
    })
    setMessage('[data-message2]', `${directoryName} is created. please check your directory`);
  } catch (error) {
    setMessage('[data-message2]', `error: ${error}`)
  }
}

const state = {
  writableStream: null,
  text: '',
};

const createFile = async () => {
  try {
    setMessage('[data-message3]', `creating`);
    const fileHandle = await window.showSaveFilePicker();
    state.writableStream = await fileHandle.createWritable();
    document.querySelector('textarea').style.display = 'block';
    document.querySelector('textarea').addEventListener("change", handleChangeText);

    setMessage('[data-message3]', `success! 텍스트를 작성해보세요.`);
  } catch (error) {
    setMessage('[data-message3]', `error: ${error}`)
  }
};

const closeFile = async () => {
  try {
    setMessage('[data-message3]', `saving`);
    await state.writableStream.close();
    setMessage('[data-message3]', `success! 생성한 파일을 열어보세요.`);
  } catch (error) {
    setMessage('[data-message3]', `error: ${error}`)
  } finally {
    state.text = '';
    state.writableStream = null;
    document.querySelector('textarea').style.display = 'none';
    document.querySelector('textarea').removeEventListener("change", handleChangeText);
  }
}

const readFile = async () => {
  try {
    setMessage('[data-message3]', `reading`);
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const text = await file.text();
    const writableStream = await fileHandle.createWritable();

    state.text = text;
    state.writableStream = writableStream;
    
    document.querySelector('textarea').style.display = 'block';
    document.querySelector('textarea').textContent = text;
    setMessage('[data-message3]', `success`);
  } catch (error) {
    setMessage('[data-message3]', `error: ${error}`)
  }
};

const handleChangeText = async (event) => {
  await state.writableStream.write({
    type: "truncate",
    size: 0
  });
  await state.writableStream.write({
    type: "write",
    position: 0,
    data: event.target.value
  });
};

const main = () => {
  document
    .querySelector("[data-button-getFile]")
    .addEventListener('click', getFile);
  document
    .querySelector("[data-button-getDir]")
    .addEventListener('click', getDir);
  document
    .querySelector("[data-button-createDir]")
    .addEventListener('click', createDir);
  document
    .querySelector("[data-button-createFile]")
    .addEventListener('click', createFile);
  document
    .querySelector("[data-button-closeFile]")
    .addEventListener('click', closeFile);
  document
    .querySelector("[data-button-readFile]")
    .addEventListener('click', readFile);
};

main();
```

:::