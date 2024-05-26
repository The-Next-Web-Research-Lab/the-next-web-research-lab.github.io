import{_ as e,c as t,o as a,a3 as o}from"./chunks/framework.COm4hYgr.js";const p=JSON.parse('{"title":"2019.11.29 코드리뷰를 위한 React 컨벤션","description":"","frontmatter":{"title":"2019.11.29 코드리뷰를 위한 React 컨벤션"},"headers":[],"relativePath":"fe-dev/framework/react-convention-for-codereview.md","filePath":"fe-dev/framework/react-convention-for-codereview.md"}'),r={name:"fe-dev/framework/react-convention-for-codereview.md"},i=o('<h1 id="코드리뷰를-위한-react-컨벤션" tabindex="-1">코드리뷰를 위한 React 컨벤션 <a class="header-anchor" href="#코드리뷰를-위한-react-컨벤션" aria-label="Permalink to &quot;코드리뷰를 위한 React 컨벤션&quot;">​</a></h1><h3 id="글의-목적" tabindex="-1">글의 목적 <a class="header-anchor" href="#글의-목적" aria-label="Permalink to &quot;글의 목적&quot;">​</a></h3><p>React로 개발된 서비스의 코드리뷰를 받았는 데, React에 대한 경험이 없었다. Vue, Angular만 실무에 사용해봐서 React의 컨벤션과 개념이 생소했다.</p><p>코드리뷰 할 때 React에서 통용되는 컨벤션인지 개발자가 작성한 코드인지 구분하기 위해 생소한 내용을 정리했다. 구조 파악 및 생소했던 부분을 단순히 카테고리 형태로 정리하여 개념을 이해하는 데 초점을 뒀다.</p><h3 id="네이밍-컨벤션" tabindex="-1">네이밍 컨벤션 <a class="header-anchor" href="#네이밍-컨벤션" aria-label="Permalink to &quot;네이밍 컨벤션&quot;">​</a></h3><p>Vue, Angular, React는 라이프 사이클 훅명이 모두 다르다. 그래서 어떤 명을 사용하는 지 알아둘 필요가 있다. 그리고 Prefix와 Suffix 규칙이 눈에 띄어 정리해봤다.</p><h4 id="라이프-사이클" tabindex="-1">라이프 사이클 <a class="header-anchor" href="#라이프-사이클" aria-label="Permalink to &quot;라이프 사이클&quot;">​</a></h4><blockquote><p><a href="https://ko.reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noreferrer">https://ko.reactjs.org/docs/state-and-lifecycle.html</a></p></blockquote><ul><li>getDerivedStateFromProps</li><li>shouldComponentUpdate</li><li>render</li><li>getSnapshotBeforeUpdate</li><li>componentDidMount</li><li>componentDidUpdate</li><li>componentDidUnmount</li></ul><h4 id="prefix" tabindex="-1">Prefix <a class="header-anchor" href="#prefix" aria-label="Permalink to &quot;Prefix&quot;">​</a></h4><ul><li>with~ : 고차 컴포넌트</li><li>set~ : 값 설정</li><li>use~ : Hook API</li></ul><h4 id="suffix" tabindex="-1">Suffix <a class="header-anchor" href="#suffix" aria-label="Permalink to &quot;Suffix&quot;">​</a></h4><ul><li>~Context : Context API</li><li>~Reducer : 리듀서</li></ul><h3 id="api-컨벤션" tabindex="-1">API 컨벤션 <a class="header-anchor" href="#api-컨벤션" aria-label="Permalink to &quot;API 컨벤션&quot;">​</a></h3><p>Context, Hook, Immer API에 대한 눈에 띄었던 부분을 작성했다.</p><h4 id="context-api" tabindex="-1">Context API <a class="header-anchor" href="#context-api" aria-label="Permalink to &quot;Context API&quot;">​</a></h4><blockquote><p><a href="https://ko.reactjs.org/docs/context.html" target="_blank" rel="noreferrer">https://ko.reactjs.org/docs/context.html</a></p></blockquote><p>상위 컴포넌트에서 하위 컴포넌트에 상태를 전달하고자 할 때 사용한다. 컴포넌트를 통해 상태를 공유한다.</p><ul><li>Context.Provider : 상위 컴포넌트에서 하위 컴포넌트에 상태를 전달하고자 할 때 사용하는 컴포넌트</li><li>Context.Consumer : 하위 컴포넌트에서 상태를 사용하고자 할 때 사용하는 컴포넌트</li></ul><h4 id="hook-api" tabindex="-1">Hook API <a class="header-anchor" href="#hook-api" aria-label="Permalink to &quot;Hook API&quot;">​</a></h4><blockquote><p><a href="https://ko.reactjs.org/docs/hooks-intro.html" target="_blank" rel="noreferrer">https://ko.reactjs.org/docs/hooks-intro.html</a></p></blockquote><p>React에 제공하는 기능을 함수 형태로 사용하는 API이다.</p><ul><li>useState : 상태 관리</li><li>useEffect : 라이프 사이클</li><li>useContext : 컨텍스트 사용</li><li>useRef : 돔 접근</li><li>useMemo, useCallback : 메모이제이션</li><li>useReducer : 리듀서</li></ul><h4 id="immer" tabindex="-1">Immer <a class="header-anchor" href="#immer" aria-label="Permalink to &quot;Immer&quot;">​</a></h4><blockquote><p><a href="https://immerjs.github.io/immer/docs/introduction#immer" target="_blank" rel="noreferrer">https://immerjs.github.io/immer/docs/introduction#immer</a></p></blockquote><ul><li>produce : 비순수 함수를 콜백으로 사용하여 불변성을 구현해줌</li></ul><h3 id="끝" tabindex="-1">끝 <a class="header-anchor" href="#끝" aria-label="Permalink to &quot;끝&quot;">​</a></h3>',27),l=[i];function n(c,h,s,d,u,m){return a(),t("div",null,l)}const k=e(r,[["render",n]]);export{p as __pageData,k as default};