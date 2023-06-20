const take = (n, arr) => arr.slice(0, n)

take(0, [1, 2, 3]) // []
take(2, [1, 2, 3]) // [1, 2]
console.log(take(4, [1, 2])) // [1, 2, 3]