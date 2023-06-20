function solution(p) {
  if (!p) {
    return ''
  }

  // 정상 판단
  const splitedStr= p.split('')
  if (isValidStr(splitedStr)) {
    return p
  }

  const splited = extractArr(splitedStr)
    .map(p => {
      if (isValidStr(p.split(''))) {
        return p
      }
      const splitedArr = p
        .replace(/\(\)/g, '-')
        .split('')

      return splitedArr
        .map(item => {
          switch (item) {
            case '-':
              return '()'
            case '(':
              return ')'
            case ')':
              return '('
          }
        })
        .join('')
    })

  return splited.join('')
}

const extractArr = strArr => {
  let closed = 0
  let opened = 0
  let i = 0
  let end = 0
  const arr = []
  for (const value of strArr) {
    if (value === '(') {
      opened++
    } else {
      closed++
    }
    i++
    if (closed === opened) {
      closed = 0
      opened = 0
      arr.push(strArr.slice(end, i).join(''))
      end = i
    }
  }
  return arr
}

const isValidStr = strArr => {
  let closed = 0
  let opened = 0
  for (const value of strArr) {
    if (value === '(') {
      opened++
    } else {
      closed++
    }
    if (closed > opened) {
      return false
    }
  }
  return true
}

const cases = [
  ['', ''],
  ['(()())()', '(()())()'],
  [')(', '()'],
  ['()))((()', '()(())()'],
  ['()))()((()', '()((()))()'],
  ['(()))(', '(())()'],
  ['()))(())((()', '()(())(())()'],
  [')(())(', '()()()'],
]

cases.forEach(([q, a]) => {
  console.log(solution(q) === a)
})