const n=JSON.parse('{"key":"v-50cb1791","path":"/fe-dev/code-snippets/Javascript/Date.html","title":"Date","lang":"ko-KR","frontmatter":{"title":"Date","description":"dateToString.js export const toLong = num =&gt; `${num &lt; 10 ? \'0\' : \'\'}${num}`; export const dateToString = (date: Date) =&gt; { const [ year, month, day, hours, minutes, seconds, ] = [ date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), ].map(toLong); return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; };","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/code-snippets/Javascript/Date.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"Date"}],["meta",{"property":"og:description","content":"dateToString.js export const toLong = num =&gt; `${num &lt; 10 ? \'0\' : \'\'}${num}`; export const dateToString = (date: Date) =&gt; { const [ year, month, day, hours, minutes, seconds, ] = [ date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), ].map(toLong); return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-20T17:05:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Date"}],["meta",{"property":"article:modified_time","content":"2023-06-20T17:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Date\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-20T17:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"dateToString.js","slug":"datetostring-js","link":"#datetostring-js","children":[]},{"level":2,"title":"toLocalString.js","slug":"tolocalstring-js","link":"#tolocalstring-js","children":[]},{"level":2,"title":"produce-date.js","slug":"produce-date-js","link":"#produce-date-js","children":[]},{"level":2,"title":"add-day.js","slug":"add-day-js","link":"#add-day-js","children":[]},{"level":2,"title":"diff-day.js","slug":"diff-day-js","link":"#diff-day-js","children":[]},{"level":2,"title":"is-leap-year.js","slug":"is-leap-year-js","link":"#is-leap-year-js","children":[]},{"level":2,"title":"subtract-day.js","slug":"subtract-day-js","link":"#subtract-day-js","children":[]},{"level":2,"title":"to-day-index.js","slug":"to-day-index-js","link":"#to-day-index-js","children":[]},{"level":2,"title":"to-last-day.js","slug":"to-last-day-js","link":"#to-last-day-js","children":[]},{"level":2,"title":"custom-date.js","slug":"custom-date-js","link":"#custom-date-js","children":[]}],"git":{"createdTime":1687279729000,"updatedTime":1687280744000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":0.29,"words":86},"filePathRelative":"fe-dev/code-snippets/Javascript/Date.md","localizedDate":"2023년 6월 21일","excerpt":"<h2> dateToString.js</h2>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">toLong</span> <span class=\\"token operator\\">=</span> num <span class=\\"token operator\\">=&gt;</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>num <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">10</span> <span class=\\"token operator\\">?</span> <span class=\\"token string\\">\'0\'</span> <span class=\\"token operator\\">:</span> <span class=\\"token string\\">\'\'</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>num<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">dateToString</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>date<span class=\\"token operator\\">:</span> Date<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">[</span>\\n    year<span class=\\"token punctuation\\">,</span>\\n    month<span class=\\"token punctuation\\">,</span>\\n    day<span class=\\"token punctuation\\">,</span>\\n    hours<span class=\\"token punctuation\\">,</span>\\n    minutes<span class=\\"token punctuation\\">,</span>\\n    seconds<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n    date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getFullYear</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getMonth</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>\\n    date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getDate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getHours</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getMinutes</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getSeconds</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">map</span><span class=\\"token punctuation\\">(</span>toLong<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>year<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">-</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>month<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">-</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>day<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\"> </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>hours<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">:</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>minutes<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">:</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>seconds<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
