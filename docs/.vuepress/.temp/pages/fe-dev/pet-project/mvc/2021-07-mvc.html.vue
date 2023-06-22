<template><div><h2 id="mvc란" tabindex="-1"><a class="header-anchor" href="#mvc란" aria-hidden="true">#</a> MVC란</h2>
<blockquote>
<p>참고자료: <a href="http://peter.michaux.ca/maria/quick-start-tutorial-for-the-impatient.html" target="_blank" rel="noopener noreferrer">Maria - The MVC Framework for JavaScript Application<ExternalLinkIcon/></a></p>
</blockquote>
<p><img src="@source/fe-dev/pet-project/mvc/2021-07-mvc/images/1.png" alt="1"></p>
<p>전통적인 MVC는 아래 3가지의 패턴으로 이뤄진다.</p>
<ol>
<li>Model-View: <RouterLink to="/fe-dev/design-patterns/gof/behavioral.html#%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1-observer">Observer Pattern</RouterLink></li>
<li>View-Controller: <RouterLink to="/fe-dev/design-patterns/gof/behavioral.html#%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%A3%E1%86%A8-strategy">Strategy Pattern</RouterLink></li>
<li>View-Views: <RouterLink to="/fe-dev/design-patterns/gof/structural.html#%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%8C%E1%85%B5%E1%84%90%E1%85%B3-composite">Composite Pattern</RouterLink></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Controller</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> view<span class="token punctuation">)</span><span class="token punctuation">;</span>

view<span class="token punctuation">.</span><span class="token function">setController</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="view-확장" tabindex="-1"><a class="header-anchor" href="#view-확장" aria-hidden="true">#</a> View 확장</h3>
<p><img src="@source/fe-dev/pet-project/mvc/2021-07-mvc/images/2.png" alt="2"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
  <span class="token function">build</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> childView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChildView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
      childView<span class="token punctuation">.</span><span class="token function">setController</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>
      div<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>childView<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> div<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="model-확장" tabindex="-1"><a class="header-anchor" href="#model-확장" aria-hidden="true">#</a> Model 확장</h3>
<p><img src="@source/fe-dev/pet-project/mvc/2021-07-mvc/images/3.png" alt="3"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> modelCollection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> model1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> model2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modelCollection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>model1<span class="token punctuation">)</span><span class="token punctuation">;</span>
modelCollection<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>model2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span>modelCollection<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
  <span class="token function">build</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> models <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">getModels</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    models<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> childView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChildView</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> childController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChildController</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> childView<span class="token punctuation">)</span><span class="token punctuation">;</span>

      childView<span class="token punctuation">.</span><span class="token function">setController</span><span class="token punctuation">(</span>childController<span class="token punctuation">)</span><span class="token punctuation">;</span>

      div<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>childView<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> div<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


