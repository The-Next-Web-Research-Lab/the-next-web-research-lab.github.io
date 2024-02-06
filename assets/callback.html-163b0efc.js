import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-61a3cc4b.js";const t={},o=e(`<h1 id="when-to-use-callbacks" tabindex="-1"><a class="header-anchor" href="#when-to-use-callbacks" aria-hidden="true">#</a> When to use callbacks</h1><h3 id="purpose-of-the-article" tabindex="-1"><a class="header-anchor" href="#purpose-of-the-article" aria-hidden="true">#</a> Purpose of the article</h3><p>When writing JavaScript code, I use callbacks clearly at different times. When writing asynchronous code, I use them only with Promise, and when writing synchronous code, I use them as arguments for functions like map, filter, reduce.</p><p>When writing asynchronous code, I want to remind myself of the obvious reason why I don&#39;t use callbacks as arguments. And I want to summarize the meaning of using callbacks as arguments in synchronous code.</p><h3 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h3><ul><li>Why is the callback pattern not appropriate for asynchronous processing?</li><li>What is the meaning of using callbacks as arguments in synchronous code?</li></ul><h3 id="why-is-the-callback-pattern-not-appropriate-for-asynchronous-processing" tabindex="-1"><a class="header-anchor" href="#why-is-the-callback-pattern-not-appropriate-for-asynchronous-processing" aria-hidden="true">#</a> Why is the callback pattern not appropriate for asynchronous processing?</h3><p>Using the callback pattern for asynchronous processing makes the code hard to read with nesting and indentation. But this is a secondary factor that distracts the eye, and there are other reasons.</p><p>There are two reasons why you should not use the callback pattern for asynchronous processing.</p><p><strong>First</strong>, the callback pattern shows the asynchronous flow in a nonlinear, non-sequential direction. Therefore, to understand the implemented code, you have to hop around the entire code base to follow the sequential flow from one function to another and then to the next function.</p><p>People are used to planning in a sequential, single-threaded way, but the callback pattern makes it hard for people to infer.</p><p><strong>Second</strong>, the callback pattern implicitly passes control to the calling part, which leads to a trust issue.</p><p>You need additional coding to filter out situations where you can prevent unwanted repetitive calls, receive success/error signals simultaneously or not at all.</p><p>Because of the problems with asynchronous flow control and function control, receiving callbacks as arguments is a hindrance to writing easy-to-understand code.</p><p>The solution is to use <code>Promise</code>, which we all know. Using <code>Promise</code>, you can have asynchronous flow control and function control.</p><h3 id="what-is-the-meaning-of-using-callbacks-as-arguments-in-synchronous-code" tabindex="-1"><a class="header-anchor" href="#what-is-the-meaning-of-using-callbacks-as-arguments-in-synchronous-code" aria-hidden="true">#</a> What is the meaning of using callbacks as arguments in synchronous code?</h3><p>The meaning of using callbacks as arguments in synchronous code is to share control. By sharing control, you can achieve reusability and polymorphism.</p><p>I explained earlier that using callbacks causes problems with control. When asynchronous, callbacks are hard to guarantee order, so callbacks have no return value. But in synchronous code, the order is guaranteed, so you can have a return value. As a result, control is also shared.</p><p>Let&#39;s assume that there is an add function that iterates over an array and adds 1. This function has both iteration and operation control.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// [2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let&#39;s take control by taking a callback as an argument. By taking a callback as an argument, you can get the operation control of the iteration and operation.</p><p>The add function user side controls the operation of adding 1. And you can also do other operations.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> added1 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> added10 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>added1<span class="token punctuation">)</span> <span class="token comment">// [2, 3, 4]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>added10<span class="token punctuation">)</span> <span class="token comment">// [11, 12, 13]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let&#39;s move on to the story of polymorphism. Polymorphism can be easily explained as a phenomenon that describes a function that works on two or more types as having polymorphism. In other words, it is a phenomenon of operations that can be used by two or more types.</p><p>The add function not only adds numbers, but also modifies the items of the array. Such a function is called map. This is an example of using the add function name as map.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">map</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// [2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> changedProduct <span class="token operator">=</span> <span class="token function">map</span><span class="token punctuation">(</span>product<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>price<span class="token punctuation">,</span> count<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    price<span class="token punctuation">,</span>
    count<span class="token punctuation">,</span>
    <span class="token literal-property property">total</span><span class="token operator">:</span> price <span class="token operator">*</span> count
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// [</span>
<span class="token comment">//   { price: 1000, count: 2, total: 2000 },</span>
<span class="token comment">//   { price: 2000, count: 3, total: 6000 }</span>
<span class="token comment">// ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h4><p>When using callbacks as arguments in asynchronous code, there are problems with non-sequential flow control and trust issues due to control inversion, but in synchronous code, you can achieve reusability and polymorphism by sharing control. The same callback pattern, but it brings a lot of benefits depending on the situation. I think it will be a part of easy-to-understand code if used appropriately.</p>`,30),p=[o];function c(i,r){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","callback.html.vue"]]);export{d as default};