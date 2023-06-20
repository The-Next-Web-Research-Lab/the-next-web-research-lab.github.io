class Employee {
  constructor (name) {
    this.name = name;
  }
  say () {
    console.log(`I am employee ${this.name}`);
  }
}

class EmployeeFactory {
  constructor () {}
  create (name) {
    return new Employee(name);
  }
}

const persons = [];
const employeeFactory = new EmployeeFactory();

persons.push(employeeFactory.create('Joan DiSilva'));
persons.push(employeeFactory.create('Tim O\'Neill'));

persons.forEach(person => person.say())
