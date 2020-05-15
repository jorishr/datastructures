/*
###################################
STACK IMPLEMENTATIONS IN JAVASCRIPT
I.  ARRAY METHOD
II. LINKED LIST METHOD
###################################

#######################
I.  STACK: Array method
#######################
A stack is last-in-first-out and works nicely with the .push and .pop methods for array.
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

/*
#############################
II. STACK: Linked List method
#############################
There are two options: 
- add/remove at the beginning of the list, time complexity of O(1)
- add/remove at the end of the list, time complexity of O(n)
The choice is obvious.
*/
class Node {
    constructor(data, pointer = null){
        this.data = data;
        this.pointer = pointer;
    }
}

class ListStack {
    constructor(){
        this.head = null;
        this.size = 0;
        //implement limit
        this.limit = 5;
    }
    //push or prepend a value to the stack: create node; set this.head
    push(val){
        if(this.size < this.limit){
            const newNode = new Node(val, this.head);
            this.head     = newNode;
            this.size++
            console.log(`${newNode.data} added to the top of the stack`);
        } else {
            console.log(`Stack is full. Stack limit: ${this.limit}`);
        }
    }
    //pop: remove the head of the list by setting its value to this.head.pointer
    pop(){
        const currentHeadVal = this.head.data;
        const newHead = this.head.pointer;
        this.head     = newHead; 
        this.size--
        console.log(`Popped ${currentHeadVal} from the top of the stack. Stack size: ${this.size}, stack limit: ${this.limit}`);
    }
    info(){
        if(this.size === 0){
            console.log(`This stack is empty`);
        } else {
            console.log(`The stack currently holds ${this.size} elements. Stack limit is: ${this.limit}`);
        }
    }
    clear(){
        this.head = null;
        this.size = 0;
        console.log(`Stack cleared. ${this.size} elements on the stack`);
    }
    print(){
        if(this.size === 0){
            console.log('This stack is empty');
        } else {
            let current = this.head;
            console.log('---Start printing stack elements---');
            while(current.pointer){
                console.log(current.data);
                current = current.pointer;
            }
            console.log(current.data);
            console.log('---Done printing stack elements---');
        }
    }
}

const myListStack = new ListStack();
console.log('\n\n', myListStack);
myListStack.push(5);
myListStack.push(10);
myListStack.push(50);
myListStack.push(100);
myListStack.push(500);
myListStack.push(1000);
myListStack.info();
myListStack.print();
myListStack.pop();
myListStack.clear();