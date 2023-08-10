export const data = JSON.parse("{\"key\":\"v-2c1d129c\",\"path\":\"/fe-dev/code-snippets/Reactive/Reactive.html\",\"title\":\"Reactive\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"Reactive\",\"description\":\"proxy const handler = { get (target, key) { console.log('GET', key) return target[key] }, set (target, key, value) { console.log('SET', key, value) Object.assign(target, {[key]: value}) }, deleteProperty (target, key) { console.log('DELETE', key) delete target[key] } } const target = {} const targetProxy = new Proxy(target, handler) targetProxy.hello = 'World!' targetProxy.hello delete targetProxy.hello console.log('-------target-------') console.log(target) console.log('-------targetProxy-------') console.log(targetProxy) // Object.assign(targetProxy, {hello: 'World!'}) // TypeError\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Reactive/Reactive.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Reactive\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"proxy const handler = { get (target, key) { console.log('GET', key) return target[key] }, set (target, key, value) { console.log('SET', key, value) Object.assign(target, {[key]: value}) }, deleteProperty (target, key) { console.log('DELETE', key) delete target[key] } } const target = {} const targetProxy = new Proxy(target, handler) targetProxy.hello = 'World!' targetProxy.hello delete targetProxy.hello console.log('-------target-------') console.log(target) console.log('-------targetProxy-------') console.log(targetProxy) // Object.assign(targetProxy, {hello: 'World!'}) // TypeError\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/og_image.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Reactive\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Reactive\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/og_image.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"proxy\",\"slug\":\"proxy\",\"link\":\"#proxy\",\"children\":[]},{\"level\":2,\"title\":\"reactive-system-defineproperty\",\"slug\":\"reactive-system-defineproperty\",\"link\":\"#reactive-system-defineproperty\",\"children\":[]},{\"level\":2,\"title\":\"reactive-system-proxy\",\"slug\":\"reactive-system-proxy\",\"link\":\"#reactive-system-proxy\",\"children\":[]}],\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"fe-dev/code-snippets/Reactive/Reactive.md\",\"excerpt\":\"<h2> proxy</h2>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">const</span> handler <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function\\\">get</span> <span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">,</span> key<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'GET'</span><span class=\\\"token punctuation\\\">,</span> key<span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token keyword\\\">return</span> target<span class=\\\"token punctuation\\\">[</span>key<span class=\\\"token punctuation\\\">]</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token function\\\">set</span> <span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">,</span> key<span class=\\\"token punctuation\\\">,</span> value<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'SET'</span><span class=\\\"token punctuation\\\">,</span> key<span class=\\\"token punctuation\\\">,</span> value<span class=\\\"token punctuation\\\">)</span>\\n    Object<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">assign</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">[</span>key<span class=\\\"token punctuation\\\">]</span><span class=\\\"token operator\\\">:</span> value<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token function\\\">deleteProperty</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">target<span class=\\\"token punctuation\\\">,</span> key</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'DELETE'</span><span class=\\\"token punctuation\\\">,</span> key<span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token keyword\\\">delete</span> target<span class=\\\"token punctuation\\\">[</span>key<span class=\\\"token punctuation\\\">]</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">const</span> target <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">const</span> targetProxy <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Proxy</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">,</span> handler<span class=\\\"token punctuation\\\">)</span>\\n\\ntargetProxy<span class=\\\"token punctuation\\\">.</span>hello <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'World!'</span>\\ntargetProxy<span class=\\\"token punctuation\\\">.</span>hello\\n<span class=\\\"token keyword\\\">delete</span> targetProxy<span class=\\\"token punctuation\\\">.</span>hello\\n\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'-------target-------'</span><span class=\\\"token punctuation\\\">)</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>target<span class=\\\"token punctuation\\\">)</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'-------targetProxy-------'</span><span class=\\\"token punctuation\\\">)</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>targetProxy<span class=\\\"token punctuation\\\">)</span>\\n\\n\\n<span class=\\\"token comment\\\">// Object.assign(targetProxy, {hello: 'World!'})</span>\\n<span class=\\\"token comment\\\">// TypeError</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
