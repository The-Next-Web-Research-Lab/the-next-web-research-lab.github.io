<template><div><h1 id="nuxt-v2-0에서-v2-11로-마이그레이션" tabindex="-1"><a class="header-anchor" href="#nuxt-v2-0에서-v2-11로-마이그레이션" aria-hidden="true">#</a> Nuxt v2.0에서 v2.11로 마이그레이션</h1>
<h3 id="글의-목적" tabindex="-1"><a class="header-anchor" href="#글의-목적" aria-hidden="true">#</a> 글의 목적</h3>
<p>트위터에서 Nuxt가 TypeScript를 공식적으로 지원함을 알게 되었었다. <a href="https://github.com/nuxt/nuxt.js/releases/tag/v2.9.0" target="_blank" rel="noopener noreferrer">Nuxt v2.9.0<ExternalLinkIcon/></a> 부터 TypeScript에 대한 공식적인 가이드와 마이그레이션 가이드를 알렸다.</p>
<p>8월초 프로젝트를 셋업하는 당시는 공식적인 가이드를 제공하지 않았는 데, 프로젝트 셋업 후 공식 버전이 릴리즈 되었다. 이 포스트는 프로젝트 중간에 2.11.0으로 마이그레이션 한 내용에 대한 정리이다.</p>
<h3 id="목차" tabindex="-1"><a class="header-anchor" href="#목차" aria-hidden="true">#</a> 목차</h3>
<ul>
<li>파일별 업그레이드 내역</li>
<li>마이그레이션 과정</li>
<li>마이그레이션 시 발생한 이슈</li>
</ul>
<h3 id="파일별-업그레이드-내역" tabindex="-1"><a class="header-anchor" href="#파일별-업그레이드-내역" aria-hidden="true">#</a> 파일별 업그레이드 내역</h3>
<h4 id="nuxt-config-ts" tabindex="-1"><a class="header-anchor" href="#nuxt-config-ts" aria-hidden="true">#</a> nuxt.config.ts</h4>
<div class="language-diff line-numbers-mode" data-ext="diff"><pre v-pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> import NuxtConfiguration from '@nuxt/config'
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import { Configuration } from '@nuxt/types'
</span></span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> const config: NuxtConfiguration = {
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const config: Configuration = {
</span></span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   devModules: [
</span><span class="token prefix deleted">-</span><span class="token line">     // Doc: https://github.com/nuxt-community/eslint-module
</span><span class="token prefix deleted">-</span><span class="token line">     '@nuxtjs/eslint-module'
</span><span class="token prefix deleted">-</span><span class="token line">   ],
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   buildModules: [
</span><span class="token prefix inserted">+</span><span class="token line">     [
</span><span class="token prefix inserted">+</span><span class="token line">       '@nuxt/typescript-build',
</span><span class="token prefix inserted">+</span><span class="token line">       {
</span><span class="token prefix inserted">+</span><span class="token line">         typeCheck: true,
</span><span class="token prefix inserted">+</span><span class="token line">         ignoreNotFoundWarnings: true
</span><span class="token prefix inserted">+</span><span class="token line">       }
</span><span class="token prefix inserted">+</span><span class="token line">     ]
</span><span class="token prefix inserted">+</span><span class="token line">   ],
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h4>
<div class="language-diff line-numbers-mode" data-ext="diff"><pre v-pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    "dev": "nuxt",
</span><span class="token prefix deleted">-</span><span class="token line">    "build": "nuxt build",
</span><span class="token prefix deleted">-</span><span class="token line">    "generate": "nuxt generate",
</span><span class="token prefix deleted">-</span><span class="token line">    "start": "nuxt start",
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    "dev": "nuxt-ts --spa",
</span><span class="token prefix inserted">+</span><span class="token line">    "build": "nuxt-ts build --spa",
</span><span class="token prefix inserted">+</span><span class="token line">    "generate": "nuxt-ts generate",
</span><span class="token prefix inserted">+</span><span class="token line">    "start": "nuxt-ts start",
</span></span>"dependencies": {
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    "@nuxt/typescript-runtime": "^0.3.3",
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    "nuxt": "^2.0.0",
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    "nuxt": "^2.11.0",
</span></span>"devDependencies": {
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    "@nuxt/typescript": "^2.8.1",
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    "@nuxt/typescript-build": "^0.5.2",
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h4>
<div class="language-diff line-numbers-mode" data-ext="diff"><pre v-pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  "@nuxt/vue-app",
</span><span class="token prefix deleted">-</span><span class="token line">  "@nuxt/config"
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  "@nuxt/types"
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> middleware</h4>
<div class="language-diff line-numbers-mode" data-ext="diff"><pre v-pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> import { Middleware } from '@nuxt/vue-app'
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import { Middleware } from '@nuxt/types'
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="마이그레이션-과정" tabindex="-1"><a class="header-anchor" href="#마이그레이션-과정" aria-hidden="true">#</a> 마이그레이션 과정</h3>
<p>마이그레이션은 3단계로 진행했다. TypeScript를 공식지원하는 버전인 2.9.x의 이전과 다음 버전을 구분했다.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. 2.0.0 => 2.8.1
2. 2.8.1 => 2.9.2
3. 2.9.2 => 2.11.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>각 버전의 의미는 다음과 같다.</p>
<ul>
<li>2.0.0: 현재 버전</li>
<li>2.8.1: TypeScript 공식지원 버전의 바로 <strong>이전 버전</strong></li>
<li>2.9.2: TypeScript 공식지원 시작 버전(2.9.x) 중 가장 높은 버전</li>
<li>2.11.0: 가장 최신 버전</li>
</ul>
<h3 id="마이그레이션-시-발생한-이슈" tabindex="-1"><a class="header-anchor" href="#마이그레이션-시-발생한-이슈" aria-hidden="true">#</a> 마이그레이션 시 발생한 이슈</h3>
<p>마이그레이션 시 발생한 이슈 <code v-pre>2.8.1</code> =&gt; <code v-pre>2.9.2</code>에서 버전 업그레이드 후 발생한 이슈라고 볼 수 있다. 이외 다른 스팩에서는 이슈없이 바로 버전 업그레이드가 진행되었다.</p>
<h4 id="server-종료-되는-현상-해결" tabindex="-1"><a class="header-anchor" href="#server-종료-되는-현상-해결" aria-hidden="true">#</a> Server 종료 되는 현상 해결</h4>
<p><code v-pre>2.8.1</code> =&gt; <code v-pre>2.9.2</code> 버전 업그레이드 후 SPA 모드는 커멘드 옵션으로 변경되었다. 개발 단계 서버 실행 시, <code v-pre>nuxt --spa</code>로 실행해야 한다.</p>
<h4 id="scrollbehavior" tabindex="-1"><a class="header-anchor" href="#scrollbehavior" aria-hidden="true">#</a> scrollBehavior</h4>
<p>nuxt 2.9.x 부터 app/router.scrollBehavior.js로 처리</p>
<h4 id="decorator에러-발생" tabindex="-1"><a class="header-anchor" href="#decorator에러-발생" aria-hidden="true">#</a> Decorator에러 발생</h4>
<p>nuxt.config.ts를 정상적으로 사용하기 위해서는 <code v-pre>@nuxt/typescript-runtime</code> 모듈을 설치해야 한다.
nuxt.config.ts에는 TypeScript를 사용하도록 설정하는 파일이 있다. 그렇기 때문에 Runtime 설정도 필요하다.</p>
<p>설치 후에는 <code v-pre>scripts</code>에 <code v-pre>nuxt</code>로 사용했던 명령어를 <code v-pre>nuxt-ts</code>로 변경이 필요하다.</p>
<h3 id="끄읕" tabindex="-1"><a class="header-anchor" href="#끄읕" aria-hidden="true">#</a> 끄읕</h3>
<p>사실 Nuxt는 2.11.0으로 업그레이드한 이유는 단순히 마이그레이션의 목적이 아니였다. <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html" target="_blank" rel="noopener noreferrer">TypeScript 3.7<ExternalLinkIcon/></a>부터 <a href="https://github.com/tc39/proposal-optional-chaining" target="_blank" rel="noopener noreferrer">Optional Chaining<ExternalLinkIcon/></a> 스팩이 추가되었는 데, 객체의 프로퍼티 접근 관련해서 안전하고 가독성 좋은 방안을 찾고 있었던 시기였다. 결론적으로 Optional Chaining를 사용하기 위해서 버전 업그레이드에 대한 연쇄적으로 찾아본 결과 Nuxt를 최신 버전으로 업그레이드하게 된 것이다.</p>
</div></template>


