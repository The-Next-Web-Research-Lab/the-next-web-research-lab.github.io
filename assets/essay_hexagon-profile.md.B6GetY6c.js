import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.COm4hYgr.js";const h="/assets/hexagon-profile-demo.eoY6jZ6v.png",c=JSON.parse('{"title":"SVG와 CSS Mask로 육각형 프로필 만들기","description":"","frontmatter":{"title":"SVG와 CSS Mask로 육각형 프로필 만들기"},"headers":[],"relativePath":"essay/hexagon-profile.md","filePath":"essay/hexagon-profile.md"}'),l={name:"essay/hexagon-profile.md"},t=n(`<h1 id="svg와-css-mask로-육각형-프로필-만들기" tabindex="-1">SVG와 CSS Mask로 육각형 프로필 만들기 <a class="header-anchor" href="#svg와-css-mask로-육각형-프로필-만들기" aria-label="Permalink to &quot;SVG와 CSS Mask로 육각형 프로필 만들기&quot;">​</a></h1><p>전 직장에서 web3 관련 커뮤니티 서비스를 담당했었다. 사용자가 프로필 이미지를 NFT로 설정하면 육각형으로 표현해 줘야 하는 데, 처음에는 모양을 자유롭게 다룰 수 있는 SVG를 활용했었다. 하지만 iPhone에서 웹 뷰어의 프로세싱이 많아지면 SVG는 네모 박스로 표현되는 이슈가 있어서 CSS Mask 기능을 활용해서 해결했다.</p><p>이 글에서는 SVG와 CSS Mask를 활용해서 육각형 프로필을 만드는 방법을 소개한다. 이 기능들을 활용하면 다른 모양으로도 가능하다.</p><h2 id="svg로-육각형-프로필-만들기" tabindex="-1">SVG로 육각형 프로필 만들기 <a class="header-anchor" href="#svg로-육각형-프로필-만들기" aria-label="Permalink to &quot;SVG로 육각형 프로필 만들기&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qrFIN" id="tab-pliWIR1" checked="checked"><label for="tab-pliWIR1">SVG ClipPath.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/2000/svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2.25rem&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2.25rem&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 36 36&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">clipPath</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hexagon-clip-path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#hexagon-path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">clipPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hexagon-path&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fill: #000&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;M15.5 0.65470053837926a4 4 0 0 1 4 0l11.58845726812 6.6905989232415a4 4 0 0 1 2 3.4641016151378l0 13.381197846483a4 4 0 0 1 -2 3.4641016151378l-11.58845726812 6.6905989232415a4 4 0 0 1 -4 0l-11.58845726812 -6.6905989232415a4 4 0 0 1 -2 -3.4641016151378l0 -13.381197846483a4 4 0 0 1 2 -3.4641016151378&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   clip-path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;url(#hexagon-clip-path)&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://user-images.githubusercontent.com/17817719/258330341-480ae4d2-8071-4bf7-b8b6-7cac9b86c1a1.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><h3 id="_1-path-태그로-육각형-모양-만들기" tabindex="-1">1. path 태그로 육각형 모양 만들기 <a class="header-anchor" href="#_1-path-태그로-육각형-모양-만들기" aria-label="Permalink to &quot;1. path 태그로 육각형 모양 만들기&quot;">​</a></h3><p>기본적인 svg 태그를 만들고 svg 태그 내부에 육각형 모양의 path를 만든다.</p><div class="language-svg vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">svg</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;svg </span></span>
<span class="line"><span>  xmlns=&quot;http://www.w3.org/2000/svg&quot; </span></span>
<span class="line"><span>  width=&quot;2.25rem&quot;</span></span>
<span class="line"><span>  height=&quot;2.25rem&quot;</span></span>
<span class="line"><span>  viewBox=&quot;0 0 36 36&quot;&gt;</span></span>
<span class="line"><span>  &lt;path </span></span>
<span class="line"><span>    style=&quot;fill: #000&quot;</span></span>
<span class="line"><span>    d=&quot;M15.5 0.65470053837926a4 4 0 0 1 4 0l11.58845726812 6.6905989232415a4 4 0 0 1 2 3.4641016151378l0 13.381197846483a4 4 0 0 1 -2 3.4641016151378l-11.58845726812 6.6905989232415a4 4 0 0 1 -4 0l-11.58845726812 -6.6905989232415a4 4 0 0 1 -2 -3.4641016151378l0 -13.381197846483a4 4 0 0 1 2 -3.4641016151378&quot;</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>&lt;/svg&gt;</span></span></code></pre></div><h3 id="_2-image-태그로-프로필-이미지-사용" tabindex="-1">2. image 태그로 프로필 이미지 사용 <a class="header-anchor" href="#_2-image-태그로-프로필-이미지-사용" aria-label="Permalink to &quot;2. image 태그로 프로필 이미지 사용&quot;">​</a></h3><div class="language-svg vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">svg</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;svg </span></span>
<span class="line"><span>  xmlns=&quot;http://www.w3.org/2000/svg&quot; </span></span>
<span class="line"><span>  width=&quot;2.25rem&quot;</span></span>
<span class="line"><span>  height=&quot;2.25rem&quot;</span></span>
<span class="line"><span>  viewBox=&quot;0 0 36 36&quot;&gt;</span></span>
<span class="line"><span>  &lt;path </span></span>
<span class="line"><span>    style=&quot;fill: #000&quot;</span></span>
<span class="line"><span>    d=&quot;M15.5 0.65470053837926a4 4 0 0 1 4 0l11.58845726812 6.6905989232415a4 4 0 0 1 2 3.4641016151378l0 13.381197846483a4 4 0 0 1 -2 3.4641016151378l-11.58845726812 6.6905989232415a4 4 0 0 1 -4 0l-11.58845726812 -6.6905989232415a4 4 0 0 1 -2 -3.4641016151378l0 -13.381197846483a4 4 0 0 1 2 -3.4641016151378&quot;</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line highlighted"><span>  &lt;image</span></span>
<span class="line highlighted"><span>    width=&quot;100%&quot;</span></span>
<span class="line highlighted"><span>    height=&quot;100%&quot;</span></span>
<span class="line highlighted"><span>    href=&quot;https://user-images.githubusercontent.com/17817719/258330341-480ae4d2-8071-4bf7-b8b6-7cac9b86c1a1.jpg&quot;</span></span>
<span class="line highlighted"><span>  &gt;&lt;/image&gt;</span></span>
<span class="line"><span>&lt;/svg&gt;</span></span></code></pre></div><h3 id="_3-clippath로-path-바깥-영역-자르기" tabindex="-1">3. clipPath로 path 바깥 영역 자르기 <a class="header-anchor" href="#_3-clippath로-path-바깥-영역-자르기" aria-label="Permalink to &quot;3. clipPath로 path 바깥 영역 자르기&quot;">​</a></h3><div class="language-svg vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">svg</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;svg </span></span>
<span class="line"><span>  xmlns=&quot;http://www.w3.org/2000/svg&quot; </span></span>
<span class="line"><span>  width=&quot;2.25rem&quot;</span></span>
<span class="line"><span>  height=&quot;2.25rem&quot;</span></span>
<span class="line"><span>  viewBox=&quot;0 0 36 36&quot;&gt;</span></span>
<span class="line highlighted"><span>  &lt;clipPath id=&quot;hexagon-clip-path&quot;&gt;</span></span>
<span class="line highlighted"><span>    &lt;use href=&quot;#hexagon-path&quot;/&gt;</span></span>
<span class="line highlighted"><span>  &lt;/clipPath&gt;</span></span>
<span class="line"><span>  &lt;path </span></span>
<span class="line highlighted"><span>    id=&quot;hexagon-path&quot;</span></span>
<span class="line"><span>    style=&quot;fill: #000&quot;</span></span>
<span class="line"><span>    d=&quot;M15.5 0.65470053837926a4 4 0 0 1 4 0l11.58845726812 6.6905989232415a4 4 0 0 1 2 3.4641016151378l0 13.381197846483a4 4 0 0 1 -2 3.4641016151378l-11.58845726812 6.6905989232415a4 4 0 0 1 -4 0l-11.58845726812 -6.6905989232415a4 4 0 0 1 -2 -3.4641016151378l0 -13.381197846483a4 4 0 0 1 2 -3.4641016151378&quot;</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>  &lt;image</span></span>
<span class="line highlighted"><span>    clip-path=&quot;url(#hexagon-clip-path)&quot;</span></span>
<span class="line"><span>    width=&quot;100%&quot;</span></span>
<span class="line"><span>    height=&quot;100%&quot;</span></span>
<span class="line"><span>    href=&quot;https://user-images.githubusercontent.com/17817719/258330341-480ae4d2-8071-4bf7-b8b6-7cac9b86c1a1.jpg&quot;</span></span>
<span class="line"><span>  &gt;&lt;/image&gt;</span></span>
<span class="line"><span>&lt;/svg&gt;</span></span></code></pre></div><h2 id="css-mask로-육각형-프로필-만들기" tabindex="-1">CSS Mask로 육각형 프로필 만들기 <a class="header-anchor" href="#css-mask로-육각형-프로필-만들기" aria-label="Permalink to &quot;CSS Mask로 육각형 프로필 만들기&quot;">​</a></h2><p><a href="https://the-next-web-research-lab.github.io/docs/essay/demo/hexagon-profile/css-mask.html" target="_blank" rel="noreferrer">데모보기</a></p><p><img src="`+h+`" alt="CSS Mask 데모"></p><h3 id="_1-img-태그로-프로필-이미지를-불러오고-크기를-잡아줌" tabindex="-1">1. img 태그로 프로필 이미지를 불러오고 크기를 잡아줌 <a class="header-anchor" href="#_1-img-태그로-프로필-이미지를-불러오고-크기를-잡아줌" aria-label="Permalink to &quot;1. img 태그로 프로필 이미지를 불러오고 크기를 잡아줌&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;profile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;profile image&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./profile.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_2-육각형-이미지로-마스크-처리" tabindex="-1">2. 육각형 이미지로 마스크 처리 <a class="header-anchor" href="#_2-육각형-이미지로-마스크-처리" aria-label="Permalink to &quot;2. 육각형 이미지로 마스크 처리&quot;">​</a></h3><p>CSS로 불러오는 이미지는 CORS에 영향을 받기 때문에 같은 도메인을 사용하는 이미지를 사용한다.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      mask-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./hexagon.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      mask-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">no-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      mask-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      mask-position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      -webkit-mask-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./hexagon.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      -webkit-mask-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">no-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      -webkit-mask-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      -webkit-mask-position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;profile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;profile image&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./profile.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,20),p=[t];function k(e,E,g,d,r,o){return a(),i("div",null,p)}const F=s(l,[["render",k]]);export{c as __pageData,F as default};