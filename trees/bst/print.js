/*
####################
PRINTING TREE VALUES
####################
Tree values can be printed following these patterns:

I.  In-Order 
All left nodes first, then root, than all right nodes. This print values in
order from small to large.

II. Pre-Order 
Visit root first, then all left nodes, then all right nodes

III. Post-Order
Visit all left nodes first, then all right nodes, then root node

IV. Level-Order: 

############
I.  IN ORDER
############
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
node.left = 1 -> traverseTree(1): node.left = 0 -> traverse(0); 
vals.push(1); 
node.right = 2 -> traverse(2)
vals.push(3)
node.right = 5 -> traverse(5)   
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
//print in level order
/*
- use two arrays: a final result array and an array for tracking nodes on each level
- start with the root node and push that to the level array
- use the shift method to both empty the level array an store each node to push it into the result array
*/
function printLevelOrder(){
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

module.exports = {
    printInOrder,
    printPreOrder,
    printPostOrder,
    printLevelOrder
}