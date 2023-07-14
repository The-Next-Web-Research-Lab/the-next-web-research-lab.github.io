---
title: 자바스크립트 문법 한장에 정리
---
# 자바스크립트 문법 한장에 정리

## 서사
자바스크립트의 기반이 되는 ECMAScript가 매년 새로운 문법이 추가되기 때문에 자바스크립트는 매년 새로운 문법이 추가됩니다. 

프런트 엔드 개발자라면 자바스크립트는 기본적으로 능숙하게 다루겠지만 그렇다고 자바스크립트의 문법을 잘 안다고 할 순 없습니다. 실무에 몇 년, 몇십 년 일해도 가끔은 뒤돌아서 기본을 볼 필요가 있다고 생각합니다.

이 글에서는 현재의 자바스크립트 기반이 되는 ECMAScript 2015를 정리했습니다.

## var vs let
### var is Function Scope
var 키워드는 Function Scope로 블럭에 정의를 해도 블럭 밖에서 사용이 가능합니다.
```js
if (true) {
  var x = 3
}
console.log(x) //3
```
### let is Block Scope
let 키워드는 Block Scope로 블럭에 정의 후 블럭 밖에서 참조시 ReferenceError가 발생하게 됩니다.
```js
if (true) {
  let x = 3
}
console.log(x) //ReferenceError
```
## var vs let - loop scoping
for 루프를 통해 Function Scope와 Block Scope의 차이를 알수 있습니다.
var 키워드의 경우 for 의 선언문에 정의된 변수는 블럭 밖에서 사용할 수 있습니다.
그렇기 때문에 for 밖에서 선언을 하기도 했습니다.
let 키워드를 사용할 경우 for 선언문에 정의를 해도 
블럭 밖에서 사용을 할 수 없기 때문에 더이상 for loop를 사용하기 전에 같은 변수를 정의할 필요없어졌습니다.
```js
for(var i = 0; i < 3; i++) {}
console.log(i); //3

for(let i = 0; i < 3; i++) {}
console.log(i); //ReferenceError
```

## let vs const
Block Scope 선언 키워드에서 let 이외에도 const 라는 키워드가 있습니다.
다른 점은 const는 불변이고 let은 변경이 가능합니다.
여기서 볼 수 있듯이 const로 정의할 경우 값을 변경하려고 했을 때 TypeError가 발생합니다.

### let is not immutable
```js
let num = 0
num = 1 // Fine
```
### const is immutable
```js
const num = 0
num = 1 // TypeError
```
## const
const 키워드는 해당 값을 불변으로 만들기 때문에
오브젝트를 할당했을 때는 오브젝트에 프로퍼티는 변경이 가능합니다.
그 이유는 오브젝트는 Heap Memory에 할당이 되고 할당된 주소값만 상수에 할당되기 때문입니다.
그래서 프로퍼티를 변경/수정/삭제를 할 수 있습니다.

### content can be changed
```js
const obj = { a: 'a' }
obj.b = 'B' //Working
obj.a = 'A' //Working
delete obj.a //Working
```
### freeze
프로퍼티 변경을 막을려면 freeze라는 함수를 사용됩니다. 하지만 프로퍼티의 값이 오브젝트일경우는 변경이 가능합니다. 
```js
const obj = {a: 'a'}
Object.freeze(obj)
obj.b = 'B' //Not Working
obj.a = 'A' //Not Working
delete obj.a //Not Working
```
```js
const obj = {x:{}}
Object.freeze(obj)
obj.x.a = 'A' //Working
```

## function declaration
```js
function sum (a, b) {
  return a + b
}

function getBMI (weight, height) {
  height /= 100
  return weight / Math.pow(height, 2)
}
```

