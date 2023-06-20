> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

#### 스펙
```
- GET
  - JSON
  - HTML
  - TXT
- POST
  - JSON
  - File Upload
- PUT
  - JSON
  - File Upload
- DELETE
```

### 예제
#### 도메인 변경
`/src/fetch-wrapper.js` 상수 변경 후 사용
```js
const DOMAIN = 'http://localhost:3000'
```

#### 응답 포맷
```
{
  body: <HTTP Body>,
  status: <Status Code>,
  statusText: <Status Message>, 
}
```

#### GET
##### Basic
```js
fetchGetData('/get/json', { value: 10 })
  .then(response => console.log(response))
fetchGetData('/get/text')
  .then(response => console.log(response))
```

##### Image
```js
fetchGetData('/static/code.png')
  .then(response => {
    getElem('get-image-tag').src = URL.createObjectURL(response.body)
  })
```

#### POST
##### Basic
```js
fetchPostData('/post/json', {data: 'json'})
  .then(response => console.log(response))
```

##### File Upload
```js
const file = getElem('post-file-input').files[0]
const formData = new FormData()
formData.append('uploadFile', file, file.name)

fetchPostData('/post/file', formData)
  .then(response => console.log(response))
```

#### PUT
##### Basic
```js
fetchPutData('/put/json', {data: 'json'})
  .then(response => console.log(response))
```

##### File Upload
```js
const file = getElem('put-file-input').files[0]
const formData = new FormData()
formData.append('uploadFile', file, file.name)

fetchPutData('/put/file', formData)
  .then(response => console.log(response))
```

#### DELETE
##### Basic
```js
fetchDeleteData('/delete/json', {data: 'json'})
  .then(response => console.log(response))
```