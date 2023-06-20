class Context {
  constructor(input) {
    this.input = input
    this.output = 0
  }
  startsWith(str) {
    return this.input.startsWith(str)
  }
}

class Expression {
  constructor(name, one, four, five, nine, multiplier) {
    this.name = name
    this.one = one
    this.four = four
    this.five = five
    this.nine = nine
    this.multiplier = multiplier
  }
  interpret(context) {
    if (context.input.length === 0) {
      return
    }
    if (context.startsWith(this.nine)) {
      this.calculate(9, this.nine);
    } else if (context.startsWith(this.four)) {
      this.calculate(4, this.four);
    } else if (context.startsWith(this.five)) {
      this.calculate(5, this.five);
    }
    while (context.startsWith(this.one)) {
      this.calculate(1, this.one);
    }
  }
  calculate(num, str) {
    context.output += (num * this.multiplier)
    context.input = context.input.substr(str.length)
  }
}


const interpreter = [
  new Expression('thousand', 'M', ' ', ' ', ' ', 1000),
  new Expression('hundred', 'C', 'CD', 'D', 'CM', 100),
  new Expression('ten', 'X', 'XL', 'L', 'XC', 10),
  new Expression('one', 'I', 'IV', 'V', 'IX', 1)
];

const roman = 'MCMXXVIII'
const context = new Context(roman)
interpreter.forEach(leaf => leaf.interpret(context))

console.log(`${roman} = ${context.output}`)
// MCMXXVIII = 1928
