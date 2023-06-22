import{_ as o,M as s,p as h,q as i,R as r,t as e,N as t,a1 as n}from"./framework-96b046e1.js";const d={},l=r("h1",{id:"객체-정리",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#객체-정리","aria-hidden":"true"},"#"),e(" 객체 정리")],-1),g=r("blockquote",null,[r("p",null,"2019년 6월 8일에 정리한 포스트입니다.")],-1),c=r("h3",{id:"글의-목적",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#글의-목적","aria-hidden":"true"},"#"),e(" 글의 목적")],-1),p={href:"https://the-next-web-research-lab.github.io/fe-dev/good-code/declarative-function.html",target:"_blank",rel:"noopener noreferrer"},u=n('<p>이번에는 객체에 대한 내용을 정리했다. 객체를 다루는 것은 현실세계를 해결하는 데 있어서 필수라고 할 수 있다. 사견을 정리하는 것보다 도서 몇권을 발췌하여 객체과 객체지향에 대한 내용을 작성했다.</p><h3 id="목차" tabindex="-1"><a class="header-anchor" href="#목차" aria-hidden="true">#</a> 목차</h3><ul><li>객체란</li><li>객체와 자료구조</li><li>객체지향의 본질</li><li>객체의 역할과 책임</li><li>관련 포스트</li></ul><h3 id="객체란" tabindex="-1"><a class="header-anchor" href="#객체란" aria-hidden="true">#</a> 객체란</h3><p><strong>객체</strong>란 식별 가능한 개체 또는 사물이다. 객체는 자동차처럼 만질 수 있는 구체적인 사물일 수도 있고, 시간처럼 추상적인 개념일 수도 있다. 객체는 구별 가능한 식별자, 특징적인 행동, 변경 가능한 상태를 가진다. 소프트웨어 안에서 객체는 저장된 상태와 실행 가능한 코드를 통해 구현된다.</p><p>객체를 <strong>상태</strong>와 <strong>행동</strong>을 함께 지닌 실체라고 정의한다. 이 말은 객체가 <strong>협력</strong>에 참여하기 위해 어떤 행동을 해야 한다면 그 행동을 하는 데 필요한 상태도 함께 지니고 있어야 한다는 것을 의미한다. 객체가 협력에 참여하는 과정 속에서 스스로 판단하고 스스로 결정하는 <strong>자율적인 존재</strong>로 남기 위해서는 필요한 행동과 상태를 함께 지니고 있어야 한다.</p><h4 id="객체의-상태" tabindex="-1"><a class="header-anchor" href="#객체의-상태" aria-hidden="true">#</a> 객체의 상태</h4><p><strong>상태</strong>는 특정 시점에 객체가 가지고 있는 정보의 집합으로 객체의 구조적 특징을 표현한다. 객체의 상태는 객체에 존재하는 정적인 프로퍼티와 동적인 프로퍼티 값으로 구성된다. 객체의 프로퍼티는 <strong>단순한 값</strong>과 다른 객체를 <strong>참조하는 링크</strong>로 구분할 수 있다.</p><h4 id="객체의-행동" tabindex="-1"><a class="header-anchor" href="#객체의-행동" aria-hidden="true">#</a> 객체의 행동</h4><p><strong>행동</strong>이란 외부의 요청 또는 수신된 메시지에 응답하기 위해 동작하고 반응하는 활동이다. 행동의 결과로 객체는 <strong>자신의 상태를 변경</strong>하거나 <strong>다른 객체에게 메시지를 전달</strong>할 수 있다. 객체는 행동을 통해 다른 객체와의 협력에 참여하므로 행동은 외부에 가시적이어야 한다.</p><h4 id="식별자" tabindex="-1"><a class="header-anchor" href="#식별자" aria-hidden="true">#</a> 식별자</h4><p><strong>식별자</strong>란 어떤 객체를 다른 객체와 구분하는 데 사용하는 객체의 프로퍼티이다. 값은 식별자를 가지지 않기 때문에 <strong>상태를 이용한 동등성 검사</strong>를 통해 두 인스턴스를 비교해야 한다. 객체는 상태가 변경될 수 있기 때문에 <strong>식별자를 이용한 동일성 검사</strong>를 통해 두 인스턴스를 비교할 수 있다.</p><h3 id="객체와-자료구조" tabindex="-1"><a class="header-anchor" href="#객체와-자료구조" aria-hidden="true">#</a> 객체와 자료구조</h3><h4 id="자료구조란" tabindex="-1"><a class="header-anchor" href="#자료구조란" aria-hidden="true">#</a> 자료구조란</h4><p><strong>자료구조</strong>는 컴퓨터의 메모리 속에서 데이터가 실제로 구조화되는 방식과 그 데이터에 접근하는 방식을 알려준다. 자료구조는 추상 데이터 유형을 실제 데이터 처리 모듈로 구현하는 데 필요한 방법이다. 대표적으로 배열, 트리, 그래프가 있다.</p><p><strong>배열</strong>은 메모리에 연속적인 공간을 할당하여 만든다. 배열 속에 저장하려는 항목은 그 메모리 공간 속에 순차적으로 기록한다.</p><p><strong>트리</strong>는 메모리 칸을 이용해 정보를 저장한다. 따라서 트리도 연속적인 물리적 메모리가 필요하지는 않다. 트리의 칸도 저장 대상 외에 다른 칸을 향한 포인터를 가진다.</p><p><strong>그래프</strong>는 트리와 유사한 데이터 구조이다. 트리와 다른 점이라면 자식-부모 정점이라는 개념이 없으며, 따라서 루트 정점도 없다는 점이다. 그래프에서는 데이터가 정점과 간선으로 자유롭게 배열될 수 있다.</p><h4 id="자료구조와-객체-비대칭" tabindex="-1"><a class="header-anchor" href="#자료구조와-객체-비대칭" aria-hidden="true">#</a> 자료구조와 객체 비대칭</h4><p><strong>객체</strong>는 추상화 뒤로 자료를 숨긴 채 <strong>자료를 다루는 함수만 공개</strong>한다. <strong>자료구조</strong>는 자료를 그대로 공개하며 <strong>별 다른 함수는 제공하지 않는 다</strong>.</p><p>자료 구조체의 전형적인 형태는 공개 변수만 있고 함수가 없는 클래스다. 이런 자료 구조체를 때로는 자료 전달 객체(Data Transfer Object, DTO)라 한다. DTO는 굉장히 유용한 구조체다. 특히 데이터베이스와 통신하거나 소켓에서 받은 메시지의 구문을 분석할 때 유용하다.</p><p>흔히 DTO는 데이터베이스에 저장된 가공되지 않은 정보를 애플리케이션 코드에서 사용할 객체로 변환하는 일련의 단계에서 가장 처음으로 사용하는 구조체다.</p><h3 id="객체지향의-본질" tabindex="-1"><a class="header-anchor" href="#객체지향의-본질" aria-hidden="true">#</a> 객체지향의 본질</h3><p><strong>객체지향</strong>이란 시스템을 상호작용하는 <strong>자율적인 객체들의 공동체</strong>로 바라보고 객체를 이용해 시스템을 분할하는 방법이다. <strong>자율적인 객체</strong>란 <strong>상태</strong>와 <strong>행위</strong>를 함께 지니며 스스로 자기 자신을 책임지는 객체를 의미한다. 객체는 시스템의 행위를 구현하기 위해 <strong>다른 객체와 협력</strong>한다. 각 객체는 협력 내에서 정해진 역할을 수행하며 <strong>역할</strong>은 관련된 <strong>책임의 집합</strong>이다. 객체는 다른 객체와 협력하기 위해 <strong>메시지를 전송</strong>하고, <strong>메시지를 수신</strong>한 객체는 메시지를 처리하는 데 적합한 <strong>메서드</strong>를 자율적으로 선택한다.</p><h4 id="객체지향의-핵심-메시지" tabindex="-1"><a class="header-anchor" href="#객체지향의-핵심-메시지" aria-hidden="true">#</a> 객체지향의 핵심, 메시지</h4><p>클래스 기반의 객체지향 언어를 사용하는 대부분의 사람들은 객체지향 애플리케이션을 클래스의 집합으로 생각한다. 프로그래머 입장에서 클래스는 실제로 볼 수 있고 수정 할 수 있는 구체적인 존재다. 많은 객체지향 책에서는 클래스를 선언하고 속성과 메서드를 정의하는 방법에 초점을 맞춘다. 대부분의 입문자들은 클래스 간의 상속 관계가 객체지향 설계를 가치 있게 만드는 핵심적인 메커니즘이라고 배운다. 객체지향 설계에 관한 많은 논의가 클래스에 어떤 책임을 할당하고 클래스 간의 의존성을 어떻게 관리할 것인가를 집중된다. 어쨌든 훌륭한 객체지향 프로그래밍의 목적은 훌륭한 클래스를 창조하는 것이 아니던가?</p><p>클래스가 코드를 구현하기 위해 사용할 수 있는 중요한 추상화 도구인 것은 사실이지만 객체지향의 강력함은 클래스가 아니라 객체들이 주고받는 메시지로부터 나온다. 객체지향 애플리케이션은 클래스를 이용해 만들어지지만 메시지를 통해 정의된다. 실제로 애플리케이션을 살아있게 만드는 것은 클래스가 아니라 객체다. 그리고 이런 객체들의 윤곽을 결정하는 것이 바로 객체들이 주고받는 메시지다.</p><p>클래스는 단지 동적인 객체들의 특성과 행위를 정적인 텍스트로 표현하기 위해 사용할 수 있는 추상화 도구일 뿐이다. 중요한 것은 클래스가 아니라 객체다. 클래스를 정의하는 것이 먼저가 아니라 객체들의 속성과 행위를 식별하는 것이 먼저다. 클래스는 객체의 속성과 행위를 담는 틀일 뿐이다. 심지어는 클래스를 사용하지 않고도 객체의 속성과 행위를 표현할 수도 있다.</p><p>클래스를 중심으로 두는 설계는 유연하지 못하고 확장하기 어렵다. 객체지향 패러다임으로의 전환은 시스템을 정적인 클래스들의 집합이 아니라 메시지를 주고받는 동적인 객체들의 집합으로 바라보는 것에서 시작된다. 클래스에 담길 객체들의 공통적인 행위와 속성을 포착하기 위해서는 먼저 협력하는 객체들의 관점에서 시스템을 바라봐야 한다.</p><p>클래스를 객체지향 세계의 왕좌에서 끌어내렸다고 해서 모든 문제가 해결되는 것은 아니다. 진정한 객체지향 패러다임으로의 도약은 개별적인 객체가 아니라 메시지를 주고 받는 객체들 사이의 커뮤니케이션에 초점을 맞출 때 일어난다.</p><h3 id="객체의-역할과-책임" tabindex="-1"><a class="header-anchor" href="#객체의-역할과-책임" aria-hidden="true">#</a> 객체의 역할과 책임</h3><h4 id="객체의-역할" tabindex="-1"><a class="header-anchor" href="#객체의-역할" aria-hidden="true">#</a> 객체의 역할</h4><p><strong>역할</strong>은 협력 내에서 다른 객체로 대체할 수 있음을 나타내는 일종의 표식이다. 협력 안에서 역할은 &quot;이 자리는 해당 역할을 수행할 수 있는 어떤 객체라도 대신할 수 있습니다&quot;라고 말하는 것과 같다.</p><p>여러 객체가 동일한 역할을 수행할 수 있다. 역할은 <strong>대체 가능성</strong>을 의미한다. 각 객체는 책임을 수행하는 방법을 자율적으로 선택할 수 있다. 하나의 객체가 동시에 여러 역할을 수행할 수 있다.</p><h4 id="설계의-품질을-좌우하는-책임" tabindex="-1"><a class="header-anchor" href="#설계의-품질을-좌우하는-책임" aria-hidden="true">#</a> 설계의 품질을 좌우하는 책임</h4><p>객체지향 공동체를 구성하는 기본 단위는 자율적인 객체다. 객체들은 애플리케이션의 기능을 구현하기 위해 협력하고, 협력 과정에서 각자 맡은 바 책임을 다하기 위해 자율적으로 판단하고 행동한다.</p><p>객체가 어떤 행동을 하는 유일한 이유는 다른 객체로부터 요청을 수신했기 때문이다. 요청을 처리하기 위해 객체가 수행하는 행동을 <strong>책임</strong>이라고 한다. 따라서 자율적인 객체란 스스로의 의지와 판단에 따라 각자 맡은 책임을 수행하는 객체를 의미한다.</p><p>객체지향 설계의 아름다움은 적절한 책임을 적절한 객체에게 할당하는 과정 속에서 드러난다. 객체지향 애플리케이션을 설계하는 가정 널리 알려진 방법을 책임-주도 설계라고 부르는 이유는 적절한 책임의 선택이 전체 설계의 방향을 결정하기 때문이다.</p><p>적절한 책임이 자율적인 객체를 낳고, 자율적인 객체들이 모여 유연하고 단순한 협력을 낳는다. 따라서 협력에 참여하는 객체가 얼마나 자율적인지가 전체 애플리케이션의 품질을 결정한다.</p><h3 id="관련-포스트" tabindex="-1"><a class="header-anchor" href="#관련-포스트" aria-hidden="true">#</a> 관련 포스트</h3>',40),f={href:"https://the-next-web-research-lab.github.io/fe-dev/refactoring/legacy-code-to-easy-code.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://the-next-web-research-lab.github.io/fe-dev/good-code/code-position.html",target:"_blank",rel:"noopener noreferrer"},_=n('<h3 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h3><ul><li>객체: 상태와 행동을 함께 지닌 실체</li><li>자료구조: 메모리 속에서 데이터가 실제로 구조화되는 방식과 그 데이터 접근하는 방식</li><li>객체지향: 시스템을 상호작용하는 자율적인 객체들의 공동체로 바라보고 객체를 이용해 시스템을 분할하는 방법</li></ul><h3 id="참고문헌" tabindex="-1"><a class="header-anchor" href="#참고문헌" aria-hidden="true">#</a> 참고문헌</h3><ul><li>로버트 C. 마틴. 『Clean Code』. 박재호, 이해영(역). 인사이트, 2013.</li><li>조영호. 『객체지향의 사실과 오해』. 위키북스, 2015.</li><li>블라드스톤 페헤이라 필루. 『한 권으로 그리는 컴퓨터과학 로드맵』. 박연오(역). 인사이트, 2018.</li></ul>',4);function x(m,k){const a=s("ExternalLinkIcon");return h(),i("div",null,[l,g,c,r("p",null,[e("소프트웨어의 구성요소는 객체, 객체간의 관계, 조건문, 반복문이라는 재료가 대부분 구성된다. 이전에는 조건문과 반복문 재료를 다루기 위해서 현실세계에서 유용한 사항들을 "),r("a",p,[e("선언형으로 대체 가능한 문법들 정리"),t(a)]),e("에 다뤘다.")]),u,r("ul",null,[r("li",null,[r("a",f,[e("레거시 코드에서 이해하기 쉬운코드로 리팩토링"),t(a)]),e(": 객체의 역할 분리 대한 정리한 포스트다.")]),r("li",null,[r("a",b,[e("코드의 위치를 정하는 기준"),t(a)]),e(": 객체의 책임과 협력에 따른 코드의 위치를 정하는 기준을 정리한 포스트다.")])]),_])}const N=o(d,[["render",x],["__file","object.html.vue"]]);export{N as default};
