import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,d as c,e as l}from"./app-61a3cc4b.js";const i={},r=n("h1",{id:"safechain-for-safe-chaining",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#safechain-for-safe-chaining","aria-hidden":"true"},"#"),s(" safeChain for safe chaining")],-1),u=n("blockquote",null,[n("p",null,"This post was organized on December 7, 2019.")],-1),k=n("h4",{id:"purpose-of-the-article",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#purpose-of-the-article","aria-hidden":"true"},"#"),s(" Purpose of the article")],-1),d={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>What I tried this time was to create a function for safe chaining. I made it to prevent readability and complexity from increasing with basic value assignment or conditional statements, or in environments that do not support optional chaining-like syntax.</p><h4 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> Order</h4><p>First, I organized the order of how to use the function and the implementation code. And I wrote a case that can be applied in practice.</p><ul><li>How to use</li><li>Code</li><li>Use case</li></ul><h4 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h4><p>In normal situations, it extracts normal values.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dot <span class="token operator">=</span> <span class="token function">safeChain</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
<span class="token keyword">const</span> destruct <span class="token operator">=</span> <span class="token function">safeChain</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dot<span class="token punctuation">)</span> <span class="token comment">// c</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>destruct<span class="token punctuation">)</span> <span class="token comment">// c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In abnormal situations, it returns <code>undefined</code>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dot <span class="token operator">=</span> <span class="token function">safeChain</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>c<span class="token punctuation">.</span>b<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
<span class="token keyword">const</span> destruct <span class="token operator">=</span> <span class="token function">safeChain</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dot<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>destruct<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you use the basic syntax, this error will occur.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj
<span class="token comment">// Uncaught TypeError: Cannot read property &#39;b&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h4><h5 id="safechain-main-function" tabindex="-1"><a class="header-anchor" href="#safechain-main-function" aria-hidden="true">#</a> safeChain main function</h5><ul><li>Wraps the state received as an argument in a proxy.</li><li>Executes the mapper function received as an argument.</li><li>If the result of the mapper function is wrapped (isPack), it is unpacked (unpack). <ul><li>Otherwise, it returns immediately.</li></ul></li><li>Finally, cancel all proxies and return the result.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">safeChain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> mapper</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> revokes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">toProxy</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> revokes<span class="token punctuation">)</span>
  <span class="token keyword">const</span> mappedResult <span class="token operator">=</span> <span class="token function">mapper</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">isPack</span><span class="token punctuation">(</span>mappedResult<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">unpack</span><span class="token punctuation">(</span>mappedResult<span class="token punctuation">)</span> <span class="token operator">:</span> mappedResult

  revokes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="helper-code" tabindex="-1"><a class="header-anchor" href="#helper-code" aria-hidden="true">#</a> Helper code</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> symbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;safe&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">isNullish</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> value <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token keyword">null</span>
<span class="token keyword">const</span> <span class="token function-variable function">isPack</span> <span class="token operator">=</span> <span class="token parameter">pack</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> pack <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> symbol <span class="token keyword">in</span> pack

<span class="token keyword">const</span> <span class="token function-variable function">pack</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>symbol<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">unpack</span> <span class="token operator">=</span> <span class="token parameter">pack</span> <span class="token operator">=&gt;</span> pack<span class="token punctuation">[</span>symbol<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="core-function" tabindex="-1"><a class="header-anchor" href="#core-function" aria-hidden="true">#</a> Core function</h5><ul><li>toProxy wraps (pack) the state and creates a proxy.</li><li>trap handles the state when it is queried. <ul><li>If it is a key (symbol) defined internally, it returns the value.</li><li>Otherwise <ul><li>When undefined or null, wrap undefined in a proxy.</li><li>If it is a normal value, wrap the normal value in a proxy.</li></ul></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">toProxy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> revokes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> wrap <span class="token operator">=</span> <span class="token function">pack</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
  <span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">trap</span><span class="token punctuation">(</span>revokes<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>proxy<span class="token punctuation">,</span> revoke<span class="token punctuation">}</span> <span class="token operator">=</span> Proxy<span class="token punctuation">.</span><span class="token function">revocable</span><span class="token punctuation">(</span>wrap<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
  revokes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>revoke<span class="token punctuation">)</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">trap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">revokes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> unpacked <span class="token operator">=</span> <span class="token function">unpack</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
      <span class="token keyword">return</span> key <span class="token operator">===</span> symbol <span class="token operator">?</span>
        <span class="token literal-property property">unpacked</span> <span class="token operator">:</span>
        <span class="token function">toProxy</span><span class="token punctuation">(</span><span class="token function">isNullish</span><span class="token punctuation">(</span>unpacked<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> unpacked<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> revokes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-case" tabindex="-1"><a class="header-anchor" href="#use-case" aria-hidden="true">#</a> Use case</h4><p>The backend API response can be used after the API response occurs. However, if you query the value in the getter and use it in the vue, angular component, a reference error occurs. In this case, you can prevent errors by using safeChain.</p><p>It is a code that assumes the use of the backend API.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> backendApi <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">fetchResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>response <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Success&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token string">&#39;Ok&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">result</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span>result
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>backendApi<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
backendApi<span class="token punctuation">.</span><span class="token function">fetchResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>backendApi<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// { message: &#39;Success&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can remove the conditional statement by using the safeChain function.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> backendApi <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">fetchResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>response <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Success&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token string">&#39;Ok&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">result</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">safeChain</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>result<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>backendApi<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
backendApi<span class="token punctuation">.</span><span class="token function">fetchResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>backendApi<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// { message: &#39;Success&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> End</h4>`,27);function m(b,h){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,u,k,n("p",null,[s("Various techniques are used to safely use objects and arrays. The methods include assigning a default value when undefined or using a conditional statement. And recently, "),n("a",d,[s("optional chaining"),c(a)]),s(" syntax is also used to safely chain.")]),v])}const g=e(i,[["render",m],["__file","safe-chain.html.vue"]]);export{g as default};