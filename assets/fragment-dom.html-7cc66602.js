const e=JSON.parse('{"key":"v-1090f2af","path":"/fe-dev/pet-project/component/fragment-dom.html","title":"2020.07.22 Fragment DOM","lang":"ko-KR","frontmatter":{"title":"2020.07.22 Fragment DOM","description":"Virtual DOM과 유사한 역할을 하며, DocumentFragment를 사용한 Virtual DOM으로 Fragment DOM으로 명명했다. Interface // Component 생성 시, 작성하는 함수 type render = (state) =&gt; FragmentDOM type patch = (FragmentDOM, AutualDOM) =&gt; void type isNodeChanged = (FragmentDOM, AutualDOM) =&gt; boolean type isAttributeChanged = (FragmentDOM, AutualDOM) =&gt; boolean","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/pet-project/component/fragment-dom.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"2020.07.22 Fragment DOM"}],["meta",{"property":"og:description","content":"Virtual DOM과 유사한 역할을 하며, DocumentFragment를 사용한 Virtual DOM으로 Fragment DOM으로 명명했다. Interface // Component 생성 시, 작성하는 함수 type render = (state) =&gt; FragmentDOM type patch = (FragmentDOM, AutualDOM) =&gt; void type isNodeChanged = (FragmentDOM, AutualDOM) =&gt; boolean type isAttributeChanged = (FragmentDOM, AutualDOM) =&gt; boolean"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-26T07:15:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"2020.07.22 Fragment DOM"}],["meta",{"property":"article:modified_time","content":"2023-06-26T07:15:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2020.07.22 Fragment DOM\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-26T07:15:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"patch 전략","slug":"patch-전략","link":"#patch-전략","children":[{"level":3,"title":"Node","slug":"node","link":"#node","children":[]},{"level":3,"title":"Attribute","slug":"attribute","link":"#attribute","children":[]},{"level":3,"title":"Node와 Attribute 우선순위?","slug":"node와-attribute-우선순위","link":"#node와-attribute-우선순위","children":[]}]},{"level":2,"title":"코어","slug":"코어","link":"#코어","children":[{"level":3,"title":"/core/render.js","slug":"core-render-js","link":"#core-render-js","children":[]},{"level":3,"title":"/core/patch.js","slug":"core-patch-js","link":"#core-patch-js","children":[]}]},{"level":2,"title":"사용케이스","slug":"사용케이스","link":"#사용케이스","children":[{"level":3,"title":"상태 변경 후 패치","slug":"상태-변경-후-패치","link":"#상태-변경-후-패치","children":[]}]}],"git":{"createdTime":1687246954000,"updatedTime":1687763723000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":5}]},"readingTime":{"minutes":0.32,"words":95},"filePathRelative":"fe-dev/pet-project/component/fragment-dom.md","localizedDate":"2023년 6월 20일","excerpt":"<p>Virtual DOM과 유사한 역할을 하며, Document<strong>Fragment</strong>를 사용한 Virtual <strong>DOM</strong>으로 <strong>Fragment DOM</strong>으로 명명했다.</p>\\n<h2> Interface</h2>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// Component 생성 시, 작성하는 함수</span>\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">render</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>state<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> FragmentDOM\\n\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">patch</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>FragmentDOM<span class=\\"token punctuation\\">,</span> AutualDOM<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token keyword\\">void</span>\\n\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">isNodeChanged</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>FragmentDOM<span class=\\"token punctuation\\">,</span> AutualDOM<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token builtin\\">boolean</span>\\n<span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">isAttributeChanged</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>FragmentDOM<span class=\\"token punctuation\\">,</span> AutualDOM<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token builtin\\">boolean</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};