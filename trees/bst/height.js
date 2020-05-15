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
function findMinHeight(node = this.root){
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

module.exports = {
    findMaxHeight,
    findMinHeight
}