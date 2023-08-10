const n=JSON.parse(`{"key":"v-5cfd925c","path":"/fe-dev/code-snippets/Helper/Helper.html","title":"Helper","lang":"ko-KR","frontmatter":{"title":"Helper","description":"debounce.js /** * Debounce * * @param callback {Function} Callback function * @param _delay {Number} Delay time * @return {Function} Event Listener */ const debounce = (callback, ms) =&gt; { let timer = null return function(...args){ const self = this clearTimeout(timer) timer = setTimeout(() =&gt; { callback.apply(self, args) }, ms) } } const log = debounce(console.log, 100) log('1') log('2') log('3') log('4') // 4","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Helper/Helper.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"Helper"}],["meta",{"property":"og:description","content":"debounce.js /** * Debounce * * @param callback {Function} Callback function * @param _delay {Number} Delay time * @return {Function} Event Listener */ const debounce = (callback, ms) =&gt; { let timer = null return function(...args){ const self = this clearTimeout(timer) timer = setTimeout(() =&gt; { callback.apply(self, args) }, ms) } } const log = debounce(console.log, 100) log('1') log('2') log('3') log('4') // 4"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-20T17:05:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Helper"}],["meta",{"property":"article:modified_time","content":"2023-06-20T17:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Helper\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-20T17:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"debounce.js","slug":"debounce-js","link":"#debounce-js","children":[]},{"level":2,"title":"debounce.ts","slug":"debounce-ts","link":"#debounce-ts","children":[]},{"level":2,"title":"highlight.js","slug":"highlight-js","link":"#highlight-js","children":[]},{"level":2,"title":"is-primitive.js","slug":"is-primitive-js","link":"#is-primitive-js","children":[]},{"level":2,"title":"is-object.js","slug":"is-object-js","link":"#is-object-js","children":[]},{"level":2,"title":"is-valid-url.js","slug":"is-valid-url-js","link":"#is-valid-url-js","children":[]},{"level":2,"title":"more-text.html","slug":"more-text-html","link":"#more-text-html","children":[]},{"level":2,"title":"overlap.js","slug":"overlap-js","link":"#overlap-js","children":[]},{"level":2,"title":"query-to-string.js","slug":"query-to-string-js","link":"#query-to-string-js","children":[]},{"level":2,"title":"stepper.ts","slug":"stepper-ts","link":"#stepper-ts","children":[]},{"level":2,"title":"subset.js","slug":"subset-js","link":"#subset-js","children":[]},{"level":2,"title":"throttle.js","slug":"throttle-js","link":"#throttle-js","children":[]},{"level":2,"title":"throttle.ts","slug":"throttle-ts","link":"#throttle-ts","children":[]},{"level":2,"title":"toggle.ts","slug":"toggle-ts","link":"#toggle-ts","children":[]}],"git":{"createdTime":1687279729000,"updatedTime":1687280744000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":0.33,"words":100},"filePathRelative":"fe-dev/code-snippets/Helper/Helper.md","localizedDate":"2023년 6월 21일","excerpt":"<h2> debounce.js</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token doc-comment comment\\">/**\\n * Debounce\\n *\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">callback</span> <span class=\\"token punctuation\\">{</span>Function<span class=\\"token punctuation\\">}</span> Callback function\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">_delay</span> <span class=\\"token punctuation\\">{</span>Number<span class=\\"token punctuation\\">}</span> Delay time\\n * <span class=\\"token keyword\\">@return</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">{</span>Function<span class=\\"token punctuation\\">}</span></span> Event Listener\\n */</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">debounce</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">callback<span class=\\"token punctuation\\">,</span> ms</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> timer <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token operator\\">...</span>args</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> self <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span>\\n    <span class=\\"token function\\">clearTimeout</span><span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span>\\n    timer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">callback</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> ms<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> log <span class=\\"token operator\\">=</span> <span class=\\"token function\\">debounce</span><span class=\\"token punctuation\\">(</span>console<span class=\\"token punctuation\\">.</span>log<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'2'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'3'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'4'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 4</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};