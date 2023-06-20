class Person {
  private constructor () {}
  private static instance: Person
  static create() {
    if (!this.instance) {
      this.instance = new Person()
    }
    return this.instance;
  }
}

const instance1 = Person.create();
const instance2 = Person.create();

console.log(instance1 === instance2); // true
