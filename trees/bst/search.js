//isPresent
function isPresent(data){
    if(this.root === null){
        console.log('This tree is empty.');
        return null;
    } else {
        let current = this.root;
        if(current.data === data) {
        console.log(`Node ${data} is present in the tree`);
        } else if(data < current.data){
            while(current.left && current.data !== data){
            current = current.left;
        }
        current.data === data ? console.log(`Node ${data} is present in the tree`) : console.log(`Node ${data} not found in the tree`);
        } else {
            while(current.right && current.data !== data){
            current = current.right;
            }
        current.data === data ? console.log(`Node ${data} is present in the tree`) : console.log(`Node ${data} not found in the tree`);  
        }
    }
}
//findMin: start at the root, the min value is on the left side of the tree at the node for which node.left is null
function findMin(){
    let current = this.root;
    while(current.left){
        current = current.left;
    }
    console.log(`The lowest value in the tree is ${current.data}`);
}
//findMax, starting at root, the max value is on the right side at the node where node.right is null
function findMax(){
    let current = this.root;
    while(current.right){
        current = current.right;
    }
    console.log(`The highest value in the tree is ${current.data}`);
}
module.exports = {
    isPresent,
    findMax,
    findMin
}