## Arrow function
```js
const sum = (a, b) => a + b
const getBMI = (weight, height) => {
  height /= 100
  return weight / Math.pow(height, 2)
}
```
### Always anonymous
화살표함수는 항상 익명함수로 정의됩니다.
```js
const sum = (a, b) => a + b
const sum = sum(a, b) => a + b //SyntaxError
```
### Lexical this
화살표함수에서는 this를 주변(lexical)에서 가져옵니다. 즉, 더이상 `bind(this)`, `self = this` 코드를 선언할 필요가 없습니다.
```js
const obj = {
  data: '',
  updateData () {
    $http.get('/path').then(data => this.data = data)
  }
}
```
### It can’t be used constructor
화살표함수는 프로토타입 생성하지 않기 때문에 함수의 기능만 할수 있습니다. 즉, 생성자의 기능을 할 수 없습니다.
```js
const Person = () => {}
new Person() //TypeError
Person.prototype //Undefined
```

## Class
class 키워드를 통해 클래스를 선언합니다. new 생성자 없이 초기화할 수 없습니다.

### Class declaration
```js
class MyClass {}
const instance = new MyClass()
```
### Class expression
```js
const MyClass = class {}
const instance = new MyClass()
```
### Sub classing
```js
class Point { 
  constructor (x, y) { 
    this.x = x     
    this.y = y   
  }   
  toString () {     
    return `${this.x} ${this.y}`   
  }
 }
class ColorPoint extends Point {
   constructor (x, y, color) {     
    super(x, y) //Must call super     
    this.color = color   
  }   
  toString () {     
    return `${super.toString()} in ${this.color}`   
  }
}
```
### Getter & Setter
```js
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  get axis() {
    return [this.x, this.y]
  }

  set axis([x, y]) {
    this.x = x
    this.y = y
  }
}

const point = new Point(0, 0)
console.log(point.axis) //[0, 0]
point.axis = [10, 10]
console.log(point.x, point.y) //10, 10
```
### Static
```js
class Point {
  static pointMethod() {
  }
}

class ColorPoint extends Point {
  static pointmethod() {
    super.pointMethod()
  }
}

Point.pointmethod()
ColorPoint.pointmethod()
```

## Assignment
### Object property
변수를 그대로 할당하면 변수명은 property 명으로 들어가고 변수의 값이 property 값으로 들어가게 됩니다.
```js
const ip = '127.0.0.1'
const port = 1234
const serverInfo = {ip, port}
// { ip: '127.0.0.1', port: 1234 }
```
### Method Definition
프로퍼티와 익명함수를 사용하지 많고 메소드를 사용할 수 있습니다.
 
```js
const person = {
  name: '',
  getName() {
    return this.name
  },
  setName(name) {
    this.name = name;
  }
}
person.setName('Peter')
console.log(person.getName()) //Peter
```
## Destructuring
object나 Array의 구조를 알고 있으면 새로운 변수를 정의할 때 필요한 부분만 해체해서 사용할 수 있습니다.

### Object
객체에 정의된 프로퍼티를 가져와 변수명과 같을 정의할 수 있습니다.

```js
const {weight, height} = {weight: 72, height: 173}
console.log(weight, height) // 72 173
```
### Array
Array는 대괄호를 사용해서 인덱스에 변수를 정의하면 해당 변수에 해당 인덱스 값이 정의됩니다.
```js
const [a, , b] = [0, 1, 2]
console.log(a, b) //0 2
```
## Default value
Parameter와 Destructuring 부분에 기본값을 정의할 수 있습니다.
변수명 이퀄을 사용해서 기본값을 정의할 수 있습니다.

### Parameter
```js
const serverInfo = {
  ip: null,
  port: null,
  setDevInfo(ip = '127.0.0.1', port = 1234) {
    this.ip = ip
    this.port = port
  }
}
serverInfo.setDevInfo() //ip: 127.0.0.1, port: 1234

```
### Destructuring
```js
const peter = {weight: 72, height: 173}
const {weight, height, age = 25} = peter
console.log(weight, height, age) //72, 173, 25
```
### 해체할당
나머지 연산자를 통해 객체 프로퍼티와 배열 요소에 할당할 수도 있습니다.
```js
const obj = {};
[, ...obj.prop] = ['a', 'b', 'c'];
```
해체를 통해 할당하는 경우 할당 대상은 좌변에 올수 있는 모든 것이 될 수 있습니다.
```js
const obj = {};
const arr = [];

({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true});

console.log(obj) //{prop: 123}
console.log(arr) // [true]
```
기존에 정의된 변수를 할당대상으로 지정할 경우 괄호를 묶어야 합니다.
```js
let a, b

{a, b} = someObject; //SyntaxError
({a, b} = someObject) //Ok
```

