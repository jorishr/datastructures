/*
#####
STACK
#####
- a stack is last-in-first-out and works nicely with the .push and .pop methods for array.
*/
class Stack {
    constructor(limit = 5){
        this.stack = [];
        this.limit = limit;
    }
    push(val){
        if(this.stack.length < this.limit){
            this.stack.push(val);
            console.log(`${val} added to the stack`);
            return val;
        } else {
            console.log('WARNING! Stack limit reached')
            return null;
        }
    }
    pop(){
        const result = this.stack.pop();
        console.log(`${result} popped from the stack`);
        return result;
    }
    clear(){
        let count = 0;
        let stackLength = this.stack.length;
        for(let i = 0; i < stackLength; i++){
            let result = this.stack.pop();
            console.log(`Popped ${result} from the stack`)
            count++;
        }
        console.log(`Stack cleared. ${count} elements removed from the stack`);
    }
    info(){
        console.log(`This stack has a limit of ${this.limit} and currently holds ${this.stack.length} stack frames`);
    }
    show(){
        if(this.stack.length > 0){
            console.log('##STACK##');
            for(let i = this.stack.length - 1; i >= 0; i--){
                console.log(this.stack[i]);
            }
            console.log('#########');
        } else {
            console.log('This stack is empty');
        }
    }
}

const myStack = new Stack();
myStack.info();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.show();
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.pop();
myStack.show();
myStack.clear();
myStack.show(); 