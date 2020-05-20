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
const printInOrder     = require('./traversal').printInOrder;
const printPostOrder   = require('./traversal').printPostOrder;
const printPreOrder    = require('./traversal').printPreOrder;
const printLevelOrder  = require('./traversal').printLevelOrder;
const isPresent        = require('./search').isPresent;
const findNode        = require('./search').findNode;
const findMin          = require('./search').findMin;
const findMax          = require('./search').findMax;
const findMinHeight    = require('./height').findMinHeight;
const findMaxHeight    = require('./height').findMaxHeight;
const isBalanced       = require('./balance').isBalanced;
const balanceTree      = require('./balance').balanceTree;
const isBst            = require('./isBst').isBst;
const successor        = require('./successor').successor;
const predecessor      = require('./successor').predecessor;

Tree.prototype.insert         = insert;
Tree.prototype.remove         = remove;
Tree.prototype.printInOrder   = printInOrder;
Tree.prototype.printPostOrder = printPostOrder;
Tree.prototype.printPreOrder  = printPreOrder;
Tree.prototype.printLevelOrder= printLevelOrder;
Tree.prototype.findMax        = findMax;
Tree.prototype.findMin        = findMin;
Tree.prototype.isPresent      = isPresent;
Tree.prototype.findNode       = findNode;
Tree.prototype.findMinHeight  = findMinHeight;
Tree.prototype.findMaxHeight  = findMaxHeight;
Tree.prototype.isBalanced     = isBalanced;
Tree.prototype.balanceTree    = balanceTree;
Tree.prototype.isBst          = isBst;
Tree.prototype.successor      = successor;
Tree.prototype.predecessor    = predecessor;
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
console.log('Value 3 is present in the tree?', myTree.isPresent(3));
console.log('Value 10 is present in the tree?', myTree.isPresent(10));
console.log('Lowest value in the tree is:', myTree.findMin());
console.log('Highest value in the tree is:', myTree.findMax());
console.log(myTree.findNode(4));
console.log(myTree.findNode(6));
console.log(myTree.findNode(100));
console.log('successor of 2',myTree.successor(2));
console.log('successor of 1',myTree.successor(1));
console.log('successor of 4',myTree.successor(4));
console.log('successor of 5',myTree.successor(5));
console.log('successor of 6',myTree.successor(6));

console.log('\n\n')
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
console.log('Is Binary Search Tree?', myBst.isBst());

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

console.log('successor of 2',myBst.successor(2));
console.log('successor of 1',myBst.successor(1));
console.log('successor of 4',myBst.successor(4));
console.log('successor of 5',myBst.successor(5));
console.log('successor of 7',myBst.successor(7));
console.log('successor of 8',myBst.successor(8));
console.log('successor of 9',myBst.successor(9));
console.log('successor of 10',myBst.successor(10));
console.log('predecessor of 2',myBst.predecessor(2));
console.log('predecessor of 11',myBst.predecessor(11));
console.log('predecessor of 12',myBst.predecessor(12));
console.log('predecessor of 1',myBst.predecessor(1));
console.log('predecessor of 4',myBst.predecessor(4));
console.log('predecessor of 5',myBst.predecessor(5));
console.log('predecessor of 7',myBst.predecessor(7));
console.log('predecessor of 8',myBst.predecessor(8));
console.log('predecessor of 9',myBst.predecessor(9));
console.log('predecessor of 10',myBst.predecessor(10));
console.log('predecessor of 11',myBst.predecessor(11));
console.log('predecessor of 12',myBst.predecessor(12));
myBst.printInOrder();