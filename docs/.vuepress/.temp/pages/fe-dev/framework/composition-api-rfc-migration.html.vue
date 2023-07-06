<template><div><h1 id="composition-api-경험-정리" tabindex="-1"><a class="header-anchor" href="#composition-api-경험-정리" aria-hidden="true">#</a> Composition API 경험 정리</h1>
<blockquote>
<p>초안작성일: 2020.03.02</p>
</blockquote>
<h2 id="세팅" tabindex="-1"><a class="header-anchor" href="#세팅" aria-hidden="true">#</a> 세팅</h2>
<h3 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vue/composition-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="플러그인" tabindex="-1"><a class="header-anchor" href="#플러그인" aria-hidden="true">#</a> 플러그인</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> VueCompositionApi <span class="token keyword">from</span> <span class="token string">'@vue/composition-api'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueCompositionApi<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="의존성" tabindex="-1"><a class="header-anchor" href="#의존성" aria-hidden="true">#</a> 의존성</h3>
<p><code v-pre>@vue/composition-api</code>가 변경 되었을 때 이를 사용하는 개발자는 API 변경/삭제에 대한 권한이 없다.
그래서 업데이트가 되는 순간 프로젝트에 직접적인 영향을 전파하게 된다. 이런 부분을 나는 <code v-pre>외부 의존성</code>이라고 부른다.</p>
<p>외부 의존성은 직접적으로 조작할 수 있는 권한이 없음으로 의존성이 강하다.
이를 약하게 만드는 가장 쉬운 방법은 중간에 무언가를 껴넣는 것이다.</p>
<h4 id="해결방안" tabindex="-1"><a class="header-anchor" href="#해결방안" aria-hidden="true">#</a> 해결방안</h4>
<p>외부 의존성을 최소화 하면서 Composition API를 안전하게 적용하기 위한 대안으로 Wrapper 패턴을 사용할 수 있다.</p>
<h5 id="vue-wrapper" tabindex="-1"><a class="header-anchor" href="#vue-wrapper" aria-hidden="true">#</a> Vue Wrapper</h5>
<p>다음과 같이 <code v-pre>@vue/composition-api</code>에서 사용할 기능만 추출하고 <code v-pre>export</code>한다.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  onBeforeMount<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  reactive<span class="token punctuation">,</span>
  toRefs<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  watch
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue/composition-api'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="vue-wrapper-consumer" tabindex="-1"><a class="header-anchor" href="#vue-wrapper-consumer" aria-hidden="true">#</a> Vue Wrapper Consumer</h5>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'~/vue-wrapper'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">checked</span><span class="token operator">:</span> Boolean
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isChecked <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>checked<span class="token punctuation">)</span>
    <span class="token keyword">const</span> toggleCheckBox <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      isChecked<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>isChecked<span class="token punctuation">.</span>value
      context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'on-change'</span><span class="token punctuation">,</span> isChecked<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> isChecked<span class="token punctuation">,</span> toggleCheckBox <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>일반적으로 <code v-pre>Custom Component =&gt; Vue</code> 이런 형태로 라이브러리를 직접 사용하게 된다.
