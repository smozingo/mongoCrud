function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.push = function(value) {
  if(!this.head) this.head = this.tail = new Node(value);
  let current = this.head;
  while(current.next !== null) {
    current = current.next
  }
  current.next = new Node(value);
};

LinkedList.prototype.contains = function(value) {

}

LinkedList.prototype.insert = function(value, position) {
}

LinkedList.prototype.remove = function(value) {
  let current = this.head;
  let previous;
  while(current.next !== null) {
    previous = current;
    if(current.value === value) {


    }
    current = current.next;
  }



};