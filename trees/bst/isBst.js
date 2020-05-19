/**
 * Is the binary tree a binary SEARCH tree?
 * 
 * A binary tree is a tree whereby each node has at most two children.
 * 
 * A binary search tree is a binary tree in which for each node the left 
 * subtree values are smaller than the parent node and the right 
 * subtree values are greater.
 * 
 * Thus each node will with children will be a bst as well.
 * 
 * We can write a function with four conditions: 
 * - all lefSubtree values < parent 
 * - all rightSubtree values > parent
 * - repeat recursively for all left children
 * - repeat recursively for all right children 
 * Example: 
 *                 7
 *          4              9
 *      1       6                  
 *  
 * isBst(7)
 *  -> leftSubTree(4, 7)
 *  -> rightSubTree(9, 7)
 *  -> isBst(4) -> returns true
 *      -> leftSubTree(1, 4)
 *      -> rightSubTree(6, 7)
 *      -> isBst(null) -> returns true 
 *      -> isBst(null) -> returns true
 *  -> isBst(9) = true
 *      -> leftSubTree(null, 9)
 *      -> rightSubTree(null, 9)
 *      -> isBst(null) -> returns true
 *      -> isBst(null) -> returns true
 * All four conditions are true -> fn returns true, tree is a bst
 * 
 * lefSubTree and rightSubTree helper functions compare the nodevalue of the 
 * child with the parent value and traverses down the subtree to do the same
 * for all grandchildren left and right.
 */
function isBst_1(current = this.root){
    if(!current) return true;
    if(
        leftSubTreeIsLesser(current.left, current.data)
        && rightSubTreeIsGreater(current.right, current.data)
        && isBst(current.left)
        && isBst(current.right)
    ){
        return true;
    } else return false;
    function leftSubTreeIsLesser(node, compareVal){
        if(node === null) return true;
        if(node.data < compareVal
            && leftSubTreeIsLesser(node.left, compareVal)
            && leftSubTreeIsLesser(node.right, compareVal)){
            return true
        } else return false;
    }
    function rightSubTreeIsGreater(node, compareVal){
        if(node === null) return true;
        if(node.data > compareVal
            && rightSubTreeIsGreater(node.left, compareVal)
            && rightSubTreeIsGreater(node.right, compareVal)){
            return true
        } else return false;
    }
}
/**
 * This approach is not very efficient. For each node, we compare its value to
 * all of it subtrees. For node 7 (root) we compare all subtree starting at 4, 
 * then for node 4 we do the same check for the subtrees 1 and 6 that were
 * already traversed comparing to node 7. 
 * 
 * Time complexity will approach O(n^2)
 * 
 * A better solution looks at each node only once.
 * 
 * The expensive part of the previous solution were the helper functions. They 
 * can be replaced by a range with an lower limit and upper limit. 
 * 
 * The root value is going to be between -Infinity and Infinity but in order to
 * comply with the conditions for a BST the left child needs to be lesser than 
 * the root node, thus between -Infinity and root value. For the right child 
 * the value needs to be bigger, thus with lower limit of root and Infinity,
 * 
 * This process can be repeated for all child nodes in the tree whereby the 
 * upper limit changes for the left child nodes. For right nodes the lower 
 * limit is adjusted on each recursive call.
 * 
 * isBst(7)
 *  -> 7 > -Infinity
 *  -> 7 < Infinity
 *  -> isBst(4, -Infinity, 7)
 *      -> 4 > -Infinity
 *      -> 4 < 7 
 *      -> isBst(1, -Infinity, 4)
 *          -> 1 > -Infinity
 *          -> 1 < 4
 *          -> isBst(null, -Infinity, 1) -> returns true
 *          -> isBst(null, 1, 4) -> returns true
 *      -> isBst(6, 4, 7)
 *          -> 6 > 4
 *          -> 6 < 7
 *          -> isBst(null, -Infinity, 6) -> returns true
 *          -> isBst(null, 6, 7) -> returns true
 *  -> isBst(9, 7, Infinity)
 *          -> 9 > 7
 *          -> 9 < Infinity
 *          -> isBst(null, -Infinity, 1) -> returns true
 *          -> isBst(null, 9, Infinity) -> returns true
 * All conditions are true -> return true, tree is BST 
 * 
 * You can replace -Infinty with Number.MIN_SAFE_INTEGER
 * You can replace Infinty with Number.MAX_SAFE_INTEGER
 * 
 * TIME COMPLEXITY EVALUATION
 * We visit each node only once, thus O(n)
 */

function isBst(current = this.root, minValue = Number.MIN_SAFE_INTEGER, maxValue = Number.MAX_SAFE_INTEGER){
    if(!current) return true;
    if(current.data > minValue
        && current.data < maxValue 
        && isBst(current.left, minValue, current.data)
        && isBst(current.right, current.data, maxValue)
    ){
        return true;
    } else return false;
}
/**
 * There is a third posible solution using the in-order traversal function. 
 * Track the traversal and if the elements appear in ascending order, the tree
 * is a BST.
 */
function isBst_2(){
    let arr = this.printInOrder();
    let prev = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if(arr[i] < prev) return false; 
        prev = arr[i];
    }
    return true;
}

module.exports = {
    isBst
}