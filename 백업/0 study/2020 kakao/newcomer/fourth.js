function solution(words, queries) {
  const regQueries = toReg(queries)
  return regQueries.map(reg => {
    return toMathLength(words, reg)
  })
}

const toReg = queries => queries.map(query => {
  const regTxt = query.replace(/\?/g, '[a-z]')
  return new RegExp(`^${regTxt}$`)
})

const toMathLength = (words, reg) => {
  return words.filter(word => reg.test(word)).length
}

const words = ["frodo", "front", "frost",
  "frozen", "frame", "kakao"]
const queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

console.time('solution')
console.log(solution(words, queries))
console.timeEnd('solution')