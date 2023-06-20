class Click {
  constructor () {
    this.handlers = new Set();  // observers
  }
  subscribe (fn) {
    this.handlers.add(fn);
  }
  unsubscribe (fn) {
    this.handlers.delete(fn)
  }
  fire (str) {
    this.handlers.forEach(fn => fn(str))
  }
}

const clickHandler = (item) => console.log(`1 fired: ${item}`)
const clickHandler2 = (item) => console.log(`2 fired: ${item}`)

const click = new Click();

click.subscribe(clickHandler);
click.subscribe(clickHandler2);
click.fire('event #1');

click.unsubscribe(clickHandler);
click.fire('event #2');
