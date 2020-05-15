const Tree = require('./constructor');
 /*
    - A balanced tree is a tree whereby the minHeight and maxHeight only differ by 1
    */
function isBalanced(){
    const minHeight = this.findMinHeight();
    const maxHeight = this.findMaxHeight();
    const result = minHeight >= maxHeight - 1;
    result ? 
        console.log(`This is tree is balanced with a max height of ${maxHeight} and min height of ${minHeight}`) 
        : console.log(`This is tree is unbalanced with a max height of ${maxHeight} and min height of ${minHeight}`);
    return result;
}
/*
- the most efficient way to balance a tree is to
   --traverse the tree in order and store the node values in an array (reuse printInOrder fn)
   --build a new tree: 
      ---start with the middle value of the array and make it root
      ---repeat the process recursively for left/right half of the remaining array
*/
function balanceTree(){
    if(this.isBalanced()){
        return null;
    } else {
        let sortedArr = this.printInOrder();
        let balancedTree = new Tree();
        //find middle value
        const buildTree = function(tree, arr){
            if(arr.length > 0){
                let middle;
                let leftArr;
                let rightArr;
                if(arr.length % 2 === 0){
                    middle   = arr[(arr.length / 2) - 1];
                    leftArr  = arr.slice(0, (arr.length / 2) - 1);
                    rightArr = arr.slice(arr.length / 2);
                    console.log(leftArr, rightArr)
                } else {
                    middle   = arr[Math.floor(arr.length / 2)];
                    leftArr  = arr.slice(0, Math.floor(arr.length / 2));
                    rightArr = arr.slice(Math.floor(arr.length / 2 + 1))
                    console.log(leftArr, rightArr);
                }
                tree.insert(middle);
                tree = buildTree(tree, leftArr);          
                tree = buildTree(tree, rightArr);
            }
            return tree;
        }
        let result = buildTree(balancedTree, sortedArr);
        return result;
    }
}
module.exports = {
    isBalanced,
    balanceTree
}