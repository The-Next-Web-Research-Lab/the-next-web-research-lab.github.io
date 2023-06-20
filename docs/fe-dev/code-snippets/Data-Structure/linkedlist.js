class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  insert(data) {
    const newNode = new LinkedListNode(data);
    if (this.head !== null) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.size++;
  }

  remove(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      let currentHead = this.head.next;
      while (currentHead) {
        if (currentHead.data === data) {
          prev.next = currentHead.next;
          this.size--;
          break;
        } else {
          prev = currentHead;
          currentHead = currentHead.next;
        }
      }
    }
  }

  deleteHead() {
    if (this.head === null) {
      return null
    } else {
      const deletedHead = this.head;
      this.head = this.head.next;
      this.size--;
      return deletedHead;
    }
  }

  find(data) {
    let currentHead = this.head;

    while(currentHead) {
      if (currentHead.data === data) {
        return true;
      }
      currentHead = currentHead.next;
    }
    return false;
  }
}
