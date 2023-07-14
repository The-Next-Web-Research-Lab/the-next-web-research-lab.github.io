---
title: 콜백 타입 추론하기
---
# 콜백 타입 추론하기

## 서사
REST API에 HTTP 요청할 때 각 컴포넌트 파일에서 동시에 실행하는 경우가 있었다.
이때 사용측을 수정하는 것 보다는 함수 정의측을 수정하는 게 수정을 최소화 할 수 있다고 판단해서 debounce 함수를 만들어서 해결했다.
함수 인자가 없는 경우도 있고, 함수 인자를 필요한 경우도 있어서 콜백 타입 추론하도록 처리했다. 

## 타입 추론 코드
```ts
export const debounce = <
  Prop,
  Callback extends PropCallback | VoidCallback,
  VoidCallback = () => void,
  PropCallback = (prop: Prop) => void,
>(
  callback: Callback extends (prop: Prop) => void
    ? (prop: Prop) => void
    : () => void,
  ms = 0,
) => {
  let timer: null | ReturnType<typeof setTimeout> = null;

  return (...props: Prop[]) => {
    timer && clearTimeout(timer);

    timer = setTimeout(() => {
      callback(props[0]);
    }, ms);
  };
};
```

## 사용 예제
다음과 같이 사용 가능하다.
```ts
debounce(() => {
  console.log("empty");
}, 100);
debounce((num: number) => {
  console.log(num);
}, 100);
debounce(({ num, str }: { num: number; str: string }) => {
  console.log(num, str);
}, 100);
```

콜백의 함수 인자를 두 개이상 사용했을 때 다음과 같은 TS 에러가 발생한다.
```ts
// TS2345: Argument of type '(num: number, str: string) => void' is not assignable to parameter of type '(props: number) => void'
debounce((num: number, str: string) => {
  console.log(num, str);
}, 100);
```