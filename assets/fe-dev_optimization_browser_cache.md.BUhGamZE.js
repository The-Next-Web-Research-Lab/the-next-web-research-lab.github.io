import{_ as a,c as e,o as t,a3 as o}from"./chunks/framework.9Buaa5aL.js";const r="/assets/browser_cache1.B9l7bb0-.jpg",i="/assets/browser_cache2.B90qI1u_.jpg",f=JSON.parse('{"title":"브라우저 캐시란?","description":"","frontmatter":{"title":"브라우저 캐시란?"},"headers":[],"relativePath":"fe-dev/optimization/browser_cache.md","filePath":"fe-dev/optimization/browser_cache.md"}'),c={name:"fe-dev/optimization/browser_cache.md"},s=o('<h1 id="브라우저-캐시란" tabindex="-1">브라우저 캐시란? <a class="header-anchor" href="#브라우저-캐시란" aria-label="Permalink to &quot;브라우저 캐시란?&quot;">​</a></h1><p>브라우저 캐시는 웹 사이트와 애플리케이션의 성능을 향상시키는 중요한 기술입니다. 브라우저 캐시는 이전에 가져온 리소스들을 재사용함으로써 네트워크 트래픽과 레이턴시를 줄여줍니다. 이 글에서는 브라우저 캐시의 개념과 종류, 캐싱 정책과 유효성 검사, 그리고 캐싱의 장단점에 대해 알아보겠습니다.</p><h2 id="브라우저-캐시의-개념" tabindex="-1">브라우저 캐시의 개념 <a class="header-anchor" href="#브라우저-캐시의-개념" aria-label="Permalink to &quot;브라우저 캐시의 개념&quot;">​</a></h2><p><img src="'+r+'" alt="browser_cache1"></p><p>브라우저 캐시는 웹 브라우저가 사용하는 사설 캐시입니다. 사설 캐시는 단일 사용자가 전용으로 사용하는 캐시로, 사용자의 컴퓨터나 모바일 기기에 저장됩니다. 브라우저 캐시는 사용자가 방문한 웹 페이지의 리소스들을 저장하고, 다시 방문할 때 재사용합니다.</p><p>예를 들어, 이미지, 스타일 시트, 자바스크립트 파일 등이 브라우저 캐시에 저장될 수 있습니다. 이렇게 하면, 네트워크 요청을 줄이고 리소스를 보여주는 데에 필요한 시간을 단축할 수 있습니다.</p><h2 id="브라우저-캐시의-종류" tabindex="-1">브라우저 캐시의 종류 <a class="header-anchor" href="#브라우저-캐시의-종류" aria-label="Permalink to &quot;브라우저 캐시의 종류&quot;">​</a></h2><p>브라우저 캐시에는 여러 가지 종류가 있습니다. 대표적인 것은 메모리 캐시와 디스크 캐시입니다.</p><p>메모리 캐시는 컴퓨터의 RAM에 저장되는 임시적인 캐시입니다. 메모리 캐시는 빠르게 접근할 수 있지만, 용량이 제한적이고 브라우저를 닫으면 삭제됩니다.</p><p>디스크 캐시는 컴퓨터의 하드 디스크에 저장되는 영구적인 캐시입니다. 디스크 캐시는 용량이 넓고 브라우저를 닫아도 유지되지만, 접근 속도가 느립니다.</p><p>일반적으로, 브라우저는 메모리 캐시와 디스크 캐시를 혼합하여 사용합니다. 예를 들어, sessionStorage와 localStorage가 있습니다.</p><h2 id="브라우저-캐싱-정책" tabindex="-1">브라우저 캐싱 정책 <a class="header-anchor" href="#브라우저-캐싱-정책" aria-label="Permalink to &quot;브라우저 캐싱 정책&quot;">​</a></h2><p>브라우저 캐싱 정책은 서버와 클라이언트 간에 어떤 리소스를 얼마나 오래 저장하고 언제 재검증할지를 결정합니다. 브라우저 캐싱 정책은 HTTP 헤더를 통해 전달됩니다.</p><p>가장 중요한 헤더는 Cache-Control 헤더입니다. Cache-Control 헤더는 요청과 응답 양측 모두에 있어 캐싱 메커니즘을 위한 디렉티브를 지정하는데 사용됩니다.</p><p>예를 들어, max-age 디렉티브는 리소스가 유효하다고 판단되는 최대 시간을 지정하고, no-cache 디렉티브는 캐시된 복사본을 사용하기 전에 원 서버로 요청을 보내도록 강제합니다.</p><h2 id="브라우저-캐싱의-장단점" tabindex="-1">브라우저 캐싱의 장단점 <a class="header-anchor" href="#브라우저-캐싱의-장단점" aria-label="Permalink to &quot;브라우저 캐싱의 장단점&quot;">​</a></h2><p><img src="'+i+'" alt="browser_cache2"></p><p>브라우저 캐싱은 많은 이점을 제공하지만, 단점도 있습니다. 브라우저 캐싱의 장점은 다음과 같습니다:</p><ul><li>웹 사이트와 애플리케이션의 성능을 향상시킵니다. 네트워크 요청과 레이턴시를 줄여줌으로써 리소스를 보여주는 데에 필요한 시간을 단축할 수 있습니다.</li><li>네트워크 비용을 절감합니다. 네트워크 요청을 줄이고 데이터 전송량을 감소시킴으로써 네트워크 비용을 절감할 수 있습니다.</li><li>오프라인 모드를 지원합니다. 네트워크 연결이 끊어져도 캐시된 리소스를 사용할 수 있습니다.</li></ul><p>브라우저 캐싱의 단점은 다음과 같습니다:</p><ul><li>오래된 정보를 보여줄 수 있습니다. 웹 사이트에서 제공하는 리소스가 자주 변경되는 경우, 캐시된 리소스가 최신 정보를 반영하지 않을 수 있습니다. 이 경우, 사용자는 최신 정보를 얻지 못할 수 있습니다.</li><li>보안 문제를 야기할 수 있습니다. 사용자가 로그인한 상태에서 개인 정보를 포함하는 페이지를 방문하고, 그 페이지가 공유 캐시에 저장된다면, 다른 사용자가 그 페이지를 볼 수 있게 될 수 있습니다. 이러한 문제들을 방지하기 위해서는, 적절한 캐싱 정책과 유효성 검사를 수행해야 합니다.</li></ul><h2 id="결론" tabindex="-1">결론 <a class="header-anchor" href="#결론" aria-label="Permalink to &quot;결론&quot;">​</a></h2><p>브라우저 캐싱은 웹 성능 최적화에 필수적인 기술입니다. 브라우저 캐싱은 이전에 가져온 리소스들을 재사용함으로써 웹 사이트와 애플리케이션의 성능을 향상시킵니다. 하지만, 브라우저 캐싱에는 장단점이 있으므로, 적절한 캐싱 정책과 유효성 검사를 통해 문제들을 해결해야 합니다</p>',23),l=[s];function p(h,n,_,d,m,b){return t(),e("div",null,l)}const q=a(c,[["render",p]]);export{f as __pageData,q as default};
