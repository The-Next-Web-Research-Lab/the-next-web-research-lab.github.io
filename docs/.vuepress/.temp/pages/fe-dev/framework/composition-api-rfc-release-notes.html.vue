<template><div><h1 id="composition-api-rfc-릴리즈-노트-정리" tabindex="-1"><a class="header-anchor" href="#composition-api-rfc-릴리즈-노트-정리" aria-hidden="true">#</a> Composition API RFC 릴리즈 노트 정리</h1>
<blockquote>
<p>초안작성일: 2020.02.29</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p><code v-pre>@vue/composition-api</code>의 릴리즈 노트를 통해 어떤 변경 사항이 생길지 예상하기 위해 정리한 포스트입니다.</p>
</div>
<h2 id="v0-4-0" tabindex="-1"><a class="header-anchor" href="#v0-4-0" aria-hidden="true">#</a> v0.4.0</h2>
<ul>
<li>[리팩토링] 이름변경 <code v-pre>createComponent</code> =&gt; <code v-pre>defineComponent</code></li>
<li>[라이프사이클] <code v-pre>onUnmounted</code>의 호출 시점이 <code v-pre>destroyed</code>와 <code v-pre>deactivated</code> =&gt; <code v-pre>destroyed</code>로 변경 <a href="https://github.com/vuejs/composition-api/pull/217/files#diff-3749ddba11f730d062a1c8aec308f09cL37" target="_blank" rel="noopener noreferrer">#217<ExternalLinkIcon/></a></li>
</ul>
<h2 id="v0-3-3" tabindex="-1"><a class="header-anchor" href="#v0-3-3" aria-hidden="true">#</a> v0.3.3</h2>
<ul>
<li>[라이프사이클] <code v-pre>onServerPrefetch</code> 추가</li>
<li>[컨텍스트] <code v-pre>ssrContext</code> 추가</li>
<li>[TypeScript] computed type 이슈 해결</li>
</ul>
<h2 id="v0-3-2" tabindex="-1"><a class="header-anchor" href="#v0-3-2" aria-hidden="true">#</a> v0.3.2</h2>
<ul>
<li>[TypeScript] <code v-pre>props</code> 옵션 타입 추론 개선</li>
</ul>
<h2 id="v0-3-1" tabindex="-1"><a class="header-anchor" href="#v0-3-1" aria-hidden="true">#</a> v0.3.1</h2>
<ul>
<li>[Fix] watcher 콜백이 정상적인 시점에 해제 안되는 현상 해결</li>
</ul>
<h2 id="v0-3-0" tabindex="-1"><a class="header-anchor" href="#v0-3-0" aria-hidden="true">#</a> v0.3.0</h2>
<ul>
<li>[TypeScript] TypeScript 타입 정의 개선</li>
<li>[컨텍스트] <code v-pre>context.slots</code>가 render전에 사용할 수 없는 현상 해결</li>
</ul>
<h2 id="v0-2-1" tabindex="-1"><a class="header-anchor" href="#v0-2-1" aria-hidden="true">#</a> v0.2.1</h2>
<ul>
<li>[TypeScript] prop 타입을 직접 선언 가능함</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createComponent<span class="token punctuation">,</span> createElement <span class="token keyword">as</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue/composition-api'</span>

<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  msg<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createComponent</span><span class="token generic class-name"><span class="token operator">&lt;</span>Props<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span> 
     msg<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// required by vue 2 runtime</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[TypeScript] ref 타입 선언</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> dateRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>Date<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="v0-2-0" tabindex="-1"><a class="header-anchor" href="#v0-2-0" aria-hidden="true">#</a> v0.2.0</h2>
<ul>
<li>[리팩토링] 이름 변경 <code v-pre>onBeforeDestroy()</code> =&gt; <code v-pre>onBeforeUnmount()</code></li>
<li>[라이프사이클] <code v-pre>onCreated()</code>, <code v-pre>onDestroyed</code> 제거</li>
</ul>
<h2 id="v0-1-0" tabindex="-1"><a class="header-anchor" href="#v0-1-0" aria-hidden="true">#</a> v0.1.0</h2>
<ul>
<li>RFC로 되면서 패키지 이름 변경됨</li>
</ul>
</div></template>


