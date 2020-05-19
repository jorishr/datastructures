/*
####################
PRINTING TREE VALUES
####################
Tree values can be printed by traversing the tree following a bread-first or 
depth-first strategy.

Breadth-first:
I.  In-Order 
All left nodes first, then root, than all right nodes. This print values in
order from small to large.

II. Pre-Order 
Visit root first, then all left nodes, then all right nodes

III. Post-Order
Visit all left nodes first, then all right nodes, then root node

Depth-first:
IV. Level-Order
Visit all nodes on each level of depth from left to right. 

######################
I.  IN ORDER TRAVERSAL
######################
Left nodes first, then root, than right nodes:
- traverse the tree with recursive function that goes on as longs at it finds a
node.left or node.right
- first all the left nodes
- on each function call the node value is added to the arr
- if there is just one value(root), no recursion call is made 
- example: 
            3
    1               5
0       2       4       6
    
traverseTree(root = 3)
    -> node.left = 1 
        -> traverse(1): node.left = 0 
            -> traverse(0){push(0)};
        -> vals.push(1);
        -> node.right = 2 
            -> traverse(2){push(2)}
    -> vals.push(3)
    -> node.right = 5 
        -> traverse(5)
        ...   
*/
function printInOrder(){
    if(!this.root){
        console.log('This tree is empty.');
        return null; 
    } else {
        let vals = new Array();
        function traverseTree(node){
            if(node.left) {traverseTree(node.left)};
            vals.push(node.data);
            if(node.right) {traverseTree(node.right)};
        }
        traverseTree(this.root);
        console.log('Tree values in order:', vals);
        return vals;
    }
}
/* 
#######################
II. PRE-ORDER TRAVERSAL
#######################
*/
function printPreOrder(){
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
/*
#########################
III. POST-ORDER TRAVERSAL
#########################
*/
function printPostOrder(){
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
/*
TIME AND SPACE COMPLEXITY EVALUATION
All the breadth-first algorithms have a time complexity of O(n) as each element
in the tree is visited once.

Space complexity however is O(1) or O(n) is you considere the size of the 
call stack.

#########################
IV. LEVEL-ORDER TRAVERSAL
#########################
The challenge is to keep track of the right child node while we are visiting
the left child node.
        3
4               5
On level one we visit 4 first but there is no direct link from 4 to 5. We have 
to pass through the parent node to find 5.

A FIFO queue (array) can help to track the child nodes for each node we visit.
Each node we visit is pushed to a queue, as well as it's left and right 
children. While the queue is not empty, push the first node value to the result
array and keep adding child nodes if they exist.

Eventually you get to the leaf nodes and the queue will clear.
*/
function printLevelOrder(){
    let result = [];
    let queue  = [];
    if(this.root){
        queue.push(this.root);
        while(queue.length > 0){   
            let node = queue.shift();
            result.push(node.data);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        console.log('Tree in level order:', result);
        return result;
    } else {
        console.log('This tree is empty')
        return null;
    }  
}
/*
Example: 
level 0:    Queue = [3]
(first loop)    -> shift(3), result [3]
                -> node.left  = 4 -> Queue = [4]
                -> node.right = 5 -> Queue = [4, 5]
level 1:    Queue = [4, 5].length > 0
(second loop)   -> shift(4), result [3, 4]
                -> node.left  = null -> Queue = [5] 
                -> node.right = null -> Queue = [5] 
level 1:    Queue = [5].length > 0
(third loop)    -> shift(5), result [3, 4, 5]
                -> node.left  = null -> Queue = [] 
                -> node.right = null -> Queue = []
End of loop 

TIME AND SPACE COMPLEXITY EVALUATION
Visiting a node takes O(1) or constant time and each node will be visited once,
which results in a time complexity of O(n).

The use of a queue means that for each node a number of child nodes need to be
stored in memory. Assuming the memory is dynamic, the best case is O(1) in an 
unbalanced tree that has only left nodes or only right nodes and ressembles a
linked list. For each node only one (n/n) child node will be held in the queue.

For a balanced tree however all child elements at a given level will end up in
the queue which means there may be up to n/2 elements in the queue resulting in
a space complexity of O(n).
*/
module.exports = {
    printInOrder,
    printPreOrder,
    printPostOrder,
    printLevelOrder
}