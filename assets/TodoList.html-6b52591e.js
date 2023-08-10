const n=JSON.parse('{"key":"v-1bf2ee6d","path":"/fe-dev/code-snippets/TodoList.html","title":"TodoList","lang":"ko-KR","frontmatter":{"title":"TodoList","description":"명령형 const addItem = (todoList, subject, date) =&gt; { const todoItem = toTodoItem(subject, date) todoList.push(todoItem) } const printTodoList = (todoList) =&gt; { const {length} = todoList let log = `` for (let i = 0; i &lt; length; i++) { const todoItem = todoList[i] log += `${todoItemToString(todoItem)}` if (i &lt; length - 1) { log += `\\\\n` } } console.log(log) } const toTodoItem = (subject, date) =&gt; ({subject, date}) const todoItemToString = ({subject, date}) =&gt; `[${date}] ${subject}` const todoList = [] addItem(todoList, \'새해인사\', 20200101) addItem(todoList, \'화분 물주기\', 20200102) addItem(todoList, \'분리수거\', 20200103) printTodoList(todoList) /* 실행결과 [20200101] 새해인사 [20200102] 화분 물주기 [20200103] 분리수거 */","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/TodoList.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"TodoList"}],["meta",{"property":"og:description","content":"명령형 const addItem = (todoList, subject, date) =&gt; { const todoItem = toTodoItem(subject, date) todoList.push(todoItem) } const printTodoList = (todoList) =&gt; { const {length} = todoList let log = `` for (let i = 0; i &lt; length; i++) { const todoItem = todoList[i] log += `${todoItemToString(todoItem)}` if (i &lt; length - 1) { log += `\\\\n` } } console.log(log) } const toTodoItem = (subject, date) =&gt; ({subject, date}) const todoItemToString = ({subject, date}) =&gt; `[${date}] ${subject}` const todoList = [] addItem(todoList, \'새해인사\', 20200101) addItem(todoList, \'화분 물주기\', 20200102) addItem(todoList, \'분리수거\', 20200103) printTodoList(todoList) /* 실행결과 [20200101] 새해인사 [20200102] 화분 물주기 [20200103] 분리수거 */"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-20T17:05:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"TodoList"}],["meta",{"property":"article:modified_time","content":"2023-06-20T17:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TodoList\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-20T17:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"명령형","slug":"명령형","link":"#명령형","children":[]},{"level":2,"title":"함수형 1","slug":"함수형-1","link":"#함수형-1","children":[]},{"level":2,"title":"함수형 2","slug":"함수형-2","link":"#함수형-2","children":[]},{"level":2,"title":"객체지향","slug":"객체지향","link":"#객체지향","children":[]}],"git":{"createdTime":1687279729000,"updatedTime":1687280744000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":0.08,"words":25},"filePathRelative":"fe-dev/code-snippets/TodoList.md","localizedDate":"2023년 6월 21일","excerpt":"<h2> 명령형</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">addItem</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">todoList<span class=\\"token punctuation\\">,</span> subject<span class=\\"token punctuation\\">,</span> date</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> todoItem <span class=\\"token operator\\">=</span> <span class=\\"token function\\">toTodoItem</span><span class=\\"token punctuation\\">(</span>subject<span class=\\"token punctuation\\">,</span> date<span class=\\"token punctuation\\">)</span>\\n  todoList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>todoItem<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">printTodoList</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">todoList</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span>length<span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> todoList\\n  <span class=\\"token keyword\\">let</span> log <span class=\\"token operator\\">=</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token template-punctuation string\\">`</span></span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> todoItem <span class=\\"token operator\\">=</span> todoList<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span>\\n    log <span class=\\"token operator\\">+=</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span><span class=\\"token function\\">todoItemToString</span><span class=\\"token punctuation\\">(</span>todoItem<span class=\\"token punctuation\\">)</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">`</span></span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">&lt;</span> length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      log <span class=\\"token operator\\">+=</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">\\\\n</span><span class=\\"token template-punctuation string\\">`</span></span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>log<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">toTodoItem</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">subject<span class=\\"token punctuation\\">,</span> date</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>subject<span class=\\"token punctuation\\">,</span> date<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">todoItemToString</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token punctuation\\">{</span>subject<span class=\\"token punctuation\\">,</span> date<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">[</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>date<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">] </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>subject<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">`</span></span>\\n\\n<span class=\\"token keyword\\">const</span> todoList <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token function\\">addItem</span><span class=\\"token punctuation\\">(</span>todoList<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\'새해인사\'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20200101</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">addItem</span><span class=\\"token punctuation\\">(</span>todoList<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\'화분 물주기\'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20200102</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">addItem</span><span class=\\"token punctuation\\">(</span>todoList<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\'분리수거\'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20200103</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token function\\">printTodoList</span><span class=\\"token punctuation\\">(</span>todoList<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">/* 실행결과\\n[20200101] 새해인사\\n[20200102] 화분 물주기\\n[20200103] 분리수거\\n*/</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
