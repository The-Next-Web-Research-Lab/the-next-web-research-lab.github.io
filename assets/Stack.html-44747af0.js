const n=JSON.parse('{"key":"v-1b625908","path":"/fe-dev/code-snippets/Data-Structure/Stack.html","title":"Stack","lang":"ko-KR","frontmatter":{"title":"Stack","description":"Stack class Stack { #arr = [] constructor() { this.#arr = [] } getBuffer() { return this.#arr.slice(); } isEmpty() { return this.#arr.length === 0; } push(item) { this.#arr.push(item); } pop() { return this.#arr.pop(); } peek() { return this.#arr[this.#arr.length - 1]; } }","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Data-Structure/Stack.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"Stack"}],["meta",{"property":"og:description","content":"Stack class Stack { #arr = [] constructor() { this.#arr = [] } getBuffer() { return this.#arr.slice(); } isEmpty() { return this.#arr.length === 0; } push(item) { this.#arr.push(item); } pop() { return this.#arr.pop(); } peek() { return this.#arr[this.#arr.length - 1]; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-07-14T13:03:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Stack"}],["meta",{"property":"article:modified_time","content":"2023-07-14T13:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stack\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-07-14T13:03:00.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1687279729000,"updatedTime":1689339780000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":3}]},"readingTime":{"minutes":0.03,"words":9},"filePathRelative":"fe-dev/code-snippets/Data-Structure/Stack.md","localizedDate":"2023년 6월 21일","excerpt":"<h1> Stack</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Stack</span> <span class=\\"token punctuation\\">{</span>\\n  #arr <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>#arr <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">getBuffer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>#arr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">slice</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">isEmpty</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>#arr<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">item</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>#arr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>item<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>#arr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">peek</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>#arr<span class=\\"token punctuation\\">[</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>#arr<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};