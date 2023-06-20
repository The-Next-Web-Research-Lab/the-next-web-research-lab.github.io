function solution(p) {
  if (!p) {
    return ''
  }

  // 정상 판단
  if (isValidStr(p.split(''))) {
    return p
  }

  const safeArr = [
    [/\(\(\(\(\(\)\)\)\)\)/g, '-----', /\-\-\-\-/g, '((((()))))'],
    [/\(\(\(\(\)\)\)\)/g, '----', /\-\-\-\-/g, '(((())))'],
    [/\(\(\(\)\)\)/g, '---', /\-\-\-/g, '((()))'],
    [/\(\(\)\)/g, '--', /\-\-/g, '(())'],
    [/\(\)/g, '-', /\-/g, '()'],
  ]

  let str = p
  for (const item of safeArr) {
    str = str.replace(item[0], item[1])
  }

  str = str
    .split('')
    .map(item => {
      switch (item) {
        case '(':
          return ')'
        case ')':
          return '('
      }
      return item
    })
    .join('')

  for (const item of safeArr) {
    str = str.replace(item[2], item[3])
  }

  return str
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
  ['()))(())((()', '()(((())))()'],
  [')(())(', '((()))'],
]

cases.forEach(([q, a]) => {
  console.log(solution(q) === a)
})