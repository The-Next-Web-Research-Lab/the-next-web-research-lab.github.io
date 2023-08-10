export const data = JSON.parse("{\"key\":\"v-448dfa8e\",\"path\":\"/fe-dev/code-snippets/UIComponent/Boilerplate.html\",\"title\":\"Boilerplate\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"Boilerplate\",\"description\":\"&lt;!DOCTYPE html&gt; &lt;html class=\\\"w-full h-full\\\"&gt; &lt;head&gt; &lt;meta charset=\\\"UTF-8\\\" /&gt; &lt;meta name=\\\"viewport\\\" content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\"&gt; &lt;title&gt;React&lt;/title&gt; &lt;script src=\\\"https://cdn.tailwindcss.com\\\"&gt;&lt;/script&gt; &lt;script src=\\\"https://unpkg.com/react@18/umd/react.development.js\\\"&gt;&lt;/script&gt; &lt;script src=\\\"https://unpkg.com/react-dom@18/umd/react-dom.development.js\\\"&gt;&lt;/script&gt; &lt;script src=\\\"https://unpkg.com/@babel/standalone/babel.min.js\\\"&gt;&lt;/script&gt; &lt;/head&gt; &lt;body class=\\\"w-full h-full\\\"&gt; &lt;div id=\\\"root\\\" class=\\\"w-full h-full\\\"&gt;&lt;/div&gt; &lt;script type=\\\"text/babel\\\"&gt; const MyApp = () =&gt; { return &lt;&gt; Hello World &lt;/&gt;; } ReactDOM .createRoot(document.querySelector('#root')) .render(&lt;MyApp /&gt;); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/UIComponent/Boilerplate.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Boilerplate\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"&lt;!DOCTYPE html&gt; &lt;html class=\\\"w-full h-full\\\"&gt; &lt;head&gt; &lt;meta charset=\\\"UTF-8\\\" /&gt; &lt;meta name=\\\"viewport\\\" content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\"&gt; &lt;title&gt;React&lt;/title&gt; &lt;script src=\\\"https://cdn.tailwindcss.com\\\"&gt;&lt;/script&gt; &lt;script src=\\\"https://unpkg.com/react@18/umd/react.development.js\\\"&gt;&lt;/script&gt; &lt;script src=\\\"https://unpkg.com/react-dom@18/umd/react-dom.development.js\\\"&gt;&lt;/script&gt; &lt;script src=\\\"https://unpkg.com/@babel/standalone/babel.min.js\\\"&gt;&lt;/script&gt; &lt;/head&gt; &lt;body class=\\\"w-full h-full\\\"&gt; &lt;div id=\\\"root\\\" class=\\\"w-full h-full\\\"&gt;&lt;/div&gt; &lt;script type=\\\"text/babel\\\"&gt; const MyApp = () =&gt; { return &lt;&gt; Hello World &lt;/&gt;; } ReactDOM .createRoot(document.querySelector('#root')) .render(&lt;MyApp /&gt;); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/og_image.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Boilerplate\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Boilerplate\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/og_image.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"fe-dev/code-snippets/UIComponent/Boilerplate.md\",\"excerpt\":\"<div class=\\\"language-html line-numbers-mode\\\" data-ext=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"token doctype\\\"><span class=\\\"token punctuation\\\">&lt;!</span><span class=\\\"token doctype-tag\\\">DOCTYPE</span> <span class=\\\"token name\\\">html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>html</span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>w-full h-full<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>meta</span> <span class=\\\"token attr-name\\\">charset</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>UTF-8<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>meta</span> <span class=\\\"token attr-name\\\">name</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>viewport<span class=\\\"token punctuation\\\">\\\"</span></span>\\n        <span class=\\\"token attr-name\\\">content</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>title</span><span class=\\\"token punctuation\\\">&gt;</span></span>React<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>title</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">src</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>https://cdn.tailwindcss.com<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">src</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>https://unpkg.com/react@18/umd/react.development.js<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">src</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>https://unpkg.com/react-dom@18/umd/react-dom.development.js<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">src</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>https://unpkg.com/@babel/standalone/babel.min.js<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>body</span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>w-full h-full<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>root<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>w-full h-full<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>text/babel<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">MyApp</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">return</span> <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">&gt;</span>\\n      Hello World\\n    <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token operator\\\">/</span><span class=\\\"token operator\\\">&gt;</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  ReactDOM\\n    <span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">createRoot</span><span class=\\\"token punctuation\\\">(</span>document<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">querySelector</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'#root'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">render</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&lt;</span>MyApp <span class=\\\"token operator\\\">/</span><span class=\\\"token operator\\\">&gt;</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
