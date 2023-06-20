class Person {
  constructor () {}
}

const Singleton = (() => {
  let instance = null;

  return {
    getInstance () {
      if (!instance) {
        instance = new Person()
      }
      return instance
    }
  }
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
