export const data = JSON.parse("{\"key\":\"v-3c198795\",\"path\":\"/fe-dev/code-snippets/Helper/component.html\",\"title\":\"Component\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"Component\",\"description\":\"component &lt;!doctype html&gt; &lt;html lang=\\\"en\\\"&gt; &lt;head&gt; &lt;meta charset=\\\"UTF-8\\\"&gt; &lt;/head&gt; &lt;body&gt; &lt;helloworld&gt;&lt;/helloworld&gt; &lt;ul&gt; &lt;list&gt;&lt;/list&gt; &lt;list&gt;&lt;/list&gt; &lt;list&gt;&lt;/list&gt; &lt;list&gt;&lt;/list&gt; &lt;list&gt;&lt;/list&gt; &lt;/ul&gt; &lt;script&gt; const Component = (() =&gt; { const store = new Set(); const parseHTML = (template) =&gt; { const shallowElement = document.createElement('div'); shallowElement.innerHTML = template; return shallowElement.childNodes }; const define = ({name, template}) =&gt; { store.add({ name, template: parseHTML(template)[0] }); }; const render = (parentSelector) =&gt; { const parent = document.querySelector(parentSelector); store.forEach((component) =&gt; { const finedElems = parent.querySelectorAll(component.name); finedElems.forEach((elem) =&gt; { //Element 참조 방지 const clonedTemplate = component.template.cloneNode(true); elem.parentNode.replaceChild( clonedTemplate, elem ); }); }); }; return {define, render} })(); &lt;/script&gt; &lt;script&gt; Component.define({ name: 'helloworld', template: '&lt;div&gt;Hello World&lt;/div&gt;' }); Component.define({ name: 'list', template: '&lt;li&gt;Item&lt;/li&gt;' }); Component.render('body'); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Helper/component.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Component\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"component &lt;!doctype html&gt; &lt;html lang=\\\"en\\\"&gt; &lt;head&gt; &lt;meta charset=\\\"UTF-8\\\"&gt; &lt;/head&gt; &lt;body&gt; &lt;helloworld&gt;&lt;/helloworld&gt; &lt;ul&gt; &lt;list&gt;&lt;/list&gt; &lt;list&gt;&lt;/list&gt; &lt;list&gt;&lt;/list&gt; &lt;list&gt;&lt;/list&gt; &lt;list&gt;&lt;/list&gt; &lt;/ul&gt; &lt;script&gt; const Component = (() =&gt; { const store = new Set(); const parseHTML = (template) =&gt; { const shallowElement = document.createElement('div'); shallowElement.innerHTML = template; return shallowElement.childNodes }; const define = ({name, template}) =&gt; { store.add({ name, template: parseHTML(template)[0] }); }; const render = (parentSelector) =&gt; { const parent = document.querySelector(parentSelector); store.forEach((component) =&gt; { const finedElems = parent.querySelectorAll(component.name); finedElems.forEach((elem) =&gt; { //Element 참조 방지 const clonedTemplate = component.template.cloneNode(true); elem.parentNode.replaceChild( clonedTemplate, elem ); }); }); }; return {define, render} })(); &lt;/script&gt; &lt;script&gt; Component.define({ name: 'helloworld', template: '&lt;div&gt;Hello World&lt;/div&gt;' }); Component.define({ name: 'list', template: '&lt;li&gt;Item&lt;/li&gt;' }); Component.render('body'); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/og_image.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Component\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Component\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/og_image.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"component\",\"slug\":\"component\",\"link\":\"#component\",\"children\":[]}],\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"fe-dev/code-snippets/Helper/component.md\",\"excerpt\":\"<h2> component</h2>\\n<div class=\\\"language-html line-numbers-mode\\\" data-ext=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"token doctype\\\"><span class=\\\"token punctuation\\\">&lt;!</span><span class=\\\"token doctype-tag\\\">doctype</span> <span class=\\\"token name\\\">html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>html</span> <span class=\\\"token attr-name\\\">lang</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>en<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>meta</span> <span class=\\\"token attr-name\\\">charset</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>UTF-8<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>helloworld</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>helloworld</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>ul</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>list</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>ul</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\n<span class=\\\"token keyword\\\">const</span> Component <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">const</span> store <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Set</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">parseHTML</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">template</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">const</span> shallowElement <span class=\\\"token operator\\\">=</span> document<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">createElement</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'div'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    shallowElement<span class=\\\"token punctuation\\\">.</span>innerHTML <span class=\\\"token operator\\\">=</span> template<span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token keyword\\\">return</span> shallowElement<span class=\\\"token punctuation\\\">.</span>childNodes\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">define</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\"><span class=\\\"token punctuation\\\">{</span>name<span class=\\\"token punctuation\\\">,</span> template<span class=\\\"token punctuation\\\">}</span></span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    store<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">add</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n      name<span class=\\\"token punctuation\\\">,</span>\\n      <span class=\\\"token literal-property property\\\">template</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token function\\\">parseHTML</span><span class=\\\"token punctuation\\\">(</span>template<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">]</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">render</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">parentSelector</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">const</span> parent <span class=\\\"token operator\\\">=</span> document<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">querySelector</span><span class=\\\"token punctuation\\\">(</span>parentSelector<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n    store<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">forEach</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">component</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token keyword\\\">const</span> finedElems <span class=\\\"token operator\\\">=</span> parent<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">querySelectorAll</span><span class=\\\"token punctuation\\\">(</span>component<span class=\\\"token punctuation\\\">.</span>name<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n      finedElems<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">forEach</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">elem</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token comment\\\">//Element 참조 방지</span>\\n        <span class=\\\"token keyword\\\">const</span> clonedTemplate <span class=\\\"token operator\\\">=</span> component<span class=\\\"token punctuation\\\">.</span>template<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">cloneNode</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        elem<span class=\\\"token punctuation\\\">.</span>parentNode<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">replaceChild</span><span class=\\\"token punctuation\\\">(</span>\\n          clonedTemplate<span class=\\\"token punctuation\\\">,</span>\\n          elem\\n        <span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n      <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token punctuation\\\">{</span>define<span class=\\\"token punctuation\\\">,</span> render<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\nComponent<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">define</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token literal-property property\\\">name</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'helloworld'</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token literal-property property\\\">template</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'&lt;div&gt;Hello World&lt;/div&gt;'</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\nComponent<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">define</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token literal-property property\\\">name</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'list'</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token literal-property property\\\">template</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'&lt;li&gt;Item&lt;/li&gt;'</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\nComponent<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">render</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'body'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
