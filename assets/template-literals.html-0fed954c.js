import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-0d43d911.js";const p={},e=t(`<h1 id="enforcing-the-class-names-allowed-in-props" tabindex="-1"><a class="header-anchor" href="#enforcing-the-class-names-allowed-in-props" aria-hidden="true">#</a> Enforcing the class names allowed in props</h1><h2 id="narrative" tabindex="-1"><a class="header-anchor" href="#narrative" aria-hidden="true">#</a> Narrative</h2><p>There are times when component props receive the class name of tailwindcss. When declaring a type, it is sometimes defined simply as string, but there have been cases where defining it as string has caused an unintentional bug. For example, an icon component needs to receive w-* and h-* together, but if you define it as a string, you won&#39;t know it at compile time.</p><p>By utilizing TypeScript’s template literals and infer, you can know the class names that should not be used and the class names that should be used in pairs through the type.</p><h2 id="use-text-instead-of-fill" tabindex="-1"><a class="header-anchor" href="#use-text-instead-of-fill" aria-hidden="true">#</a> Use <code>text-</code> instead of <code>fill-</code></h2><p>If you use fill-, it tells you to use text-.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">fill</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">text</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pair-classname" tabindex="-1"><a class="header-anchor" href="#pair-classname" aria-hidden="true">#</a> Pair ClassName</h2><p>This is used to define the type of a class name that should always be used in pairs.</p><h3 id="type-definitions" tabindex="-1"><a class="header-anchor" href="#type-definitions" aria-hidden="true">#</a> Type Definitions</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">SizeClass<span class="token operator">&lt;</span>
  <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Size <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Left <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Right <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">CheckPair<span class="token operator">&lt;</span>
  <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Size <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Left <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Right <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> SizeClass<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> SizeClass<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequirePair<span class="token operator">&lt;</span>
  <span class="token constant">T</span><span class="token punctuation">,</span>
  Left <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Right <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> CheckPair<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> CheckPair<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> SizeClass<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> SizeClass<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples" aria-hidden="true">#</a> Usage Examples</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Props<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
    className<span class="token operator">:</span> RequirePair<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token string">&#39;w-&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;h-&#39;</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">something</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> className <span class="token punctuation">}</span><span class="token operator">:</span> Props<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// No error occurs as neither w- nor h- is used</span>
<span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">{</span>className<span class="token operator">:</span> <span class="token string">&#39;text-lg&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Error occurs as only w- is used</span>
<span class="token comment">// Type &#39;&quot;text-lg w-10&quot;&#39; is not assignable to type &#39;&quot;text-lg w-10 h-10&quot;&#39;.</span>
<span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">{</span>className<span class="token operator">:</span> <span class="token string">&#39;text-lg w-10&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tailwind-classname-prefix-filter" tabindex="-1"><a class="header-anchor" href="#tailwind-classname-prefix-filter" aria-hidden="true">#</a> Tailwind ClassName Prefix Filter</h2><h3 id="type-definitions-1" tabindex="-1"><a class="header-anchor" href="#type-definitions-1" aria-hidden="true">#</a> Type Definitions</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FilterString<span class="token operator">&lt;</span>
  <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Target <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token string">&quot;&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token constant">S</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Split<span class="token operator">&lt;</span>
  <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Prefix <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token string">&quot;&quot;</span>
  <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token operator">:</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">T</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">D</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>FilterString<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Prefix<span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token operator">...</span>Split<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token punctuation">,</span> Prefix<span class="token operator">&gt;</span><span class="token punctuation">]</span>
  <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>FilterString<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> Prefix<span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Join<span class="token operator">&lt;</span><span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span>
  <span class="token keyword">infer</span> Head<span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token keyword">infer</span> Tail<span class="token punctuation">,</span>
<span class="token punctuation">]</span>
  <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Head <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">?</span> Head <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Head <span class="token keyword">extends</span> <span class="token string">&quot;&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token constant">D</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Join<span class="token operator">&lt;</span>
      Tail <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> Tail <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token constant">D</span>
    <span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">TrimRight<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>TrimRight<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage-examples-1" tabindex="-1"><a class="header-anchor" href="#usage-examples-1" aria-hidden="true">#</a> Usage Examples</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">DisallowClassName<span class="token operator">&lt;</span>
  <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Prefix <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> TrimRight<span class="token operator">&lt;</span>Join<span class="token operator">&lt;</span>Split<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> Prefix<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// h-10 w-10 m-10 p-10</span>
<span class="token keyword">type</span> <span class="token class-name">FilteredClassName0</span> <span class="token operator">=</span> DisallowClassName<span class="token operator">&lt;</span>
  <span class="token string">&quot;h-10 w-10 m-10 p-10 fill-black&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;fill&quot;</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">FilteredClassName1</span> <span class="token operator">=</span> DisallowClassName<span class="token operator">&lt;</span>
  <span class="token string">&quot;h-10 w-10 fill-black m-10 p-10&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;fill&quot;</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">FilteredClassName2</span> <span class="token operator">=</span> DisallowClassName<span class="token operator">&lt;</span>
  <span class="token string">&quot;fill-black h-10 w-10 m-10 p-10&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;fill&quot;</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// fill-black m-10 p-10</span>
<span class="token keyword">type</span> <span class="token class-name">FilteredClassName3</span> <span class="token operator">=</span> DisallowClassName<span class="token operator">&lt;</span>
  <span class="token string">&quot;fill-black h-10 w-10 m-10 p-10&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;h&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;w&quot;</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function i(l,c){return s(),a("div",null,o)}const k=n(p,[["render",i],["__file","template-literals.html.vue"]]);export{k as default};
