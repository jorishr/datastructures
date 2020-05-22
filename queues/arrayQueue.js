 /*
A basic array-based implementation of a queue with the following Functionality:
push, remove, clear, get info about the queue, show entire queue, isEmpty?,
isFull?.
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