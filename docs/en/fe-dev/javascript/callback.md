---
title: Inferring Callback Types
---
# Inferring Callback Types

## Narrative
When making HTTP requests to the REST API, there were times when each component file ran at the same time. At this time, I decided that modifying the function definition side rather than modifying the user side would minimize the modification, so I solved it by creating a debounce function. In some cases, there are no function arguments, and in other cases, function arguments are required, so the callback type is inferred.

## Type Inference Code
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

## Usage Examples
It can be used as follows:

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

When more than one function argument is used in a callback, the following TS error occurs:
```ts
// TS2345: Argument of type '(num: number, str: string) => void' is not assignable to parameter of type '(props: number) => void'
debounce((num: number, str: string) => {
  console.log(num, str);
}, 100);
```