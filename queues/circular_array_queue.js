/**
 * Circular array based implementation of a queue
 * An array can be used as the queue itself but an array can also be used as a 
 * a shell with a fixed length. Markers are used to indicate the start and end 
 * of the queue that exists within the bounderies of the array.
 * 
 * Example: an array of length 5 whereby the queue starts at arr[2] and ends
 * at arr[0]. 
 * 
 * [{'a': 1}, undefined, {'c': 3}, {'d': 4}, {'e': 5}]
 *      0          1        2         3         4
 * --> end                start ---------------------
 *  queue[3]             queue[0]  queue[1]  queue[2] 
 *  
 * push fn1 -> [undefined, undefined, fn1, undefined, undefined]
 * push fn2 -> [undefined, undefined, fn1, fn2, undefined]
 * push fn3 -> [undefined, undefined, fn1, fn2, fn3]
 * push fn4 -> [fn4, undefined, fn1, fn2, fn3]
 * push fn5 -> [fn4, fn5, fn1, fn2, fn3]
 * push fn6 -> QUEUE FULL
 * 
 * Circular array concept:
 * To implement a circular array the next index is not i + 1 but (i + 1) % n
 * while the previous index is not i - 1 but (i + n - 1) % n 
 */
class Queue {
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
const myQueue = new Queue(5);
myQueue.enqueue('fn1');
myQueue.enqueue('fn2');
myQueue.enqueue('fn3');
myQueue.enqueue('fn4');
myQueue.enqueue('fn5');
myQueue.print();
myQueue.getSize();

console.log(myQueue.getHead());
console.log(myQueue.getTail());
console.log(myQueue.isFull());

myQueue.enqueue('fn6');
console.log(myQueue);