class Person {
  constructor (name, street, city, state) {
    Object.assign(this, {name, street, city, state})
  }
  hydrate () {
    return JSON.stringify(this)
  }
  dehydrate (memento) {
    const {name, street, city, state} = JSON.parse(memento)
    Object.assign(this, {name, street, city, state})
  }
}

class CareTaker {
  constructor () {
    this.mementos = new Map()
  }
  add (key, memento) {
    this.mementos.set(key, memento)
  }
  get (key) {
    return this.mementos.get(key)
  }
}

const mike = new Person('Mike Foley', '1112 Main', 'Dallas', 'TX')
const john = new Person('John Wang', '48th Street', 'San Jose', 'CA')
const caretaker = new CareTaker()

// save state
caretaker.add(1, mike.hydrate())
caretaker.add(2, john.hydrate())

// mess up their names
mike.name = 'King Kong'
john.name = 'Superman'

// restore original state
mike.dehydrate(caretaker.get(1))
john.dehydrate(caretaker.get(2))

console.log(mike.name) // Mike Foley
console.log(john.name) // John Wang
