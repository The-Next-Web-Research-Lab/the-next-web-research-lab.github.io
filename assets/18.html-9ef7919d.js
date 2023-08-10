import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,e as r}from"./app-85b83f1b.js";const h={},l=r('<h1 id="도서-리뷰-시리즈-클린-소프트웨어" tabindex="-1"><a class="header-anchor" href="#도서-리뷰-시리즈-클린-소프트웨어" aria-hidden="true">#</a> 도서 리뷰 시리즈 - 클린 소프트웨어</h1><h2 id="출처" tabindex="-1"><a class="header-anchor" href="#출처" aria-hidden="true">#</a> 출처</h2><p>『클린 소프트웨어』 | 로버트 C. 마틴 저 / 이용원, 김정민, 정지호 공역 | 제이펍 | 2017년 05월 15일</p><h2 id="한-줄-리뷰" tabindex="-1"><a class="header-anchor" href="#한-줄-리뷰" aria-hidden="true">#</a> 한 줄 리뷰</h2><p>설계를 처음 시작하는 개발자에 추천합니다.</p><h2 id="에자일-설계" tabindex="-1"><a class="header-anchor" href="#에자일-설계" aria-hidden="true">#</a> 에자일 설계</h2><h3 id="설계의-악취" tabindex="-1"><a class="header-anchor" href="#설계의-악취" aria-hidden="true">#</a> 설계의 악취</h3><p>소프트웨어에 다음과 같은 느낌이 든다면 소프트웨어 재설계가 필요한 것을 알 수 있다.</p><ul><li><strong>부동성</strong> : 다른 시스템에 재사용할 수 있는 컴포넌트를 구분하기 어려울 때</li><li><strong>경직성</strong> : 시스템을 변경하려면 시스템의 다른 부분들까지 많이 변경이 필요할 때</li><li><strong>취약성</strong> : 시스템을 변경하면 그 부분과 개념적으로 아무런 관련이 없는 부분이 망가질 때</li><li><strong>점착성</strong> : 변경 사항이 발생했을 때 설계를 유지하기 어려워 옳은 동작을 하기 어려울 때</li><li><strong>불필요한 복잡성</strong> : 현재 시점에서 필요하지 않은 설계가 포함이 되어 있을 때</li><li><strong>불필요한 반복</strong> : 단일 추상 개념으로 통합할 수 있는 반복적인 구조가 설계에 포함될 때</li><li><strong>불투명성</strong> : 이해하기 어렵고 의도를 잘 표현하지 못할 때</li></ul><h3 id="원칙" tabindex="-1"><a class="header-anchor" href="#원칙" aria-hidden="true">#</a> 원칙</h3><h4 id="단일-책임-원칙-srp" tabindex="-1"><a class="header-anchor" href="#단일-책임-원칙-srp" aria-hidden="true">#</a> 단일 책임 원칙(SRP)</h4><ul><li>한 클래스는 한 가지 변경 사유로만 수정되어야 함</li><li><strong>퍼사드</strong>나 <strong>프록시</strong> 패턴을 사용해 책임을 분리하여 해결</li></ul><h4 id="개방-폐쇄-원칙-ocp" tabindex="-1"><a class="header-anchor" href="#개방-폐쇄-원칙-ocp" aria-hidden="true">#</a> 개방 폐쇄 원칙(OCP)</h4><ul><li>클래스는 확장에는 열려야 하고, 변경에는 닫혀야 함</li></ul><h4 id="리스코프-치환-원칙-lsp" tabindex="-1"><a class="header-anchor" href="#리스코프-치환-원칙-lsp" aria-hidden="true">#</a> 리스코프 치환 원칙(LSP)</h4><ul><li>서브 클래스는 기반 클래스로 대체 가능해야 함</li></ul><h4 id="인터페이스-분리-원칙-isp" tabindex="-1"><a class="header-anchor" href="#인터페이스-분리-원칙-isp" aria-hidden="true">#</a> 인터페이스 분리 원칙(ISP)</h4><ul><li>클래스의 메소드를 직접 호출하지 않고, 고유의 인터페이스를 만들어서 사용하게 해야 함</li></ul><h4 id="의존-관계-역전-원칙-dip" tabindex="-1"><a class="header-anchor" href="#의존-관계-역전-원칙-dip" aria-hidden="true">#</a> 의존 관계 역전 원칙(DIP)</h4><ul><li>상위/하위 관계, 구현은 추상화에 의존해야 하며, 추상화는 구현에 의존해서는 안됨</li></ul><h3 id="테스트-코드" tabindex="-1"><a class="header-anchor" href="#테스트-코드" aria-hidden="true">#</a> 테스트 코드</h3><p>클린 테스트 코드를 만들려면? 세 가지가 필요하다. 가독성, 가독성, 가독성. 어쩌면 가독성은 실제 코드보다 테스트 코드에 더더욱 중요하다. 테스트 코드에서 가독성을 높이려면? 여느 코드와 마찬가지다. 명료성, 단순성, 풍부한 표현력이 필요하다. 테스트 코드는 최소의 표현으로 많은 것을 나타내야 한다.</p><p>given-when-then이라는 관례를 사용하면 테스트 코드를 읽기가 쉬워진다. 하지만 불행하게도, 테스트를 분리하면 중복되는 코드가 많아진다. 그러므로 가장 좋은 규칙은 &quot;개념 당 assert 문 수를 최소한 줄여라&quot;와 &quot;테스트 함수 하나는 개념 하나만 테스트하라&quot;라고 하겠다.</p><h4 id="f-i-r-s-t" tabindex="-1"><a class="header-anchor" href="#f-i-r-s-t" aria-hidden="true">#</a> F.I.R.S.T.</h4><ul><li>빠르게 Fast: 테스트는 빨라야 한다.</li><li>독립적으로 Independent: 각 테스트는 서로 의존하면 안 된다.</li><li>반복 가능하게 Repeatable: 테스트는 어떤 환경에서도 반복이 가능해야 한다.</li><li>자가 검증하는 Self-Validating: 테스트는 성공 아니면 실패다.</li><li>적시에 Timely: 테스트는 적시에 작성해야 한다.</li></ul>',25),d=[l];function n(t,s){return e(),i("div",null,d)}const u=a(h,[["render",n],["__file","18.html.vue"]]);export{u as default};
