const unfold = (iteratorFn, seedValue, list = []) => {
  const either = iteratorFn(seedValue);
  if (either) {
    const [result, nextSeedValue] = either;
    return unfold(iteratorFn, nextSeedValue, [...list, result])
  } else {
    return list;
  }
};

const fn = n => {
  return n > 50
    ? false
    : [-n, n + 10]
};

console.log(unfold(fn, 10));
//=> [-10, -20, -30, -40, -50]
console.log(unfold(fn, 60));
//=> []
