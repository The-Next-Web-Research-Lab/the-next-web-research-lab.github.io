const STR = '?'
const REG = /\?/g
const memo = {}
const memo2 = {}

function solution(words, queries) {
  memoQuery(queries)
  words = reduceWords(words)
  const arr = []
  queries.forEach(query => {
    if (!memo2[query]) {
      memo2[query] = toMathLength(words, memo[query])
    }
    arr.push(memo2[query])
  })
  return arr
}

const memoQuery = queries => {
  queries.forEach(query => {
    if (!memo[query]) {
      const length = query.length
      const end = query[0] === STR
      memo[query] = [
        length,
        !end,
        end,
        query.replace(REG, ''),
        query
      ]
    }
  })
}

const reduceWords = (words) => {
  const queryLength = Object.values(memo).map(v => v[0])
  return words
    .filter(word => {
      return queryLength
        .filter(length => length === word.length)
        .length
    })
}

const toMathLength = (words, query) => {
  return words
    .filter(word => {
      if (word.length !== query[0]) {
        return false
      }
      if (query[1] && word.startsWith(query[3])) {
        return true
      } else {
        if (query[2] && word.endsWith(query[3])) {
          return true
        }
      }
    }).length
}

const words = ["frodo", "front", "frost",
  "frozen", "frame", "kakao"]
const queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

console.time('solution')
console.log(solution(words, queries))
console.timeEnd('solution')