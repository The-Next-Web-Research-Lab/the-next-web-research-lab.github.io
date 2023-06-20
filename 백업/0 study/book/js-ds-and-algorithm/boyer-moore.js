const buildBadMatchTable = str => {
  const table = {}
  const {length} = str

  for (let i = 0; i < length - 1; i++) {
    table[str[i]] = length - 1 - i
  }

  if (table[str[length - 1]] === undefined) {
    table[str[length - 1]] = length
  }
  return table
}

console.log(
  buildBadMatchTable('data')
)
console.log(
  buildBadMatchTable('struct')
)
console.log(
  buildBadMatchTable('roi')
)
console.log(
  buildBadMatchTable('jam')
)

const boyerMoore = (str, pattern) => {
  const badMatchTable = buildBadMatchTable(str)
  let offset = 0
  let patternLastIndex = pattern.length - 1
  let scanIndex = patternLastIndex
  let maxOffset = str.length - pattern.length

  while (offset <= maxOffset) {
    scanIndex = 0
    while(pattern[scanIndex] === str[scanIndex + offset]) {
      if (scanIndex === patternLastIndex) {
        return offset
      }
      scanIndex++
    }
    const badMatchString = str[offset + patternLastIndex]
    if (badMatchTable[badMatchString]) {
      offset += badMatchTable[badMatchString]
    } else {
      offset += 1
    }
  }
  return -1
}

console.log(
  boyerMoore('jellyjam', 'jam')
)
console.log(
  boyerMoore('jellyjam', 'jelly')
)
console.log(
  boyerMoore('jellyjam', 'sam')
)
