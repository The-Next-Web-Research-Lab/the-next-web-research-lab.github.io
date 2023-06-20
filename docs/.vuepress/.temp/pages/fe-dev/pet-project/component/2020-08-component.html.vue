<template><div><h2 id="🤔-목표" tabindex="-1"><a class="header-anchor" href="#🤔-목표" aria-hidden="true">#</a> 🤔 목표</h2>
<p>이 펫 프로젝트의 목표는 다음과 같다.</p>
<ul>
<li>최종적으로 라이트 한 프로젝트에 사용할 수준으로 제작한다.</li>
<li>컴포넌트 정의 기능을 간단하게 만들 수 있어야 한다.
<ul>
<li>아키텍처 레벨의 코드는 난이도가 높을 가능성이 크기 때문이다.</li>
</ul>
</li>
<li>컴포넌트 사용을 쉽게 사용 가능한 형태로 제작해야 한다.</li>
<li>지원 기능
<ul>
<li>상태 변경 시, 다시 렌더링 되는 기능</li>
<li>부모-자식 관계를 맺을 수 있는 기능</li>
<li>공유상태를 사용할 수 있는 기능</li>
</ul>
</li>
</ul>
<h2 id="📄-컴포넌트-사용법" tabindex="-1"><a class="header-anchor" href="#📄-컴포넌트-사용법" aria-hidden="true">#</a> 📄 컴포넌트 사용법</h2>
<h3 id="기본-컴포넌트" tabindex="-1"><a class="header-anchor" href="#기본-컴포넌트" aria-hidden="true">#</a> 기본 컴포넌트</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li><code v-pre>component</code>로 컴포넌트를 선언한다.</li>
<li><code v-pre>component</code> 인자에 함수를 전달하는 데, 해당 함수를 <code v-pre>createComponent</code>로 명명한다.</li>
<li><code v-pre>createComponent</code> 함수는 항상 함수를 반환해야 하는 데. 해당 함수는 <code v-pre>render</code>로 명명한다.</li>
<li><code v-pre>createComponent</code>는 첫번째 인자에 <code v-pre>html</code>가 전달된다.
<ul>
<li><code v-pre>html</code>은 <code v-pre>template</code>을 인자로 받아, <strong>DOM을 반환</strong>한다.</li>
</ul>
</li>
</ul>
<h3 id="컴포넌트-내부-스토어-사용" tabindex="-1"><a class="header-anchor" href="#컴포넌트-내부-스토어-사용" aria-hidden="true">#</a> 컴포넌트 내부 스토어 사용</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li><code v-pre>createComponent</code>는 첫번째 인자에 <code v-pre>html</code>과 함께, <code v-pre>store</code>가 전달된다.</li>
<li><code v-pre>store</code>는 <strong>컴포넌트 내부 스토어</strong>다.</li>
<li><code v-pre>store.useState</code>로 <strong>컴포넌트 상태를 등록</strong>한다.
<ul>
<li>등록된 상태는 <code v-pre>get</code>으로 조회, <code v-pre>set</code>으로 수정 할 수 있다.</li>
<li><code v-pre>set</code>이 실행되면 <code v-pre>render</code>로 <strong>다시 렌더링</strong>한다.</li>
</ul>
</li>
<li>DOM 이벤트는 DOM API로 등록한다.</li>
</ul>
<h3 id="리스트-렌더링" tabindex="-1"><a class="header-anchor" href="#리스트-렌더링" aria-hidden="true">#</a> 리스트 렌더링</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>리스트 렌더링은 Array API를 사용한다.</li>
<li><code v-pre>set</code> 함수의 두번째 인자에 <code v-pre>false</code>를 전달하면, 해당 상태를 전파 하지 않는다.</li>
</ul>
<h3 id="컨디션-렌더링" tabindex="-1"><a class="header-anchor" href="#컨디션-렌더링" aria-hidden="true">#</a> 컨디션 렌더링</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>컨디션 렌디링은 연산자를 사용한다.</li>
</ul>
<h3 id="부모-자식-관계" tabindex="-1"><a class="header-anchor" href="#부모-자식-관계" aria-hidden="true">#</a> 부모-자식 관계</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>자식 컴포넌트는 <code v-pre>replaceWith</code>으로 DOM을 변경한다.</li>
<li>자식 컴포넌트에 <code v-pre>{props, emit}</code>을 전달할 수 있다.
<ul>
<li><code v-pre>props</code>는 자식에게 전달할 상태를 담는다.</li>
<li><code v-pre>emit</code>은 자식에게 전달 받을 함수를 담는다.</li>
</ul>
</li>
<li>자식 컴포넌트에 전달된 <code v-pre>{props, emit}</code>은 <code v-pre>createComponent</code>의 두번째 인자로 전달된다.</li>
<li><code v-pre>props</code>, <code v-pre>emit</code> 자료구조는 강제성이 없으나, 인자 네이밍은 강제한다.</li>
</ul>
<h3 id="공유-상태-사용" tabindex="-1"><a class="header-anchor" href="#공유-상태-사용" aria-hidden="true">#</a> 공유 상태 사용</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>공유 상태를 사용하려면, <code v-pre>store.share</code>로 스토어를 등록한다.</li>
<li>등록된 스토어를 바로 사용하지 않고, 공유 상태를 사용한다.</li>
</ul>
<h3 id="마운트" tabindex="-1"><a class="header-anchor" href="#마운트" aria-hidden="true">#</a> 마운트</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>컴포넌트 함수의 반환값은 DOM임으로 <code v-pre>appendChild</code>로 마운트한다.</li>
</ul>
<h3 id="💻-데모" tabindex="-1"><a class="header-anchor" href="#💻-데모" aria-hidden="true">#</a> 💻 데모</h3>
<blockquote>
<p><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">ESM<ExternalLinkIcon/></a>를 지원하는 브라우저에서만 동작함</p>
</blockquote>
<ul>
<li><a href="https://chodragon9.github.io/dragonjs/docs/src/component/2020-08-component/index.html" target="_blank" rel="noopener noreferrer">데모<ExternalLinkIcon/></a></li>
</ul>
<h2 id="📄-코어-코드" tabindex="-1"><a class="header-anchor" href="#📄-코어-코드" aria-hidden="true">#</a> 📄 코어 코드</h2>
<h3 id="헬퍼" tabindex="-1"><a class="header-anchor" href="#헬퍼" aria-hidden="true">#</a> 헬퍼</h3>
<h4 id="mapvalues" tabindex="-1"><a class="header-anchor" href="#mapvalues" aria-hidden="true">#</a> mapValues</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>Object의 값을 변경해주는 map 함수다.</li>
</ul>
<h4 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>템플릿을 DOM으로 변환하는 역할을 한다.</li>
</ul>
<h4 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>DOM API 헬퍼 역할을 한다.</li>
</ul>
<h4 id="observer" tabindex="-1"><a class="header-anchor" href="#observer" aria-hidden="true">#</a> observer</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li>옵져버 패턴을 구현한 함수다.</li>
</ul>
<h3 id="스토어" tabindex="-1"><a class="header-anchor" href="#스토어" aria-hidden="true">#</a> 스토어</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li><code v-pre>createStore</code> 실행 시, <code v-pre>subject</code>를 생성한다.</li>
<li><code v-pre>useState</code>로 상태를 등록한다.</li>
<li><code v-pre>share</code>로 스토어의 상태변경전파를 공유한다.</li>
<li><code v-pre>_subscribe</code>, <code v-pre>_unsubscribe</code>는 코어레벨에서 사용된다.</li>
</ul>
<h3 id="컴포넌트" tabindex="-1"><a class="header-anchor" href="#컴포넌트" aria-hidden="true">#</a> 컴포넌트</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><ul>
<li><code v-pre>createComponent</code>를 인자로 받는다.</li>
<li><code v-pre>createComponent</code>를 실행하여 <code v-pre>render</code>를 반환 받는다.</li>
<li><code v-pre>render</code>를 최초에 실행 후 반환한다.</li>
<li><code v-pre>store</code>를 감시하며, 상태 전파을 받으면 <code v-pre>render</code>를 재실행하고 DOM을 교체한다.</li>
</ul>
</div></template>


