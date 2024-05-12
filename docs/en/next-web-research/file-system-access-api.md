---
title: File System Access

---
# File System Access
You can use the file system API to read and modify folders and files. In the past, only file browsing was possible, but now that reading and modifying are possible, you can save data to your device after working with browser-based tools.

## Browser support range
- Mostly supported by Chrome / Edge / Opera, and not supported by mobile.
- [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API#browser_compatibility)


## Code example
::: code-group

```html [Demo.html]
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

```js [scripts.js]
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

    setMessage('[data-message3]', `success! Write some text.`);
  } catch (error) {
    setMessage('[data-message3]', `error: ${error}`)
  }
};

const closeFile = async () => {
  try {
    setMessage('[data-message3]', `saving`);
    await state.writableStream.close();
    setMessage('[data-message3]', `success! Open the file you created.`);
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