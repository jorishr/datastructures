/*
#####################################
LINKED LIST JAVASCRIPT IMPLEMENTATION
#########################################
1.  A BASIC LINKED LIST CONCEPT
2.  FULL LINKED LIST CLASS IMPLEMENTATION
#########################################

###############################
1.  A BASIC LINKED LIST CONCEPT
###############################
The most basic implimentation would be through an object with a method .next 
that works as a pointer or reference to the next object.
*/
const n1 = {
    data: 100
}
  
const n2 = {
    data: 200
}

const n3 = {
    data: 300
}
  
n1.next = n2;
n2.next = n3;
console.log('---Basic Linked List---');
console.log('List head:', n1);
console.log('Second node:', n1.next);
console.log('Third node:', n2.next);
/*
#####################
2.  LINKED LIST CLASS
#####################
In order to create, modify and navigate the linked list, use two classes:
- a node class to create node instances
- a linked list class to link the seperate nodes
*/
class Node {
    constructor(data, pointer = null){
        this.data = data;
        this.next = pointer;
    }
}
  
const node1 = new Node(100);
//console.log(node1);
  
/*  
 *  LINKED LIST CLASS METHODS INDEX
 *  - PREPEND
 *  - APPEND
 *  - INSERT AT INDEX
 *  - GET DATA AT INDEX
 *  - REMOVE NODE AT INDEX
 *  - REMOVE LAST NODE
 *  - CLEAR LIST
 *  - PRINT LIST
 *  - PRINT NTH INDEX FROM END OF LIST
 */
class LinkedList {
    //The linkedlist is empty by default, thus no head and size 0
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //I.  PREPEND: insert (new) node as head of the list 
    prepend(data){
        //pointer = this.head, if not null, new node points to the previous head
        this.head = new Node(data, this.head);
        this.size++;
    }
    //II. APPEND: set the pointer of the last existing node to the new node
    append(data){
        //as last element in the list, pointer should be null
        const newNode = new Node(data, null); 
        if(!this.head){
            //account for the possibility that the list is empty
            this.head = newNode;  
        } else {
            //if list is not empty find last value by looping through existing nodes
            let currentNode = this.head; 
            while(currentNode.next){
                currentNode = currentNode.next;
            }
        currentNode.next = newNode;   
        }      
        this.size ++;
    }
    //III.  Insert node at index[x]
    insertAt(data, index){
        //two edge cases: if index does not exist and if index is 0
        if(index > this.size){
            console.log(`Index position out of range. Max size is ${this.size}`);
            return;
        }
        if(index === 0){
            //re-use exisiting function, then return
            this.prepend(data); 
            return;
        }
        //to insert at index, loop through node list and track where we are
        //once the index position is found that node becomes the pointer of the newNode
        //the previous node should have its pointer value set to newNode
        const newNode   = new Node(data);
        let currentNode = this.head;
        let previous;
        let count = 0;
        while(count < index){
            previous    = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        //the loop will stop at index - 1, where we have access to the previous and next values
        newNode.next  = currentNode;
        previous.next = newNode;
        console.log(`Value: ${data} inserted at index: ${index}`);
    }
    //IV: Get node at index[x]
    getAt(index){
        if(index > this.size || index < 0){
            console.log(`Index position out of range. Use a number between 0 and ${this.size}`);
            return;
        }
        let currentNode = this.head;
        let count = 0;
        while(count !== index){
            currentNode = currentNode.next;
            count++;
        }
        console.log(currentNode.data);
    }
    //V: Remove at index[x]
    removeAt(index){
        if(index > this.size || index < 0){
            console.log(`Index position out of range. Use a number between 0 and ${this.size}`);
            return;
        }
        let previous;
        let currentNode = this.head;
        let count = 0;
        if(index === 0){
            this.head = currentNode.next;
        } else {
            while(count < index){
                previous = currentNode;
                currentNode = currentNode.next;
                count++;
            }
            previous.next = currentNode.next; 
        }
        this.size--;
        console.log(`Value at index: ${index} removed from the list`);
    }
    //VI. Remove last node: set the pointer at second to last node to null
    removeLast(){
        let currentNode = this.head;
        let previous;
        while(currentNode.next){
            previous    = currentNode;
            currentNode = currentNode.next;
        }
        previous.next = null;
        console.log(`Removed last item: ${currentNode.data}, from the list.`);
    }
    //VII:  Clear list
    clearList(){
        this.head = null;
        this.size = 0;
        console.log('List cleared');
    }
    //VIII: Print list data
    printListValues(){
        if(this.size === 0){
            console.log('The list is empty.')
        } else {
            let currentNode = this.head;
            console.log('---Start printing list values---');
            while(currentNode){
                console.log(currentNode.data)
                currentNode = currentNode.next;
            }
            console.log('---Done printing list values---');
        }
    }
    //VIII: Print nth node from the end
    printNthFromEnd(val){
        let result;
        let currentNode = this.head;
        let nodesArr    = [this.head.data]; 
        while(currentNode.next){
            nodesArr.push(currentNode.next.data);
            currentNode = currentNode.next;
        }
        if(val <= 0 || val >= nodesArr.length){
            console.log(`The given value is out of range. Use a value between 1 and ${nodesArr.length - 1}`);
            return null;
        }
        console.log('Nodes:', nodesArr);
        result = nodesArr[nodesArr.length - val]; 
        console.log(`The ${val}nth value from the end of the list is ${result}`);
        return result; 
    }
    //IX. Reverse the linked-list: reverse the pointers
    reverseList(){
        //iterative approach: loop through the nodes, store next and previous
        //adjust pointers, loop ends at last node, set to this.head and ajust pointer
        let currentNode = this.head;
        let next;
        let previous = null;
        while(currentNode.next){
            next        = currentNode.next;
            currentNode.next = previous;
            previous    = currentNode;
            currentNode = next;
        }
        this.head = currentNode;
        this.head.next = previous;
        console.log('---List reversal completed---')
        this.printListValues();
        return this;
    }
}
  
const newList = new LinkedList();
newList.prepend(100);
newList.prepend(200); 
newList.append(300);
console.log('---My List---\n', newList);
newList.printListValues();

newList.insertAt(150, 2);
newList.printListValues();

newList.printNthFromEnd(0);
newList.printNthFromEnd(1);
newList.printNthFromEnd(2);
newList.printNthFromEnd(20);
newList.printNthFromEnd(-3);
/*
newList.getAt(3);
newList.getAt(0);
newList.getAt(6);
newList.getAt(-1);
*/
newList.reverseList();

newList.removeAt(3);
newList.printListValues();

newList.removeLast();
newList.printListValues();

newList.clearList();
newList.printListValues();