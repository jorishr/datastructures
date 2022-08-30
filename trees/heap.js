class heap {
    constructor(){
        this.heapContainer = [];
    }
    isEmpty(){
        return !this.getSize();
    }
    print(){
        console.log(this.heapContainer);
    }
    getSize(){
        return this.heapContainer.length;
    }
    getNodeValue(index){
        return this.heapContainer[index];
    }
    getRootValue(){
        return this.getSize === 0 ? null : this.heapContainer[0];
    }
    getParentIndex(childIndex){
        return Math.floor(childIndex - 1 / 2);
    }
    getParentValue(childIndex){
        return this.heapContainer[this.getParentIndex(childIndex)];
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0;
    }
    hasLeftChild(parentIndex){
        //length: 4, hasLeftChild(0); 0 * 2 + 1 = 1 < 4, hasLeftChild(1): 1 * 2 + 1 = 3 < 4  
        return this.getLeftChildIndex(parentIndex) < this.getSize();
    }
    hasRightChild(parentIndex){
        //length: 4, hasRightChild(0); 0 * 2 + 2 = 2 < 4, hasRightChild(1): 1 * 2 + 2 =  4 = 4  
        return this.getRightChildIndex(parentIndex) < this.getSize();
    }
    getLeftChildIndex(parentIndex){
        return (parentIndex * 2) + 1; 
    }
    getLeftChildValue(parentIndex){
        return this.getNodeValue(this.getLeftChildIndex(parentIndex)); 
    }
    getRightChildIndex(parentIndex){
        return (parentIndex * 2) + 2; 
    }
    getRightChildValue(parentIndex){
        return this.getNodeValue(this.getRightChildIndex(parentIndex));
    }
    insert(num){
        //add to heap, then move up untill parent < num
        this.heapContainer.push(num);
        this.moveUp();
        return this;
    }
    moveUp(startIndex){
        //find last index
        let currentIndex = startIndex || this.getSize() - 1;
        //move up as long as currentVal < parentVal, update currentIndex for each iteration
        while(
            this.hasParent(currentIndex) &&
            this.getParentValue(currentIndex) > this.getNodeValue(currentIndex)
        ){
            let parentIndex = this.getParentIndex(currentIndex);
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
        }
        return this;
    }
    swap(nodeIndex1, nodeIndex2){
        const tmp = this.heapContainer[nodeIndex2];
        this.heapContainer[nodeIndex2] = this.heapContainer[nodeIndex1];
        this.heapContainer[nodeIndex1] = tmp;
        return this;
    }
    moveDown(startIndex = 0){
        //start at given index or root node
        let currentIndex = startIndex;
        //compare that value to the childnodes, swap places with the smallest child
        //if there is no leftChild, there certainly is no right child (note index order)
        while(this.hasLeftChild(currentIndex)){
            let smallestChildIndex = this.getLeftChildIndex(currentIndex);
            if(
                this.hasRightChild(currentIndex) && 
                this.getRightChildValue(currentIndex) < this.getNodeValue(smallestChildIndex)
            ){
                smallestChildIndex = this.getRightChildIndex(currentIndex);
            }
            if(this.heapContainer[smallestChildIndex] < this.heapContainer[currentIndex]){
                this.swap(smallestChildIndex, currentIndex)
                currentIndex = smallestChildIndex;
            } else {
                return this;
            }
        }
    }
    search(seekValue){
        //allow for duplicates, so use an array
        //brute force method of O(n), since there is no guaranteed order in the array
        let indices = [];
        for(let i = 0; i < this.getSize(); i++){
            if(this.getNodeValue(i) === seekValue){
                indices.push(i);
            }
        }
        return indices;
    }
    poll(){
        //poll method extracts the smallest value from the heap
        //remove the smallest node (root) by setting its value to the last node value
        //pop() the last node from the array
        //moveDown() the new root to its correct place
        //return the removed value
        const smallestValue   = this.getRootValue();
        this.heapContainer[0] = this.heapContainer[this.getSize() - 1];
        this.moveDown();
        this.heapContainer.pop();
        return smallestValue;
    }
    remove(removeValue){
        //use search function to find the index of the removeValue, there may be duplicates!
        //the result is an array, loop over it and on each iteration remove one index
        //removel process: see poll()
        //if index is last index in heap, delete without further action
        //additional complexity other indices: you may have to moveUp or moveDown the replacement node
        let indices = this.search(removeValue);
        let removedValue;
        for(let i = 0; i < indices.length; i++){
            //the search needs to be repeated in every loop because indices are rearranged
            //use .pop() to return the last index or use [0]
            let indexToRemove = this.search(removeValue).pop();
            let lastHeapIndex = this.getSize() - 1;
            let lastHeapValue = this.getNodeValue(this.getSize() - 1);
            if(indexToRemove === lastHeapIndex){
                this.heapContainer.pop();
                removedValue = lastHeapValue;
            } else {
                removedValue = this.heapContainer[indexToRemove];
                this.heapContainer[indexToRemove] = this.getNodeValue(lastHeapIndex);
                this.heapContainer.pop(); 
                //compare to parentValue
                let currentIndex = indexToRemove; 
                let hasParent    = this.hasParent(currentIndex);
                if(hasParent){
                    this.moveUp(currentIndex);
                }
                if(this.hasLeftChild){
                    this.moveDown(currentIndex);
                }
            }
        }
        return removedValue;
    }
}

const myHeap = new heap();
myHeap.insert(5);
console.log(myHeap);
myHeap.insert(4);
console.log(myHeap);
myHeap.insert(2);
console.log(myHeap);
myHeap.insert(3);
console.log(myHeap);
myHeap.insert(8);
console.log(myHeap);
myHeap.insert(3);
console.log(myHeap);
myHeap.print();

console.log('Heap Root Value:', myHeap.getRootValue());
console.log('This heap is empty?', myHeap.isEmpty());

myHeap.heapContainer[0] = 10;
console.log('Heap with new root value:', myHeap);
myHeap.moveDown();
console.log('New root value moved down into place:', myHeap);

console.log('Poll the heap. Removed:', myHeap.poll());
myHeap.print();

console.log('Find index of value 8:', myHeap.search(8));
console.log('Find index of value 5:', myHeap.search(5));

myHeap.insert(3);
myHeap.insert(11);
myHeap.insert(15);
console.log('Three new value added: 3, 11, 15\n', myHeap);

console.log('Removed last value in the heap:', myHeap.remove(15));
myHeap.print();

console.log('Removed value:', myHeap.remove(4));
myHeap.print();

console.log('Removed value:', myHeap.remove(10));
myHeap.print();

console.log('Removed value:', myHeap.remove(3));
myHeap.print();