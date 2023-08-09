import{_ as t,r as o,o as l,c as u,a as n,b as s,d as a,e as i}from"./app-2b3815f4.js";const r={},c=n("h1",{id:"client-hints로-클린-하게-브라우저-분기하기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#client-hints로-클린-하게-브라우저-분기하기","aria-hidden":"true"},"#"),s(" Client Hints로 클린 하게 브라우저 분기하기")],-1),d=n("h2",{id:"user-agent의-문제점",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#user-agent의-문제점","aria-hidden":"true"},"#"),s(" User-Agent의 문제점")],-1),p={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"window.navigator.userAgent",-1),m=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Chrome
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>User-Agent에서 Chrome 브라우저를 구분하려면 어떻게 해야 할까요? OPR, Edg가 포함되지 않으면 Chrome으로 구분 가능할 것 같지만 Chromium 기반의 다른 브라우저에서 접근하면 이 방식은 버그를 유발할 수 있습니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> userAgent <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span>
<span class="token keyword">const</span> isEdge <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Edg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isOpera <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;OPR&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Chrome이 아닌 Edge, Opara 이외 Chromium 기반 브라우저에서 항상 true</span>
<span class="token keyword">const</span> isChrome <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Chrome&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isEdge <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isOpera<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-hints-사용하기" tabindex="-1"><a class="header-anchor" href="#client-hints-사용하기" aria-hidden="true">#</a> Client Hints 사용하기</h2>`,4),b={href:"https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>Client Hints는 <code>window.navigator.userAgentData.brands</code>를 사용해서 조회할 수 있습니다. Chromium 기반 브라우저에서 Client Hints를 조회하면 브라우저별로 다른 문자열이 포함된 것을 확인할 수 있습니다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Chrome
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 브라우저의 문자열을 명확히 구분할 수 있습니다. 때문에 User-Agent와 다르게 아래와 같이 버그 없는 코드를 작성할 수 있습니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> userAgentBrands <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator
  <span class="token punctuation">.</span>userAgentData<span class="token punctuation">.</span>brands<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>brand<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isEdge <span class="token operator">=</span> userAgentBrands<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft Edge&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isOpera <span class="token operator">=</span> userAgentBrands<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Opera&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isChrome <span class="token operator">=</span> userAgentBrands<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Google Chrome&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function q(g,h){const e=o("ExternalLinkIcon");return l(),u("div",null,[c,d,n("p",null,[n("a",p,[s("User-Agent"),a(e)]),s("는 브라우저를 구분할 때 사용하곤 합니다. 하지만 아래와 같이 Chromium 기반 브라우저에서 "),v,s("로 User-Agent를 조회하면 동일한 문자열을 볼 수 있습니다.")]),m,n("p",null,[s("Chromium 기반의 브라우저를 명확히 구분하기 위해서는 "),n("a",b,[s("Client Hints"),a(e)]),s("을 활용해야 합니다. Client Hints는 User-Agent의 오용을 방지하기 위해 만들어졌고, 브라우저에서 문자열을 전달합니다.")]),k])}const C=t(r,[["render",q],["__file","client-hints.html.vue"]]);export{C as default};
