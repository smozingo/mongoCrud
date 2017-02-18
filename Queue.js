/**
 * Created by smozingo on 2/17/17.
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  dequeue() {
    if (this.tail) {
      // save the node we're dequeuing
      let dqNode = this.tail;
      if (dqNode.prev) {
        dqNode.prev.next = null;
        this.tail = dqNode.prev;

        // clean up dqNode
        dqNode.prev = null;
      } else {
        this.head = null;
        this.tail = null;
      }

      return dqNode;
    }
  }
}

class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

const queue = new Queue();

for (let i = 1; i < 6; i++) {
  console.log(i);
  queue.enqueue(i);
}

console.log('queued', queue);

for (let i = 1; i < 6; i++) {
  let node = queue.dequeue();
  console.log(node.value);
}

console.log('dequeued', queue);