---
title: TypeScript - Union Type Definition and Usage
---

# TypeScript - Union Type Definition and Usage
## What is Union Type?
A Union Type is a combination of two or more types.

For example, if there are multiple data types,
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

The Union Type is defined as follows:`|`
```ts
type Shape = Square | Rectangle | Circle
```

### Type Inference for Union Types
In TypeScript, the [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing) to deduce each type. When checking TypeScript, use the [TypeScript Playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMoEcCucooN4BQyyA1qACYBcyA5AM5Y4Q1HJ3ABeE1ImAtgCNoBAL4FQkWIhQAlCAjBwQAcwA2+VmRBVauBUrXNWAd2DkwACx78hUVhYjBlFsNcHCxE6PCTIAwsBQCOrIhMRaOjQIgcFGxFBw5MCYdG62ogQEYACeAA4oqBZw+cgAvGiMuMgAPshy+iohtQFB6pkIAPYgdGDIyhBgAIK4cGXIABR0RfnUhcUQAJTUStllAHyhrMAwE1PzAHQRZaXlAEQM2LinC5vExAD098iAN6OADHWAOIN18oqNEIA-Nf4YupABrjyEAIKuAHQ7AD7LgAelwA+nawHk9ADUDgEqxwAaq4AXLuQgAGFwCh48hAAujgBv2wAANchADg9gF2BwA6q4ATpv2iOQuDAmCgIDY0wg+3YXGQACpOQdeRAANysMRI5BUwCt7aIgA) You can check it out online.

```ts
const getArea = (shape: Shape) => {
  if (shape.kind === "square") {
    // If you use the properties of Rectangle
    // and Circle here, a type error occurs.
    return shape.size * shape.size;
  }
  // The rest is ommited
}
```