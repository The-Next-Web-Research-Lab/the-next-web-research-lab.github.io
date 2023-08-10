export const data = JSON.parse("{\"key\":\"v-c05cdf92\",\"path\":\"/fe-dev/code-snippets/Helper/router.html\",\"title\":\"Router\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"Router\",\"description\":\"history mode &lt;!doctype html&gt; &lt;html lang=\\\"en\\\"&gt; &lt;head&gt; &lt;meta charset=\\\"UTF-8\\\"&gt; &lt;/head&gt; &lt;body&gt; &lt;button onclick=\\\"goTo('/main')\\\"&gt;Main&lt;/button&gt; &lt;button onclick=\\\"goTo('/sub1')\\\"&gt;Sub1&lt;/button&gt; &lt;button onclick=\\\"goTo('/sub2')\\\"&gt;Sub2&lt;/button&gt; &lt;div id=\\\"page\\\"&gt;&lt;/div&gt; &lt;script&gt; const Router = (() =&gt; { const store = new Map(); const excuteCallback = (url) =&gt; { if(store.has(url)){ store.get(url)(); } }; const historyChangeListener = (event) =&gt; { const currentHistory = event.state.url; excuteCallback(currentHistory); }; const init = (options) =&gt; { //라우터 등록 options.forEach(({url, callback}) =&gt; { store.set(url, callback); }); //이벤트 등록 window.addEventListener( 'popstate', historyChangeListener ); }; const destory = () =&gt; { //이벤트 삭제 window.removeEventListener( 'popstate', historyChangeListener ); //저장된 라우터 데이터 삭제 store.clear(); }; const go = (url) =&gt; { history.pushState({url}, '', url); excuteCallback(url); }; return { init, destory, go } })(); &lt;/script&gt; &lt;script&gt; Router.init([ { url: '/main', callback: () =&gt; { document.getElementById(\\\"page\\\").innerHTML = 'Main'; } }, { url: '/sub1', callback: () =&gt; { document.getElementById(\\\"page\\\").innerHTML = 'Sub1'; } }, { url: '/sub2', callback: () =&gt; { document.getElementById(\\\"page\\\").innerHTML = 'Sub2'; } } ]); Router.go('/main'); const goTo = (url) =&gt; { Router.go(url); } &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Helper/router.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Router\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"history mode &lt;!doctype html&gt; &lt;html lang=\\\"en\\\"&gt; &lt;head&gt; &lt;meta charset=\\\"UTF-8\\\"&gt; &lt;/head&gt; &lt;body&gt; &lt;button onclick=\\\"goTo('/main')\\\"&gt;Main&lt;/button&gt; &lt;button onclick=\\\"goTo('/sub1')\\\"&gt;Sub1&lt;/button&gt; &lt;button onclick=\\\"goTo('/sub2')\\\"&gt;Sub2&lt;/button&gt; &lt;div id=\\\"page\\\"&gt;&lt;/div&gt; &lt;script&gt; const Router = (() =&gt; { const store = new Map(); const excuteCallback = (url) =&gt; { if(store.has(url)){ store.get(url)(); } }; const historyChangeListener = (event) =&gt; { const currentHistory = event.state.url; excuteCallback(currentHistory); }; const init = (options) =&gt; { //라우터 등록 options.forEach(({url, callback}) =&gt; { store.set(url, callback); }); //이벤트 등록 window.addEventListener( 'popstate', historyChangeListener ); }; const destory = () =&gt; { //이벤트 삭제 window.removeEventListener( 'popstate', historyChangeListener ); //저장된 라우터 데이터 삭제 store.clear(); }; const go = (url) =&gt; { history.pushState({url}, '', url); excuteCallback(url); }; return { init, destory, go } })(); &lt;/script&gt; &lt;script&gt; Router.init([ { url: '/main', callback: () =&gt; { document.getElementById(\\\"page\\\").innerHTML = 'Main'; } }, { url: '/sub1', callback: () =&gt; { document.getElementById(\\\"page\\\").innerHTML = 'Sub1'; } }, { url: '/sub2', callback: () =&gt; { document.getElementById(\\\"page\\\").innerHTML = 'Sub2'; } } ]); Router.go('/main'); const goTo = (url) =&gt; { Router.go(url); } &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/og_image.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-20T17:05:44.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Router\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-20T17:05:44.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Router\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/og_image.png\\\"],\\\"dateModified\\\":\\\"2023-06-20T17:05:44.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"history mode\",\"slug\":\"history-mode\",\"link\":\"#history-mode\",\"children\":[]},{\"level\":2,\"title\":\"hash mode\",\"slug\":\"hash-mode\",\"link\":\"#hash-mode\",\"children\":[]}],\"git\":{\"createdTime\":1687279729000,\"updatedTime\":1687280744000,\"contributors\":[{\"name\":\"ChoDragon9\",\"email\":\"04whdydrn30@gmail.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"fe-dev/code-snippets/Helper/router.md\",\"localizedDate\":\"2023년 6월 21일\",\"excerpt\":\"<h2> history mode</h2>\\n<div class=\\\"language-html line-numbers-mode\\\" data-ext=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"token doctype\\\"><span class=\\\"token punctuation\\\">&lt;!</span><span class=\\\"token doctype-tag\\\">doctype</span> <span class=\\\"token name\\\">html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>html</span> <span class=\\\"token attr-name\\\">lang</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>en<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>meta</span> <span class=\\\"token attr-name\\\">charset</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>UTF-8<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>head</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>button</span> <span class=\\\"token special-attr\\\"><span class=\\\"token attr-name\\\">onclick</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span><span class=\\\"token value javascript language-javascript\\\"><span class=\\\"token function\\\">goTo</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'/main'</span><span class=\\\"token punctuation\\\">)</span></span><span class=\\\"token punctuation\\\">\\\"</span></span></span><span class=\\\"token punctuation\\\">&gt;</span></span>Main<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>button</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>button</span> <span class=\\\"token special-attr\\\"><span class=\\\"token attr-name\\\">onclick</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span><span class=\\\"token value javascript language-javascript\\\"><span class=\\\"token function\\\">goTo</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'/sub1'</span><span class=\\\"token punctuation\\\">)</span></span><span class=\\\"token punctuation\\\">\\\"</span></span></span><span class=\\\"token punctuation\\\">&gt;</span></span>Sub1<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>button</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>button</span> <span class=\\\"token special-attr\\\"><span class=\\\"token attr-name\\\">onclick</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span><span class=\\\"token value javascript language-javascript\\\"><span class=\\\"token function\\\">goTo</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'/sub2'</span><span class=\\\"token punctuation\\\">)</span></span><span class=\\\"token punctuation\\\">\\\"</span></span></span><span class=\\\"token punctuation\\\">&gt;</span></span>Sub2<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>button</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>page<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\n<span class=\\\"token keyword\\\">const</span> Router <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">const</span> store <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Map</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">excuteCallback</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">url</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">if</span><span class=\\\"token punctuation\\\">(</span>store<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">has</span><span class=\\\"token punctuation\\\">(</span>url<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n      store<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">get</span><span class=\\\"token punctuation\\\">(</span>url<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">historyChangeListener</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">event</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">const</span> currentHistory <span class=\\\"token operator\\\">=</span> event<span class=\\\"token punctuation\\\">.</span>state<span class=\\\"token punctuation\\\">.</span>url<span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token function\\\">excuteCallback</span><span class=\\\"token punctuation\\\">(</span>currentHistory<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">init</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">options</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token comment\\\">//라우터 등록</span>\\n    options<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">forEach</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\"><span class=\\\"token punctuation\\\">{</span>url<span class=\\\"token punctuation\\\">,</span> callback<span class=\\\"token punctuation\\\">}</span></span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n      store<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">set</span><span class=\\\"token punctuation\\\">(</span>url<span class=\\\"token punctuation\\\">,</span> callback<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n    <span class=\\\"token comment\\\">//이벤트 등록</span>\\n    window<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">addEventListener</span><span class=\\\"token punctuation\\\">(</span>\\n      <span class=\\\"token string\\\">'popstate'</span><span class=\\\"token punctuation\\\">,</span>\\n      historyChangeListener\\n    <span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">destory</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token comment\\\">//이벤트 삭제</span>\\n    window<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">removeEventListener</span><span class=\\\"token punctuation\\\">(</span>\\n      <span class=\\\"token string\\\">'popstate'</span><span class=\\\"token punctuation\\\">,</span>\\n      historyChangeListener\\n    <span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n    <span class=\\\"token comment\\\">//저장된 라우터 데이터 삭제</span>\\n    store<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">clear</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">go</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">url</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    history<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">pushState</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>url<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">''</span><span class=\\\"token punctuation\\\">,</span> url<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token function\\\">excuteCallback</span><span class=\\\"token punctuation\\\">(</span>url<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token punctuation\\\">{</span>\\n    init<span class=\\\"token punctuation\\\">,</span>\\n    destory<span class=\\\"token punctuation\\\">,</span>\\n    go\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\nRouter<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">init</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span>\\n  <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">url</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'/main'</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token function-variable function\\\">callback</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n      document<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getElementById</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"page\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span>innerHTML <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'Main'</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">url</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'/sub1'</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token function-variable function\\\">callback</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n      document<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getElementById</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"page\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span>innerHTML <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'Sub1'</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">url</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'/sub2'</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token function-variable function\\\">callback</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n      document<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getElementById</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"page\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span>innerHTML <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'Sub2'</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\nRouter<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">go</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'/main'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">goTo</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">url</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  Router<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">go</span><span class=\\\"token punctuation\\\">(</span>url<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>body</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>html</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