## ...
점점점이라는 문법이 추가 됬는 데, 이 문법은 두가지 기능이 있습니다.

### Rest Parameter
Rest Operator 기능은 함수로 전달되는 argument들중 변수로 정의되지 않는 것들을 모두 가져옵니다.
가장 중요한 것은 Rest Operator는 항상 마지막에 사용해야 합니다.

```js
function foo(...args) {} //args : [1,2,3] 
foo(1,2,3)  
function bar (first, ...args) {} //args : [2,3] 
bar(1,2,3)

```
### Destructuring assignment
Spread 기능은 반복가능한 데이터 앞에 ...을 사용하면 아이템들을 순서대로 꺼내줍니다.

```js
const odd = [1, 3, 5]
const even = [2, 4, 6]
const num = [...odd, ...even]
// [1, 3, 5, 2, 4, 6]
sum(...odd) //9

const obj1 = {a: 'a'}
const obj2 = {b: 'b'}
const mergedObj = {...obj1, ...obj2}
// {a: 'a', b: 'b'}

```

## String Template
이 기능은 View 레이어에서 탬플릿 엔진을 사용하는 것 처럼 변수와 연산 기능을 수행할 수 있는 탬플릿 기능입니다. 백틱이라는 것으로 감싸주고 ${}를 사용하면 문자열속에 변수를 사용할 수 있습니다.
### String concatenation
```js
const name = 'Peter'
const txt = `Hello World I'm ${name}`
/*
Hello World
I'm Peter 
*/
```
### Expression
```js
const math = 90
const science = 100
console.log(`Math: ${math} 
  Sciene: ${science} 
  Total: ${math + science} 
  Average: ${(math + science) / 2}`)
```
### Undefined variable
```js
const txt = `Hello ${name}`
console.log(txt) //ReferenceError
```
### Special Character
특수문자를 사용할 때는 SyntaxError가 발생함으로 이스케이프 문자를 사용해야 합니다.
```js
const txt = `Hello \$\{\}`
console.log(txt) //Hello ${}
```
### Function Body
> 사례: [Vue 컴파일러 결과 실행](https://github.com/vuejs/vue-next/blob/e954ba21f04f0ef848c687233fcb849d75e4153f/packages/vue/src/index.ts#L67)

```js
const body = `
const a = 10;
const b = 20;
return a + b;
`;
const result = new Function(body)();
console.log(result); // 30
```

## Module
모듈 기능을 사용해서 소스 코드의 목적이나 역할에 따라 파일을 분리하고 다른 파일을 읽을 수 있습니다.

### export
무언가를 내보낼 때는 export 키워드를 사용합니다. 변수, 함수, 클래스를 모두 내보낼 수 있습니다.
```js
export const sqrt = Math.sqrt
export function sum(...numbers) {
  return numbers.reduce((prev, cur) => {
    return prev + cur
  })
}

export function avg(...numbers) {
  const sumResult = sum(...numbers)
  return sumResult / numbers.length
}
```
### import
```js
import {sum, avg} from './lib'

sum(1, 2, 3, 4) //10
avg(1,2,3,4) //2.5
```
### default
default export는 하나만 선언할 수 있습니다.
```js
//myFunc.js
export default function () {} 
//main.js
import myFunc from './myFunc'
myFunc()
```
### alias
이름이 중복되는 것을 방지하기 위해 Alias를 선언할 수 있습니다.
```js
import {getTime} from './bar'
import {getTime} from './foo'
//Duplicate declaration 

