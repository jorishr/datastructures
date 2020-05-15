# Binary Search Tree 
A binary search tree is a binary tree in which for each node the left subtree values are smaller or equal (than the parent node) and the right subtree values are greater or equal.

In the case of a balanced BST the search process can be very efficient to a cost of O(log(n)) as on every node, starting at root, we can discard either the entire left subtree (if x > node) or the entire right subtree (if x < node). 

The steps are: n; n/2; n/4; n/8; ... n/2^k = 1 or 2^k = n, thus k = log2(n)
Thus if n = 10, it takes log2(10) or |3.3219...| = 3 steps to get to the last value in the tree.

In the worst case of an unbalanced BST the tree will ressemble a linked list whereby we cannot discard subtrees. Then the search operations will take n steps in the worst of cases, thus the time complexity is O(n).

Inserting elements into the BST has the same time complexity of O(log(n)) because we can follow the same logic: on each node you discard the left or right subtree to end up in the correct tree position.
