<template><div><blockquote>
<p>2020.07.22</p>
</blockquote>
<p>Virtual DOM과 유사한 역할을 하며, Document<strong>Fragment</strong>를 사용한 Virtual <strong>DOM</strong>으로 <strong>Fragment DOM</strong>으로 명명했다.</p>
<h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// Component 생성 시, 작성하는 함수</span>
<span class="token keyword">type</span> <span class="token class-name">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> FragmentDOM

<span class="token keyword">type</span> <span class="token class-name">patch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>FragmentDOM<span class="token punctuation">,</span> AutualDOM<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>

<span class="token keyword">type</span> <span class="token class-name">isNodeChanged</span> <span class="token operator">=</span> <span class="token punctuation">(</span>FragmentDOM<span class="token punctuation">,</span> AutualDOM<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span>
<span class="token keyword">type</span> <span class="token class-name">isAttributeChanged</span> <span class="token operator">=</span> <span class="token punctuation">(</span>FragmentDOM<span class="token punctuation">,</span> AutualDOM<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="patch-전략" tabindex="-1"><a class="header-anchor" href="#patch-전략" aria-hidden="true">#</a> patch 전략</h2>
<h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h3>
<p>같은 레벨의 Node를 순회하며 비교한다. 비교 후 변경 사항이 있을 때, Replace를 하고 해당 Node의 순회를 종료한다.</p>
<h3 id="attribute" tabindex="-1"><a class="header-anchor" href="#attribute" aria-hidden="true">#</a> Attribute</h3>
<p>Attribute는 하나라도 변경되면 모두 변경한다.</p>
<h3 id="node와-attribute-우선순위" tabindex="-1"><a class="header-anchor" href="#node와-attribute-우선순위" aria-hidden="true">#</a> Node와 Attribute 우선순위?</h3>
<p>Attribute 변경은 신규 추가/삭제에 미발생한다. 기존 Node에만 Attribute를 변경한다.</p>
<h2 id="코어" tabindex="-1"><a class="header-anchor" href="#코어" aria-hidden="true">#</a> 코어</h2>
<h3 id="core-render-js" tabindex="-1"><a class="header-anchor" href="#core-render-js" aria-hidden="true">#</a> /core/render.js</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="사용예" tabindex="-1"><a class="header-anchor" href="#사용예" aria-hidden="true">#</a> 사용예</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="core-patch-js" tabindex="-1"><a class="header-anchor" href="#core-patch-js" aria-hidden="true">#</a> /core/patch.js</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="사용예-1" tabindex="-1"><a class="header-anchor" href="#사용예-1" aria-hidden="true">#</a> 사용예</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="사용케이스" tabindex="-1"><a class="header-anchor" href="#사용케이스" aria-hidden="true">#</a> 사용케이스</h2>
<h3 id="상태-변경-후-패치" tabindex="-1"><a class="header-anchor" href="#상태-변경-후-패치" aria-hidden="true">#</a> 상태 변경 후 패치</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li><a href="https://chodragon9.github.io/dragonjs/docs/src/component/fragment-dom/index.html" target="_blank" rel="noopener noreferrer">데모<ExternalLinkIcon/></a></li>
</ul>
</div></template>


