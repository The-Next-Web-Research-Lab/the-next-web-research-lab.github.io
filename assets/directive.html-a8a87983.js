const n=JSON.parse(`{"key":"v-7ad0df83","path":"/fe-dev/code-snippets/Helper/directive.html","title":"Directive","lang":"ko-KR","frontmatter":{"title":"Directive","description":"directive &lt;!doctype html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;/head&gt; &lt;body&gt; &lt;ul&gt; &lt;li helloworld&gt;&lt;/li&gt; &lt;li helloworld&gt;&lt;/li&gt; &lt;li helloworld&gt;&lt;/li&gt; &lt;/ul&gt; &lt;button type=\\"button\\" on-click=\\"changeButtonName(event)\\"&gt; Button &lt;/button&gt; &lt;script&gt; const Directive = (() =&gt; { const store = new Set(); const define = ({name, bind}) =&gt; { store.add({ name, bind }); }; const parseAttr = (_attr) =&gt; { let attr = _attr; if(attr.indexOf('(') &gt; -1){ attr = attr .replace('(',',') .replace(')',''); } return attr.split(','); }; const render = (parentSelector) =&gt; { const parent = document.querySelector(parentSelector); store.forEach((directive) =&gt; { const finedElems = parent.querySelectorAll(\`[\${directive.name}]\`); finedElems.forEach((elem) =&gt; { const directiveValue = parseAttr(elem.getAttribute(directive.name)); directive.bind(elem, directiveValue); }); }); }; return {define, parseAttr, render} })(); &lt;/script&gt; &lt;script&gt; Directive.define({ name: 'on-click', bind: (elem, [callbackName, hasEvent]) =&gt; { elem.onclick = (event) =&gt; { window[callbackName].call(elem, hasEvent ? event : undefined); }; } }); Directive.define({ name: 'helloworld', bind: (elem) =&gt; { elem.innerHTML = 'Hello World'; } }); Directive.render('body'); function changeButtonName(event){ this.innerHTML = 'Changed Button'; } &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Helper/directive.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"Directive"}],["meta",{"property":"og:description","content":"directive &lt;!doctype html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;/head&gt; &lt;body&gt; &lt;ul&gt; &lt;li helloworld&gt;&lt;/li&gt; &lt;li helloworld&gt;&lt;/li&gt; &lt;li helloworld&gt;&lt;/li&gt; &lt;/ul&gt; &lt;button type=\\"button\\" on-click=\\"changeButtonName(event)\\"&gt; Button &lt;/button&gt; &lt;script&gt; const Directive = (() =&gt; { const store = new Set(); const define = ({name, bind}) =&gt; { store.add({ name, bind }); }; const parseAttr = (_attr) =&gt; { let attr = _attr; if(attr.indexOf('(') &gt; -1){ attr = attr .replace('(',',') .replace(')',''); } return attr.split(','); }; const render = (parentSelector) =&gt; { const parent = document.querySelector(parentSelector); store.forEach((directive) =&gt; { const finedElems = parent.querySelectorAll(\`[\${directive.name}]\`); finedElems.forEach((elem) =&gt; { const directiveValue = parseAttr(elem.getAttribute(directive.name)); directive.bind(elem, directiveValue); }); }); }; return {define, parseAttr, render} })(); &lt;/script&gt; &lt;script&gt; Directive.define({ name: 'on-click', bind: (elem, [callbackName, hasEvent]) =&gt; { elem.onclick = (event) =&gt; { window[callbackName].call(elem, hasEvent ? event : undefined); }; } }); Directive.define({ name: 'helloworld', bind: (elem) =&gt; { elem.innerHTML = 'Hello World'; } }); Directive.render('body'); function changeButtonName(event){ this.innerHTML = 'Changed Button'; } &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-20T17:05:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Directive"}],["meta",{"property":"article:modified_time","content":"2023-06-20T17:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Directive\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-20T17:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"directive","slug":"directive","link":"#directive","children":[]}],"git":{"createdTime":1687279729000,"updatedTime":1687280744000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":0.03,"words":8},"filePathRelative":"fe-dev/code-snippets/Helper/directive.md","localizedDate":"2023년 6월 21일","excerpt":"<h2> directive</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">doctype</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>en<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">charset</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>UTF-8<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span> <span class=\\"token attr-name\\">helloworld</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span> <span class=\\"token attr-name\\">helloworld</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span> <span class=\\"token attr-name\\">helloworld</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span>\\n  <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>button<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\">on-click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>changeButtonName(event)<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  Button\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">const</span> Directive <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> store <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Set</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">define</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token punctuation\\">{</span>name<span class=\\"token punctuation\\">,</span> bind<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    store<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> name<span class=\\"token punctuation\\">,</span> bind <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">parseAttr</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">_attr</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">let</span> attr <span class=\\"token operator\\">=</span> _attr<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>attr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'('</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n      attr <span class=\\"token operator\\">=</span> attr\\n        <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">replace</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'('</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">','</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">replace</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">')'</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">''</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">return</span> attr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">split</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">','</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">render</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">parentSelector</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> parent <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span>parentSelector<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    store<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">directive</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">const</span> finedElems <span class=\\"token operator\\">=</span> parent<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelectorAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token string\\">[</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>directive<span class=\\"token punctuation\\">.</span>name<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">]</span><span class=\\"token template-punctuation string\\">\`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n      finedElems<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">elem</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">const</span> directiveValue <span class=\\"token operator\\">=</span> <span class=\\"token function\\">parseAttr</span><span class=\\"token punctuation\\">(</span>elem<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getAttribute</span><span class=\\"token punctuation\\">(</span>directive<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token function\\">directive</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">bind</span><span class=\\"token punctuation\\">(</span>elem<span class=\\"token punctuation\\">,</span> directiveValue<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>define<span class=\\"token punctuation\\">,</span> parseAttr<span class=\\"token punctuation\\">,</span> render<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\nDirective<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">define</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'on-click'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function-variable function\\">bind</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">elem<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span>callbackName<span class=\\"token punctuation\\">,</span> hasEvent<span class=\\"token punctuation\\">]</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    elem<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">onclick</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">event</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      window<span class=\\"token punctuation\\">[</span>callbackName<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">call</span><span class=\\"token punctuation\\">(</span>elem<span class=\\"token punctuation\\">,</span> hasEvent <span class=\\"token operator\\">?</span> event <span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">undefined</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nDirective<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">define</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'helloworld'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function-variable function\\">bind</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">elem</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    elem<span class=\\"token punctuation\\">.</span>innerHTML <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'Hello World'</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\nDirective<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'body'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">changeButtonName</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">event</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>innerHTML <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'Changed Button'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
