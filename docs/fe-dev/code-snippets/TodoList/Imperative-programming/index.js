const addItem = (todoList, subject, date) => {
  const todoItem = toTodoItem(subject, date)
  todoList.push(todoItem)
}
const printTodoList = (todoList) => {
  const {length} = todoList
  let log = ``
  for (let i = 0; i < length; i++) {
    const todoItem = todoList[i]
    log += `${todoItemToString(todoItem)}`
    if (i < length - 1) {
      log += `\n`
    }
  }
  console.log(log)
}

const toTodoItem = (subject, date) => ({subject, date})
const todoItemToString = ({subject, date}) => `[${date}] ${subject}`

const todoList = []

addItem(todoList, '새해인사', 20200101)
addItem(todoList, '화분 물주기', 20200102)
addItem(todoList, '분리수거', 20200103)

printTodoList(todoList)

/* 실행결과
[20200101] 새해인사
[20200102] 화분 물주기
[20200103] 분리수거
*/
