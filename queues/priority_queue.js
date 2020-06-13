/**
 * ###############
 * PRIORITY QUEUES
 * ###############
 * The regular queue is first-in-first-out. In a priority queue that remains
 * the basic order but each elements has an additional property, priority, that
 * will allows an element to be placed higher up or lower down in the queue.
 * 
 * Each element will consist of a value property (str, number, etc.) and a 
 * priority property (an integer from 0 to 5, for example).
 */
module.exports = class Queue {
    constructor(limit = 10){
      this.queue = [];
      this.limit = limit;
    }
    enqueue(val, priority = 0){
        if(this.isFull()){
            //console.log(`Queue limit (${this.limit} reached. Dequeue elements before adding new elements to the queue.)`)
            return null;
        } else {
            //empty queue
            if(this.isEmpty()){
                this.queue.push([val, priority]);
                return val;
            } 
            for(let i = 0; i < this.queue.length; i++){
                //priority > i, slice arr at i and insert
                if(priority > this.queue[i][1]){
                    const queueFront = this.queue.slice(0, i) 
                    const queueEnd   = this.queue.slice(i)
                    queueFront.push([val, priority]) 
                    this.queue = queueFront.concat(queueEnd);
                    return val;
                } else if(priority === this.queue[i][1]){
                    //find last element of same priority
                    let j = i + 1
                    while(this.queue[j] && this.queue[j][1] === priority){
                        j++
                    }
                    const queueFront = this.queue.slice(0, j) 
                    const queueEnd   = this.queue.slice(j)
                    queueFront.push([val, priority]) 
                    this.queue = queueFront.concat(queueEnd);
                    return val;
                } else if(i === this.queue.length -1){
                    this.queue.push([val, priority]);
                    return val;
                } 
            }
        }
    }
    dequeue(){
      const result = this.queue.shift();
      console.log(`${result} cleared from the queue`);
      return result;
    }
    clear(){
      //let count = 0;
      let queueLength = this.queue.length;
      for(let i = 0; i < queueLength; i++){
        let deleteElem = this.queue.shift();
        //console.log(`${deleteElem} removed from the queue`);
        //count++;
      }
      //console.log(`Queue cleared. ${count} elements removed from the queue`);
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
            //console.log('The queue is NOT empty');
            return false;
        } else {
            //console.log('The queue is empty');
            return true;
        }
    }
    isFull(){
        if(this.queue.length === this.limit){
            //console.log(`The queue is full. Limit: ${this.limit}`);
            return true;
        } else {
            //console.log(`The queue is NOT full. Limit: ${this.limit}. Number of elements: ${this.queue.length}`);
            return false;
        }
    }
} 