import * as bar from './bar'
import * as foo from './foo'

import {getTime as getTimeOfBar} from './bar'
import {getTime as getTimeOfFoo} from './foo'
```
## Import is read-only
모듈에 선언된 값은 읽기전용으로 변경할 수 없습니다. let 키워드로 정의해도 다른 모듈에서는 변경이 불가능합니다.
```js
//main.js
import {counter, incCounter} from './lib'

console.log(counter)
// 3
incCounter()
console.log(counter)
// 4
counter++
//SyntaxError 'counter' is read-only

//lib.js 
export let counter = 3

export function incCounter() {
  counter++
} 
```

## Data Structure
Map, WeakMap, Set, WeakSet 네가지의 자료구조를 내장으로 제공합니다 
### Map
Map의 키는 어떤 값도 가능합니다. 객체도 키가 될 수 있습니다.
만약에 미정의된 키를 조회할 경우 undefined를 반환합니다.
```js
const map = new Map()
map.set('foo', true)
map.set('bar', false)
map.get('foo') //true
map.has('foo') //true
map.delete('foo')
map.size //2
map.clear() //map.size === 0

const map = new Map([ ['foo', true], ['bar', false] ])
```
### Set
Set의 고유한 데이터를 순서의 상관없이 모아둡니다. 그래서 이미 선언된 데이터도 중복선언이 되지 않습니다.
```js
const set = new Set()
set.add('red')
set.has('red') //true
set.delete('red')
set.has('red') //false 
set.add('red')
set.add('green')
set.size //2
set.clear() //set.size === 0
const set = new Set(['red', 'green', 'blue'])

//Chainable
set.add('purple').add('black')
```
### WeakMap
Map과 WeakMap의 차이는 가비지 컬렉터에 키가 수집이 되는 것에 막지 않습니다. 그래서 WeakMap의 키는 객체만 정의할 수 있고, 해당 객체가 삭제되면 WeakMap에서도 삭제됩니다.

WeakMap을 조회하는 것은 키로만 할 수 있습니다. 그래서 get, set, has, delete 메소드만 제공합니다.
```js
const weakMap = new WeakMap()
let obj = {}
weakMap.set(obj, false)
console.log(weakMap.get(obj)) //false
obj = null // obj in weakMap is garbage-collected
```
### WeakSet
WeakSet도 WeakMap과 유사하게 동작합니다. 값은 객체만 될 수 있고, add, has, delete 메소드만 제공합니다.
```js
const weakSet = new WeakSet()
let obj = {}
weakSet.add(obj)
weakSet.has(obj) //true
obj = null // obj in weakSet is garbage-collected
```
## Promise
Promise는 비동기처리에 대한 콜백의 대안입니다. 콜백보다 구현자의 노력이 필요하지만 몇 가지 이점을 제공합니다.
### resolve/reject
```js
const promise = new Promise((resolve, reject) => {
  getData(
    response => resolve(response.data), 
    error => reject(error.message)
  )
})
```
### then / catch
```js
promise
  .then(data => console.log(data))
  .catch(err => console.error(err))
```
### all
Promise의 모든 결과를 받을 때 Promise.all()로 받을 수 있습니다. 그리고 모든 결과를 배열을 통해 받습니다.
```js
Promise.all([
  getPromise(),
  getPromise(),
  getPromise()
])   //response all data 
  .then([result1, result2, result3] => {})
  .catch(err => console.error(err))
```
### race
가장 빠르게 응답되는 Promise를 찾을 때는 Promise.race()를 통해 사용할 수 있습니다. 이 기능을 활용하면 타임아웃기능을 구현할 수 있습니다.
```js
Promise.race([
  getPromise(), //1000ms 
  getPromise(), //500ms 
  getPromise() //250ms
])   //response of 250ms 
  .then(data => console.log(data))
  .catch(err => console.error(err))
