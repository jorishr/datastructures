/*
TREE HEIGHT OR TREE DEPTH
Find the shortest or longest possible path (number of edges) from the root node
to a leaf node.

For example, in the tree below the min height would be the distance from the
root node to leaf node 6. The max height is the distance to leaf node 2.
            5     
      4           6
          3
        2

We have a leaf node if the parent node has a pointer (left or right) that is 
null or undefined.

If the tree is empty return -1.

The best way to approach this problem is to consider the BST as tree of 
left subtrees and right subtrees and to calculate the height for each node in a
recursive manner. Start at the root node.

The height of left and right subtrees is stored in variable that is the result 
of all the recursive calls that get added to the stack. 

The recursion stops when a node does not have a left or right child node and 
the result of findMinHeight(null) returns - 1

Then compare height of left subtree with height of right subtree. Return the 
lowest value and add + 1 for the connection between root node and subtree. 

For each recursive call the left and right variables are compared and the
result is added up.
*/
function findMinHeight(node = this.root){
  //empty tree (-1) or no child present 
  if(node === null){
    return -1;
  }
  let left  = this.findMinHeight(node.left);
  let right = this.findMinHeight(node.right);
  //add one for connection root node to subtree
  if(left < right){
    return left + 1;
  } else {
    return right + 1;
  }
}
function findMaxHeight(node = this.root){
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
/**
In the example tree the stack calls look like this, fn() = findMinHeiht():

fn(5)
  -> left  = fn(4)
      -> left  = fn(null)
                  -> return -1
      -> right =  fn(3) 
                  -> left  = fn(null)
                              -> return -1
                  -> right = fn(2)
                              -> left  = fn(null)
                                          -> return -1
                              -> right = fn(null)
                                          -> return -1
                              -> left === right return -1 + 1 = 0
                  -> left < right -> return 0 + 1 = 1
      -> left < right -> return 1 + 1 = 2 
  -> right = fn(6) 
      -> left  = fn(null)
                  -> return - 1
      -> right = fn(null)
                  -> return - 1
      -> left < right -> return -1 + 1 = 0                      
  
  -> left < right -> return 0 + 1 = 1 -> findMinHeight() 
 
Thus the minimun height for this tree is 1. The distance from the root node to
the first node without two children is 1.

To find the max height, simply reverse the compare statement.

In the example tree the stack calls look like this, fn() = findMaxHeiht():

fn(5)
  -> left  = fn(4)
      -> left  = fn(null)
                  -> return -1
      -> right =  fn(3) 
                  -> left  = fn(null)
                              -> return -1
                  -> right = fn(2)
                              -> left  = fn(null)
                                          -> return -1
                              -> right = fn(null)
                                          -> return -1
                              -> left === right return -1 + 1 = 0
                  -> left > right -> return 0 + 1 = 1
      -> left > right -> return 1 + 1 = 2 
  -> right = fn(6) 
      -> left  = fn(null)
                  -> return - 1
      -> right = fn(null)
                  -> return - 1
      -> left > right -> return -1 + 1 = 0                      
  
  -> left > right -> return 2 + 1 = 3 -> findMaxHeight()
*/
module.exports = {
    findMaxHeight,
    findMinHeight
}