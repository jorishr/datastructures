/**
 * Linked-list implementation of a queue.
 */
class Node {
  constructor (val, pointer = null){
    this.val     = val
    this.pointer = pointer;
  }
}
class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  isEmpty(){
    if(!this.head){
      return true;
    } else return false;
  }
  getHeadVal(){
    if(this.head){
      return this.head.val;
    } else return this;
  }
/*   getTail(){
    if(!this.head){
      return this;
    } else {
      let current = this.head;
      while(current.pointer){      
        current = current.pointer;
      }
      return current;
    }
  } */
  getTail(){
    if(!this.head){
      return this;
    } else {
      return this.tail;
    }
  }
/*   enqueue(val){
    if(!this.head){
      this.head = new Node(val);
    } else {
      let tail     = this.getTail();
      const node   = new Node(val);
      tail.pointer = node;
    }
  } */
  enqueue(val){
    const node = new Node(val);
    if(!this.head){
      this.head = node
      this.tail = node;
    } else if(this.head === this.tail){
      this.head.pointer = node;
      this.tail = node;
    } else {
      this.tail.pointer = node;
      this.tail = node;
    }
  }
  dequeue(val){
    if(this.head){
      let el = this.head;
      if(!this.head.pointer){
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.pointer;
      }
      console.log(`Element: ${el.val}, removed from the queue`);
    } else {
      console.log('The queue is empty');
      return this;
    }
  }
  print(){
    if(!this.head){
      console.log('The queue is empty');
      return this
    } else {
      console.log('***START PRINTING QUEUE***');
      let current = this.head;
      while(current.pointer){
        console.log(current.val);
        current = current.pointer;
      }
      console.log(current.val);
      console.log('***DONE PRINTING QUEUE***');
      return this;
    }
  }
}

console.log('\n\n');
const myQueue = new Queue();
//console.log(myQueue.isEmpty());
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
//myQueue.enqueue('d');
console.log(myQueue.getHeadVal());
console.log(myQueue.getTail());
myQueue.print();
console.log(myQueue);
myQueue.dequeue();
myQueue.print();

myQueue.dequeue();
myQueue.print();

myQueue.dequeue();
myQueue.print();