```

## Symbol
### Unique
```js
const RED1 = Symbol('red')
const RED2 = Symbol('red')
console.log(RED1 === RED2) //false
```
### Property Keys
```js
const height = Symbol('height')
const obj = {age: 25}
obj[height] = 173

Object.getOwnPropertyNames(obj) //[ 'age’ ] 
Object.getOwnPropertySymbols(obj) // [ Symbol(height) ] 
```
## Clear intention
### Bad
```js
const SWITCH_OFF = 0
const EQUAL = 0

const getBtnStatus = () => SWITCH_OFF
const compareVersion = () => EQUAL

const btnStatus = getBtnStatus()
const result = compareVersion('0.0.1', '0.0.1')

btnStatus === comparedResult //true
```
### Good

```js
const SWITCH_OFF = Symbol(0)
const EQUAL = Symbol(0)

const getBtnStatus = () => SWITCH_OFF
const compareVersion = () => EQUAL

const btnStatus = getBtnStatus()
const result = compareVersion('0.0.1', '0.0.1')

btnStatus === comparedResult //false
```

## Proxy
### Intercept and customize operations
```js
const target = {}
const proxy = new Proxy(target, {
  get(target, propKey) {
    console.log('GET', propKey)
    return target[propKey]
  },
  set(target, propKey, value) {
    console.log('SET', propKey)
    target[propKey] = value
  }
})
proxy.foo //GET foo
proxy.bar = 'abc' //SET bar

const target = {}
const proxy = new Proxy(target, {
  has(target, propKey) {
    console.log('HAS', propKey)
    return propKey in target
  },
  deleteProperty(target, propKey) {
    console.log('DELETE', propKey)
    delete target[propKey]
  }
})
'hello' in proxy //HAS hello
delete proxy.bara //DELETE bar

```
### Function
```js
const sum = (a, b) => a + b
const handler = {
  apply(target, thisArg, argumentsList) {
    return target(...argumentsList)
  }
}

const proxySum = new Proxy(sum, handler)
proxySum(1, 2) //3

```
### Class
```js
class Person {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

const handler = {
  construct(target, args) {
    return new target(...args)
  }
}
const ProxyPerson = new Proxy(Person, handler)
const peter = new ProxyPerson('peter.cho')
peter.getName() //peter.cho

```

## Builtin Method
### String
```js
"Hello".startsWith("Hell") // output: true
"Goodbye".endsWith("bye") // output: true
"Jar".repeat(2) // output: JarJar
"abcedf".includes("bce") // output: true
```
### Number
```js
Number.EPSILON
Number.isNaN()
Number.isFinite()
Number.isInteger()
Number.isSafeInteger()
Number.parseFloat()
Number.parseInt()
```
### Array Static Method
```js
//Array.from()
//from array-like objects
let arrayLike = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  'length': 4
}
Array.from(arrayLike) //['zero', 'one', 'two', 'three']
Array.from({length: 5}, (v, i) => i) // [0, 1, 2, 3, 4]
Array.from('zero') ['z', 'e', 'r', 'o']

Array.of()
//A better way to create arrays
Array.of(1, 2, 3, 4, 5) //[1, 2, 3, 4, 5]
```
### Array.prototype.*
```js
//Array.prototype.find()
[4, 100, 7].find(x => x > 5) //100

//Array.prototype.findIndex()
[4, 100, 7].findIndex(x => x > 5) //1

//Array.prototype.fill()
(new Array(7)).fill(2).fill(3, 2, 5) //[2, 2, 3, 3, 3, 2, 2]
```
### Object Static Method
```js
//Object.assign()
let x = {a: 1}
Object.assign(x, {b: 2}) //{ a: 1, b: 2}

// DOM Style를 할당할 때도 사용할 수 있다.
Object.assign(dom.style, {
  color: '#fff',
  fontSize: '12px'
})

// 두 값이 같은지 확인한다.
Object.is('y', 'y') //true
Object.is({x: 1}, {x: 1}) //false
Object.is(NaN, NaN) //true
```
