export const data = JSON.parse("{\"key\":\"v-7f2f8952\",\"path\":\"/fe-dev/pet-project/mvc/2020-08-mvc-function.html\",\"title\":\"2020.08 Todo List (Function 버전)\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"2020.08 Todo List (Function 버전)\",\"description\":\"MVC는 2020.08 MVC에 설명한다. app &lt;!doctype html&gt; &lt;html lang=\\\"en\\\"&gt; &lt;head&gt; &lt;meta charset=\\\"UTF-8\\\"&gt; &lt;meta name=\\\"viewport\\\" content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\"&gt; &lt;meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\"&gt; &lt;/head&gt; &lt;body&gt; &lt;div id=\\\"app\\\"&gt;&lt;/div&gt; &lt;script type=\\\"module\\\" src=\\\"app.js\\\"&gt;&lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/pet-project/mvc/2020-08-mvc-function.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"2020.08 Todo List (Function 버전)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"MVC는 2020.08 MVC에 설명한다. app &lt;!doctype html&gt; &lt;html lang=\\\"en\\\"&gt; &lt;head&gt; &lt;meta charset=\\\"UTF-8\\\"&gt; &lt;meta name=\\\"viewport\\\" content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\"&gt; &lt;meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\"&gt; &lt;/head&gt; &lt;body&gt; &lt;div id=\\\"app\\\"&gt;&lt;/div&gt; &lt;script type=\\\"module\\\" src=\\\"app.js\\\"&gt;&lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/og_image.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"2020.08 Todo List (Function 버전)\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"2020.08 Todo List (Function 버전)\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/og_image.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"app\",\"slug\":\"app\",\"link\":\"#app\",\"children\":[]},{\"level\":2,\"title\":\"controller\",\"slug\":\"controller\",\"link\":\"#controller\",\"children\":[]},{\"level\":2,\"title\":\"view\",\"slug\":\"view\",\"link\":\"#view\",\"children\":[{\"level\":3,\"title\":\"helper\",\"slug\":\"helper\",\"link\":\"#helper\",\"children\":[]},{\"level\":3,\"title\":\"dom\",\"slug\":\"dom\",\"link\":\"#dom\",\"children\":[]}]},{\"level\":2,\"title\":\"model\",\"slug\":\"model\",\"link\":\"#model\",\"children\":[{\"level\":3,\"title\":\"observer\",\"slug\":\"observer\",\"link\":\"#observer\",\"children\":[]}]},{\"level\":2,\"title\":\"model.js\",\"slug\":\"model-js\",\"link\":\"#model-js\",\"children\":[]},{\"level\":2,\"title\":\"데모\",\"slug\":\"데모\",\"link\":\"#데모\",\"children\":[]}],\"readingTime\":{\"minutes\":0.36,\"words\":109},\"filePathRelative\":\"fe-dev/pet-project/mvc/2020-08-mvc-function.md\",\"excerpt\":\"<p>MVC는 <a href=\\\"/fe-dev/pet-project/mvc/2020-08-mvc.html\\\" target=\\\"blank\\\">2020.08 MVC</a>에 설명한다.</p>\\n<h2> app</h2>\\n<div class=\\\"language-html line-numbers-mode\\\" data-ext=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"token doctype\\\"><span class=\\\"token punctuation\\\">&lt;!</span><span class=\\\"token doctype-tag\\\">doctype</span> <span class=\\\"token name\\\">html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>html</span> <span class=\\\"token attr-name\\\">lang</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>en<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>meta</span> <span class=\\\"token attr-name\\\">charset</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>UTF-8<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>meta</span> <span class=\\\"token attr-name\\\">name</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>viewport<span class=\\\"token punctuation\\\">\\\"</span></span>\\n        <span class=\\\"token attr-name\\\">content</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>meta</span> <span class=\\\"token attr-name\\\">http-equiv</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>X-UA-Compatible<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">content</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>ie=edge<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>app<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>module<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">src</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>app.js<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
