function solution(s) {
  var answer = 0;
  var halfLength = s.length / 2;

  const strArr = Array
    .from({length: halfLength}, (v, i) => i + 1)
    .map(num => chunk(s, num))
    .map(chunkArr => {
      const arr = []
      let index = -1
      let prevItem = null
      for(const item of chunkArr) {
        if (prevItem === item) {
          arr[index][1]++
        } else {
          index++
          arr[index] = [item, 1]
        }
        prevItem = item
      }
      return arr
    })

  if (!isValidChunk(strArr)) {
    return s.length
  }

  const chunkLenghArr = toChunkLength(strArr)

  return Math.min(...chunkLenghArr);
}

const isValidChunk = strArr => !!strArr.filter(chunkMap => chunkMap[0][1] > 1).length

const toChunkLength = strArr => strArr.map(chunkMap => {
  let sum = 0
  chunkMap.forEach(([key, value]) => {
    if (value > 1) {
      const sumValue = String(value).length
      sum += key.length + sumValue
    } else {
      sum += key.length
    }
  })
  return sum
})

const chunk = (str, size) => {
  const arr = Array.from(str)
  const length = Math.ceil(arr.length / size)
  const newArr = Array.from({length}, () => [])
  arr.forEach((value, index) => {
    const newArrIndex = Math.floor(index / size)
    newArr[newArrIndex].push(value)
  })
  return newArr.map(arr => arr.join(''))
}

const cases = [
  'aabbaccc', // 7
  'ababcdcdababcdcd', // 9
  'abcabcdede', // 8
  'abcabcabcabcdededededede', // 14
  'xababcdcdababcdcd', // 17
  'aaaaaaaaaabbaccc', // 8
  'aabbaabbaabbaabb', // 5
  'aa', // 2
  'abcdabcd', // 5
  'acacb', // 4
]

console.log(solution(cases[0]) === 7)
console.log(solution(cases[1]) === 9)
console.log(solution(cases[2]) === 8)
console.log(solution(cases[3]) === 14)
console.log(solution(cases[4]) === 17)
console.log(solution(cases[5]) === 8)
console.log(solution(cases[6]) === 5)
console.log(solution(cases[7]) === 2)
console.log(solution(cases[8]) === 5)
console.log(solution(cases[9]) === 4)