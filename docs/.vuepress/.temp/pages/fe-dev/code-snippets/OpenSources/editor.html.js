export const data = JSON.parse("{\"key\":\"v-7498ffba\",\"path\":\"/fe-dev/code-snippets/OpenSources/editor.html\",\"title\":\"editor\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"editor\",\"description\":\"quill.html &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;link href=\\\"https://cdn.quilljs.com/1.3.6/quill.snow.css\\\" rel=\\\"stylesheet\\\"&gt; &lt;script src=\\\"https://cdn.quilljs.com/1.3.6/quill.js\\\"&gt;&lt;/script&gt; &lt;style&gt; #editor-container { height: 375px; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;Editor&lt;/h1&gt; &lt;div id=\\\"editor-container\\\"&gt; &lt;/div&gt; &lt;h1&gt;Result&lt;/h1&gt; &lt;div id=\\\"editor-presentor\\\"&gt;&lt;/div&gt; &lt;script&gt; const container = new Quill('#editor-container', { modules: { toolbar: [ [{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block'] ] }, placeholder: 'Compose an epic...', theme: 'snow' // or 'bubble' }); const presentor = new Quill('#editor-presentor', { readOnly: true, theme: 'bubble' }); container.on('editor-change', () =&gt; { presentor.setContents(container.getContents()) }) &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/OpenSources/editor.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"editor\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"quill.html &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;link href=\\\"https://cdn.quilljs.com/1.3.6/quill.snow.css\\\" rel=\\\"stylesheet\\\"&gt; &lt;script src=\\\"https://cdn.quilljs.com/1.3.6/quill.js\\\"&gt;&lt;/script&gt; &lt;style&gt; #editor-container { height: 375px; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;Editor&lt;/h1&gt; &lt;div id=\\\"editor-container\\\"&gt; &lt;/div&gt; &lt;h1&gt;Result&lt;/h1&gt; &lt;div id=\\\"editor-presentor\\\"&gt;&lt;/div&gt; &lt;script&gt; const container = new Quill('#editor-container', { modules: { toolbar: [ [{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block'] ] }, placeholder: 'Compose an epic...', theme: 'snow' // or 'bubble' }); const presentor = new Quill('#editor-presentor', { readOnly: true, theme: 'bubble' }); container.on('editor-change', () =&gt; { presentor.setContents(container.getContents()) }) &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/og_image.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-20T17:05:44.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"editor\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-20T17:05:44.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"editor\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/og_image.png\\\"],\\\"dateModified\\\":\\\"2023-06-20T17:05:44.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"quill.html\",\"slug\":\"quill-html\",\"link\":\"#quill-html\",\"children\":[]},{\"level\":2,\"title\":\"quill-advance.html\",\"slug\":\"quill-advance-html\",\"link\":\"#quill-advance-html\",\"children\":[]},{\"level\":2,\"title\":\"quill-adaptor\",\"slug\":\"quill-adaptor\",\"link\":\"#quill-adaptor\",\"children\":[{\"level\":3,\"title\":\"config.js\",\"slug\":\"config-js\",\"link\":\"#config-js\",\"children\":[]},{\"level\":3,\"title\":\"editor-adaptor.js\",\"slug\":\"editor-adaptor-js\",\"link\":\"#editor-adaptor-js\",\"children\":[]},{\"level\":3,\"title\":\"quill-adaptor.html\",\"slug\":\"quill-adaptor-html\",\"link\":\"#quill-adaptor-html\",\"children\":[]}]}],\"git\":{\"createdTime\":1687279729000,\"updatedTime\":1687280744000,\"contributors\":[{\"name\":\"ChoDragon9\",\"email\":\"04whdydrn30@gmail.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":0.14,\"words\":43},\"filePathRelative\":\"fe-dev/code-snippets/OpenSources/editor.md\",\"localizedDate\":\"2023년 6월 21일\",\"excerpt\":\"<h2> quill.html</h2>\\n<div class=\\\"language-html line-numbers-mode\\\" data-ext=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"token doctype\\\"><span class=\\\"token punctuation\\\">&lt;!</span><span class=\\\"token doctype-tag\\\">DOCTYPE</span> <span class=\\\"token name\\\">html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>link</span> <span class=\\\"token attr-name\\\">href</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>https://cdn.quilljs.com/1.3.6/quill.snow.css<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">rel</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>stylesheet<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">src</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>https://cdn.quilljs.com/1.3.6/quill.js<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>style</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token style\\\"><span class=\\\"token language-css\\\">\\n    <span class=\\\"token selector\\\">#editor-container</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token property\\\">height</span><span class=\\\"token punctuation\\\">:</span> 375px<span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  </span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>style</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>h1</span><span class=\\\"token punctuation\\\">&gt;</span></span>Editor<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>h1</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>editor-container<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>h1</span><span class=\\\"token punctuation\\\">&gt;</span></span>Result<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>h1</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>editor-presentor<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\n  <span class=\\\"token keyword\\\">const</span> container <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Quill</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'#editor-container'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">modules</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token literal-property property\\\">toolbar</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span>\\n        <span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">{</span> <span class=\\\"token literal-property property\\\">header</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">2</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token boolean\\\">false</span><span class=\\\"token punctuation\\\">]</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n        <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">'bold'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">'italic'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">'underline'</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n        <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">'image'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">'code-block'</span><span class=\\\"token punctuation\\\">]</span>\\n      <span class=\\\"token punctuation\\\">]</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token literal-property property\\\">placeholder</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'Compose an epic...'</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token literal-property property\\\">theme</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'snow'</span>  <span class=\\\"token comment\\\">// or 'bubble'</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> presentor <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Quill</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'#editor-presentor'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">readOnly</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token literal-property property\\\">theme</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'bubble'</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  container<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">on</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'editor-change'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    presentor<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">setContents</span><span class=\\\"token punctuation\\\">(</span>container<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getContents</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
