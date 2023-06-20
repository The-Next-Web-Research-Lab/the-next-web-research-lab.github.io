<template><div><blockquote>
<p>2020.07.19</p>
</blockquote>
<h2 id="atom" tabindex="-1"><a class="header-anchor" href="#atom" aria-hidden="true">#</a> Atom</h2>
<h3 id="유틸" tabindex="-1"><a class="header-anchor" href="#유틸" aria-hidden="true">#</a> 유틸</h3>
<h4 id="observer" tabindex="-1"><a class="header-anchor" href="#observer" aria-hidden="true">#</a> Observer</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> Ref</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="debounce" tabindex="-1"><a class="header-anchor" href="#debounce" aria-hidden="true">#</a> Debounce</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="atom-1" tabindex="-1"><a class="header-anchor" href="#atom-1" aria-hidden="true">#</a> atom</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="컴포넌트" tabindex="-1"><a class="header-anchor" href="#컴포넌트" aria-hidden="true">#</a> 컴포넌트</h2>
<h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="definecomponent" tabindex="-1"><a class="header-anchor" href="#definecomponent" aria-hidden="true">#</a> defineComponent</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="컴포넌트-사용-예제" tabindex="-1"><a class="header-anchor" href="#컴포넌트-사용-예제" aria-hidden="true">#</a> 컴포넌트 사용 예제</h2>
<h3 id="마운트" tabindex="-1"><a class="header-anchor" href="#마운트" aria-hidden="true">#</a> 마운트</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="atom-2" tabindex="-1"><a class="header-anchor" href="#atom-2" aria-hidden="true">#</a> Atom</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="maincomponent" tabindex="-1"><a class="header-anchor" href="#maincomponent" aria-hidden="true">#</a> MainComponent</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="textcomponent" tabindex="-1"><a class="header-anchor" href="#textcomponent" aria-hidden="true">#</a> TextComponent</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>Atom 변경 시, 다시 랜더링이 필요한 컴포넌트는 이와 같이 사용한다.
<ul>
<li><code v-pre>defineComponent({atomA, atomB, ...}, renderFn)</code></li>
</ul>
</li>
</ul>
<h3 id="inputcomponent" tabindex="-1"><a class="header-anchor" href="#inputcomponent" aria-hidden="true">#</a> InputComponent</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="고민" tabindex="-1"><a class="header-anchor" href="#고민" aria-hidden="true">#</a> 고민</h4>
<p>Atom 변경 시, 다시 랜더링되면 Focus와 입력이 종료된다.
그래서 Atom 변경 시, 다시 랜더링이 되지 않게 <code v-pre>defineComponent</code>의 첫번째 인자에 atom을 주입 못했다.</p>
<p>다시 랜더링 됬을 때, form 요소가 다시 랜더링 되지 않게 처리가 필요하다.</p>
<h3 id="데모" tabindex="-1"><a class="header-anchor" href="#데모" aria-hidden="true">#</a> 데모</h3>
<ul>
<li><a href="https://chodragon9.github.io/dragonjs/docs/src/component/recoil-feature/example/advanced.html" target="_blank" rel="noopener noreferrer">데모<ExternalLinkIcon/></a></li>
</ul>
</div></template>


