const n=JSON.parse(`{"key":"v-576d1a30","path":"/fe-dev/code-snippets/OpenSources/express-server.html","title":"express-server","lang":"ko-KR","frontmatter":{"title":"express-server","description":"server.js const express = require('express') const multer = require('multer') const cookieParser = require('cookie-parser'); const SERVER_POST = 4000 const UPLOADED_FILE_DIR = 'uploaded_files' const app = express() const storage = multer.diskStorage({ destination (req, file, cb) { // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정 cb(null, \`\${UPLOADED_FILE_DIR}/\`) }, filename (req, file, cb) { // cb 콜백함수를 통해 전송된 파일 이름 설정 cb(null, file.originalname) } }) const upload = multer({ storage }) app.all('/*', function(req, res, next) { res.header(\\"Access-Control-Allow-Origin\\", \\"http://local.kakao.com:3000\\"); res.header(\\"Access-Control-Allow-Headers\\", \\"X-Requested-With\\"); res.header(\\"Access-Control-Allow-Credentials\\", true); next(); }); app.use(cookieParser()) app.use('/static', express.static('static')) app.use('/src', express.static('src')) app.use(\`/\${UPLOADED_FILE_DIR}\`, express.static(UPLOADED_FILE_DIR)) app.get('/', (req, res) =&gt; { console.log(req.cookies) res.send('Hello World!') }) app.get('/500', (req, res) =&gt; { res.status(500).send({}) }) // 파일 업로드 app.post('/upload', upload.any(), (req, res) =&gt; { const name = req.files[0].originalname const url = \`http://localhost:\${SERVER_POST}/\${UPLOADED_FILE_DIR}/\${name}\` const mimetype = req.get('content-type') res.send({ name, url, mimetype }) }) app.listen(SERVER_POST, () =&gt; { console.log(\`Example app listening on port \${SERVER_POST}!\`) })","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/OpenSources/express-server.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"express-server"}],["meta",{"property":"og:description","content":"server.js const express = require('express') const multer = require('multer') const cookieParser = require('cookie-parser'); const SERVER_POST = 4000 const UPLOADED_FILE_DIR = 'uploaded_files' const app = express() const storage = multer.diskStorage({ destination (req, file, cb) { // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정 cb(null, \`\${UPLOADED_FILE_DIR}/\`) }, filename (req, file, cb) { // cb 콜백함수를 통해 전송된 파일 이름 설정 cb(null, file.originalname) } }) const upload = multer({ storage }) app.all('/*', function(req, res, next) { res.header(\\"Access-Control-Allow-Origin\\", \\"http://local.kakao.com:3000\\"); res.header(\\"Access-Control-Allow-Headers\\", \\"X-Requested-With\\"); res.header(\\"Access-Control-Allow-Credentials\\", true); next(); }); app.use(cookieParser()) app.use('/static', express.static('static')) app.use('/src', express.static('src')) app.use(\`/\${UPLOADED_FILE_DIR}\`, express.static(UPLOADED_FILE_DIR)) app.get('/', (req, res) =&gt; { console.log(req.cookies) res.send('Hello World!') }) app.get('/500', (req, res) =&gt; { res.status(500).send({}) }) // 파일 업로드 app.post('/upload', upload.any(), (req, res) =&gt; { const name = req.files[0].originalname const url = \`http://localhost:\${SERVER_POST}/\${UPLOADED_FILE_DIR}/\${name}\` const mimetype = req.get('content-type') res.send({ name, url, mimetype }) }) app.listen(SERVER_POST, () =&gt; { console.log(\`Example app listening on port \${SERVER_POST}!\`) })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-20T17:05:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"express-server"}],["meta",{"property":"article:modified_time","content":"2023-06-20T17:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"express-server\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-20T17:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"server.js","slug":"server-js","link":"#server-js","children":[]}],"git":{"createdTime":1687279729000,"updatedTime":1687280744000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":0.03,"words":8},"filePathRelative":"fe-dev/code-snippets/OpenSources/express-server.md","localizedDate":"2023년 6월 21일","excerpt":"<h2> server.js</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> express <span class=\\"token operator\\">=</span> <span class=\\"token function\\">require</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'express'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">const</span> multer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">require</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'multer'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">const</span> cookieParser <span class=\\"token operator\\">=</span> <span class=\\"token function\\">require</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'cookie-parser'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token constant\\">SERVER_POST</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">4000</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token constant\\">UPLOADED_FILE_DIR</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'uploaded_files'</span>\\n<span class=\\"token keyword\\">const</span> app <span class=\\"token operator\\">=</span> <span class=\\"token function\\">express</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">const</span> storage <span class=\\"token operator\\">=</span> multer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">diskStorage</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">destination</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">req<span class=\\"token punctuation\\">,</span> file<span class=\\"token punctuation\\">,</span> cb</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정</span>\\n    <span class=\\"token function\\">cb</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">,</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span><span class=\\"token constant\\">UPLOADED_FILE_DIR</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">/</span><span class=\\"token template-punctuation string\\">\`</span></span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function\\">filename</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">req<span class=\\"token punctuation\\">,</span> file<span class=\\"token punctuation\\">,</span> cb</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// cb 콜백함수를 통해 전송된 파일 이름 설정</span>\\n    <span class=\\"token function\\">cb</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">,</span> file<span class=\\"token punctuation\\">.</span>originalname<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">const</span> upload <span class=\\"token operator\\">=</span> <span class=\\"token function\\">multer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> storage <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">all</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/*'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">req<span class=\\"token punctuation\\">,</span> res<span class=\\"token punctuation\\">,</span> next</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">header</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Access-Control-Allow-Origin\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"http://local.kakao.com:3000\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">header</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Access-Control-Allow-Headers\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"X-Requested-With\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">header</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Access-Control-Allow-Credentials\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">use</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">cookieParser</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">use</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/static'</span><span class=\\"token punctuation\\">,</span> express<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">static</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'static'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">use</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/src'</span><span class=\\"token punctuation\\">,</span> express<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">static</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'src'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">use</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token string\\">/</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span><span class=\\"token constant\\">UPLOADED_FILE_DIR</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">\`</span></span><span class=\\"token punctuation\\">,</span> express<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">static</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">UPLOADED_FILE_DIR</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">req<span class=\\"token punctuation\\">,</span> res</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>req<span class=\\"token punctuation\\">.</span>cookies<span class=\\"token punctuation\\">)</span>\\n  res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Hello World!'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/500'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">req<span class=\\"token punctuation\\">,</span> res</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">status</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">500</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 파일 업로드</span>\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">post</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/upload'</span><span class=\\"token punctuation\\">,</span> upload<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">any</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">req<span class=\\"token punctuation\\">,</span> res</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> name <span class=\\"token operator\\">=</span> req<span class=\\"token punctuation\\">.</span>files<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>originalname\\n  <span class=\\"token keyword\\">const</span> url <span class=\\"token operator\\">=</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token string\\">http://localhost:</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span><span class=\\"token constant\\">SERVER_POST</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">/</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span><span class=\\"token constant\\">UPLOADED_FILE_DIR</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">/</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>name<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">\`</span></span>\\n  <span class=\\"token keyword\\">const</span> mimetype <span class=\\"token operator\\">=</span> req<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'content-type'</span><span class=\\"token punctuation\\">)</span>\\n\\n  res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    name<span class=\\"token punctuation\\">,</span>\\n    url<span class=\\"token punctuation\\">,</span>\\n    mimetype\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">listen</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">SERVER_POST</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token string\\">Example app listening on port </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span><span class=\\"token constant\\">SERVER_POST</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">!</span><span class=\\"token template-punctuation string\\">\`</span></span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};