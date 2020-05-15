/*
##################
BINARY SEARCH TREE
##################
The Node Class constructor takes in the data and the left/right pointers that 
can store the left child node and right child node. See node.js

The tree is implemented through a linked list whereby only the head or root
element is being stored alongside the size of the tree.

Functionality is imported form partial js files and added to the prototype.
*/
module.exports = class Tree {
    constructor(){
        this.root = null;
        this.size = 0;
    }
}