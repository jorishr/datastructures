/**
 * When traversing the BST tree in-order, what would be the next node to visit 
 * for any given node?
 * 
 * In-order: left subtree, root, right subtree
 *              3   
 *      1               5
 *  0       2       4       9
 *                       7     11
 * 
 * -> [0, 1, 2, 3, 4, 5, 7, 9, 11]  
 * 
 * As simple in-order traversal could be used whereby you simply traverse to 
 * the given node and return the next value but that approach has a time 
 * complexity of O(n). Let's aim for O(h) with h = tree height = log n, or 
 * O(log(n)) 
 * 
 * case 1: given node has a right subtree
 * The successor will be the left most node in the right subtree or the minumum
 * value in the right subtree.
 * 
 * case 2: given node has no right subtree 
 * Go to the nearest ancestor for which the given node would be in the left 
 * subtree, not the right subtree:
 * If you go up from a left tree, then we pick the direct parent
 * If you go up from a right tree, then we pick the grandparent    
 * 
 * Example
 *              15
 *      10
 *           12
 *        11
 * 
 * What is the successor of 12? Case: no right subtree. Nearest ancestor is 10 
 * but 12 is inside the right subtree of 10, thus go up one more level to 15 
 * for which 12 is in it's left subtree. -> [10, 11, 12, 15]
 * 
 * How do we traverse from a child to its parent or grandparent? You could add 
 * another field to each node and store a pointer to its parent. A valid 
 * approach that takes up memory space, however.
 * 
 * Alternatively, traverse the tree starting at root using binary search. On 
 * this traversal we pass all ancestors of a given node.
 * 
 * Thus:
 * - find the node in the tree
 * - if(node.right) -> find min
 * - else return the deepest node for which the given node is in the left
 * subtree
 * 
 * TIME COMPLEXITY EVALUATION
 * O(h) with h = height of the tree, thus O(log(n))
 */

function successor(value){
    let current = this.findNode(value);
    if(current === null) return null;
    if(current.right){
        //has a right subtree
        return this.findMin(current.right);
    } else {
        //no right subtree
        let successor = null;
        current = this.root;
        while(current){
            if(value < current.data){
                successor = current.data;
                current   = current.left;
            } else {
                current = current.right;
            }
        }
        return successor;
    }
}
//find predecessor: reverse logic
function predecessor(value){
    let current = this.findNode(value);
    if(current === null) return null;
    if(current.left){
        //has a left subtree
        return this.findMax(current.left);
    } else {
        //no left subtree
        let predecessor = null;
        current = this.root;
        while(current){
            if(value > current.data){
                predecessor = current.data;
                current     = current.right;
            } else {
                current = current.left;
            }
        }
        return predecessor;
    }
}
module.exports = {
    successor,
    predecessor
}