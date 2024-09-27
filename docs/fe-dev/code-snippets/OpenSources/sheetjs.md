---
title: SheetJs
---

> 키워드: 엑셀, 엑셀 다운로드, 엑셀 비밀번호, xlsx

## 엑셀 파일 비밀번호 설정 코드

### Node.js 서버

- `send` 메소드로 `Buffer`를 넣으면, Response Body에 `Blob`을 응답 받을 수 있음

```js
import multer from "multer";
import officeCrypto from "officecrypto-tool";

const upload = multer();
router.post(
  "/encrypt-xlsx",
  upload.array("file"),
  wrapAsync(async (req, res) => {
    if (!Array.isArray(req.files)) {
      return res.status(400).json({ message: "WRONG_FILE" });
    }
    const [{ buffer }] = req.files;

    try {
      const encryptedBuffer = officeCrypto.encrypt(buffer, {
        password: "1234",
      });

      return res.status(200).send(encryptedBuffer);
    } catch {
      return res.status(500).json({ message: "UPLOAD_ERROR" });
    }
  })
);
```

### Browser

- SheetJs의 데이터를 `Blob` 변환 후 `FormData`에 담아서 Node.js 서버에 요청
- Node.js 서버의 Response Body를 `Blob`로 사용하기 위해서 `responseType`을 `blob`로 설정해야 함

```js
 const postEncryptXlsx = async (data: FormData) => {
   return axios({
     method: 'post',
     url: '/encrypt-xlsx',
     responseType: 'blob',
     data
   })
 }

 const downloadExcel = () => {
   // 생략
   const fileName = '파일.xlsx'
   const workbook = XLSX.utils.book_new()

   // 1. workbook을 Blob로 변환
   const fileBuffer = writeXLSX(workbook, {
     type: 'buffer',
     bookType: 'xlsx',
   })

   // 2. 암호화 요청
   const formData = new FormData()
   const fileBlob = new Blob([fileBuffer], {
     type: 'application/octet-stream',
   })

   formData.append('file', fileBlob, fileName)

   postEncryptXlsx(formData)
     .then((response) => {
       // 3. 다운로드
       downloadFile({
         buffer: response.data,
         fileName,
       })
     })
     .catch((error) => console.error(error))
 }

 const downloadFile = ({
   buffer,
   fileName,
 }: {
   buffer: Blob
   fileName: string
 }) => {
   const blob = new Blob([buffer], { type: 'application/octet-stream' })
   const href = window.URL.createObjectURL(blob)

   Object.assign(document.createElement('a'), {
     href,
     download: fileName,
   }).click()

   window.URL.revokeObjectURL(href)
 }
```
