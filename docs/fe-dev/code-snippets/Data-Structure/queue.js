class Queue {
  constructor() {
    this.arr = []
  }

  getBuffer() {
    return this.arr.slice();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  enqueue(item) {
    this.arr.push(item);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    return this.arr[0];
  }
}
