import{_ as s,c as a,o as n,a3 as i}from"./chunks/framework.9Buaa5aL.js";const g=JSON.parse('{"title":"Client Hints로 클린 하게 브라우저 분기하기","description":"","frontmatter":{},"headers":[],"relativePath":"essay/client-hints.md","filePath":"essay/client-hints.md"}'),p={name:"essay/client-hints.md"},t=i(`<h1 id="client-hints로-클린-하게-브라우저-분기하기" tabindex="-1">Client Hints로 클린 하게 브라우저 분기하기 <a class="header-anchor" href="#client-hints로-클린-하게-브라우저-분기하기" aria-label="Permalink to &quot;Client Hints로 클린 하게 브라우저 분기하기&quot;">​</a></h1><h2 id="user-agent의-문제점" tabindex="-1">User-Agent의 문제점 <a class="header-anchor" href="#user-agent의-문제점" aria-label="Permalink to &quot;User-Agent의 문제점&quot;">​</a></h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent" target="_blank" rel="noreferrer">User-Agent</a>는 브라우저를 구분할 때 사용하곤 합니다. 하지만 아래와 같이 Chromium 기반 브라우저에서 <code>window.navigator.userAgent</code>로 User-Agent를 조회하면 동일한 문자열을 볼 수 있습니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Chrome</span></span>
<span class="line"><span>Mozilla/5.0 (X11; Linux x86_64) </span></span>
<span class="line"><span>AppleWebKit/537.36 (KHTML, like Gecko) </span></span>
<span class="line"><span>Chrome/51.0.2704.103 </span></span>
<span class="line"><span>Safari/537.36</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Opera</span></span>
<span class="line"><span>Mozilla/5.0 (X11; Linux x86_64) </span></span>
<span class="line"><span>AppleWebKit/537.36 (KHTML, like Gecko) </span></span>
<span class="line"><span>Chrome/51.0.2704.106 </span></span>
<span class="line"><span>Safari/537.36 </span></span>
<span class="line"><span>OPR/38.0.2220.41</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Edge</span></span>
<span class="line"><span>Mozilla/5.0 (Windows NT 10.0; Win64; x64) </span></span>
<span class="line"><span>AppleWebKit/537.36 (KHTML, like Gecko) </span></span>
<span class="line"><span>Chrome/91.0.4472.124 </span></span>
<span class="line"><span>Safari/537.36 </span></span>
<span class="line"><span>Edg/91.0.864.59</span></span></code></pre></div><p>User-Agent에서 Chrome 브라우저를 구분하려면 어떻게 해야 할까요? OPR, Edg가 포함되지 않으면 Chrome으로 구분 가능할 것 같지만 Chromium 기반의 다른 브라우저에서 접근하면 이 방식은 버그를 유발할 수 있습니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userAgent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.navigator.userAgent;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isEdge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Edg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isOpera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OPR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Chrome이 아닌 Edge, Opara 이외 Chromium 기반 브라우저에서 항상 true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isChrome</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">isEdge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">isOpera;</span></span></code></pre></div><h2 id="client-hints-사용하기" tabindex="-1">Client Hints 사용하기 <a class="header-anchor" href="#client-hints-사용하기" aria-label="Permalink to &quot;Client Hints 사용하기&quot;">​</a></h2><p>Chromium 기반의 브라우저를 명확히 구분하기 위해서는 <a href="https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API" target="_blank" rel="noreferrer">Client Hints</a>을 활용해야 합니다. Client Hints는 User-Agent의 오용을 방지하기 위해 만들어졌고, 브라우저에서 문자열을 전달합니다.</p><p>Client Hints는 <code>window.navigator.userAgentData.brands</code>를 사용해서 조회할 수 있습니다. Chromium 기반 브라우저에서 Client Hints를 조회하면 브라우저별로 다른 문자열이 포함된 것을 확인할 수 있습니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Chrome</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Not/A)Brand&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;99&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Google Chrome&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;115&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Chromium&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;115&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Opera</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Not/A)Brand&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;99&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Opera&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;101&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Chromium&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;115&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Edge</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Not/A)Brand&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;99&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Microsoft Edge&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;115&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;brand&quot;: &quot;Chromium&quot;,</span></span>
<span class="line"><span>        &quot;version&quot;: &quot;115&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>위와 같이 브라우저의 문자열을 명확히 구분할 수 있습니다. 때문에 User-Agent와 다르게 아래와 같이 버그 없는 코드를 작성할 수 있습니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userAgentBrands</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.navigator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .userAgentData.brands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(({</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">brand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> brand);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isEdge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgentBrands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Microsoft Edge&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isOpera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgentBrands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Opera&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isChrome</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgentBrands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Google Chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,12),e=[t];function l(h,k,o,r,d,c){return n(),a("div",null,e)}const E=s(p,[["render",l]]);export{g as __pageData,E as default};
