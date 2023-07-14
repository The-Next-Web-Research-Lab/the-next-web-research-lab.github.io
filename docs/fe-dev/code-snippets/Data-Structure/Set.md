---
title: Set
---

# Set

```js
const set = new Set();
set.add(1);
set.delete(1);
set.add(2);
console.log(set.has(1), set.has(2)); // false true
```

## 교집합
```js
const intersectSets = (setA, setB) => {
  const intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
};

console.log(
  intersectSets(
     new Set([1, 2, 3, 4]),
     new Set([2, 3]),
  )
); // Set {2, 3}
```

## 합집합
```js
const unionSets = (setA, setB) => {
  const union = new Set(setA);
  for (const elem of setB) {
    union.add(elem);
  }
  return union;
};
// 또는
const unionSets = (setA, setB) => {
  return new Set([...setA, ...setB]);
};

console.log(
  unionSets(
     new Set([1, 2, 3, 4]),
     new Set([2, 3]),
  )
); // Set {1, 2, 3, 4}
```

## 차집합
```js
const differenceSets = (setA, setB) => {
  const difference = new Set(setA);
  for (const elem of setB) {
    difference.delete(elem);
  }
  return difference;
};

console.log(
  differenceSets(
     new Set([1, 2, 3, 4]),
     new Set([2, 3]),
  )
); // Set {1, 4}
```
