---
title: 모노레포의 정의와 기본 원리
---
# 모노레포의 정의와 기본 원리
## 모노레포의 정의
다수 프로젝트를 단일 형상관리 저장소에 저장하는 소프트웨어 개발 전략

## 모노레포 기본 원리: npm 심볼릭 링크
npm 심볼릭 링크를 통해서 같은 저장소에 있는 다른 프로젝트를 npm 모듈처럼 사용할 수 있다.

### npm 심볼릭 링크 만들기

#### Step 1. my-core 패키지 만들기
프로젝트 루트에 my-core 패키지를 만든다.
```bash
$ mkdir my-core
$ cd my-core
$ npm init
```
my-core 폴더 내에 index.js 파일을 만들고 다음과 같은 코드를 작성한다.
```js
module.exports = (a, b) => a + b
```

#### Step 2. my-repo 패키지 만들기
프로젝트 루트에 my-repo 패키지를 만든다.
```bash
$ mkdir my-repo
$ cd my-repo
$ npm init
```
my-repo 폴더 내에 index.js 파일을 만들고 다음과 같은 코드를 작성한다.
```js
const sum = require('my-core')
console.log(sum(1, 2))
```

#### Step 3. npm 심볼릭 링크 설정하기
`npm link`를 실행하면 해당 폴더의 패키지명을 기준으로 심볼릭 링크를 설정할 수 있다.
```bash
$ cd my-core
$ npm link # 심볼릭 링크 설정
```

#### Step 4. npm 심볼릭 링크 설치하기
`npm link <package>` 명령어를 사용하면 등록된 심볼릭 링크를 설치한다. 설치 시 다른 패키지와 동일하게 `node_modules` 폴더에 설치된다. 
```bash
$ cd my-repo
$ npm link my-core # 심볼릭 링크 설치
```

심볼릭 링크 설치 후 index.js를 실행하면 아래와 같은 결과를 확인할 수 있다.
```bash
$ node index.js // 3
```  