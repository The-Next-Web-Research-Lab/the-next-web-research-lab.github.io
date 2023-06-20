<template><div><blockquote>
<p>2020.07.24</p>
</blockquote>
<p>현실적으로 서비스를 운영할 때, 마크업은 탬플릿 형태로 반영된다.
탬플릿 형태를 사용하는 형태로 심플한 패치 기능 프로젝트다.</p>
<h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FragmentAST</span> <span class="token punctuation">{</span>
  tagName<span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">:</span> FragmentAST<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  options<span class="token operator">:</span> <span class="token punctuation">{</span>
    attrs<span class="token operator">:</span> object
    events<span class="token operator">:</span> object
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">parse</span> <span class="token operator">=</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token operator">=></span> FragmentAST<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">generate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>FragmentAST<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> events<span class="token punctuation">)</span> <span class="token operator">=></span> FragmentDOM
<span class="token keyword">type</span> <span class="token class-name">patch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>FragmentDOM<span class="token punctuation">,</span> AutualDOM<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> Core</h2>
<p><RouterLink to="/src/component/fragment-dom/">Fragment DOM</RouterLink>에서 영감을 얻은 코어.</p>
<h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse" aria-hidden="true">#</a> parse</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="generate" tabindex="-1"><a class="header-anchor" href="#generate" aria-hidden="true">#</a> generate</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="fragment-dom" tabindex="-1"><a class="header-anchor" href="#fragment-dom" aria-hidden="true">#</a> fragment-dom</h3>
<h4 id="patch" tabindex="-1"><a class="header-anchor" href="#patch" aria-hidden="true">#</a> patch</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="사용예" tabindex="-1"><a class="header-anchor" href="#사용예" aria-hidden="true">#</a> 사용예</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>


