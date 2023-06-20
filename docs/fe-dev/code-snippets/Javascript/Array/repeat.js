// 지정한 숫자만큼 반복하며, 주어진 함수의 값이 각 요소에 할당되어
// 새로운 배열을 반환한다.
const repeat = (times, fn) => Array
  .from({length: times}, (_, v) => v)
  .map(fn)

repeat(3, i => i * 10)