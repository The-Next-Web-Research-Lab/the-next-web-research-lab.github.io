// 객체 복제
const obj = {
  arr: [0, 1],
};

const clonedObj = structuredClone(obj);

clonedObj.arr.push(2);

console.log(obj.arr); // [0, 1]
console.log(clonedObj.arr); // [0, 1, 2]

// 순환 참조 지원
const original = { name: "MDN" };
original.itSelf = original;

const cloned = structuredClone(original);

console.assert(cloned !== original);
console.assert(cloned.name === original.name);
console.assert(cloned.itSelf === cloned);

// 전송가능한 객체(Transferable objects): 전송 후 기존 데이터 사용 불가
const uInt8Arr = Uint8Array.from({ length: 1024 }, (_, i) => i);
console.log(uInt8Arr.byteLength); // 1024

const transferred = structuredClone(uInt8Arr, {
  transfer: [uInt8Arr.buffer],
});
console.log(uInt8Arr.byteLength); // 0
