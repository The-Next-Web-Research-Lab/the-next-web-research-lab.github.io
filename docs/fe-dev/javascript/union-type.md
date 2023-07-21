---
title: TypeScript - Union Type 정의와 사용법 간단 정리
---

# TypeScript - Union Type 정의와 사용법 간단 정리
## Union Type 이란?
Union Type은 두 개 이상의 타입을 조합해서 정의한 타입이다.

예를 들어 다수의 자료형이 있으면,
```ts
interface Square {
  kind: 'square'
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}
interface Circle {
  kind: 'circle'
  radius: number
}
```

Union Type은 이렇게 `|`로 구분해서 정의한다.
```ts
type Shape = Square | Rectangle | Circle
```

### Union Type의 타입 추론
TypeScript에서는 [타입 추론(type inference)](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing)을 통해 각 타입을 추론하게 된다.
TypeScript를 확인해 볼 때는 [TypeScript Playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoEcCucooN4BQyyA1qACYBcyA5AM5Y4Q1HJ3ABeE1ImAtgCNoBAL4FQkWIhQAlCAjBwQAcwA2+VmRBVauBUrXNWAd2DkwACx78hUVhYjBlFsNcHCxE6PCTIAwsBQCOrIhMRaOjQIgcFGxFBw5MCYdG62ogQEYACeAA4oqBZw+cgAvGiMuMgAPshy+iohtQFB6pkIAPYgdGDIyhBgAIK4cGXIABR0RfnUhcUQAJTUStllAHyhrMAwE1PzAHQRZaXlAEQM2LinC5vExAD098iAN6OADHWAOIN18oqNEIA-Nf4YupABrjyEAIKuAHQ7AD7LgAelwA+nawHk9ADUDgEqxwAaq4AXLuQgAGFwCh48hAAujgBv2wAANchADg9gF2BwA6q4ATpv2iOQuDAmCgIDY0wg+3YXGQACpOQdeRAANysMRI5BUwCt7aIgA)로 온라인에서 확인할 수 있다.
```ts
const getArea = (shape: Shape) => {
  if (shape.kind === "square") {
    // 여기서 Rectangle과 Circle의 프로퍼티를
    // 사용하면 타입 에러가 발생한다.
    return shape.size * shape.size;
  }
  // 생략
}
```