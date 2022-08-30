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
            //no children (leaf node or childless root)
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
                tempNode = tempNode.left;   //find min value in right subtree
            }
            node.data = tempNode.data; //replace value
            console.log(`Node ${data} removed successfully and its position in the tree is now occopied by ${node.data}. Start removing duplicate node ${node.data}...`);
            node.right = removeNode(node.right, tempNode.data); //delete duplicate
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
The idea is to reduce the complexity to a case of deleting just one child node.
Instead of deleting the node directly, replace it with another value that is
already present in the subtree: the minimum value in the right subtree.

This min value in the right subtree is guaranteed to be bigger the values below
in the right subtree and guaranteed to be bigger than any value on left 
subtree. The property of the BST is thus preserved.

Also the min value is guaranteed to not have left child. It can only have a 
right child subtree, otherwise it would not be the minimun value.

This solves our problem. We can now replace the value we want to delete with
a value that preserves the BST order and that has at most just one child. We 
know to how to delete a node without children or a node with just one child 
by adjusting the pointer of the previous node.

In sum:
- find min value in right subtree
- copy that value into the targeted node we want deleted
- delete duplicate from right subtree

Note that you can also use the max value in the left subtree.
Example:
                    3
        1                       5
0               2       4               9
                                7               11
                            6       8       10      12  

remove(5) 
    -> this.root = removeNode(3, 5) -> returns 3 
        data(5) > node.data(3)
        -> node.right = removeNode(5, 5) -> returns node(6)
            -> data(5) === node.data(5)
                -> find smallest value in right subtree: tempNode = 6
                -> node.value(5) is replaced by 6
                -> remove duplicate: node(6).right(9) = removeNode(9, 6) -> returns node(9)
                    -> data(6) < node.data(9) 
                    -> node(9).left(7) = removeNode(7, 6) -> returns node(7) 
                        -> data(6) < node.data(7)
                        -> node(7).left(6) = removeNode(6, 6) = null
                            -> data(6) === node.data(6)
                            -> no children -> return null
        -> return node (this.root = 3) original value unchanged

TIME COMPLEXITY EVALUATION
Time complexity depends on how deep we to travel the right subtree to find the 
minimum value. Thus time complexity is related to the height of the tree, O(h).

In a skewed tree the height may become n, resulting in O(n)

*/