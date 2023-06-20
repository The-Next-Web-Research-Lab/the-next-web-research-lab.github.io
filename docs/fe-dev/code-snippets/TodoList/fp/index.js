class TodoList {
  constructor(todoList) {
    this.todoList = todoList
  }
  addItem(subject, date) {
    const todoItem = TodoItem.create(subject, date)
    const addedTodoList = this.todoList.concat(todoItem)
    return TodoList.create(addedTodoList)
  }
  toString() {
    return this.todoList
      .map(TodoItem.todoItemToString)
      .join('\n')
  }
  static create(todoList) {
    return new TodoList(todoList)
  }
}

class TodoItem {
  static create (subject, date) {
    return {subject, date}
  }
  static todoItemToString ({subject, date}) {
    return `[${date}] ${subject}`
  }
}

const todoList = TodoList.create([])
  .addItem('새해인사', 20200101)
  .addItem('화분 물주기', 20200102)
const todoList2 = todoList
  .addItem('분리수거', 20200103)

console.group('todoList')
console.log(todoList.toString())
console.groupEnd()

console.group('todoList2')
console.log(todoList2.toString())
console.groupEnd()
