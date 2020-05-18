/* 
//isPresent (while loop version, see recursive version below)
function isPresent(data){
    if(this.root === null){
        console.log('This tree is empty.');
        return null;
    } else {
        let current = this.root;
        if(current.data === data) {
            //console.log(`Node ${data} is present in the tree`);
            return true;
        } else if(data < current.data){
            while(current.left && current.data !== data){
                current = current.left;
            }
            return current.data === data;
            //current.data === data ? console.log(`Node ${data} is present in the tree`) : console.log(`Node ${data} not found in the tree`);
        } else {
            while(current.right && current.data !== data){
                current = current.right;
            }
            return current.data === data;
            //current.data === data ? console.log(`Node ${data} is present in the tree`) : console.log(`Node ${data} not found in the tree`);  
        }
    }
}
 */
function isPresent(searchVal, current = this.root){
    //empty tree
    if(!current) return false;
    if(searchVal === current.data){
        return true;
    } else {
        if(searchVal < current.data){
            return isPresent(searchVal, current.left);
        } else {
            return isPresent(searchVal, current.right);
        }
    }
}
/*
findMin: start at the root, the min value is on the left side of the tree at 
the node for which node.left is null or undefined. You can use a while loop or
a recursive approach.

function findMin(){
    let current = this.root;
    while(current.left){
        current = current.left;
    }
    console.log(`The lowest value in the tree is ${current.data}`);
    return current.data;
} */
function findMin(current = this.root){
    if(current.left) {
        return findMin(current.left);
    } else return current.data;
}
/* 
findMax, starting at root, the max value is on the right side at the node where
node.right is null or undefined. You can use a while loop or a recursive 
approach.

function findMax(){
    let current = this.root;
    while(current.right){
        current = current.right;
    }
    console.log(`The highest value in the tree is ${current.data}`);
    return current.data;
}
*/
function findMax(current = this.root){
    if(current.right) {
        return findMax(current.right);
    } else return current.data;
}
module.exports = {
    isPresent,
    findMax,
    findMin
}