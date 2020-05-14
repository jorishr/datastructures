/*
#####
QUEUE
#####
A queue is first-in-first-out collection of data. Insertion and deletion of 
elements can only happens at one end of the collection. Insertion happens at
the end or tail of the collection, deletion happens at the front or head of 
the collection.

Time complexity of most operations is O(1) or constant time as only one element
is added or removed. 

Queues can be implemented in JS:
- A. with use of an array and the methods .push() and
.shift().
- B. with use of a circular array
- C. with use of a linked list

A. BASIC ARRAY IMPLEMENTATION OF A QUEUE
*/
class Queue {
    constructor(limit = 10){
      this.queue = [];
      this.limit = limit;
    }
    push(val){
        if(this.queue.length < this.limit){
            this.queue.push(val);
            console.log(`${val} added to the queue`);
        } else {
            console.log(`Queue limit (${this.limit} reached. Dequeue elements before adding new elements to the queue.)`)
            return this;
        }
    }
    remove(){
      const result = this.queue.shift();
      console.log(`${result} cleared from the queue`);
      return result;
    }
    clear(){
      let count = 0;
      let queueLength = this.queue.length;
      for(let i = 0; i < queueLength; i++){
        let deleteElem = this.queue.shift();
        console.log(`${deleteElem} removed from the queue`);
        count++;
      }
      console.log(`Queue cleared. ${count} elements removed from the queue`);
    }
    info(){
      console.log(`There are currently ${this.queue.length} elements in this queue. Queue limit is set at: ${this.limit}.`);
    }
    show(){
      if(this.queue.length){
        console.log('##QUEUE##');
        for(let i = 0; i < this.queue.length; i++){
          console.log(this.queue[i]);
        }
        console.log('#########'); 
      } else {
        console.log('This queue is empty');
      }
    }
    isEmpty(){
        if(this.queue.length){
            console.log('The queue is NOT empty');
            return false;
        } else {
            console.log('The queue is empty');
            return true;
        }
    }
    isFull(){
        if(this.queue.length === this.limit){
            console.log(`The queue is full. Limit: ${this.limit}`);
            return true;
        } else {
            console.log(`The queue is NOT full. Limit: ${this.limit}. Number of elements: ${this.queue.length}`);
            return false;
        }
    }
  }
  
  const myQueue = new Queue();
  myQueue.show();
  myQueue.info();
  myQueue.push('a');
  myQueue.push('b');
  myQueue.push('c');
  myQueue.show();
  myQueue.info();
  myQueue.isFull();
  myQueue.remove();
  myQueue.info();
  myQueue.clear();
  myQueue.isEmpty();
  myQueue.isFull();

  /**
   * B. CIRCULAR ARRAY IMPLEMENTATION OF A QUEUE
   * In the example above the queue is the array itself. We could however use 
   * the array as a shell with a fixed length and use markers to indicate the
   * start and end of the queue. 
   * 
   * Example: an array of length 5 whereby the queue starts at arr[2] and ends
   * at arr[0]. 
   * QUEUE:
   * push fn1 -> [undefined, undefined, fn1, undefined, undefined]
   * push fn2 -> [undefined, undefined, fn1, fn2, undefined]
   * push fn3 -> [undefined, undefined, fn1, fn2, fn3]
   * push fn4 -> [fn4, undefined, fn1, fn2, fn3]
   * push fn5 -> [fn4, fn5, fn1, fn2, fn3]
   * push fn6 -> QUEUE FULL
   * 
   * To implement a circular array the next index is not i + 1 but (i + 1) % n
   * while the previous index is not i - 1 but (i + n - 1) % n 
   */
