/*
###########
BINARY TREE
###########
- the Node class constructor takes in the data and the left/right properties that point to the left node and right node.
*/
class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
  /*
  - adding values to a tree is a recursive process whereby you traverse the tree on the left if new data < root/parent node and on the right if new data > root/parent node
  - if their is a root/parent node you insert the new value on the left/right if this.left/right is null, if it already has a value, you need to repeat the process.
  -track the size with a variable
  */
class Tree {
    constructor(){
        this.root = null;
        this.size = 0;
    }
    insert(data){
        let node = this.root;
        let size = this.size;
        if(!this.root){
            this.root = new Node(data);
            this.size++;      
            console.log(`Node ${data} added to the tree as root node.`);
        } else {
            const searchTree = function(node){
                if(data < node.data){
                    if(!node.left){
                        node.left = new Node(data);
                        size++;
                        console.log(`Node ${data} added as left child node of ${node.data}`);
                    } else {
                        console.log(`Existing left child node found, start recursive function call with next node ${node.left.data}.`);
                        searchTree(node.left);
                    }
                } else if(data > node.data){
                    if(!node.right){
                        node.right = new Node(data);
                        size++;
                        console.log(`Node ${data} added as right child node of ${node.data}`);
                    } else {
                        console.log(`Existing right child node found, start recursive function call with next node ${node.right.data}.`);
                        searchTree(node.right);
                    }
                } else {
                    console.log('This tree does not accept duplicate values.')
                    return null;
                }       
            }
            searchTree(node);
            this.size = size;
        } 
    }
    printInOrder(){
      /*- inorder: left nodes first, then root, than right nodes
        - traverse the tree with recursive function that goes on as longs at finds a node.left/right
        - first all the left nodes
        - on each function call the node value is added to the arr
        - if there is just one value(root), no recursion call is made 
        - example: 
              3
          1       5
        0   2   4   6
        
        traverseTree(root = 3)
          node.left = 1 -> traverseTree(1): node.left = 0 -> traverse(0); vals.push(1); node.right = 2 -> traverse(2)
          vals.push(3)
          node.right = 5 -> traverse(5)   
      */
        if(!this.root){
            console.log('This tree has no values.');
            return null; 
        } else {
            let vals = new Array();
            function traverseTree(node){
                if(node.left) {traverseTree(node.left)};
                vals.push(node.data);
                if(node.right) {traverseTree(node.right)};
            }
            traverseTree(this.root);
            console.log('Tree in order:', vals);
            return vals;
        }
    }
    printPreOrder(){
        //preorder: similar to inorder, just swap statement positions to visit root first, then left nodes, then right nodes
        if(!this.root){
            console.log('This tree has no values.');
            return null; 
        } else {
            let vals = new Array();
            function traverseTree(node){
                vals.push(node.data);
                if(node.left) {traverseTree(node.left)};
                if(node.right) {traverseTree(node.right)};
            }
            traverseTree(this.root);
            console.log('Tree in pre order: ', vals);
            return vals;
        }    
    }
    printPostOrder(){
        //postorder: similar to inorder, just swap statement positions to visit left first, then right nodes, then root node
        if(!this.root){
            console.log('This tree has no values.');
            return null; 
        } else {
            let vals = new Array();
            function traverseTree(node){
                if(node.left) {traverseTree(node.left)};
                if(node.right) {traverseTree(node.right)};
                vals.push(node.data);
            }
            traverseTree(this.root);
            console.log('Tree in post order: ', vals);
            return vals;
        }
    }
    //print in level order
    /*
    - use two arrays: a final result array and an array for tracking nodes on each level
    - start with the root node and push that to the level array
    - use the shift method to both empty the level array an store each node to push it into the result array
    */
    printLevelOrder(){
        let result = [];
        let level  = [];
        if(this.root){
            level.push(this.root);
            while(level.length > 0){   
                let node = level.shift();
                result.push(node.data);
                if(node.left){
                    level.push(node.left);
                }
                if(node.right){
                    level.push(node.right);
                }
            }
            console.log('Tree in level order:', result);
            return result;
        } else {
            console.log('This tree is empty')
            return null;
        }  
    }
    //remove a value
    /*
      - to remove a childless node set the parent node left/right pointer to null
      - to remove a node with children, there are three cases:
          --only a left child node -> set parent pointer to left pointer of the node you remove 
          --only a right child node -> set parent pointer to right pointer of the node you remove
          --both left and right child nodes -> see explanation at the bottom below with example
          
      - the fn below uses recursion and is initially called with the tree root node
      - if the root node === the value you want removed, the fn returns null and thus sets the root node to null
      - if the value you want removed is not the root node, the fn is calls itself again with the next node
      - that next node is referred to by the node.left (if data < node.data) or node.right(if data > node.data)
      - the return value or result of that recursive can be:
          --another recursive call with the next node; plus return current node
          --null: the next node is the value you want removed and its does not have children
          --the current node.left/right
    */
    remove(data){
        const removeNode = function(node, data){
            if(node === null){
                return null;
            }
            if(data === node.data){
                //no children
                if(node.left === null && node.right === null){
                    console.log(`Childless node ${node.data} removed from tree.`);
                    return null;
                }
                //only left child node
                if(node.left && node.right === null){
                    console.log(`Node ${node.data} removed. No right child node found. Left child node ${node.left.data} moved up one level in the tree.`);
                    return node.left;
                }
                //only right child node
                if(node.right && node.left === null){
                    console.log(`Node ${node.data} removed. No left child node found. Right child node ${node.right.data} moved up one level in the tree.`);
                    return node.right;
                }
                //both left and right child nodes
                let tempNode = node.right;
                while(tempNode.left){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                console.log(`Node ${data} removed successfully and its position in the tree is now occopied by ${node.data}. Start removing duplicate node ${node.data}...`);
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if(data < node.data){
                console.log(`The current node ${node.data} > ${data}. Recursive fn call will be initiated with the next node: ${node.left.data}`);
                node.left = removeNode(node.left, data);          
                return node;
            } else if(data > node.data){
                console.log(`The current node ${node.data} < ${data}. Recursive fn call will be initiated with the next node: ${node.right.data}`);
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
        this.size--;
    }
    //findMin: start at the root, the min value is on the left side of the tree at the node for which node.left is null
    findMin(){
        let current = this.root;
        while(current.left){
            current = current.left;
        }
        console.log(`The lowest value in the tree is ${current.data}`);
    }
    //findMax, starting at root, the max value is on the right side at the node where node.right is null
    findMax(){
        let current = this.root;
        while(current.right){
            current = current.right;
        }
        console.log(`The highest value in the tree is ${current.data}`);
    }
    //isPresent
    isPresent(data){
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
    /*
    - The min height of a tree is the distance from the root node to the first node without two children
    - if the tree is empty return -1
    - with a recursive function we try to find the a node without two children:
        --a node has two children, 
        --a node for which node.left == null, thus return -1
        --a node for which node.right == null. thus return -1 
        --a node for which both node.left and node.right are null, thus both return -1 
    - track the node levels with two variables left and right that increment based upon the comparison after each fn call
    - if a node has two children both left and right initiate a new recursive fn call
    - eventually a node will be missing a left node, a right node or both
    - if only one node is missing, for example the node.left == null, the variable left will be -1 while the variable right will initiate another recursive fn call
    - for each iteration you compare the values for left and right
    - for a node without two children both the left and right variables have a value of -1, whereby we return right + 1 or 0
    - for a node with only a node.left the variable values are: left = 0 and right = - 1, whereby we return left + 1 or 1
    - for a node with only a node.right the variable values are: left = -1 and right = 0, whereby we return left + 1 or 0
    
    Example: 
               5
            4     6
              3
            2
    findMinHeigth(5)
      left  = findMinHeight(4) -> result = 0
        left  = findMinHeight(null) -> -1
        right = findMinHeight(3) -> result = 0
          left  = findMinHeight(2) -> result = 0
            left  = findMinHeight(null) -> -1
            right = findMinHeight(null) -> -1
            result left=right -> right + 1 -> -1 + 1 = 0
          right = findMinHeight(null) -> -1
          result left > right -> right + 1 -> -1 + 1 = 0
        result left < right -> left  +  1 -> -1 + 1 = 0
      right = findMinHeight(6) -> 0
        left  = findMinHeight(null) -> -1
        right = findMinHeight(null) -> -1
        result left=right -> right +1 -> -1 + 1 = 0
      final result left(0) = right(0) -> right + 1 -> 0 + 1 = 1;
      
    Thus the min height for this tree is 1, the distance from the root node to the first node without two children is 1.
    */
    findMinHeight(node = this.root){
        if(node === null){
            return -1;
        }
        let left  = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left < right){
            return left + 1;
        } else {
            return right + 1;
        }
    }
    /*
    - the max height of a tree is the distance from the root node to the most bottom node or leaf
      Example: 
               5
            4     6
              3
            2
      findMaxHeigth(5)
      left  = findMaxHeight(4) -> result = 2
        left  = findMaxHeight(null) -> -1
        right = findMaxHeight(3) -> result = 1
          left  = findMaxHeight(2) -> result = 0
            left  = findMaxHeight(null) -> -1
            right = findMaxHeight(null) -> -1
            result left=right -> right + 1 -> -1 + 1 = 0
          right = findMaxHeight(null) -> -1
          result left > right -> left + 1 -> 0 + 1 = 1
        result left < right -> right + 1 -> 1 + 1 = 2
      right = findMaxHeight(6) -> 0
        left  = findMaxHeight(null) -> -1
        right = findMaxHeight(null) -> -1
        result left=right -> right + 1 -> -1 + 1 = 0
      final result left(2) > right(0) -> left + 1 -> 2 + 1 = 3;
      
    Thus the max height for this tree is 3, the distance from the root node to bottom level node is 3.
    
    */
    findMaxHeight(node = this.root){
        if(node === null){
            return -1;
        }
        let left  = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if(left > right){
            return left + 1;
        } else {
            return right + 1;
        }
    }
    /*
    - A balanced tree is a tree whereby the minHeight and maxHeight only differ by 1
    */
    isBalanced(){
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
    balanceTree(){
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
}

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
myTree.isPresent(3);
myTree.isPresent(10);
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