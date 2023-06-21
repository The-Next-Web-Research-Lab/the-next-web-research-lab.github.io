import{_ as n,p as e,q as o,a1 as t}from"./framework-96b046e1.js";const r="/assets/1-86372326.png",s="/assets/2-9caadf99.png",a="/assets/3-13ed3fe8.png",p="/assets/4-4694efba.png",g="/assets/5-8118ead6.png",i="/assets/6-3e2f79cf.png",d="/assets/7-0e1cad83.png",h={},c=t('<h1 id="구조-리펙토링-정리" tabindex="-1"><a class="header-anchor" href="#구조-리펙토링-정리" aria-hidden="true">#</a> 구조 리펙토링 정리</h1><h3 id="글의-목적" tabindex="-1"><a class="header-anchor" href="#글의-목적" aria-hidden="true">#</a> 글의 목적</h3><p>함수나 클래스 레벨의 코드를 수정하는 것은 굉장히 빈번하게 발생하고 익숙한 작업이다. 하지만 구조 레벨을 수정하는 것은 빈번하지 않고 큰 비용이 발생하는 작업이다.</p><p><strong>구조 리펙토링</strong>은 상태와 로직을 수정하지 않고 <strong>컴포넌트, 파일, 폴더</strong>를 역할과 책임 그리고 이해하기 쉬운 형태로 재정렬하는 것이다. 이 포스트에서는 <strong>컴포넌트 구조 리펙토링</strong>을 다룬다.</p><p>이해하기 쉬운 코드와 소프트웨어 철학을 학습했는 데도 불구하고 시간적인 여유가 없어 구조적인 리펙토링을 진행못할 때가 많다. 개인적으로 싫어하는 <strong>탁상공론</strong>을 벗어나 구조레벨의 리펙토링을 진행하였고, 관련해서 기본적인 방법들을 정리하고자 작성한 포스트이다.</p><h3 id="표기정의" tabindex="-1"><a class="header-anchor" href="#표기정의" aria-hidden="true">#</a> 표기정의</h3><h4 id="ngfor" tabindex="-1"><a class="header-anchor" href="#ngfor" aria-hidden="true">#</a> ngFor</h4><p>Angular에서 사용하는 <strong>리스트 렌더링 문법</strong>이다. vue에서는 <code>v-for</code>를 사용한다.</p><h4 id="조건문" tabindex="-1"><a class="header-anchor" href="#조건문" aria-hidden="true">#</a> 조건문</h4><p>조건문은 <code>[foo=bar]</code>과 같은 형태로 정의한다. 조건문의 <strong>왼쪽</strong>은 질문을 받는 표현을 정의하고, <strong>오른쪽</strong>에는 비교대상을 정의한다.</p><h4 id="컴포넌트-표기" tabindex="-1"><a class="header-anchor" href="#컴포넌트-표기" aria-hidden="true">#</a> 컴포넌트 표기</h4><p><img src="'+r+'" alt=""></p><p>여기서 컴포넌트를 표현할 때는 <strong>박스</strong>를 통해서 표현한다. 컴포넌트의 내부에서 정의된 기능들을 <code>&lt;feature&gt;</code>로 표현한다.</p><h3 id="컴포넌트-리펙토링-과정" tabindex="-1"><a class="header-anchor" href="#컴포넌트-리펙토링-과정" aria-hidden="true">#</a> 컴포넌트 리펙토링 과정</h3><p>PageComponent라는 메인페이지를 의미하는 컴포넌트를 예를 들어 작성한 리펙토링 과정이다.</p><h4 id="as-is-모습" tabindex="-1"><a class="header-anchor" href="#as-is-모습" aria-hidden="true">#</a> AS IS 모습</h4><p><img src="'+s+'" alt=""></p><p>PageComponent는 헤더, 사이드 네비게이션, 타임라인 콘텐츠, 온라인중인 친구리스트로 구성된다. PageComponent의 개선포인트는 <strong>3가지</strong>가 있다.</p><p><strong>첫번째</strong>는 상위레벨에서 하위레벨의 역할을 수행하고 있는 것이다. 여기서는 네비게이션 숨김기능을 PageComponent에서 다루고 있고, SideNaviComponent로 이동이 필요하다.</p><p><strong>두번째</strong>는 컴포넌트화가 필요한 볼륨이 컴포넌트화가 안되있고, 복잡성을 증가하는 부분이다. 여기서는 타임라인을 구체적으로 표시하는 방법을 PageComponent에서 다루고 있어, 타임라인을 표시를 의미하는 컴포넌트 생성이 필요하다.</p><p><strong>세번째</strong>는 하위레벨의 의미가 모호한 것이다. 온라인중인 친구리스트 기능을 담당하는 OnlineListComponent가 <strong>컴포넌트 네이밍이 모호</strong>하여 네이밍 변경이 필요하다.</p><h4 id="리펙토링을-위한-준비" tabindex="-1"><a class="header-anchor" href="#리펙토링을-위한-준비" aria-hidden="true">#</a> 리펙토링을 위한 준비</h4><p>리펙토링을 시작하기 앞서 <strong>설계작업</strong>을 하는 게 좋다. 현실적인 방법이 아닌 <strong>이상적인 구조</strong>로 설계를 한다. 이상적인 구조는 이해하기 쉽고, 역할을 명확히 알 수 있게 구분하는 작업이다.</p><p><img src="'+a+'" alt=""></p><p>개선 포인트를 반영하여 <strong>재설계</strong>한 구조이다. PageComponent에서 개선이 필요한 <strong>3가지</strong>를 반영했다.</p><p><strong>첫번째</strong>는 네비게이션 숨김기능은 SideNaviComponent 내부로 이동되었다. PageComponent에 있는 숨김기능의 <strong>상태</strong>와 <strong>로직</strong>을 SideNaviComponent로 이동되었고, PageComponent는 SideNaviComponent를 사용하는 것만 담당하게 된다.</p><p><strong>두번째</strong>는 <code>{timelineDatas}</code>를 구체적으로 기술하는 부분을 위해 TimelineComponent를 만들었다. TimelineComponent에서 <code>{timelineDatas}</code> 데이터를 다루게 되고, PageComponent는 구체적인 부분을 다룰 필요가 없어졌다.</p><p><strong>세번째</strong>는 <strong>온라인중인 친구리스트</strong>라는 의미를 명확히 하기 위해 OnlineListComponent는 OnlineFriendsComponent으로 네이밍이 변경됬다.</p><h4 id="구조-리펙토링-과정" tabindex="-1"><a class="header-anchor" href="#구조-리펙토링-과정" aria-hidden="true">#</a> 구조 리펙토링 과정</h4><p><img src="'+p+'" alt=""></p><p>먼저 네이밍 변경과 역할 이동하는 부분부터 진행한다. 이처럼 리펙토링을 시작할 때는 먼저 볼륨이 작거나 쉽게 수정이 가능한 부분부터 해결한다.</p><p><img src="'+g+'" alt=""></p><p>이제 볼륨이 큰 부분을 작업한다. 컴포넌트를 생성하여 다른 컴포넌트에 이동하는 작업은 많은 작업을 동반하기 때문에 유의해야 한다. 이렇게 완료를 하면 한 싸이클이 완료된다. 하위 컴포넌트의 리펙토링이 필요하면 이런 형태로 싸이클을 반복하면 작업하는 것을 권하고 싶다.</p><h4 id="구체적인-구조-리펙토링-과정" tabindex="-1"><a class="header-anchor" href="#구체적인-구조-리펙토링-과정" aria-hidden="true">#</a> 구체적인 구조 리펙토링 과정</h4><p>구조 리펙토링 진행 시 구체적으로 코드레벨에서는 아래와 같은 순서로 진행된다.</p><p><strong>Step 1</strong>, <strong>마크업</strong> 코드를 개선한 위치로 복사&amp;붙여넣기한다. 원본의 동작과 리펙토링 결과의 동작이 동일한지 확인이 필요함으로 원본을 유지한다.</p><p><strong>Step 2</strong>, <strong>상태와 로직</strong>을 개선한 위치로 이동한다. 마크업에 사용된 상태와 로직을 이동하는 것이다. 마크업의 가장 위에 있는 라인부터 필요한 상태와 로직을 찾아 이동할 위치에 복사&amp;붙여넣기를 한다. 옮기는 작업을 할 때는 <strong>IDE</strong>의 도움이 필요하다. 옮기는 작업 시 누락된 부분을 <strong>린트 또는 컴파일러</strong>를 통해 즉각적으로 확인한다.</p><p><strong>Step 3</strong>, 이동된 구조와 원본 구조의 <strong>기능을 확인</strong>한다. 원본 기능과 비교해 원본에 구현되었던 사용자 스토리를 확인한다.</p><p><strong>Step 4</strong>, <strong>원본을 삭제</strong>한다. 원본 기능을 삭제하고 신규로 옮긴 부분만 남긴다. 이때도 <strong>IDE</strong>의 도움을 받아 미사용 코드를 모두 삭제하도록한다.</p><p><strong>마지막</strong>으로, 리펙토링 결과를 <strong>커밋</strong>한다. 소스 커밋을 할 때는 앞에 <code>[리펙토링]</code>으로 시작하여 로그를 남기면 리펙토링 관련해서 로그를 파악하기 용이하다.</p><h4 id="중복코드가-발생되는-경우" tabindex="-1"><a class="header-anchor" href="#중복코드가-발생되는-경우" aria-hidden="true">#</a> 중복코드가 발생되는 경우</h4><p>역할이동, 신규 컴포넌트로 이동된 상태나 로직이 중복되어 기술될 수 있다. 하지만 구조레벨 수정중에 중복된 코드가 보여도 <strong>구조레벨 수정 완료 후</strong>에 한번에 진행하는 것을 권한다.</p><p>중복 코드를 수정하는 작업은 <strong>코드레벨의 리펙토링</strong>이다. 다른 작업을 병렬적으로 작업하게 되면 실수할 여지가 있으므로 구조레벨의 리펙토링이 완료 후에 하는 것이 권한다.</p><h3 id="리펙토링-적용부분" tabindex="-1"><a class="header-anchor" href="#리펙토링-적용부분" aria-hidden="true">#</a> 리펙토링 적용부분</h3><p>이번에 리펙토링을 적용된 기능은 이와 같은 형태이다.</p><p><img src="'+i+'" alt=""></p><p>특정 페이지의 컴포넌트의 영역이다. 해당 컴포넌트는 타이틀, 탭, 응답형식그룹, 바로연결 버튼설정, 응답형식 추가 및 상태로 구성된다. <strong>응답형식</strong>은 사용자가 챗봇에게 질문을 했을 때 <strong>답변을 설정하는 부분</strong>이다.</p><p><strong>응답형식그룹</strong> 부분은 뮤직, 이미지, 텍스트, 리스트, 커머스 등과 같이 다양한 기능이 있다. 구체적인 기능으로는 추가/수정/삭제 버튼을 통해 <strong>레이어팝업</strong>이 노출되고, 그룹과 그룹내부에서 <strong>정렬</strong>을 기능이 수행할 수 있다.</p><h4 id="리펙토링-결과" tabindex="-1"><a class="header-anchor" href="#리펙토링-결과" aria-hidden="true">#</a> 리펙토링 결과</h4><p><img src="'+d+'" alt=""></p><p>개선 포인트는 <strong>4가지</strong>가 있다.</p><p><strong>첫번째</strong>는 응답형식을 의미하는 기능이 ResponseComponent에 구체적으로 기술되어 볼륨이 크다. 응답형식을 의미하는 ResponseTypeGroupComponent를 신규로 만들어 구체적인 기능들을 이동했다.</p><p><strong>두번째</strong>는 카카오톡 응답형식과 카카오미니 응답형식의 역할을 담당하는 기능이 ResponseTypeGroupComponent에 기술되었다. 두가지로 역할 구분이 가능하기 때문에 KakaoTalkResponseComponent와 KakaoMiniResponseComponent로 나눴다.</p><p><strong>세번째</strong>는 컴포넌트 컨벤션과 다르게 정의되어 네이밍을 수정했다. ResponseAddQuickreplyComponent를 QuickReplyComponent로, ResponseAddResponseTypeComponent에서 ResponseTypePanelComponent로 수정되었다.</p><p><strong>마지막</strong>는 응답형식 중 <strong>스킬서버의 데이터를 표시하는 기능</strong>이 ResponseComponent로 기술되어 있다. <strong>응답형식 추가 및 상태</strong>를 담당하는 역할에 맞춰 ResponseTypePanelComponent으로 이동했다.</p><h4 id="정리" tabindex="-1"><a class="header-anchor" href="#정리" aria-hidden="true">#</a> 정리</h4><p>구조 리펙토링도 코드 리펙토링과 같은 원칙이 적용된다. 최대한 작게 유지하는 것이 이해하기 용이하고 역할과 책임을 명확히 해야 한다. 리펙토링 과정중에 프로세스 정의없이 난잡하게 진행하면 문제가 발생하기 쉬우며, 롤백 후 다시 진행하는 경우도 빈번하다. 생산성을 높이기 위해 프로세스를 명확히하는 것을 권한다.</p><h3 id="끝" tabindex="-1"><a class="header-anchor" href="#끝" aria-hidden="true">#</a> 끝</h3>',58),m=[c];function l(f,u){return e(),o("div",null,m)}const C=n(h,[["render",l],["__file","structure-refactoring.html.vue"]]);export{C as default};
