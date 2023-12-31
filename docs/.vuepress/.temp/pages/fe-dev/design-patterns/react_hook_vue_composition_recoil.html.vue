<template><div><h1 id="react-hook-vue-composition-recoil-정리" tabindex="-1"><a class="header-anchor" href="#react-hook-vue-composition-recoil-정리" aria-hidden="true">#</a> React Hook/Vue Composition/Recoil 정리</h1>
<p>React Hook, Vue Composition API, Recoil의 발생 시기와 이유에 대한 정리자료입니다.</p>
<h2 id="react-hook" tabindex="-1"><a class="header-anchor" href="#react-hook" aria-hidden="true">#</a> React Hook</h2>
<h3 id="발생시기" tabindex="-1"><a class="header-anchor" href="#발생시기" aria-hidden="true">#</a> 발생시기</h3>
<blockquote>
<p>https://ko.reactjs.org/docs/hooks-intro.html#video-introduction</p>
</blockquote>
<ul>
<li><a href="http://conf2018.reactjs.org/event.html?sophiebits" target="_blank" rel="noopener noreferrer">2018.10.25 09:00AM 세션<ExternalLinkIcon/></a></li>
<li><a href="http://conf2018.reactjs.org/" target="_blank" rel="noopener noreferrer">React Conf 2018<ExternalLinkIcon/></a>에서 Sophie Alpert와 Dan Abramov는 Hook를 소개했었다.</li>
</ul>
<h3 id="hook-이란" tabindex="-1"><a class="header-anchor" href="#hook-이란" aria-hidden="true">#</a> Hook 이란</h3>
<blockquote>
<p>https://ko.reactjs.org/docs/hooks-overview.html#state-hook</p>
</blockquote>
<p>여기서 <code v-pre>useState</code>가 바로 <strong>Hook</strong> 입니다.</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// "count"라는 새 상태 변수를 선언합니다</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">You clicked </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> times</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Click me
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>https://ko.reactjs.org/docs/hooks-overview.html#but-what-is-a-hook</p>
</blockquote>
<p>Hook은 함수 컴포넌트에서 React state와 Lifecycle Features을 <strong>연동(hook into)</strong> 할 수 있게 해주는 함수다. Hook은 Class안에서는 동작하지 않는다. 대신 Class 없이 React를 사용할 수 있게 해주는 것이다.</p>
<h4 id="effect-hook" tabindex="-1"><a class="header-anchor" href="#effect-hook" aria-hidden="true">#</a> Effect Hook</h4>
<blockquote>
<p>https://ko.reactjs.org/docs/hooks-overview.html#effect-hook</p>
</blockquote>
<p>React 컴포넌트 안에서 데이터를 가져오거나 구독하는 것을 볼 수 있다. 또한 DOM을 직접 조작하는 작업을 할 수 있다.
이런 모든 동작을 side effects 또는 effects라고 한다. 왜냐면 이런 동작은 다른 컴포넌트에 영향을 줄 수 있고, 렌더링 과정에서 구현할 수 없는 작업이기 때문이다.</p>
<p><code v-pre>useEffect</code>는 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해준다.</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// componentDidMount, componentDidUpdate와 비슷합니다</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">You clicked </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> times</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">You clicked </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> times</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Click me
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hook-사용-규칙" tabindex="-1"><a class="header-anchor" href="#hook-사용-규칙" aria-hidden="true">#</a> Hook 사용 규칙</h4>
<blockquote>
<p>https://ko.reactjs.org/docs/hooks-overview.html#rules-of-hooks</p>
</blockquote>
<p>Hook은 JS 함수이지만, 두 가지 규칙을 준수해야 한다.</p>
<ol>
<li>최상위에서만 Hook을 호출한다.
<ul>
<li>반복문, 조건문, 중첩된 함수 내에서 Hook을 실행해서는 안된다.</li>
</ul>
</li>
<li>React 함수 컴포넌트 내에서만 Hook을 호출해야 한다.
<ul>
<li>일반 JS 함수에서는 Hook을 호출해서는 안된다.</li>
</ul>
</li>
</ol>
<h3 id="발생이유" tabindex="-1"><a class="header-anchor" href="#발생이유" aria-hidden="true">#</a> 발생이유</h3>
<blockquote>
<p>https://ko.reactjs.org/docs/hooks-intro.html#motivation</p>
</blockquote>
<ul>
<li>컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.
<ul>
<li>React는 컴포넌트에 재사용 가능한 행동을 붙이는 방법을 제공하지 않는다.</li>
<li>render props과 HOCs 패턴을 사용해도 컴포넌트를 재구성해야 하며 코드를 추적하기 어렵게 만든다.
<ul>
<li>다른 추상화 레이어에 둘러 쌓여 Wrapper Hell을 볼 가능성이 높다.</li>
</ul>
</li>
</ul>
</li>
<li>복잡한 컴포넌트들은 이해하기 어렵다.
<ul>
<li>유지하기 힘든 상태와 사이드 이펙트로 인해 버그가 쉽게 발생하고 무결성을 쉽게 해친다.</li>
<li>상태 관련 로직이 모든 공간에 있기 때문에 작게 만들기 힘들고, 테스트하기도 어렵다.</li>
</ul>
</li>
<li>Class는 사람과 기계를 혼동시킨다.
<ul>
<li>코드의 재사용성과 코드 구성을 좀 더 어렵게 만든다.</li>
<li>React를 배우는 데 큰 진입장벽이다.</li>
<li>JS의 this가 어떻게 동작하는 지 알아야 한다.</li>
<li>숙련된 React 개발자 사이에서도 Class 컴포넌트들을 구별하고 각 요소를 언제 사용하는지 의견이 일치하지 않는다.</li>
<li>HMR에서 깨지기 쉽고 신뢰할 수 없게 만든다.</li>
</ul>
</li>
</ul>
<h2 id="vue-composition-api" tabindex="-1"><a class="header-anchor" href="#vue-composition-api" aria-hidden="true">#</a> Vue Composition API</h2>
<h3 id="발생시기-1" tabindex="-1"><a class="header-anchor" href="#발생시기-1" aria-hidden="true">#</a> 발생시기</h3>
<blockquote>
<p>https://vue-composition-api-rfc.netlify.app/#composition-api-rfc</p>
</blockquote>
<ul>
<li>2019.07.10</li>
<li>Composition API RFC 시작 날짜</li>
</ul>
<h3 id="composition-api-이란" tabindex="-1"><a class="header-anchor" href="#composition-api-이란" aria-hidden="true">#</a> Composition API 이란</h3>
<p>컴포넌트 로직을 유연하게 구성할 수 있는 부가적인 함수기반 API 세트다. <code v-pre>reactive</code>, <code v-pre>computed</code>가 <strong>Composition API</strong> 중 하나이다.</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Count is: {{ state.count }}, double is: {{ state.double }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">double</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      increment
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="composition-api-사용-규칙" tabindex="-1"><a class="header-anchor" href="#composition-api-사용-규칙" aria-hidden="true">#</a> Composition API 사용 규칙</h4>
<ul>
<li>Composition API의 진입점은 <code v-pre>setup</code> 함수를 사용한다.</li>
<li>Lifecycle Hook은 <code v-pre>setup</code> 함수에 등록한다.</li>
</ul>
<h3 id="발생이유-1" tabindex="-1"><a class="header-anchor" href="#발생이유-1" aria-hidden="true">#</a> 발생이유</h3>
<ul>
<li>로직 재사용 &amp; 코드 구성
<ul>
<li>시간이 지남에 따라 기능이 추가되는 컴포넌트는 추론하기 어렵다.</li>
<li>여러 컴포넌트간의 논리를 추출하고 재사용하기 위한 깨끗하고 비용이 들지 않는 메커니즘을 Vue에서 재공하지 않는다.</li>
</ul>
</li>
<li>더 좋은 타입 추론
<ul>
<li>Vue2 API는 단순히 타입 추론을 염두에 두고 설계되지 않아 TS와 잘 작동하도록 만들 때 많은 복잡성을 만든다.
<ul>
<li>Vue2 API는 <code v-pre>this</code> 컨텍스트를 의존하고 있기 때문에 TS 통합이 어렵다.</li>
<li>Vue2의 <code v-pre>this</code>는 JS 보다 마술적으로 동작한다.</li>
<li>예를 들어 <code v-pre>methods</code> 아래에 중첩된 함수의 <code v-pre>this</code>는 <code v-pre>methods</code> 오브젝트가 아닌 컴포넌트 인스턴스를 가리킨다.</li>
</ul>
</li>
<li>Class API로 제공하려고 시도했으나 Decorator를 의존해야 함으로 Vue3의 기반을 세우는 데, 위험하다고 판단했다.</li>
<li>자연스럽게 친숙한 일반 변수와 함수를 사용하여, 메뉴얼 타입 힌트가 거의 필요없는 타입 추론을 할 수 있게 했다.</li>
</ul>
</li>
</ul>
<h2 id="recoil" tabindex="-1"><a class="header-anchor" href="#recoil" aria-hidden="true">#</a> Recoil</h2>
<h3 id="발생시기-2" tabindex="-1"><a class="header-anchor" href="#발생시기-2" aria-hidden="true">#</a> 발생시기</h3>
<ul>
<li><a href="https://www.react-europe.org/#slot-2358-state-management-for-today-s-react" target="_blank" rel="noopener noreferrer">2020.05.14 18:00 세션<ExternalLinkIcon/></a></li>
<li>ReactEurope에서 Dave McCabe는 Recoil을 소개했다.</li>
</ul>
<h3 id="recoil-이란" tabindex="-1"><a class="header-anchor" href="#recoil-이란" aria-hidden="true">#</a> Recoil 이란</h3>
<blockquote>
<p>https://recoiljs.org/docs/introduction/core-concepts</p>
</blockquote>
<p>Recoil은 상태머신 라이브러리다. Atoms과 Selectors로 구성된다.</p>
<h4 id="atoms" tabindex="-1"><a class="header-anchor" href="#atoms" aria-hidden="true">#</a> Atoms</h4>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> fontSizeState <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'fontSizeState'</span><span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">FontButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fontSize<span class="token punctuation">,</span> setFontSize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span>fontSizeState<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setFontSize</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token operator">=></span> size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>fontSize<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Click to Enlarge
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fontSize<span class="token punctuation">,</span> setFontSize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span>fontSizeState<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>fontSize<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">This text will increase in size too.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="selectors" tabindex="-1"><a class="header-anchor" href="#selectors" aria-hidden="true">#</a> Selectors</h4>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> fontSizeLabelState <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'fontSizeLabelState'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>get<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fontSize <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>fontSizeState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> unit <span class="token operator">=</span> <span class="token string">'px'</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fontSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>unit<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">FontButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fontSize<span class="token punctuation">,</span> setFontSize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span>fontSizeState<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> fontSizeLabel <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span>fontSizeLabelState<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Current font size: $</span><span class="token punctuation">{</span>fontSizeLabel<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setFontSize</span><span class="token punctuation">(</span>fontSize <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>fontSize<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Click to Enlarge
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="recoil-사용-규칙" tabindex="-1"><a class="header-anchor" href="#recoil-사용-규칙" aria-hidden="true">#</a> Recoil 사용 규칙</h4>
<ul>
<li>key는 고유한 키를 할당한다.
<ul>
<li>디버깅과 영속성에 이점을 위함이다.</li>
</ul>
</li>
<li>Selectors는 순수함수로 정의한다.</li>
</ul>
<h3 id="발생이유-2" tabindex="-1"><a class="header-anchor" href="#발생이유-2" aria-hidden="true">#</a> 발생이유</h3>
<ul>
<li>React 컴포넌트는 공통 조상을 통해 공유할 수 있다. 하지만 여기에는 거대한 트리를 다시 렌더링해야 할 수 있다.</li>
<li>Context는 각각 자체 Consumer가 있는 무한한 세트를 가지는 게 아닌 단일 값만 저장할 수 있다.</li>
<li>트리의 잎과 꼭대기의 코드분할을 힘들게 한다.</li>
</ul>
<h2 id="끝" tabindex="-1"><a class="header-anchor" href="#끝" aria-hidden="true">#</a> 끝</h2>
<h3 id="같이-볼만한-자료" tabindex="-1"><a class="header-anchor" href="#같이-볼만한-자료" aria-hidden="true">#</a> 같이 볼만한 자료</h3>
<ul>
<li>💻 <a href="https://helloworld.kurly.com/blog/thinking-in-react/" target="_blank" rel="noopener noreferrer">React 이해하기 - Kurly Tech Blog<ExternalLinkIcon/></a></li>
<li>💻 <a href="https://ui.toast.com/weekly-pick/ko_20200616/" target="_blank" rel="noopener noreferrer">Recoil - 또 다른 React 상태 관리 라이브러리? - TOAST UI<ExternalLinkIcon/></a></li>
<li>💻 <a href="https://dev.to/blacksonic/you-might-not-need-vuex-with-vue-3-52e4" target="_blank" rel="noopener noreferrer">You Might Not Need Vuex with Vue 3<ExternalLinkIcon/></a></li>
<li>📄 <a href="https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api" target="_blank" rel="noopener noreferrer">v3.vuejs.org - Composition API<ExternalLinkIcon/></a></li>
</ul>
</div></template>


