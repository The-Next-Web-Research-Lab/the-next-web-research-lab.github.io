class TodoList {
  constructor() {
    this.todoList = []
  }
  addItem(subject, date) {
    const todoItem = new TodoItem(subject, date)
    this.todoList.push(todoItem)
  }
  print() {
    const str = this.todoList
      .map((todoItem) => todoItem.toString())
      .join('\n')
    console.log(str)
  }
}

class TodoItem {
  constructor(subject, date) {
    this.subject = subject
    this.date = date
  }
  toString() {
    return `[${this.date}] ${this.subject}`
  }
}

const todoList = new TodoList()
todoList.addItem('새해인사', 20200101)
todoList.addItem('화분물주기', 20200102)
todoList.addItem('분리수거', 20200103)
todoList.print()
/*
[20200101] 새해인사
[20200102] 화분물주기
[20200103] 분리수거
*/