class rQueue {
  constructor(limit){
    this.limit = limit;
    this.arr   = new Array(this.limit);
    this.head  = -1;
    this.tail  = -1;
  }
  isEmpty(){
    if(this.head === -1 && this.tail === -1){
      return true;
    } else {
      return false;
    }
  }
  isFull(){
    //if the next index position after the tail === head
    if((this.tail + 1) % this.limit === this.head){
      return true;
    } else return false;
  }
  getHead(){
    if(this.isEmpty()){
      return console.log('No head found. Queue is empty');
    } else {
      return this.arr[this.head];
    }
  }
  getTail(){
    if(this.isEmpty()){
      return console.log('No tail found. Queue is empty');
    } else {
      return this.arr[this.tail];
    }
  }
  enqueue(val){
    if(this.isEmpty()){
      let startIndex = Math.round(Math.random() * this.limit);
      this.head = startIndex;
      this.tail = startIndex;
      this.arr[startIndex] = val;
    } else {
      if(this.isFull()) {
        return console.log(`Queue full. Limit: ${this.limit}`);
      //rotational array
      } else {
        let nextIndex  = (this.tail + 1) % this.limit;
        this.arr[nextIndex] = val;
        this.tail = nextIndex;
      }
    }
  }
  dequeue(){
    if(this.isEmpty()) return console.log('The queue is empty');
    const element = arr[head];
    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      console.log(`Element: ${element} removed from the queue.`);
      return element;
    } else {
      arr[head] = null;
      this.head = (this.head + 1) % limit;
      console.log(`Element: ${element} removed from the queue.`);
      return element
    }
  }
  getSize(){
    let size;
    if(this.head === this.tail){
      console.log(`Number of elements in the queue: 1`);
      return 1;
    }
    else if(this.head < this.tail){
      size = this.tail - (this.head - 1);
      console.log(`Number of elements of the queue: ${size}`);
      return size;
    } else {
      size = (this.tail + 1) + (this.limit - this.head); 
      console.log(`Number of elements of the queue: ${size}`);
      return size;
    }
  }
  print(){
    if(!this.head){
      console.log(`Queue is empty`);
    } else if (this.head < this.tail) {
      for(let i = this.head; i < this.tail; i++){
        console.log(this.arr[i]);
      }
    } else {
      console.log('*****PRINTING QUEUE*****');
      for(let i = this.head; i < this.limit; i++){
        console.log(this.arr[i]);
      }
      for(let i = 0; i <= this.tail; i++){
        console.log(this.arr[i]);
      }      
      console.log('*****DONE PRINTING QUEUE');
    }
  }
}
console.log('\n\n');
const myRQueue = new rQueue(5);
myRQueue.enqueue('fn1');
myRQueue.enqueue('fn2');
myRQueue.enqueue('fn3');
myRQueue.enqueue('fn4');
myRQueue.enqueue('fn5');
myRQueue.print();
myRQueue.getSize();

console.log(myRQueue.getHead());
console.log(myRQueue.getTail());
console.log(myRQueue.isFull());

myRQueue.enqueue('fn6');
console.log(myRQueue);

/**
 * C. QUEUE IMPLEMENTATION WITH A LINKED LIST
 * The disadvantage of the array implementation is that allocated memory for
 * a fixed size array may remain unused. Also, once an array is full you either
 * deny new entries or have to copy the existing array into a new array which
 * has a time cost of O(n).
 * 
 * If we adhere to the strict time complexity requirements for a queue we have 
 * to modify the classical linked list by also storing the tail of list in 
 * addition to the head. By doing so we can avoid the linked list traversal to
 * find the last node, an operation that takes O(n). We want O(1).
 */
class Node {
  constructor (val, pointer = null){
    this.val     = val
    this.pointer = pointer;
  }
}
class llQueue {
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
const myLlQueue = new llQueue();
//console.log(myLlQueue.isEmpty());
myLlQueue.enqueue('a');
myLlQueue.enqueue('b');
myLlQueue.enqueue('c');
//myLlQueue.enqueue('d');
console.log(myLlQueue.getHeadVal());
console.log(myLlQueue.getTail());
myLlQueue.print();
console.log(myLlQueue);
myLlQueue.dequeue();
myLlQueue.print();

myLlQueue.dequeue();
myLlQueue.print();

myLlQueue.dequeue();
myLlQueue.print();