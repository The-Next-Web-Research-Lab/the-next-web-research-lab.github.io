const STR = '?'
const REG = /\?/g
const memo = {}
const memo2 = {}
let memo3 = []

function solution(words, queries) {
  memoQuery(queries)
  memoWord(words)

  const arr = []

  queries.forEach((query, i) => {
    if (!memo2[query]) {
      memo2[query] = toMathLength(memo3, memo[query])
    }
    arr[i] = memo2[query]
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

const memoWord = words => {
  memo3 = words.map(word => [word, word.length])
}

const toMathLength = (words, query) => {
  return words
    .filter(([word, length]) => {
      if (length !== query[0]) {
        return false
      }
      if (
        (query[1] && word.startsWith(query[3])) ||
        (query[2] && word.endsWith(query[3]))
        ) {
        return true
      }
    }).length
}

const words = ["frodo", "front", "frost",
  "frozen", "frame", "kakao"]
const queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

console.time('solution')
console.log(solution(words, queries))
console.timeEnd('solution')