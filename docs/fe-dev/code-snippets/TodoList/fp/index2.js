const addItem = (todoList, [subject, date]) => {
  return todoList.concat({subject, date})
}
const todoListToString = (todoList) => {
  return todoList
    .map(({subject, date}) => `[${date}] ${subject}`)
    .join('\n')
}

const todoList = [
  ['새해인사', 20200101],
  ['화분 물주기', 20200102],
]
  .reduce(addItem, [])

const todoList2 = addItem(todoList, ['분리수거', 20200103])

console.group('todoList')
console.log(todoListToString(todoList))
console.groupEnd()

console.group('todoList2')
console.log(todoListToString(todoList2))
console.groupEnd()

/* 실행결과
todoList
  [20200101] 새해인사
  [20200102] 화분 물주기
todoList2
  [20200101] 새해인사
  [20200102] 화분 물주기
  [20200103] 분리수거
 */
