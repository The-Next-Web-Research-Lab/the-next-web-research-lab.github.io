const chunk = (arr, size) => {
  if (size === 0) return arr;
  return Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
      arr.slice(i * size, i * size + size)
  );
};

console.log(chunk([0, 1, 2, 3], 0)) // [0, 1, 2, 3]
console.log(chunk([0, 1, 2, 3], 1)) // [[0], [1], [2], [3]]
console.log(chunk([0, 1, 2, 3], 2)) // [[0, 1], [2, 3]]
console.log(chunk([0, 1, 2, 3], 3)) // [[0, 1, 2], [3]]
console.log(chunk([0, 1, 2, 3], 4)) // [[0, 1, 2, 3]]
console.log(chunk([0, 1, 2, 3], 5)) // [[0, 1, 2, 3]]