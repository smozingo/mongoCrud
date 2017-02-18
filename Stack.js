/**
 * Created by smozingo on 2/17/17.
 */

class Stack {
  // create a stack using a linked list
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    // create the new node
    const node = new Node(value);

    // if it's our first node, create the list and set head & tail
    if (!this.tail) {
      this.tail = node;
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  pop() {
    if (this.head) {
      // save the top node so we can return it
      let poppedNode = this.head;
      if (poppedNode.next) {
        // set the next node as the new head
        poppedNode.next.prev = null;
        this.head = poppedNode.next;
        // clean up poppedNode
        poppedNode.next = null;
      } else {
        // we're at the bottom and the list is empty
        this.head = null;
        this.tail = null;
      }

      return poppedNode;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const stack = new Stack();

for (let i = 1; i < 6; i++) {
  console.log(i);
  stack.push(i);
}

console.log('pushed', stack);

for (let i = 1; i < 6; i++) {
  let node = stack.pop();
  console.log(node.value);
}

console.log('popped', stack);
