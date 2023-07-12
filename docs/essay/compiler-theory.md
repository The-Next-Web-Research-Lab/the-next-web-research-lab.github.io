---
title: 컴파일러 이론 정리
---
# 컴파일러 이론 한장에 정리
이 포스트는 컴파일러 개념과 문법이 어떻게 만들어지는 학습하고자 정리한 자료다.

우선 컴파일러는 밑바닥부터 구현하는 경우는 드물다. 보통 토큰화 모듈이나 문법 분석기를 만들 때, [Flex(어휘분석기)](https://ko.wikipedia.org/wiki/Flex_(%EC%96%B4%ED%9C%98%EB%B6%84%EC%84%9D%EA%B8%B0))와 [bison(파서 생성기)](https://ko.wikipedia.org/wiki/GNU_bison)같은 **컴파일러 생성기** 도구들을 이용해서 만든다. 이 도구들은 [문맥 자유 문법](https://ko.wikipedia.org/wiki/%EB%AC%B8%EB%A7%A5_%EC%9E%90%EC%9C%A0_%EB%AC%B8%EB%B2%95)를 입력하면, 그 문법으로 작성된 프로그램을 토큰화하고 분석하는 문법 분석 코드를 출력한다. 그리고 컴파일 조건에 맞춰 생성 코드를 수정할 수 있다.

## 컴파일러 개념
컴파일러는 원본 언어에서 대상 언어로 번역하는 프로그램이다. 컴파일러는 번역 과정을 개념적으로 문법 분석과 코드 생성이라는 두 단계로 나뉜다.

- 문법 분석(Syntax Analysis): 원본 언어의 문법을 이해하고, 원본 언어를 [추상 구문 트리](https://ko.wikipedia.org/wiki/%EC%B6%94%EC%83%81_%EA%B5%AC%EB%AC%B8_%ED%8A%B8%EB%A6%AC)를 만듬
- 코드 생성(Code Generation): 문법을 통해 프로그램의 의미(semantics)를 찾고, 추상 구문 트리를 대상 언어로 번역함

##### 📄 컴파일러 의사 코드
```js
function compiler (originCode) {
  var ast = syntaxAnalyzer(originCode)
  var targetCode = codeGenerator(ast)
  return targetCode
}
```

### Step 1. 문법 분석기(Syntax Analyzer)
컴파일러의 첫번째 단계인 문법 분석 단계다. 문법 분석 단계에서도 토큰화와 파싱이라는 두 단계로 나뉘어 진다.
- 토큰화(Tokenizing) 모듈: 원본 언어를 언어 기본 요소들로 분류하는 모듈
- 파싱(Parsing) 모듈: 토큰화 결과로 나온 언어 기본 요소 스트림을 언어의 문법 규칙에 맞추는 모듈

##### 📄 문법 분석기 의사 코드
```js
// ast: Abstract Syntax Tree
function syntaxAnalyzer(originCode) {
  var tokens = tokenizer(originCode)
  var ast = parser(tokens)
  return ast
}
```

#### Step 1_1. 토큰화(Tokenizer)
> 이 단계는 보통 토큰화(tokenizing) 또는 어휘 분석(lexical analysis), 스캐닝(scanning)로 불린다.

문법 분석의 첫 단계는 토큰화 단계다. 토큰화는 공백이나 주석은 무시하고, 문자들을 언어의 문법에 정의된 토큰들로 분류하는 것이다.
토큰화 되면, 토큰들은 프로그램의 기본 원소가 되며, 컴파일러의 입력도 토큰 스트림이 된다.

##### 📄 토큰화 의사 코드
```js
function tokenizer(originCode) {
  var tokens = [] // logic
  return tokens
}
```

토큰들은 각각 특정 분류 또는 유형으로 나뉜다.
`while`은 키워드, `count`는 식별자, `<=`는 연산자라는 식이다.

##### 📄 토큰 예제
입력
```
while (count <= 100) {
  count++;
}
```
출력
```
while
(
count
<=
100
)
{
count
++
;
}
```

#### Step 1_2. 파서(Parser)
문법 분석의 마지막 단계는 파서 단계다. 파서는 텍스트와 문법 규칙 사이의 정확한 대응 관계를 결정하는 단계다.
문법 규칙이 계층적이기 때문에 파서가 생성하는 출력은 추상 구문 트리(AST: Abstract Syntax Tree)라고 불리는 트리 기반 데이터 구조로 기술된다.

##### 📄 파서 의사 코드
```js
// ast: Abstract Syntax Tree
function parser(tokens) {
  var ast = {} // logic
  return ast
}
```

##### 📄 AST 예제
토큰 예제의 토큰들을 AST로 만든 예제다.
```
statement
└─ whileStatement
   ├─ while
   ├─ (
   ├─ expression
   │  └─ count <= 100
   ├─ )
   └─ statement
      ├─ {
      └─ statementSequence
         ├─ statement
         │  └─ count++
         └─ ;
```

### Step 2. 코드 생성기(Code Generator)
컴파일러의 마지막 단계는 코드 생성 단계다. 코드 생성기는 AST를 통해 프로그램의 의미를 찾아 코드를 생성하게 된다.

##### 📄 코드 생성기 의사 코드
```js
function codeGenerator(ast) {
  var virtualCode = virtualCodeGenerator(ast)
  var targetCode = targetCodeGenerator(virtualCode)
  return targetCode
}
```

#### Step 2_1. 가상 코드 생성기(Virtual Code Generator)
코드 생성의 첫 단계는 가상 코드 생성 단계다. 코드 생성을 할 때는 데이터 번역과 명령 번역이라는 두 단계에 집중하는 데, 명령 번역을 위해 우선적으로 가상 코드를 생성하게 된다.

##### 📄 가상 코드 생성기 의사 코드
```js
function virtualCodeGenerator(ast) {
  var virtualCode = {} // logic
  return virtualCode
}
```

##### 📄 가상 코드 생성 예제
`x + g(2, y, -z) * 5` AST
```
+
├─ x
└─ *
   ├─ g
   │  ├─ 2
   │  ├─ y
   │  └─ -
   │     └─ z
   └─ 5
```
`x + g(2, y, -z) * 5` 가상 코드
```
push x
push 2
push y
push z
neg
call g
push 5
call multiply
add
```

#### Step 2_2. 대상 코드 생성기(Target Code Generator)
코드 생성의 마지막 단계는 대상 코드 생성 단계다. 대상 코드 생성기는 가상 코드를 기반으로 대상 코드를 생성하게 된다.

##### 📄 대상 코드 생성기 의사 코드
```js
function targetCodeGenerator(virtualCode) {
  var targetCode = '' // logic
  return targetCode
}
```

컴파일러는 만들기 위해서는 문법을 우선 정의해야 한다. 프로그래밍 문법은 어떻게 정의하는 지 정리해봤다.

## 문법 정의
### 문법은 어떻게 정의될까?
대부분의 프로그래밍 언어들이나 복잡한 파일 포맷 문법을 정의하는 형식 언어들은 문맥 자유 문법(context-free grammar)이라는 규칙들로 기술된다. 문맥 자유 문법은 언어의 문법 요소들을 단순한 요소들을 이용해 구성하는 규칙이다. 결국 프로그램을 이해(또는 분석) 한다는 것은 프로그램의 텍스트와 문법 규칙 사이에 정확한 대응 관계를 결정한다는 뜻이 된다.

### 문법 명세 작성
문법 요소들을 정의할 때 사용하는 문법 명세 작성 방법이다. 참고 도서에 소개된 작성 방법을 발췌했다.

- 'xxx': 홑따옴표 볼드체는 글자 그대로 토큰에 사용된다.(단말)
- xxx: 일반 글꼴은 언어 구조 이름에 사용된다.(비단말)
- (): 괄호는 언어 구조들을 하나로 묶는 데 사용된다.
- x | y: x또는 y가 나올 수 있음을 가리킨다.
- x?: x가 0번 또는 1번 나타내는 경우를 가리킨다.
- x*: x가 0번 이상 나타내는 경우를 가리킨다.

여기서 문법은 두 가지 관점으로 볼 수 있다.
- 선언적 관점에서 문법: 토큰들을 더 높은 수준의 문법 요소들로 결합하는 방법들을 정의한 것이다.
- 분석적 관점에서 문법: 주어진 토큰들을 받아 비단말, 더 낮은 수준의 비단말, 그리고 최종적으로 더 이상 분해되지 않는 단말까지로 분해하는 방법에 대한 규칙이라고 할 수 있다.

아래 잭 언어 문법은 참고 도서에 소개된 가상의 언어에 대한 문법이다.

#### 잭 언어 문법
##### 📄 어휘 요소
잭 언어에는 다섯 가지 종류의 단말 요소(토큰)가 있다.
```
keyword:         'class' | 'constructor' | 'function' |
                 'method' | 'field' | 'static' | 'var'
symbol:          '{' | '}' | '(' | ')' | '[' | ']'
integerConstant: 0..32767의 10진수 숫자
stringConstant:  '"' 따옴표와 줄바꿈 문자를 제외한 유니코드 문자열 '"'
identifier:      숫자로 시작하지 않는, 영문자, 숫자, 밑줄('_')로 이루어진 문자열
```

##### 📄 프로그램 구조
잭 프로그램은 클래스로 이루어져 있으며, 클래스들은 각각 다른 파일에 있다. 컴파일 단위는 클래스 하나다. 클래스는 다음 문맥 자유 구문을 따라 구조화된, 토큰의 연속열이 된다.
```
class:          'class' className '{' classVarDec* subroutineDec* '}'
classVarDec:    ('static' | 'field') type varName (',' varName)* ';'
type:           'int' | 'char' | 'boolean' | className
subroutineDec:  ('constructor' | 'function' | 'method')
                ('void' | type) subroutineName '(' parameterList ')'
                subroutineBody
parameterList:  ((type varName) (',' type varName)*)?
subroutineBody: '{' varDec* statements '}'
varDec:         'var' type varName (',' varName)* ';'
className:      identifier
subroutineName: identifier
varName:        identifier
```

##### 📄 명령문
```
statements:      statement*
statement:       letStatement | ifStatement | whileStatement
                 doStatement | returnStatement
letStatement:    'let' varName ('[' expression ']')? '=' expression ';'
ifStatement:     'if' '(' expression ')' '{' statement '}'
                 ('else' '{' statements '}')?
whileStatement:  'while' '(' expression ')' '{' statements '}'
doStatement:     'do' subroutineCall ';'
returnStatement: 'return' expression? ';'
```

##### 📄 표현식
```
expression:      term (op term)*
term:            integerConstant | stringConstant | keywordConstant |
                 varName | varName '[' expression ']' | subroutineCall |
                 '(' expression ')' | unaryOp term
subroutineCall:  subroutineName '(' expressionList ')' | (className |
                 varName) '.' subroutineName '(' expressionList ')'
expressionList:  (expression (',' expression)* )?
op:              '+' | '-' | '*' | '/' | '&' | '|' | '<' | '>' | '='
unaryOp:         '-' | '~'
keywordConstant: 'true' | 'false' | 'null' | 'this'
```

### 문법 분석하는 방법
토큰화된 토큰들의 문법을 분석해 파싱하는 알고리즘 중 하향식(top-down) 접근법으로 재귀적 하양 파서(recursive descent parsing)가 있다. 이 방법은 문법에 정의된 중첩 구조를 이용해 토큰 스트림을 재귀적으로 분석하는 방법이다.

비단말 문법의 모든 규칙마다 그 규칙을 분석하기 위한 재귀적 루틴들을 하나씩 만들 수 있다.
문법을 따르는 재귀적 하향 파서를 만든다고 가정하면, 문법에서 유도되는 규칙에 맞게 수정할 수 있다.

- statement: `parseStatement()`
- whileStatement: `parseWhileStatement()`
- expression: `parseExpression()`

#### 문법 분석 예시
편의상 토큰화 과정은 생략하고, 이 문법으로
```
symbol: '{' | '}' | '(' | ')' | '[' | ']
integerConstant: 0..32767의 10진수 숫자
stringConstant: '"' 따옴표와 줄바꿈 문자를 제외한 유니코드 문자열 '"'
identifier: 숫자로 시작하지 않는, 영문자, 숫자, 밑줄('_')로 이루어진 문자열

statement: whileStatement | assignStatement
whileStatement: 'while' '(' expression ')' '{' statement '}'
assignStatement: varName '=' expression

expression: term (op term)*
term: integerConstant | stringConstant | varName
op: '+'| '<=' | '='
```

이 코드를 분석한다고 가정하겠다.
```
while (count <= 100) {
  count = count + 1
}
```

파싱을 시작할 때는 입력의 첫 번째 토큰이 무엇인지 결정부터한다. 첫번째 토큰 `while` 식별하고, 문법에 맞게 파싱 함수를 실행한다.

코드를 분석하면 순서는 다음과 같다.

1. `while` 식별
2. `parseWhileStatement()` 함수 실행
3. `(` 식별
4. `parseExpression()` 함수 실행
5. `count`, `<=`, `100` 식별
6. `)`
7. `parseAssignStatement()` 함수 실행
8. `{`, `count`, `=` 식별
9. `parseExpression()` 함수 실행
10. `count`, `+`, `1` 식별
11. `}` 식별
12. 종료

결론적으로 이런 형태의 트리가 만들어진다.

```
statement
└─ whileStatement
   ├─ while
   ├─ (
   ├─ expression
   │  └─ count <= 100
   ├─ )
   └─ statement
      └─ assignStatement
         ├─ {
         ├─ varName
         │  └─ count
         ├─ '='
         ├─ expression
         │  └─ count + 1
         └─ }
```

## 참고 도서
- 노암 니산, 시몬 쇼켄. 『밑바닥부터 만드는 컴퓨팅 시스템』. 김진홍(역). 인사이트, 2019.
