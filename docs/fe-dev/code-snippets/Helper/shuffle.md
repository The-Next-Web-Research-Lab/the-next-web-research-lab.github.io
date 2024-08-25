---
title: shuffle
---

## 2024 shuffle

```js
// 뒤에서부터 시작하면서 자리를 바꿀 유닛을 무작위로 구해서 교체하는 방식
const shuffle = (arr) => {
  for (let unitIndex = arr.length - 1; unitIndex > 0; unitIndex--) {
    const swapIndex = Math.round(Math.random() * unitIndex);

    if (swapIndex === unitIndex) continue;
    [arr[swapIndex], arr[unitIndex]] = [arr[unitIndex], arr[swapIndex]];
  }
};

const arr = Array.from({ length: 10 }, (_, i) => i);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
shuffle(arr); // [7, 0, 5, 9, 1, 8, 6, 2, 4, 3]
```

## shuffle.js

<<< @/fe-dev/code-snippets/Helper/shuffle/shuffle.js

## shuffle-2.js

<<< @/fe-dev/code-snippets/Helper/shuffle/shuffle-2.js

## shuffle-2-2.js

<<< @/fe-dev/code-snippets/Helper/shuffle/shuffle-2-2.js

## shuffle-3.js

<<< @/fe-dev/code-snippets/Helper/shuffle/shuffle-3.js
