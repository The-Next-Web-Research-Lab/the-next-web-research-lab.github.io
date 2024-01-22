---
title: Enforcing the class names allowed in props
---
# Enforcing the class names allowed in props

## Narrative
There are times when component props receive the class name of tailwindcss. When declaring a type, it is sometimes defined simply as string, but there have been cases where defining it as string has caused an unintentional bug. For example, an icon component needs to receive w-* and h-* together, but if you define it as a string, you won't know it at compile time.

By utilizing TypeScript’s template literals and infer, you can know the class names that should not be used and the class names that should be used in pairs through the type.

## Use `text-` instead of `fill-`
If you use fill-, it tells you to use text-.
```ts
T extends `${infer U}fill${infer V}` ? `${U}text${V}` : T
```

## Pair ClassName
This is used to define the type of a class name that should always be used in pairs.

### Type Definitions
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

### Usage Examples
```ts
type Props<T> = { 
    className: RequirePair<T, 'w-', 'h-'>
}
function something <T extends string> ({ className }: Props<T>) {}

// No error occurs as neither w- nor h- is used
something({className: 'text-lg'});

// Error occurs as only w- is used
// Type '"text-lg w-10"' is not assignable to type '"text-lg w-10 h-10"'.
something({className: 'text-lg w-10'});
```

## Tailwind ClassName Prefix Filter

### Type Definitions
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

### Usage Examples
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