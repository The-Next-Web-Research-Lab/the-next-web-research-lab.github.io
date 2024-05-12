import{_ as e,c as a,o as r,a3 as t}from"./chunks/framework.9Buaa5aL.js";const f=JSON.parse('{"title":"소프트웨어 버전 사용 경험기","description":"","frontmatter":{"title":"소프트웨어 버전 사용 경험기"},"headers":[],"relativePath":"essay/software-versioning.md","filePath":"essay/software-versioning.md"}'),o={name:"essay/software-versioning.md"},s=t('<h1 id="소프트웨어-버전-사용-경험기" tabindex="-1">소프트웨어 버전 사용 경험기 <a class="header-anchor" href="#소프트웨어-버전-사용-경험기" aria-label="Permalink to &quot;소프트웨어 버전 사용 경험기&quot;">​</a></h1><p>소프트웨어에서 버전은 배포된 시점을 기록하는 것이다. 배포된 시점을 알 수 있으면 서비스 장애 해결에 용이할 뿐만 아니라 소프트웨어의 의존성을 파악하기 쉽다. 프로젝트에 따라서 두 가지 방법으로 버전 기록했는데, 그 경험을 공유하고자 한다.</p><h2 id="날짜로-버전-사용" tabindex="-1">날짜로 버전 사용 <a class="header-anchor" href="#날짜로-버전-사용" aria-label="Permalink to &quot;날짜로 버전 사용&quot;">​</a></h2><p>현재는 종료된 카카오 영화예매 서비스를 담당할 때 버전은 날짜를 사용했다. <code>YYYYMMDD</code> 형식을 사용했는데, 예를 들어 20230101처럼 연월일을 모두 기입하는 방식이다.</p><p>이 방식을 활용하면 언제 배포했는지 쉽게 파악할 수 있다. 배포 시점에 따라 장애가 발생하기도 하기 때문에 시점을 알고 싶을 때 유용하다.</p><p>서비스는 여러 개의 서버 장비에 배포가 되기 때문에 간혹 배포 이슈로 특정 서버 장비에 배포가 안되는 경우가 있다. 이 경우에는 Sentry처럼 장애 모니터링 도구를 통해서 버전을 확인해서 바로 파악 가능하며, 서버 장비를 뒤져서 배포 안된 것이 있는지 확인할 수 있었다.</p><h2 id="유의적-버전-사용" tabindex="-1">유의적 버전 사용 <a class="header-anchor" href="#유의적-버전-사용" aria-label="Permalink to &quot;유의적 버전 사용&quot;">​</a></h2><p>유의적 버전은 카카오 사내 플랫폼 개발 당시에 사내 라이브러리를 운영할 때 사용했다.</p><p>이 방식은 소프트웨어의 상태를 표현할 때 좋은 방식이다. 일반적으로 <code>[major].[minor].[patch]</code> 형식을 활용한다. 예를 들어 1.2.3처럼 점으로 구분해서 기입하는 방식이다.</p><p>각 버전은 다음과 같은 이유일 때 올린다.</p><ul><li>major: 기존 버전과 호환되지 않게 기능이 바뀔 때</li><li>minor: 기존 버전과 호환되면서 새로운 기능을 추가할 때</li><li>patch: 기존 버전과 호환되면서 버그를 수정할 때</li></ul><p>유의적 버전에 대한 내용은 <a href="https://semver.org/lang/ko/" target="_blank" rel="noreferrer">semver.org</a>를 참고하면 된다.</p>',12),i=[s];function n(l,c,p,_,d,h){return r(),a("div",null,i)}const u=e(o,[["render",n]]);export{f as __pageData,u as default};
