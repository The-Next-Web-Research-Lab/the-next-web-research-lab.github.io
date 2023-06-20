const isNull = value => value === null;
const isArray = value => Array.isArray(value);
const isObject = value => [
  !isNull(value),
  !isArray(value),
  typeof value === 'object',
].every(v => v);

const arr = [null, undefined, {}, '', []];
console.log(arr.map(isObject)); // [false, false, true, false, false]
console.log(arr.map(isArray)); // [false, false, false, false, true]
