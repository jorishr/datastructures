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
const Tree             = require('./constructor');
const insert           = require('./insert');
const remove           = require('./remove');
const printInOrder     = require('./print').printInOrder;
const printPostOrder   = require('./print').printPostOrder;
const printPreOrder    = require('./print').printPreOrder;
const printLevelOrder  = require('./print').printLevelOrder;
const isPresent        = require('./search').isPresent;
const findMin          = require('./search').findMin;
const findMax          = require('./search').findMax;
const findMinHeight    = require('./height').findMinHeight;
const findMaxHeight    = require('./height').findMaxHeight;
const isBalanced       = require('./balance').isBalanced;
const balanceTree      = require('./balance').balanceTree;

Tree.prototype.insert         = insert;
Tree.prototype.remove         = remove;
Tree.prototype.printInOrder   = printInOrder;
Tree.prototype.printPostOrder = printPostOrder;
Tree.prototype.printPreOrder  = printPreOrder;
Tree.prototype.printLevelOrder= printLevelOrder;
Tree.prototype.findMax        = findMax;
Tree.prototype.findMin        = findMin;
Tree.prototype.isPresent      = isPresent;
Tree.prototype.findMinHeight  = findMinHeight;
Tree.prototype.findMaxHeight  = findMaxHeight;
Tree.prototype.isBalanced     = isBalanced;
Tree.prototype.balanceTree    = balanceTree;
/*
myTree
            3
        1       5
    0   2   4   6      
*/
const myTree = new Tree();
console.log(myTree);
myTree.insert(3);
console.log(myTree);
myTree.printInOrder();
myTree.insert(3);
console.log(myTree);
myTree.insert(1);
console.log(myTree);
myTree.printInOrder();
myTree.insert(2);
console.log(myTree);
myTree.printInOrder();
myTree.insert(0);
console.log(myTree);
myTree.insert(5);
console.log(myTree);
myTree.insert(4);
console.log(myTree);
myTree.insert(6);
console.log(myTree);
myTree.printInOrder();
myTree.printPreOrder();
myTree.printPostOrder();
console.log(myTree.isPresent(3));
console.log(myTree.isPresent(10));
myTree.findMin();
myTree.findMax();

//Test trees for node removal
const oneNodeTree = new Tree();
oneNodeTree.insert(5);
oneNodeTree.printInOrder();
oneNodeTree.remove(5);

const leftOnlyTree1 = new Tree();
leftOnlyTree1.insert(5);
leftOnlyTree1.insert(3);
leftOnlyTree1.printInOrder();
leftOnlyTree1.remove(3);
leftOnlyTree1.printInOrder();

const leftOnlyTree2 = new Tree();
leftOnlyTree2.insert(5);
leftOnlyTree2.insert(3);
leftOnlyTree2.insert(2);
leftOnlyTree2.printInOrder();
leftOnlyTree2.remove(3);
leftOnlyTree2.printInOrder();

const rightSideTree1 = new Tree();
rightSideTree1.insert(5);
rightSideTree1.insert(6);
rightSideTree1.printInOrder();
console.log(rightSideTree1);
rightSideTree1.remove(5);
rightSideTree1.printInOrder();

const rightSideTree2 = new Tree();
rightSideTree2.insert(5);
rightSideTree2.insert(6);
rightSideTree2.printInOrder();
console.log(rightSideTree2);
rightSideTree2.remove(5);
rightSideTree2.printInOrder();

/*
Remove a node with left AND right child nodes.
Example:
                        3
                1                 5
            0    2          4         9
                                    7      11
                                6   8  10  12  

- remove(5) -> this.root = removeNode(3, 5)
- data(5) > node.data(3)
-> recursive fn call removeNode(node.right(5), 5)
-> return node, thus this.root = 3; and keep its original value
- removeNode(5,5) with data(5) === node.data(5)
- three options (one child left, one child right, two children)
- two children found: use a tempNode variable to store the smallest value in the lower levels of the tree while traversing down the left side with a while loop
- the current node (node.data(5)) will not be removed but its value is replaced by the smallest node found in the remaining lower levels of the tree, in this example 6.
- this means that the original node.left and node.right values remain unchanged. This is ok for the node.left, in this example 4. 
- on the node.right however we now have a duplicate value that needs to be removed, in this example 6.
- fix the tree below node.right with a recursive call once more starting at node.right(9) removeNode(node.right(9), 6);
- see logs to see what happens in each step
*/
const myBst = new Tree();
myBst.insert(3);
myBst.insert(1);
myBst.insert(0);
myBst.insert(2);
myBst.insert(5);
myBst.insert(4);
myBst.insert(9);
myBst.insert(11);
myBst.insert(7);
myBst.insert(6);
myBst.insert(8);
myBst.insert(10);
myBst.insert(12);
myBst.printInOrder();
myBst.remove(5);
myBst.printInOrder();
myBst.printLevelOrder();
console.log(myBst.isPresent(1));
console.log(myBst.isPresent(12));
console.log(myBst.isPresent(9));
console.log(myBst.isPresent(5));
console.log(myBst.isPresent(50));

//Tree height and balance
console.log(`This tree has a min height of ${myBst.findMinHeight()}`);
console.log(`This tree has a max height of ${myBst.findMaxHeight()}`);
myBst.isBalanced();

//balance an unbalanced tree
let balancedTree = myBst.balanceTree();
console.log(balancedTree);
balancedTree.printLevelOrder();
balancedTree.isBalanced();

const testTree = new Tree();
testTree.printInOrder();
testTree.insert(1);
testTree.insert(2);
testTree.insert(3);
testTree.isBalanced();

const balancedTestTree = testTree.balanceTree();
balancedTestTree.isBalanced();
balancedTestTree.printLevelOrder();

console.log(testTree.isPresent(1))
console.log(testTree.isPresent(3))
console.log(testTree.isPresent(4))