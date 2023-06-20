class Stack {
  #arr = []

  constructor() {
    this.#arr = []
  }

  getBuffer() {
    return this.#arr.slice();
  }

  isEmpty() {
    return this.#arr.length === 0;
  }

  push(item) {
    this.#arr.push(item);
  }

  pop() {
    return this.#arr.pop();
  }

  peek() {
    return this.#arr[this.#arr.length - 1];
  }
}
