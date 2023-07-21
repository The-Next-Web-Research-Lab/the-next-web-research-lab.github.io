import{_ as i,r as t,o as d,c as r,a as e,b as n,d as s,e as l}from"./app-c4c92625.js";const c={},o=e("h1",{id:"컴파일러-이론-한장에-정리",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#컴파일러-이론-한장에-정리","aria-hidden":"true"},"#"),n(" 컴파일러 이론 한장에 정리")],-1),u=e("p",null,"이 포스트는 컴파일러 개념과 문법이 어떻게 만들어지는 학습하고자 정리한 자료다.",-1),p={href:"https://ko.wikipedia.org/wiki/Flex_(%EC%96%B4%ED%9C%98%EB%B6%84%EC%84%9D%EA%B8%B0)",target:"_blank",rel:"noopener noreferrer"},v={href:"https://ko.wikipedia.org/wiki/GNU_bison",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"컴파일러 생성기",-1),h={href:"https://ko.wikipedia.org/wiki/%EB%AC%B8%EB%A7%A5_%EC%9E%90%EC%9C%A0_%EB%AC%B8%EB%B2%95",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"컴파일러-개념",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#컴파일러-개념","aria-hidden":"true"},"#"),n(" 컴파일러 개념")],-1),k=e("p",null,"컴파일러는 원본 언어에서 대상 언어로 번역하는 프로그램이다. 컴파일러는 번역 과정을 개념적으로 문법 분석과 코드 생성이라는 두 단계로 나뉜다.",-1),x={href:"https://ko.wikipedia.org/wiki/%EC%B6%94%EC%83%81_%EA%B5%AC%EB%AC%B8_%ED%8A%B8%EB%A6%AC",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"코드 생성(Code Generation): 문법을 통해 프로그램의 의미(semantics)를 찾고, 추상 구문 트리를 대상 언어로 번역함",-1),f=l(`<h5 id="📄-컴파일러-의사-코드" tabindex="-1"><a class="header-anchor" href="#📄-컴파일러-의사-코드" aria-hidden="true">#</a> 📄 컴파일러 의사 코드</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compiler</span> <span class="token punctuation">(</span><span class="token parameter">originCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ast <span class="token operator">=</span> <span class="token function">syntaxAnalyzer</span><span class="token punctuation">(</span>originCode<span class="token punctuation">)</span>
  <span class="token keyword">var</span> targetCode <span class="token operator">=</span> <span class="token function">codeGenerator</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
  <span class="token keyword">return</span> targetCode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-1-문법-분석기-syntax-analyzer" tabindex="-1"><a class="header-anchor" href="#step-1-문법-분석기-syntax-analyzer" aria-hidden="true">#</a> Step 1. 문법 분석기(Syntax Analyzer)</h3><p>컴파일러의 첫번째 단계인 문법 분석 단계다. 문법 분석 단계에서도 토큰화와 파싱이라는 두 단계로 나뉘어 진다.</p><ul><li>토큰화(Tokenizing) 모듈: 원본 언어를 언어 기본 요소들로 분류하는 모듈</li><li>파싱(Parsing) 모듈: 토큰화 결과로 나온 언어 기본 요소 스트림을 언어의 문법 규칙에 맞추는 모듈</li></ul><h5 id="📄-문법-분석기-의사-코드" tabindex="-1"><a class="header-anchor" href="#📄-문법-분석기-의사-코드" aria-hidden="true">#</a> 📄 문법 분석기 의사 코드</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ast: Abstract Syntax Tree</span>
<span class="token keyword">function</span> <span class="token function">syntaxAnalyzer</span><span class="token punctuation">(</span><span class="token parameter">originCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tokens <span class="token operator">=</span> <span class="token function">tokenizer</span><span class="token punctuation">(</span>originCode<span class="token punctuation">)</span>
  <span class="token keyword">var</span> ast <span class="token operator">=</span> <span class="token function">parser</span><span class="token punctuation">(</span>tokens<span class="token punctuation">)</span>
  <span class="token keyword">return</span> ast
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="step-1-1-토큰화-tokenizer" tabindex="-1"><a class="header-anchor" href="#step-1-1-토큰화-tokenizer" aria-hidden="true">#</a> Step 1_1. 토큰화(Tokenizer)</h4><blockquote><p>이 단계는 보통 토큰화(tokenizing) 또는 어휘 분석(lexical analysis), 스캐닝(scanning)로 불린다.</p></blockquote><p>문법 분석의 첫 단계는 토큰화 단계다. 토큰화는 공백이나 주석은 무시하고, 문자들을 언어의 문법에 정의된 토큰들로 분류하는 것이다. 토큰화 되면, 토큰들은 프로그램의 기본 원소가 되며, 컴파일러의 입력도 토큰 스트림이 된다.</p><h5 id="📄-토큰화-의사-코드" tabindex="-1"><a class="header-anchor" href="#📄-토큰화-의사-코드" aria-hidden="true">#</a> 📄 토큰화 의사 코드</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">tokenizer</span><span class="token punctuation">(</span><span class="token parameter">originCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// logic</span>
  <span class="token keyword">return</span> tokens
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>토큰들은 각각 특정 분류 또는 유형으로 나뉜다. <code>while</code>은 키워드, <code>count</code>는 식별자, <code>&lt;=</code>는 연산자라는 식이다.</p><h5 id="📄-토큰-예제" tabindex="-1"><a class="header-anchor" href="#📄-토큰-예제" aria-hidden="true">#</a> 📄 토큰 예제</h5><p>입력</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while (count &lt;= 100) {
  count++;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>출력</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while
(
count
&lt;=
100
)
{
count
++
;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="step-1-2-파서-parser" tabindex="-1"><a class="header-anchor" href="#step-1-2-파서-parser" aria-hidden="true">#</a> Step 1_2. 파서(Parser)</h4><p>문법 분석의 마지막 단계는 파서 단계다. 파서는 텍스트와 문법 규칙 사이의 정확한 대응 관계를 결정하는 단계다. 문법 규칙이 계층적이기 때문에 파서가 생성하는 출력은 추상 구문 트리(AST: Abstract Syntax Tree)라고 불리는 트리 기반 데이터 구조로 기술된다.</p><h5 id="📄-파서-의사-코드" tabindex="-1"><a class="header-anchor" href="#📄-파서-의사-코드" aria-hidden="true">#</a> 📄 파서 의사 코드</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ast: Abstract Syntax Tree</span>
<span class="token keyword">function</span> <span class="token function">parser</span><span class="token punctuation">(</span><span class="token parameter">tokens</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ast <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// logic</span>
  <span class="token keyword">return</span> ast
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="📄-ast-예제" tabindex="-1"><a class="header-anchor" href="#📄-ast-예제" aria-hidden="true">#</a> 📄 AST 예제</h5><p>토큰 예제의 토큰들을 AST로 만든 예제다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>statement
└─ whileStatement
   ├─ while
   ├─ (
   ├─ expression
   │  └─ count &lt;= 100
   ├─ )
   └─ statement
      ├─ {
      └─ statementSequence
         ├─ statement
         │  └─ count++
         └─ ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-2-코드-생성기-code-generator" tabindex="-1"><a class="header-anchor" href="#step-2-코드-생성기-code-generator" aria-hidden="true">#</a> Step 2. 코드 생성기(Code Generator)</h3><p>컴파일러의 마지막 단계는 코드 생성 단계다. 코드 생성기는 AST를 통해 프로그램의 의미를 찾아 코드를 생성하게 된다.</p><h5 id="📄-코드-생성기-의사-코드" tabindex="-1"><a class="header-anchor" href="#📄-코드-생성기-의사-코드" aria-hidden="true">#</a> 📄 코드 생성기 의사 코드</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">codeGenerator</span><span class="token punctuation">(</span><span class="token parameter">ast</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> virtualCode <span class="token operator">=</span> <span class="token function">virtualCodeGenerator</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
  <span class="token keyword">var</span> targetCode <span class="token operator">=</span> <span class="token function">targetCodeGenerator</span><span class="token punctuation">(</span>virtualCode<span class="token punctuation">)</span>
  <span class="token keyword">return</span> targetCode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="step-2-1-가상-코드-생성기-virtual-code-generator" tabindex="-1"><a class="header-anchor" href="#step-2-1-가상-코드-생성기-virtual-code-generator" aria-hidden="true">#</a> Step 2_1. 가상 코드 생성기(Virtual Code Generator)</h4><p>코드 생성의 첫 단계는 가상 코드 생성 단계다. 코드 생성을 할 때는 데이터 번역과 명령 번역이라는 두 단계에 집중하는 데, 명령 번역을 위해 우선적으로 가상 코드를 생성하게 된다.</p><h5 id="📄-가상-코드-생성기-의사-코드" tabindex="-1"><a class="header-anchor" href="#📄-가상-코드-생성기-의사-코드" aria-hidden="true">#</a> 📄 가상 코드 생성기 의사 코드</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">virtualCodeGenerator</span><span class="token punctuation">(</span><span class="token parameter">ast</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> virtualCode <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// logic</span>
  <span class="token keyword">return</span> virtualCode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="📄-가상-코드-생성-예제" tabindex="-1"><a class="header-anchor" href="#📄-가상-코드-생성-예제" aria-hidden="true">#</a> 📄 가상 코드 생성 예제</h5><p><code>x + g(2, y, -z) * 5</code> AST</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+
├─ x
└─ *
   ├─ g
   │  ├─ 2
   │  ├─ y
   │  └─ -
   │     └─ z
   └─ 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>x + g(2, y, -z) * 5</code> 가상 코드</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>push x
push 2
push y
push z
neg
call g
push 5
call multiply
add
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="step-2-2-대상-코드-생성기-target-code-generator" tabindex="-1"><a class="header-anchor" href="#step-2-2-대상-코드-생성기-target-code-generator" aria-hidden="true">#</a> Step 2_2. 대상 코드 생성기(Target Code Generator)</h4><p>코드 생성의 마지막 단계는 대상 코드 생성 단계다. 대상 코드 생성기는 가상 코드를 기반으로 대상 코드를 생성하게 된다.</p><h5 id="📄-대상-코드-생성기-의사-코드" tabindex="-1"><a class="header-anchor" href="#📄-대상-코드-생성기-의사-코드" aria-hidden="true">#</a> 📄 대상 코드 생성기 의사 코드</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">targetCodeGenerator</span><span class="token punctuation">(</span><span class="token parameter">virtualCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> targetCode <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// logic</span>
  <span class="token keyword">return</span> targetCode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컴파일러는 만들기 위해서는 문법을 우선 정의해야 한다. 프로그래밍 문법은 어떻게 정의하는 지 정리해봤다.</p><h2 id="문법-정의" tabindex="-1"><a class="header-anchor" href="#문법-정의" aria-hidden="true">#</a> 문법 정의</h2><h3 id="문법은-어떻게-정의될까" tabindex="-1"><a class="header-anchor" href="#문법은-어떻게-정의될까" aria-hidden="true">#</a> 문법은 어떻게 정의될까?</h3><p>대부분의 프로그래밍 언어들이나 복잡한 파일 포맷 문법을 정의하는 형식 언어들은 문맥 자유 문법(context-free grammar)이라는 규칙들로 기술된다. 문맥 자유 문법은 언어의 문법 요소들을 단순한 요소들을 이용해 구성하는 규칙이다. 결국 프로그램을 이해(또는 분석) 한다는 것은 프로그램의 텍스트와 문법 규칙 사이에 정확한 대응 관계를 결정한다는 뜻이 된다.</p><h3 id="문법-명세-작성" tabindex="-1"><a class="header-anchor" href="#문법-명세-작성" aria-hidden="true">#</a> 문법 명세 작성</h3><p>문법 요소들을 정의할 때 사용하는 문법 명세 작성 방법이다. 참고 도서에 소개된 작성 방법을 발췌했다.</p><ul><li>&#39;xxx&#39;: 홑따옴표 볼드체는 글자 그대로 토큰에 사용된다.(단말)</li><li>xxx: 일반 글꼴은 언어 구조 이름에 사용된다.(비단말)</li><li>(): 괄호는 언어 구조들을 하나로 묶는 데 사용된다.</li><li>x | y: x또는 y가 나올 수 있음을 가리킨다.</li><li>x?: x가 0번 또는 1번 나타내는 경우를 가리킨다.</li><li>x*: x가 0번 이상 나타내는 경우를 가리킨다.</li></ul><p>여기서 문법은 두 가지 관점으로 볼 수 있다.</p><ul><li>선언적 관점에서 문법: 토큰들을 더 높은 수준의 문법 요소들로 결합하는 방법들을 정의한 것이다.</li><li>분석적 관점에서 문법: 주어진 토큰들을 받아 비단말, 더 낮은 수준의 비단말, 그리고 최종적으로 더 이상 분해되지 않는 단말까지로 분해하는 방법에 대한 규칙이라고 할 수 있다.</li></ul><p>아래 잭 언어 문법은 참고 도서에 소개된 가상의 언어에 대한 문법이다.</p><h4 id="잭-언어-문법" tabindex="-1"><a class="header-anchor" href="#잭-언어-문법" aria-hidden="true">#</a> 잭 언어 문법</h4><h5 id="📄-어휘-요소" tabindex="-1"><a class="header-anchor" href="#📄-어휘-요소" aria-hidden="true">#</a> 📄 어휘 요소</h5><p>잭 언어에는 다섯 가지 종류의 단말 요소(토큰)가 있다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>keyword:         &#39;class&#39; | &#39;constructor&#39; | &#39;function&#39; |
                 &#39;method&#39; | &#39;field&#39; | &#39;static&#39; | &#39;var&#39;
symbol:          &#39;{&#39; | &#39;}&#39; | &#39;(&#39; | &#39;)&#39; | &#39;[&#39; | &#39;]&#39;
integerConstant: 0..32767의 10진수 숫자
stringConstant:  &#39;&quot;&#39; 따옴표와 줄바꿈 문자를 제외한 유니코드 문자열 &#39;&quot;&#39;
identifier:      숫자로 시작하지 않는, 영문자, 숫자, 밑줄(&#39;_&#39;)로 이루어진 문자열
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="📄-프로그램-구조" tabindex="-1"><a class="header-anchor" href="#📄-프로그램-구조" aria-hidden="true">#</a> 📄 프로그램 구조</h5><p>잭 프로그램은 클래스로 이루어져 있으며, 클래스들은 각각 다른 파일에 있다. 컴파일 단위는 클래스 하나다. 클래스는 다음 문맥 자유 구문을 따라 구조화된, 토큰의 연속열이 된다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class:          &#39;class&#39; className &#39;{&#39; classVarDec* subroutineDec* &#39;}&#39;
classVarDec:    (&#39;static&#39; | &#39;field&#39;) type varName (&#39;,&#39; varName)* &#39;;&#39;
type:           &#39;int&#39; | &#39;char&#39; | &#39;boolean&#39; | className
subroutineDec:  (&#39;constructor&#39; | &#39;function&#39; | &#39;method&#39;)
                (&#39;void&#39; | type) subroutineName &#39;(&#39; parameterList &#39;)&#39;
                subroutineBody
parameterList:  ((type varName) (&#39;,&#39; type varName)*)?
subroutineBody: &#39;{&#39; varDec* statements &#39;}&#39;
varDec:         &#39;var&#39; type varName (&#39;,&#39; varName)* &#39;;&#39;
className:      identifier
subroutineName: identifier
varName:        identifier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="📄-명령문" tabindex="-1"><a class="header-anchor" href="#📄-명령문" aria-hidden="true">#</a> 📄 명령문</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>statements:      statement*
statement:       letStatement | ifStatement | whileStatement
                 doStatement | returnStatement
letStatement:    &#39;let&#39; varName (&#39;[&#39; expression &#39;]&#39;)? &#39;=&#39; expression &#39;;&#39;
ifStatement:     &#39;if&#39; &#39;(&#39; expression &#39;)&#39; &#39;{&#39; statement &#39;}&#39;
                 (&#39;else&#39; &#39;{&#39; statements &#39;}&#39;)?
whileStatement:  &#39;while&#39; &#39;(&#39; expression &#39;)&#39; &#39;{&#39; statements &#39;}&#39;
doStatement:     &#39;do&#39; subroutineCall &#39;;&#39;
returnStatement: &#39;return&#39; expression? &#39;;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="📄-표현식" tabindex="-1"><a class="header-anchor" href="#📄-표현식" aria-hidden="true">#</a> 📄 표현식</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>expression:      term (op term)*
term:            integerConstant | stringConstant | keywordConstant |
                 varName | varName &#39;[&#39; expression &#39;]&#39; | subroutineCall |
                 &#39;(&#39; expression &#39;)&#39; | unaryOp term
subroutineCall:  subroutineName &#39;(&#39; expressionList &#39;)&#39; | (className |
                 varName) &#39;.&#39; subroutineName &#39;(&#39; expressionList &#39;)&#39;
expressionList:  (expression (&#39;,&#39; expression)* )?
op:              &#39;+&#39; | &#39;-&#39; | &#39;*&#39; | &#39;/&#39; | &#39;&amp;&#39; | &#39;|&#39; | &#39;&lt;&#39; | &#39;&gt;&#39; | &#39;=&#39;
unaryOp:         &#39;-&#39; | &#39;~&#39;
keywordConstant: &#39;true&#39; | &#39;false&#39; | &#39;null&#39; | &#39;this&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="문법-분석하는-방법" tabindex="-1"><a class="header-anchor" href="#문법-분석하는-방법" aria-hidden="true">#</a> 문법 분석하는 방법</h3><p>토큰화된 토큰들의 문법을 분석해 파싱하는 알고리즘 중 하향식(top-down) 접근법으로 재귀적 하양 파서(recursive descent parsing)가 있다. 이 방법은 문법에 정의된 중첩 구조를 이용해 토큰 스트림을 재귀적으로 분석하는 방법이다.</p><p>비단말 문법의 모든 규칙마다 그 규칙을 분석하기 위한 재귀적 루틴들을 하나씩 만들 수 있다. 문법을 따르는 재귀적 하향 파서를 만든다고 가정하면, 문법에서 유도되는 규칙에 맞게 수정할 수 있다.</p><ul><li>statement: <code>parseStatement()</code></li><li>whileStatement: <code>parseWhileStatement()</code></li><li>expression: <code>parseExpression()</code></li></ul><h4 id="문법-분석-예시" tabindex="-1"><a class="header-anchor" href="#문법-분석-예시" aria-hidden="true">#</a> 문법 분석 예시</h4><p>편의상 토큰화 과정은 생략하고, 이 문법으로</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>symbol: &#39;{&#39; | &#39;}&#39; | &#39;(&#39; | &#39;)&#39; | &#39;[&#39; | &#39;]
integerConstant: 0..32767의 10진수 숫자
stringConstant: &#39;&quot;&#39; 따옴표와 줄바꿈 문자를 제외한 유니코드 문자열 &#39;&quot;&#39;
identifier: 숫자로 시작하지 않는, 영문자, 숫자, 밑줄(&#39;_&#39;)로 이루어진 문자열

statement: whileStatement | assignStatement
whileStatement: &#39;while&#39; &#39;(&#39; expression &#39;)&#39; &#39;{&#39; statement &#39;}&#39;
assignStatement: varName &#39;=&#39; expression

expression: term (op term)*
term: integerConstant | stringConstant | varName
op: &#39;+&#39;| &#39;&lt;=&#39; | &#39;=&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드를 분석한다고 가정하겠다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while (count &lt;= 100) {
  count = count + 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>파싱을 시작할 때는 입력의 첫 번째 토큰이 무엇인지 결정부터한다. 첫번째 토큰 <code>while</code> 식별하고, 문법에 맞게 파싱 함수를 실행한다.</p><p>코드를 분석하면 순서는 다음과 같다.</p><ol><li><code>while</code> 식별</li><li><code>parseWhileStatement()</code> 함수 실행</li><li><code>(</code> 식별</li><li><code>parseExpression()</code> 함수 실행</li><li><code>count</code>, <code>&lt;=</code>, <code>100</code> 식별</li><li><code>)</code></li><li><code>parseAssignStatement()</code> 함수 실행</li><li><code>{</code>, <code>count</code>, <code>=</code> 식별</li><li><code>parseExpression()</code> 함수 실행</li><li><code>count</code>, <code>+</code>, <code>1</code> 식별</li><li><code>}</code> 식별</li><li>종료</li></ol><p>결론적으로 이런 형태의 트리가 만들어진다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>statement
└─ whileStatement
   ├─ while
   ├─ (
   ├─ expression
   │  └─ count &lt;= 100
   ├─ )
   └─ statement
      └─ assignStatement
         ├─ {
         ├─ varName
         │  └─ count
         ├─ &#39;=&#39;
         ├─ expression
         │  └─ count + 1
         └─ }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="참고-도서" tabindex="-1"><a class="header-anchor" href="#참고-도서" aria-hidden="true">#</a> 참고 도서</h2><ul><li>노암 니산, 시몬 쇼켄. 『밑바닥부터 만드는 컴퓨팅 시스템』. 김진홍(역). 인사이트, 2019.</li></ul>`,79);function y(w,_){const a=t("ExternalLinkIcon");return d(),r("div",null,[o,u,e("p",null,[n("우선 컴파일러는 밑바닥부터 구현하는 경우는 드물다. 보통 토큰화 모듈이나 문법 분석기를 만들 때, "),e("a",p,[n("Flex(어휘분석기)"),s(a)]),n("와 "),e("a",v,[n("bison(파서 생성기)"),s(a)]),n("같은 "),m,n(" 도구들을 이용해서 만든다. 이 도구들은 "),e("a",h,[n("문맥 자유 문법"),s(a)]),n("를 입력하면, 그 문법으로 작성된 프로그램을 토큰화하고 분석하는 문법 분석 코드를 출력한다. 그리고 컴파일 조건에 맞춰 생성 코드를 수정할 수 있다.")]),b,k,e("ul",null,[e("li",null,[n("문법 분석(Syntax Analysis): 원본 언어의 문법을 이해하고, 원본 언어를 "),e("a",x,[n("추상 구문 트리"),s(a)]),n("를 만듬")]),g]),f])}const S=i(c,[["render",y],["__file","compiler-theory.html.vue"]]);export{S as default};
