---
title: props에 허용하는 클래스명 강제하기
---
# props에 허용하는 클래스명 강제하기

## 서사
컴포넌트 Props에 tailwindcss의 클래스명을 받을 때가 있다. 타입 선언할 때 단순하게 string으로만 정의하기도 하는데, string으로 정의해서 의도하지 않게 버그가 발생하는 경우가 있었다. 예를 들어서 아이콘 컴포넌트에서 w-*, h-*를 함께 받아야 하는데, string으로만 정의하면 컴파일 타임에 알 수 없다.

타입스크립트의 탬플릿 리터럴과 infer를 활용하면 사용하면 안되는 클래스명과 쌍으로 사용해야 하는 클래스명을 타입을 통해 알 수 있다.

## Tailwind ClassName `fill-*` 대신 `text-` 사용하도록 처리
fill-*를 사용하면 text-*로 사용하라고 알려준다.

```ts
T extends `${infer U}fill${infer V}` ? `${U}text${V}` : T
```

## Pair ClassName
항상 쌍으로 사용해야하는 클래스명의 타입을 정의할 때 사용하는 타입니다.

### 타입 정의
```ts
type SizeClass<
  U extends string,
  V extends string,
  Size extends string,
  Left extends string,
  Right extends string,
> = `${U}${Left}${Size} ${Right}${Size}${V}`;

type CheckPair<
  T,
  U extends string,
  V extends string,
  Size extends string,
  Left extends string,
  Right extends string,
> = T extends `${infer U}${Left}${Size} ${Right}${Size}${infer V}`
  ? SizeClass<U, V, Size, Left, Right>
  : SizeClass<U, ` ${V}`, Size, Left, Right>;

export type RequirePair<
  T,
  Left extends string,
  Right extends string,
> = T extends `${infer U}${Left}${infer Size} ${infer V}`
  ? CheckPair<T, U, V, Size, Left, Right>
  : T extends `${infer U}${Right}${infer Size} ${infer V}`
  ? CheckPair<T, U, V, Size, Left, Right>
  : T extends `${infer U}${Left}${infer Size}`
  ? SizeClass<U, "", Size, Left, Right>
  : T extends `${infer U}${Right}${infer Size}`
  ? SizeClass<U, "", Size, Left, Right>
  : T;
```

### 사용 예제
```ts
type Props<T> = { 
    className: RequirePair<T, 'w-', 'h-'>
}
function something <T extends string> ({ className }: Props<T>) {}

// w-, h- 둘 중 하나를 사용하지 않아 에러 미발생
something({className: 'text-lg'});

// w- 하나만 사용해서 에러 발생
// Type '"text-lg w-10"' is not assignable to type '"text-lg w-10 h-10"'.
something({className: 'text-lg w-10'});
```

## Tailwind ClassName Prefix Filter

### 타입 정의
```ts
type FilterString<
  S extends string,
  Target extends string,
> = S extends `${Target}${string | ""}` ? "" : S;

type Split<
  S extends string,
  D extends string,
  Prefix extends string,
> = S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [`${FilterString<T, Prefix>}`, ...Split<U, D, Prefix>]
  : [`${FilterString<S, Prefix>}`];

type Join<S extends string[], D extends string> = S extends [
  infer Head,
  ...infer Tail,
]
  ? `${Head extends string ? Head : ""}${Head extends "" ? "" : D}${Join<
      Tail extends string[] ? Tail : [],
      D
    >}`
  : "";

type TrimRight<T extends string> = T extends `${infer R} `
  ? `${TrimRight<R>}`
  : T;
```

### 사용 예제
```ts
export type DisallowClassName<
  S extends string,
  Prefix extends string,
> = TrimRight<Join<Split<S, " ", Prefix>, " ">>;

// h-10 w-10 m-10 p-10
type FilteredClassName0 = DisallowClassName<
  "h-10 w-10 m-10 p-10 fill-black",
  "fill"
>;
type FilteredClassName1 = DisallowClassName<
  "h-10 w-10 fill-black m-10 p-10",
  "fill"
>;
type FilteredClassName2 = DisallowClassName<
  "fill-black h-10 w-10 m-10 p-10",
  "fill"
>;

// fill-black m-10 p-10
type FilteredClassName3 = DisallowClassName<
  "fill-black h-10 w-10 m-10 p-10",
  "h" | "w"
>;
```