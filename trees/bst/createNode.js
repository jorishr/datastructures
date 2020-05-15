/**
 * The Node Class constructor takes in the data and the left/right pointers that 
 * can store the left child node and right child node.
 */
module.exports = class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}