만약에 100개 이상의 <code v-pre>Custom Component</code>가 있다면 <code v-pre>Vue</code> 업그레이드 시 모든 <code v-pre>Custom Component</code>에 대한 <strong>수동 변경</strong>이 필요하다.</p>
<p>Wrapper 패턴을 적용하면 앞서 언급한 형태는 <code v-pre>Custom Component =&gt; Vue Wrapper =&gt; Vue</code> 이렇게 변경된다.
그래서 <code v-pre>Vue</code>에 변경이 발생했을 때 <code v-pre>Custom Component</code>가 아닌 <code v-pre>Vue Wrapper</code>만 수정하면 된다.</p>
<p>특히 Wrapper 패턴를 적용했을 때, <code v-pre>Vue</code>에서 API의 이름이 변경 되었을 때 IDE의 Refactor 기능을 통해 Function 이름을 <strong>자동으로 변경</strong> 할 수 있기 때문에 매우 편리하다.</p>
<h2 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference" aria-hidden="true">#</a> API Reference</h2>
<p>Composition API는 다음과 같이 사용할 수 있다.</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ count }} {{ plusOne }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ obj.foo }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ firstName }} {{ lastName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>templateRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>INCREMENT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  reactive<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  toRefs<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  onBeforeMount<span class="token punctuation">,</span>
  onBeforeUpdate<span class="token punctuation">,</span>
  onUpdated<span class="token punctuation">,</span>
  onBeforeUnmount<span class="token punctuation">,</span>
  onUnmounted
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue/composition-api'</span>
<span class="token keyword">import</span> MyButton <span class="token keyword">from</span> <span class="token string">'./my-button.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    MyButton
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[LIFECYCLE] beforeCreate, created'</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">name is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> plusOne <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar '</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Peter'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Cho'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> templateRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      count<span class="token punctuation">.</span>value<span class="token operator">++</span>
      context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'on-change'</span><span class="token punctuation">,</span> count<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">count is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[LIFECYCLE] beforeMount'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[LIFECYCLE] mounted'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[LIFECYCLE] beforeUpdate'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[LIFECYCLE] updated'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[LIFECYCLE] beforeDestroy'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[LIFECYCLE] destroyed'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      plusOne<span class="token punctuation">,</span>
      obj<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>
      templateRef<span class="token punctuation">,</span>
      increment
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="플러그인-1" tabindex="-1"><a class="header-anchor" href="#플러그인-1" aria-hidden="true">#</a> 플러그인</h3>
<p>Vue Options API에서 플러그인 사용 시, <code v-pre>this.$router</code> 형태로 사용했다. Composition API에서는 <code v-pre>setup(props, context)</code>의 두번째 인자로 전달되는 <code v-pre>context</code>를 사용한다. <code v-pre>context.root.$router</code> 형태로 플러그인을 사용할 수 있다.</p>
<h2 id="마이그레이션" tabindex="-1"><a class="header-anchor" href="#마이그레이션" aria-hidden="true">#</a> 마이그레이션</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<h4 id="런타임과-컴파일타임의-타입-일치" tabindex="-1"><a class="header-anchor" href="#런타임과-컴파일타임의-타입-일치" aria-hidden="true">#</a> 런타임과 컴파일타임의 타입 일치</h4>
<p>props를 required로 지정하지 않으면 <a href="https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters" target="_blank" rel="noopener noreferrer">Optional<ExternalLinkIcon/></a>로 처리된다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">// string | undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>required를 사용하면 필수 타입으로 처리된다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> String<span class="token punctuation">,</span>
      required<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props의-any-타입-정의" tabindex="-1"><a class="header-anchor" href="#props의-any-타입-정의" aria-hidden="true">#</a> Props의 any 타입 정의</h4>
<ul>
<li><strong>(컴파일 타임)</strong> TypeScript로 props 타입 정의 시, <code v-pre>any</code> 또는 <code v-pre>unknown</code>이 필요할 때가 있다.</li>
<li><strong>(런타임)</strong> 이때 props의 타입은 <code v-pre>null</code>로 작성해야 한다.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Composition API 공식 문서에는 <code v-pre>undefined</code>와 <code v-pre>null</code>로 처리 가능하다고 가이드하는데,
TypeScript로 정의된 Declaration 파일에서는 <code v-pre>null</code>만 허용한다.</p>
</div>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CommonSelectOption</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 생략</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h3>
<h4 id="ref와-reactive" tabindex="-1"><a class="header-anchor" href="#ref와-reactive" aria-hidden="true">#</a> <code v-pre>ref</code>와 <code v-pre>reactive</code></h4>
<p><code v-pre>ref</code>를 사용할 경우 값에 접근할 때 <code v-pre>.value</code>를 사용해야 한다.
그런데 나는 ref를 사용했을 때 불편함을 느꼈다.</p>
<p>그래서 특별한 경우가 아닌 이상 <code v-pre>ref</code> 대신에 <code v-pre>reactive</code>로 상태를 정의하고, <code v-pre>reactive</code>로 정의한 변수를 return할 때는<code v-pre>toRefs</code>를 사용하는 것이 경험적으로 좋았다.</p>
<h5 id="as-is-ref" tabindex="-1"><a class="header-anchor" href="#as-is-ref" aria-hidden="true">#</a> AS IS (ref)</h5>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputText <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> isFocused <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'on-change'</span><span class="token punctuation">,</span> inputText<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> onFocus <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    isFocused<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// value에 할당</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> onBlur <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    isFocused<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// value에 할당</span>
  <span class="token punctuation">}</span>

  <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    inputText<span class="token punctuation">.</span>value <span class="token operator">=</span> props<span class="token punctuation">.</span>value <span class="token comment">// value에 할당</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    inputText<span class="token punctuation">,</span>
    isFocused<span class="token punctuation">,</span>
    onChange<span class="token punctuation">,</span>
    onFocus<span class="token punctuation">,</span>
    onBlur
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="to-be-reactive" tabindex="-1"><a class="header-anchor" href="#to-be-reactive" aria-hidden="true">#</a> TO BE (reactive)</h5>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    inputText<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    isFocused<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'on-change'</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>inputText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> onFocus <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>isFocused <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// state의 property를 통해 값을 할당한다.</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> onBlur <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>isFocused <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// state의 property에 값을 할당한다.</span>
  <span class="token punctuation">}</span>

  <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>inputText <span class="token operator">=</span> props<span class="token punctuation">.</span>value <span class="token comment">// state의 property에 값을 할당한다.</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// toRefs를 사용하여 ref로 변환한다.</span>
    onChange<span class="token punctuation">,</span>
    onFocus<span class="token punctuation">,</span>
    onBlur
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="타입-정의" tabindex="-1"><a class="header-anchor" href="#타입-정의" aria-hidden="true">#</a> 타입 정의</h4>
<p>나는 <code v-pre>reactive</code>에 <a href="https://www.typescriptlang.org/docs/handbook/generics.html" target="_blank" rel="noopener noreferrer">Generic<ExternalLinkIcon/></a>을 사용하는 것이 깔끔하다고 느꼈다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Pagination</span> <span class="token punctuation">{</span>
  currentPage<span class="token operator">:</span> <span class="token builtin">number</span>
  totalPage<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span>Pagination<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  currentPage<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  totalPage<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="templateref" tabindex="-1"><a class="header-anchor" href="#templateref" aria-hidden="true">#</a> TemplateRef</h3>
<p><code v-pre>&lt;template&gt;</code>내에서 <code v-pre>&lt;div ref=&quot;box&quot;&gt;</code>와 같이 <code v-pre>TemplateRef</code>를 사용할 때는 항상 <code v-pre>ref</code>로 정의한 <code v-pre>state</code>를 사용해야 한다.
<code v-pre>reactive</code>로 정의한 <code v-pre>state</code>는 정상적으로 참조되지 않는다.</p>
<h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h3>
<p>내용이 많이 <a href="https://the-next-web-research-lab.github.io/fe-dev/framework/vuex-in-composition-api.html" target="_blank" rel="noopener noreferrer">Vuex 적용 경험 정리<ExternalLinkIcon/></a>에 분리함.</p>
<h3 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt" aria-hidden="true">#</a> Nuxt</h3>
<blockquote>
<p><a href="https://github.com/nuxt/nuxt.js/pull/6999" target="_blank" rel="noopener noreferrer">v2.12.0<ExternalLinkIcon/></a>부터 새로운 <code v-pre>fetch</code> 인터페이스가 적용된다.
<code v-pre>fetch(context){}</code> 형태였다면 <code v-pre>fetch(){}</code> 형태로 바뀐다. <code v-pre>middleware</code>를 사용할 것을 권장하며, <code v-pre>this</code>를 사용하도록 바뀐다.</p>
</blockquote>
<h4 id="composition-api에서-fetch-관련-라이프-사이클이-없음" tabindex="-1"><a class="header-anchor" href="#composition-api에서-fetch-관련-라이프-사이클이-없음" aria-hidden="true">#</a> composition api에서 <code v-pre>fetch</code> 관련 라이프 사이클이 없음</h4>
<ul>
<li><code v-pre>middleware</code>로 사용할 것을 <a href="https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-564035362" target="_blank" rel="noopener noreferrer">권장<ExternalLinkIcon/></a>함</li>
</ul>
<h4 id="fetch-layout-middleware-타입-미지원" tabindex="-1"><a class="header-anchor" href="#fetch-layout-middleware-타입-미지원" aria-hidden="true">#</a> <code v-pre>fetch</code>, <code v-pre>layout</code>, <code v-pre>middleware</code> 타입 미지원</h4>
<ul>
<li><code v-pre>defineComponent</code> 함수에 <code v-pre>fetch</code>, <code v-pre>layout</code>, <code v-pre>middleware</code> 미지원</li>
<li>타입 확장으로 해결할 것을 <a href="https://github.com/vuejs/composition-api/issues/63#issuecomment-523429896" target="_blank" rel="noopener noreferrer">권장<ExternalLinkIcon/></a>함</li>
</ul>
<h5 id="pages-index-ts" tabindex="-1"><a class="header-anchor" href="#pages-index-ts" aria-hidden="true">#</a> pages/index.ts</h5>
<ul>
<li><code v-pre>fetch</code>는 항상 <code v-pre>Promise&lt;void&gt;</code> 타입으로 반환해야 함</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="types-vue-shim-d-ts" tabindex="-1"><a class="header-anchor" href="#types-vue-shim-d-ts" aria-hidden="true">#</a> types/vue-shim.d.ts</h5>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Context<span class="token punctuation">,</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nuxt/types'</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'*.vue'</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> Vue
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'vue/types/options'</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentOptions<span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token keyword">extends</span> Vue<span class="token operator">></span></span> <span class="token punctuation">{</span>
    fetch<span class="token operator">?</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> Context<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">void</span>
    layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> Context<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    middleware<span class="token operator">?</span><span class="token operator">:</span> Middleware <span class="token operator">|</span> Middleware<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h3>
<h4 id="reactive-필드의-필드-타입-문제" tabindex="-1"><a class="header-anchor" href="#reactive-필드의-필드-타입-문제" aria-hidden="true">#</a> <code v-pre>reactive</code> 필드의 필드 타입 문제</h4>
<blockquote>
<p><a href="https://github.com/vuejs/composition-api/pull/261" target="_blank" rel="noopener noreferrer">#261<ExternalLinkIcon/></a>,
<a href="https://github.com/vuejs/vue-next/pull/614" target="_blank" rel="noopener noreferrer">#614<ExternalLinkIcon/></a> 버전 업그레이드 후 반영될 것으로 보임</p>
</blockquote>
<p>reactive의 필드로 지정된 타입이 객체일 때, 필드의 내부에 필드가 존재하게 된다.
작성 의도는 해당 필드의 타입이지만 현재 타입 추론으론 <code v-pre>UnwrapRef</code>이 된다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Axis <span class="token punctuation">{</span>
  One <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Two <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">MyInterfaceInInterface</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> Axis <span class="token comment">// number or 1 | 2는 동작함</span>
  y<span class="token operator">:</span> Axis
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
  field<span class="token operator">:</span> MyInterfaceInInterface
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> myState <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyInterface<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      field<span class="token operator">:</span> <span class="token punctuation">{</span>
        x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        y<span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> y
    <span class="token function">add</span><span class="token punctuation">(</span>myState<span class="token punctuation">.</span>field<span class="token punctuation">.</span>x<span class="token punctuation">,</span> myState<span class="token punctuation">.</span>field<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
    <span class="token comment">// Type Error </span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Argument type UnwrapRef3 is not assignable to parameter type number
Type UnwrapRef3 is not assignable to type number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reactive-타입" tabindex="-1"><a class="header-anchor" href="#reactive-타입" aria-hidden="true">#</a> reactive 타입</h4>
<p><code v-pre>reactive</code>에 선언하는 타입은 의도한 대로 동작하지 않는 케이스가 존재한다.
예를 들면 셀렉트 박스에서 아이템을 선택하고, BackEnd API로 요청하는 사례이다.</p>
<h5 id="types-my-component-ts" tabindex="-1"><a class="header-anchor" href="#types-my-component-ts" aria-hidden="true">#</a> /types/my-component.ts</h5>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  options<span class="token operator">:</span> Options<span class="token punctuation">[</span><span class="token punctuation">]</span>
  selected<span class="token operator">:</span> Options <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">RequestBody</span> <span class="token punctuation">{</span>
  selectedId<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="components-my-component-ts" tabindex="-1"><a class="header-anchor" href="#components-my-component-ts" aria-hidden="true">#</a> /components/my-component.ts</h5>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span>State<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  selected<span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeSelectedOption</span> <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>selected <span class="token operator">=</span> option
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSave</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>selected <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> body<span class="token operator">:</span> RequestBody <span class="token operator">=</span> <span class="token punctuation">{</span>
    selectedId<span class="token operator">:</span> state<span class="token punctuation">.</span>selected<span class="token punctuation">.</span>id
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>보기에는 정상적인 코드로 보이지만 <code v-pre>state.selected.id</code>에서 <code v-pre>TS2339: Property 'id' does not exist on type 'string'.</code> 에러가 발생한다.</p>
<p>의도한 대로 실행되게 하기 위해선 <code v-pre>Typecasting(as Type)</code>을 해야 한다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// Not Cool</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span>State<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  selected<span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Cool</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  selected<span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> State
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="컨벤션" tabindex="-1"><a class="header-anchor" href="#컨벤션" aria-hidden="true">#</a> 컨벤션</h2>
<p>프로젝트 개발중 개선해보고 싶었던 부분 정리함.</p>
<h3 id="컴포넌트-input-output-정의" tabindex="-1"><a class="header-anchor" href="#컴포넌트-input-output-정의" aria-hidden="true">#</a> 컴포넌트 Input/Output 정의</h3>
<h4 id="용어정의" tabindex="-1"><a class="header-anchor" href="#용어정의" aria-hidden="true">#</a> 용어정의</h4>
<ul>
<li>Input: 컴포넌트 사용측에서 대상 컴포넌트에 주입할 값</li>
<li>Output: 대상 컴포넌트에서 컴포넌트 사용측에 전달할 값</li>
</ul>
<p>Vue 컴포넌트는 Input 역할을 하는 Props는 설정 레벨로 정의한다.
하지만 Emit는 설정 레벨로 정의되지 않고, 필요할 때 함수를 호출하는 형태로 구성된다.
컴포넌트의 스팩을 쉽게 파악하기 위해서는 해당 기능이 필요하다고 생각한다.</p>
<p>Composition API의 경우 최상단에 추가되면 쉽게 파악 가능할거라 생각한다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">setup</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> Props<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">change</span><span class="token operator">:</span> state <span class="token operator">=></span> context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">.</span>surveyForm<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">changeImage</span><span class="token operator">:</span> file <span class="token operator">=></span> context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'change-image'</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="컴포넌트-함수별-역할-분리" tabindex="-1"><a class="header-anchor" href="#컴포넌트-함수별-역할-분리" aria-hidden="true">#</a> 컴포넌트 함수별 역할 분리</h3>
<p>컴포넌트에 정의되는 함수의 역할은 상태변경, 이벤트 리스너, 헬퍼 함수가 있다.
각 함수는 같은 레벨로 정의하기 때문에 시각적 구분이 잘안된다고 생각한다.</p>
<p>또한 <code v-pre>setup</code> 함수 내부에 함수 추가 후 <code v-pre>&lt;template&gt;</code>에 사용하려면 할당 반환값에 추가가 필요하다.
객체에 담아 전달하면 번거로움과 반환값을 간소화 가능하다고 생각한다.</p>
<p>결론적으로 Vuex의 네이밍을 따라서 상태변경은 <code v-pre>mutation</code>,
이벤트 리스너는 <code v-pre>action</code>으로 정의되면 어떨가 생각해봤다.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// AS IS</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>state<span class="token punctuation">,</span> onChange<span class="token punctuation">,</span> onClick<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// TO BE</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>state<span class="token punctuation">,</span> actions<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


