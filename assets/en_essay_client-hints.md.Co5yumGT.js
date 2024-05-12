import{_ as s,c as n,o as a,a3 as i}from"./chunks/framework.COm4hYgr.js";const g=JSON.parse('{"title":"Cleanly branch browsers with Client Hints","description":"","frontmatter":{},"headers":[],"relativePath":"en/essay/client-hints.md","filePath":"en/essay/client-hints.md"}'),p={name:"en/essay/client-hints.md"},e=i(`<h1 id="cleanly-branch-browsers-with-client-hints" tabindex="-1">Cleanly branch browsers with Client Hints <a class="header-anchor" href="#cleanly-branch-browsers-with-client-hints" aria-label="Permalink to &quot;Cleanly branch browsers with Client Hints&quot;">​</a></h1><h2 id="the-problem-with-user-agent" tabindex="-1">The problem with User-Agent <a class="header-anchor" href="#the-problem-with-user-agent" aria-label="Permalink to &quot;The problem with User-Agent&quot;">​</a></h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent" target="_blank" rel="noreferrer">User-Agent</a> is often used to distinguish browsers. However, if you query User-Agent with <code>window.navigator.userAgent</code> in Chromium-based browsers, you will see the same string as below.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Chrome</span></span>
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
<span class="line"><span>Edg/91.0.864.59</span></span></code></pre></div><p>How do you distinguish Chrome browser from User-Agent? It seems possible to distinguish Chrome if OPR and Edg are not included, but this method can cause bugs when accessed from other Chromium-based browsers.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userAgent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.navigator.userAgent;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isEdge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Edg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isOpera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OPR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Always true in Chromium-based browsers other than Edge and Opera</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isChrome</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">isEdge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">isOpera;</span></span></code></pre></div><h2 id="using-client-hints" tabindex="-1">Using Client Hints <a class="header-anchor" href="#using-client-hints" aria-label="Permalink to &quot;Using Client Hints&quot;">​</a></h2><p>To clearly distinguish Chromium-based browsers, you need to use <a href="https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API" target="_blank" rel="noreferrer">Client Hints</a>. Client Hints were created to prevent misuse of User-Agent, and deliver strings from the browser.</p><p>Client Hints can be queried using <code>window.navigator.userAgentData.brands</code>. If you query Client Hints in Chromium-based browsers, you can see that different strings are included for each browser.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Chrome</span></span>
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
<span class="line"><span>]</span></span></code></pre></div><p>As you can see, you can clearly distinguish the browser&#39;s strings. Therefore, unlike User-Agent, you can write bug-free code as follows.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userAgentBrands</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.navigator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .userAgentData.brands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(({</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">brand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> brand);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isEdge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgentBrands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Microsoft Edge&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isOpera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgentBrands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Opera&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isChrome</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userAgentBrands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Google Chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,12),t=[e];function l(h,r,o,k,d,c){return a(),n("div",null,t)}const E=s(p,[["render",l]]);export{g as __pageData,E as default};
