const express = require('express')
const multer = require('multer')

const SERVER_POST = 3000
const UPLOADED_FILE_DIR = 'uploaded_files'
const app = express()
const storage = multer.diskStorage({
  destination (req, file, cb) {
    // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    cb(null, `${UPLOADED_FILE_DIR}/`)
  },
  filename (req, file, cb) {
    // cb 콜백함수를 통해 전송된 파일 이름 설정
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

app.use('/static', express.static('static'))
app.use('/src', express.static('src'))
app.use(`/${UPLOADED_FILE_DIR}`, express.static(UPLOADED_FILE_DIR))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* GET Method */
app.get('/get/json', (req, res) => {
  res.send({
    message: 'Hi'
  })
})
app.get('/get/html', (req, res) => {
  res.send('<div></div>')
})
app.get('/get/text', (req, res) => {
  res.send('Hello World')
})

/* POST Method */
app.post('/post/json', (req, res) => {
  res.send({
    message: 'Hi POST'
  })
})
// 파일 업로드
app.post('/post/file', upload.any(), (req, res) => {
  const name = req.files[0].originalname
  const url = `http://localhost:${SERVER_POST}/${UPLOADED_FILE_DIR}/${name}`
  const mimetype = req.get('content-type')

  res.send({
    name,
    url,
    mimetype
  })
})

/* PUT Method */
app.put('/put/json', (req, res) => {
  res.send({
    message: 'Hi PUT'
  })
})
// 파일 업로드
app.put('/put/file', upload.any(), (req, res) => {
  const name = req.files[0].originalname
  const url = `http://localhost:${SERVER_POST}/${UPLOADED_FILE_DIR}/${name}`
  const mimetype = req.get('content-type')

  res.send({
    name,
    url,
    mimetype
  })
})

/* DELETE Method */
app.delete('/delete/json', (req, res) => {
  res.send({
    message: 'Bye DELETE'
  })
})

app.listen(SERVER_POST, () => {
  console.log('Example app listening on port 3000!')
})
