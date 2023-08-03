import{_ as n,o as s,c as a,e as p}from"./app-f78a81fc.js";const t={},o=p(`<h2 id="from-js" tabindex="-1"><a class="header-anchor" href="#from-js" aria-hidden="true">#</a> from.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">from</span> <span class="token operator">=</span> <span class="token parameter">iter</span> <span class="token operator">=&gt;</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>iter<span class="token punctuation">)</span>

<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token function">from</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
<span class="token comment">// [[&#39;a&#39;, 1], [&#39;b&#39;, 2], [&#39;c&#39;, 3]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iterable-ts" tabindex="-1"><a class="header-anchor" href="#iterable-ts" aria-hidden="true">#</a> iterable.ts</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">from</span> <span class="token operator">=</span> iter <span class="token operator">=&gt;</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>iter<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token punctuation">(</span>mapper<span class="token punctuation">,</span> iterable<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">from</span><span class="token punctuation">(</span>iterable<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>mapper<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">filter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>predicate<span class="token punctuation">,</span> iterable<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">from</span><span class="token punctuation">(</span>iterable<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>predicate<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">join</span> <span class="token operator">=</span> <span class="token punctuation">(</span>sep<span class="token punctuation">,</span> iter<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">from</span><span class="token punctuation">(</span>iter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">size</span> <span class="token operator">=</span> <span class="token punctuation">(</span>iterable<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">from</span><span class="token punctuation">(</span>iterable<span class="token punctuation">)</span><span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join-js" tabindex="-1"><a class="header-anchor" href="#join-js" aria-hidden="true">#</a> join.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">join</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">sep<span class="token punctuation">,</span> iter</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>iter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span>

<span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;a=1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c=CC&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d=DD&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// a=1&amp;c=CC&amp;d=DD</span>
<span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a=1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c=CC&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d=DD&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// a=1&amp;c=CC&amp;d=DD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recur1-js" tabindex="-1"><a class="header-anchor" href="#recur1-js" aria-hidden="true">#</a> recur1.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">linkedList</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> list<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> tail<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">pred<span class="token punctuation">,</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> tail<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">pred</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">concat</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token function">filter</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">filter</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> tail<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xs <span class="token operator">=</span> <span class="token function">linkedList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ys <span class="token operator">=</span> <span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> n <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">,</span> xs<span class="token punctuation">)</span>
<span class="token keyword">const</span> zs <span class="token operator">=</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> xs<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recur2-js" tabindex="-1"><a class="header-anchor" href="#recur2-js" aria-hidden="true">#</a> recur2.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">linkedList</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> list<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> tail<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">pred<span class="token punctuation">,</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> tail<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">pred</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token function">concat</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token function">filter</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token function">filter</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> tail<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xs <span class="token operator">=</span> <span class="token function">linkedList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ys <span class="token operator">=</span> <span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> n <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">,</span> xs<span class="token punctuation">)</span>
<span class="token keyword">const</span> zs <span class="token operator">=</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> xs<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ys<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ys<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ys<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ys<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ys<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),e=[o];function c(u,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","Iterable.html.vue"]]);export{k as default};