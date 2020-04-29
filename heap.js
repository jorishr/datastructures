class heap {
    constructor(){
        this.heapContainer = [];
    }
    isEmpty(){
        return !this.heapContainer.length;
    }
    print(){
        console.log(this.heapContainer);
    }
    getNodeValue(index){
        return this.heapContainer[index];
    }
    getRootValue(){
        return this.heapContainer.length === 0 ? null : this.heapContainer[0];
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
    moveUp(){
        //find last index
        let currentIndex = this.heapContainer.length - 1;
        //move up as long as currentVal < parentVal, update currentIndex for each iteration
        while(
            this.hasParent(currentIndex) &&
            this.getParentValue(currentIndex) > this.getNodeValue(currentIndex)
        ){
            let parentIndex = this.getParentIndex(currentIndex);
            currentIndex    = this.swap(parentIndex, currentIndex).newParentIndex;
        }
        return this;
    }
    swap(nodeIndex1, nodeIndex2){
        const tmp = this.heapContainer[nodeIndex2];
        this.heapContainer[nodeIndex2] = this.heapContainer[nodeIndex1];
        this.heapContainer[nodeIndex1] = tmp;
        return {'newParentIndex': nodeIndex1, 'newChildIndex': nodeIndex2}
    }
    moveDown(){
        //
    }
    search(value){
        //allow for duplicates
    }
    remove(){
        
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
console.log(myHeap.getRootValue());
console.log(myHeap.isEmpty());