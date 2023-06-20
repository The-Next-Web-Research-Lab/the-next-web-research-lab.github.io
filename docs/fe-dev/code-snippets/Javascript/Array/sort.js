const arr = [0, 2, 3, 1]
arr.sort((a, b) => a - b)
console.log('오름차순', ...arr)
arr.sort((a, b) => b - a)
console.log('내름차순', ...arr)