const add = (x, y) => x + y
const sub = (x, y) => x - y
const mul = (x, y) => x * y
const div = (x, y) => x / y

class Command {
  constructor (execute, undo, value, name) {
    this.execute = execute
    this.undo = undo
    this.value = value
    this.name = name
  }
}

class AddCommand {
  constructor (value) {
    return new Command(add, sub, value, 'Add')
  }
}

class SubCommand {
  constructor (value) {
    return new Command(sub, add, value, 'Sub')
  }
}

class MulCommand {
  constructor (value) {
    return new Command(mul, div, value, 'Mul')
  }
}

class DivCommand {
  constructor (value) {
    return new Command(div, mul, value, 'Div')
  }
}

class Calculator {
  constructor () {
    this.current = 0
    this.commands = []
  }
  action (command) {
    const name = command.name
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
  }
  execute (command) {
    this.current = command.execute(this.current, command.value)
    this.commands.push(command)
    console.log(`${this.action(command)}: ${command.value}`)
  }
  undo () {
    const command = this.commands.pop()
    this.current = command.undo(this.current, command.value)
    console.log(`Undo ${this.action(command)}: ${command.value}`)
  }
  getCurrentValue () {
    return this.current
  }
}

const calculator = new Calculator()

calculator.execute(new AddCommand(100))
calculator.execute(new SubCommand(24))
calculator.execute(new MulCommand(6))
calculator.execute(new DivCommand(2))

calculator.undo()
calculator.undo()

console.log(`Value: ${calculator.getCurrentValue()}`)
