전역에서 접근할 수 있는 인터페이스를 제공한다.

#### Install

`npm install`을 통해 nodejs 모듈을 설치한다.

```bash
$ npm install
```

#### jsdoc 생성

산출물은 `API Referance` 폴더에서 확인한다.

```bash
$ npm run doc
```

#### 최대 층수와 엘레베이터 갯수 변경
최대 층수와 엘레베이터 갯수는 `scripts/config.js`에서 변경한다.

`ELEVATOR_SPEC.MAX_FLOOR`은 최소 `LIMIT.MIN_FLOOR`와 최대 `LIMIT.MAX_FLOOR` 범위로 설정해야 한다.

`ELEVATOR_SPEC.ELEVATOR_LENGTH`은 최소 `LIMIT.MIN_ELEVATOR`와 최대 `LIMIT.MAX_ELEVATOR` 범위로 설정해야 한다.

해당 범위로 설정하지 않으면 에러를 발생한다.

```js
var ELEVATOR_SPEC = {
  MAX_FLOOR: 5,
  ELEVATOR_LENGTH: 4
};
```

#### 폴더 및 파일 구조

 * `scripts` : Javascript 파일
 * `styles` : Stylesheet 파일
 * `API Referance` : jsdoc 산출물