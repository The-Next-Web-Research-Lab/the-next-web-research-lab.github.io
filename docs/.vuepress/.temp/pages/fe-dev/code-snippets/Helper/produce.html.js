export const data = JSON.parse("{\"key\":\"v-6a36405c\",\"path\":\"/fe-dev/code-snippets/Helper/produce.html\",\"title\":\"produce\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"produce\",\"description\":\"produce.ts const clone = function &lt;T&gt;(obj: T): T { return JSON.parse(JSON.stringify(obj)) } const produce = function &lt;T&gt;(fn: (state: T, ...options: any[]) =&gt; void) { return (state: T, ...options: any[]): T =&gt; { const clonedState = clone(state) fn(clonedState, ...options) return clonedState } } const baseState: any[] = [ { todo: \\\"Learn typescript\\\", done: true }, { todo: \\\"Try immer\\\", done: false } ] const nextState = produce((draftState: any[]) =&gt; { draftState.push({todo: \\\"Tweet about it\\\"}) draftState[1].done = true })(baseState) console.log(baseState.length === 2) console.log(nextState.length === 3) console.log(baseState[1].done === false) console.log(nextState[1].done === true) console.log(nextState[0] === baseState[0]) console.log(nextState[1] !== baseState[1]) produce((draftState: {x : number }) =&gt; { draftState.x = 10 })({ x: 0 })\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Helper/produce.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"더넥스트웹리서치랩\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"produce\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"produce.ts const clone = function &lt;T&gt;(obj: T): T { return JSON.parse(JSON.stringify(obj)) } const produce = function &lt;T&gt;(fn: (state: T, ...options: any[]) =&gt; void) { return (state: T, ...options: any[]): T =&gt; { const clonedState = clone(state) fn(clonedState, ...options) return clonedState } } const baseState: any[] = [ { todo: \\\"Learn typescript\\\", done: true }, { todo: \\\"Try immer\\\", done: false } ] const nextState = produce((draftState: any[]) =&gt; { draftState.push({todo: \\\"Tweet about it\\\"}) draftState[1].done = true })(baseState) console.log(baseState.length === 2) console.log(nextState.length === 3) console.log(baseState[1].done === false) console.log(nextState[1].done === true) console.log(nextState[0] === baseState[0]) console.log(nextState[1] !== baseState[1]) produce((draftState: {x : number }) =&gt; { draftState.x = 10 })({ x: 0 })\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://the-next-web-research-lab.github.io/images/og_image.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-20T17:05:44.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"produce\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-20T17:05:44.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"produce\\\",\\\"image\\\":[\\\"https://the-next-web-research-lab.github.io/images/og_image.png\\\"],\\\"dateModified\\\":\\\"2023-06-20T17:05:44.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"produce.ts\",\"slug\":\"produce-ts\",\"link\":\"#produce-ts\",\"children\":[]},{\"level\":2,\"title\":\"produce-simple.js\",\"slug\":\"produce-simple-js\",\"link\":\"#produce-simple-js\",\"children\":[]},{\"level\":2,\"title\":\"persistant-unit/linked-list.js\",\"slug\":\"persistant-unit-linked-list-js\",\"link\":\"#persistant-unit-linked-list-js\",\"children\":[]},{\"level\":2,\"title\":\"persistant-unit/proxy.js\",\"slug\":\"persistant-unit-proxy-js\",\"link\":\"#persistant-unit-proxy-js\",\"children\":[]},{\"level\":2,\"title\":\"persistant-unit/proxy-all.js\",\"slug\":\"persistant-unit-proxy-all-js\",\"link\":\"#persistant-unit-proxy-all-js\",\"children\":[]},{\"level\":2,\"title\":\"persistant-unit/proxy-revoke.js\",\"slug\":\"persistant-unit-proxy-revoke-js\",\"link\":\"#persistant-unit-proxy-revoke-js\",\"children\":[]},{\"level\":2,\"title\":\"persistant/produce.js\",\"slug\":\"persistant-produce-js\",\"link\":\"#persistant-produce-js\",\"children\":[]},{\"level\":2,\"title\":\"persistant-merge/produce.js\",\"slug\":\"persistant-merge-produce-js\",\"link\":\"#persistant-merge-produce-js\",\"children\":[]},{\"level\":2,\"title\":\"persistant-oop/produce.js\",\"slug\":\"persistant-oop-produce-js\",\"link\":\"#persistant-oop-produce-js\",\"children\":[]}],\"git\":{\"createdTime\":1687279729000,\"updatedTime\":1687280744000,\"contributors\":[{\"name\":\"ChoDragon9\",\"email\":\"04whdydrn30@gmail.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":0.25,\"words\":76},\"filePathRelative\":\"fe-dev/code-snippets/Helper/produce.md\",\"localizedDate\":\"2023년 6월 21일\",\"excerpt\":\"<h2> produce.ts</h2>\\n<div class=\\\"language-typescript line-numbers-mode\\\" data-ext=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">clone</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token constant\\\">T</span><span class=\\\"token operator\\\">&gt;</span><span class=\\\"token punctuation\\\">(</span>obj<span class=\\\"token operator\\\">:</span> <span class=\\\"token constant\\\">T</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token constant\\\">T</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token constant\\\">JSON</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">parse</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token constant\\\">JSON</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">stringify</span><span class=\\\"token punctuation\\\">(</span>obj<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">produce</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token operator\\\">&lt;</span><span class=\\\"token constant\\\">T</span><span class=\\\"token operator\\\">&gt;</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function-variable function\\\">fn</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span>state<span class=\\\"token operator\\\">:</span> <span class=\\\"token constant\\\">T</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token operator\\\">...</span>options<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">any</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token keyword\\\">void</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token punctuation\\\">(</span>state<span class=\\\"token operator\\\">:</span> <span class=\\\"token constant\\\">T</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token operator\\\">...</span>options<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">any</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token constant\\\">T</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">const</span> clonedState <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">clone</span><span class=\\\"token punctuation\\\">(</span>state<span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token function\\\">fn</span><span class=\\\"token punctuation\\\">(</span>clonedState<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token operator\\\">...</span>options<span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token keyword\\\">return</span> clonedState\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">const</span> baseState<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">any</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">[</span>\\n  <span class=\\\"token punctuation\\\">{</span>\\n    todo<span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"Learn typescript\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n    done<span class=\\\"token operator\\\">:</span> <span class=\\\"token boolean\\\">true</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">{</span>\\n    todo<span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"Try immer\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n    done<span class=\\\"token operator\\\">:</span> <span class=\\\"token boolean\\\">false</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">]</span>\\n\\n<span class=\\\"token keyword\\\">const</span> nextState <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">produce</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span>draftState<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">any</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  draftState<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">push</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>todo<span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"Tweet about it\\\"</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span>\\n  draftState<span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">.</span>done <span class=\\\"token operator\\\">=</span> <span class=\\\"token boolean\\\">true</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">(</span>baseState<span class=\\\"token punctuation\\\">)</span>\\n\\n<span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>baseState<span class=\\\"token punctuation\\\">.</span>length <span class=\\\"token operator\\\">===</span> <span class=\\\"token number\\\">2</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>nextState<span class=\\\"token punctuation\\\">.</span>length <span class=\\\"token operator\\\">===</span> <span class=\\\"token number\\\">3</span><span class=\\\"token punctuation\\\">)</span>\\n\\n<span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>baseState<span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">.</span>done <span class=\\\"token operator\\\">===</span> <span class=\\\"token boolean\\\">false</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>nextState<span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">.</span>done <span class=\\\"token operator\\\">===</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">)</span>\\n\\n<span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>nextState<span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">]</span> <span class=\\\"token operator\\\">===</span> baseState<span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>nextState<span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">]</span> <span class=\\\"token operator\\\">!==</span> baseState<span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span>\\n\\n<span class=\\\"token function\\\">produce</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span>draftState<span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span>x <span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  draftState<span class=\\\"token punctuation\\\">.</span>x <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">10</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span> x<span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">0</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
