/*
########################
REMOVE VALUES FROM A BST
########################
To remove a childless node set the parent node left/right pointer to null
To remove a node with children, there are three cases:
- only a left child node -> set parent pointer to left pointer of the node 
you remove 
- only a right child node -> set parent pointer to right pointer of the node
you remove
- both left and right child nodes -> see detailled example below
        
The fn below uses recursion and is initially called with the tree root node
If the root node === the value you want removed, the fn sets the root node to 
null and returns null

If the value you want removed is not the root node, the fn calls itself again 
with the next node. That next node is going to be the node.left if 
data < node.data or node.right if data > node.data

The return value or result of that recursive fn can be:
- another recursive call with the next node; plus return current node
- null: the next node is the value you want removed and it does not have 
child nodes
- the current node.left/right
*/
module.exports = function remove(data){
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
/*
Remove a node with left AND right child nodes.
Example:
                    3
        1                       5
0               2       4               9
                                7               11
                            6       8       10      12  

remove(5) -> this.root = removeNode(3, 5)
data(5) > node.data(3)
    -> recursive fn call removeNode(node.right(5), 5)
    -> return node, thus this.root = 3; and keep its original value

removeNode(5,5) 
data(5) === node.data(5)
three options: one child left, one child right, two children
two children found: 
Use a tempNode variable to store the smallest value in the lower levels of the 
tree while traversing down the left side with a while loop
- the current node (node.data(5)) will not be removed but its value is replaced
by the smallest node found in the remaining lower levels of the tree, in this 
example 6.
- this means that the original node.left and node.right values remains 
unchanged. This is ok for the node.left, in this example 4. 
- on the node.right however we now have a duplicate value that needs to be 
removed, in this example 6.
- fix the tree below node.right with a recursive call once more starting at 
node.right(9) removeNode(node.right(9), 6);
*/