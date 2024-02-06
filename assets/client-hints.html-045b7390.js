import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as l,a as n,b as s,d as a,e as i}from"./app-540f6865.js";const u={},d=n("h1",{id:"cleanly-branch-browsers-with-client-hints",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cleanly-branch-browsers-with-client-hints","aria-hidden":"true"},"#"),s(" Cleanly branch browsers with Client Hints")],-1),c=n("h2",{id:"the-problem-with-user-agent",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-problem-with-user-agent","aria-hidden":"true"},"#"),s(" The problem with User-Agent")],-1),p={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"window.navigator.userAgent",-1),m=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Chrome
Mozilla/5.0 (X11; Linux x86_64) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/51.0.2704.103 
Safari/537.36

// Opera
Mozilla/5.0 (X11; Linux x86_64) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/51.0.2704.106 
Safari/537.36 
OPR/38.0.2220.41

// Edge
Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/91.0.4472.124 
Safari/537.36 
Edg/91.0.864.59
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>How do you distinguish Chrome browser from User-Agent? It seems possible to distinguish Chrome if OPR and Edg are not included, but this method can cause bugs when accessed from other Chromium-based browsers.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> userAgent <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span>
<span class="token keyword">const</span> isEdge <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Edg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isOpera <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;OPR&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Always true in Chromium-based browsers other than Edge and Opera</span>
<span class="token keyword">const</span> isChrome <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Chrome&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isEdge <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isOpera<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-client-hints" tabindex="-1"><a class="header-anchor" href="#using-client-hints" aria-hidden="true">#</a> Using Client Hints</h2>`,4),b={href:"https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>Client Hints can be queried using <code>window.navigator.userAgentData.brands</code>. If you query Client Hints in Chromium-based browsers, you can see that different strings are included for each browser.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Chrome
[
    {
        &quot;brand&quot;: &quot;Not/A)Brand&quot;,
        &quot;version&quot;: &quot;99&quot;
    },
    {
        &quot;brand&quot;: &quot;Google Chrome&quot;,
        &quot;version&quot;: &quot;115&quot;
    },
    {
        &quot;brand&quot;: &quot;Chromium&quot;,
        &quot;version&quot;: &quot;115&quot;
    }
]

// Opera
[
    {
        &quot;brand&quot;: &quot;Not/A)Brand&quot;,
        &quot;version&quot;: &quot;99&quot;
    },
    {
        &quot;brand&quot;: &quot;Opera&quot;,
        &quot;version&quot;: &quot;101&quot;
    },
    {
        &quot;brand&quot;: &quot;Chromium&quot;,
        &quot;version&quot;: &quot;115&quot;
    }
]

// Edge
[
    {
        &quot;brand&quot;: &quot;Not/A)Brand&quot;,
        &quot;version&quot;: &quot;99&quot;
    },
    {
        &quot;brand&quot;: &quot;Microsoft Edge&quot;,
        &quot;version&quot;: &quot;115&quot;
    },
    {
        &quot;brand&quot;: &quot;Chromium&quot;,
        &quot;version&quot;: &quot;115&quot;
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, you can clearly distinguish the browser&#39;s strings. Therefore, unlike User-Agent, you can write bug-free code as follows.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> userAgentBrands <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator
  <span class="token punctuation">.</span>userAgentData<span class="token punctuation">.</span>brands<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>brand<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isEdge <span class="token operator">=</span> userAgentBrands<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft Edge&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isOpera <span class="token operator">=</span> userAgentBrands<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Opera&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isChrome <span class="token operator">=</span> userAgentBrands<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Google Chrome&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(q,g){const e=o("ExternalLinkIcon");return r(),l("div",null,[d,c,n("p",null,[n("a",p,[s("User-Agent"),a(e)]),s(" is often used to distinguish browsers. However, if you query User-Agent with "),v,s(" in Chromium-based browsers, you will see the same string as below.")]),m,n("p",null,[s("To clearly distinguish Chromium-based browsers, you need to use "),n("a",b,[s("Client Hints"),a(e)]),s(". Client Hints were created to prevent misuse of User-Agent, and deliver strings from the browser.")]),k])}const _=t(u,[["render",h],["__file","client-hints.html.vue"]]);export{_ as default};
