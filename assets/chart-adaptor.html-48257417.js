import{_ as n,o as s,c as a,e as p}from"./app-31e432a7.js";const t={},e=p(`<h2 id="c3-adaptor" tabindex="-1"><a class="header-anchor" href="#c3-adaptor" aria-hidden="true">#</a> c3-adaptor</h2><h3 id="config-js" tabindex="-1"><a class="header-anchor" href="#config-js" aria-hidden="true">#</a> config.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">CHART_OPTION</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">HEIGHT</span><span class="token operator">:</span> <span class="token number">380</span><span class="token punctuation">,</span>
  <span class="token constant">PADDING_TOP</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token constant">COLOR_PATTERN</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;#45454d&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#ce2e6c&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#f75f00&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#43ab92&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#512c62&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#504658&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#1089ff&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token constant">POINT_RADIUS</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token constant">COMMON_CHART_OPTION</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token constant">CHART_OPTION</span><span class="token punctuation">.</span><span class="token constant">PADDING_TOP</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token constant">CHART_OPTION</span><span class="token punctuation">.</span><span class="token constant">HEIGHT</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token constant">CHART_OPTION</span><span class="token punctuation">.</span><span class="token constant">COLOR_PATTERN</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token constant">CHART_OPTION</span><span class="token punctuation">.</span><span class="token constant">POINT_RADIUS</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;inset&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inset</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">&#39;top-right&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token constant">CHART_OPTION</span><span class="token punctuation">.</span><span class="token constant">PADDING_TOP</span><span class="token punctuation">,</span>
      <span class="token literal-property property">step</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chart-adaptor-js" tabindex="-1"><a class="header-anchor" href="#chart-adaptor-js" aria-hidden="true">#</a> chart-adaptor.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">LABEL_NAME</span> <span class="token operator">=</span> <span class="token string">&#39;x&#39;</span>
<span class="token keyword">const</span> <span class="token constant">AXIS_X_TYPE</span> <span class="token operator">=</span> <span class="token string">&#39;timeseries&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">mountChart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">,</span>
    labels<span class="token punctuation">,</span>
    columns<span class="token punctuation">,</span>
    xAxisFormat<span class="token punctuation">,</span>
    tooltipTitleFormat<span class="token punctuation">,</span>
    tooltipValueFormat
  <span class="token punctuation">}</span> <span class="token operator">=</span> options

  <span class="token keyword">const</span> chart <span class="token operator">=</span> c3<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">bindto</span><span class="token operator">:</span> element<span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token constant">LABEL_NAME</span><span class="token punctuation">,</span>
      <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
          <span class="token constant">LABEL_NAME</span><span class="token punctuation">,</span>
          <span class="token operator">...</span>labels
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>columns
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">axis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">AXIS_X_TYPE</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">format</span><span class="token operator">:</span> xAxisFormat
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> tooltipTitleFormat<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> tooltipValueFormat<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token constant">COMMON_CHART_OPTION</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> chart
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    chart<span class="token punctuation">,</span>
    labels<span class="token punctuation">,</span>
    columns
  <span class="token punctuation">}</span> <span class="token operator">=</span> options

  chart<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token constant">LABEL_NAME</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>labels
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>columns
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> chart
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scripts-js" tabindex="-1"><a class="header-anchor" href="#scripts-js" aria-hidden="true">#</a> scripts.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#chart-date&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> labels <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;2010-01-01&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2011-01-01&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2012-01-01&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2013-01-01&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2014-01-01&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2015-01-01&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2016-01-01&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;2017-01-01&#39;</span>
  <span class="token punctuation">]</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> Array
    <span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">index</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">data</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span>
        <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">*</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> chart <span class="token operator">=</span> <span class="token function">mountChart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    element<span class="token punctuation">,</span>
    labels<span class="token punctuation">,</span>
    columns<span class="token punctuation">,</span>
    <span class="token function-variable function">xAxisFormat</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">tooltipTitleFormat</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> year <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> month <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>year<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>month <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">?</span> month <span class="token operator">:</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">+</span> month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">tooltipValueFormat</span><span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> copiedLabels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>labels<span class="token punctuation">]</span>
    <span class="token keyword">const</span> copiedColumns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>columns<span class="token punctuation">]</span>

    copiedColumns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">items</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      items<span class="token punctuation">.</span>length <span class="token operator">=</span> items<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    copiedLabels<span class="token punctuation">.</span>length <span class="token operator">=</span> copiedLabels<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      chart<span class="token punctuation">,</span>
      <span class="token literal-property property">labels</span><span class="token operator">:</span> copiedLabels<span class="token punctuation">,</span>
      <span class="token literal-property property">columns</span><span class="token operator">:</span> copiedColumns<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","chart-adaptor.html.vue"]]);export{u as default};
