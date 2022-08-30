# Trees
- [Trees](#trees)
  - [Description](#description)
  - [Tree depth and height](#tree-depth-and-height)
  - [Binary tree](#binary-tree)
  - [Counting nodes](#counting-nodes)
  - [Find tree height](#find-tree-height)
  - [Tree traversal](#tree-traversal)
  - [Cost of operations](#cost-of-operations)

## Description
A tree is an hierarchical data structure. An example would be the structure of an organization with employee names and their job titles. It is used for:
- naturally hierarchical data, for example a file system
- organizing data to optimize for quick search, insertion or deletion (binary search tree)
- dictionaries in the for of a TRIE for dynamic spell checking
- networking routing
A tree has a ROOT NODE with child nodes. Each child node can have multiple child nodes as well. A leaf a node in a tree that has no child node. Nodes with the same parent node are siblings.

A tree is a recursive data structure because each child node can be considered a subtree of it's parent.

A tree with N nodes will have N-1 links or edges that connect the nodes because all the nodes have exactly one incoming edge, except the root node.

Note that a tree is also considered to be a special kind of the graph data structure.

## Tree depth and height
The depth for node x is the LENGTH of the path from the root node to node x or the number of edges from root to node x.

The depth for the root node is 0.

The height for node x is the longest path from node x to a leaf node. The height of a leaf node is 0. 

The height of the root node is considered the tree height or tree depth, thus the longest possible path from root to a leaf node. Height of an empty tree is -1 or null.

## Binary tree
A binary tree is a tree whereby each node can have at most TWO child nodes, a left and right node. Thus each node has zero, one or two children. 

A *strict* binary tree means all nodes have exactly two children.

A *complete* binary tree means we have a strict binary tree on all levels, except the lowest one. And at lowest level (containing the leaf nodes) all nodes are arranged as left as possible.

A *balanced* tree is a tree whereby the difference in height between the left and right subtree of each node is not more than 1.

## Counting nodes
The maximum number of nodes we can have **at each level (i)** of a binary tree is 2<sup>i</sup>
- level 0 (root node): 2<sup>0</sup> = 1 
- level 1: 2<sup>1</sup> = 2
- level 2: 2<sup>2</sup> = 4
- level 3: 2<sup>3</sup> = 8
- level 4: 2<sup>4</sup> = 16
etc.

The total maximum number of nodes in a binary tree with height (h) is 2<sup>(h + 1)</sup> - 1.

Example: a perfect binary tree with height 3 has n = 2<sup>4</sup> - 1 or n = 15 nodes. 

Or if you count the number of levels (l) including root level 0, then n = 2<sup>l</sup> - 1. 

Example: levels = [0,1,2,3], l = 4, thus n = 2<sup>4</sup> - 1 = 15

## Find tree height
The height of a perfect binary tree with N nodes is?
```
n = 2^(h+1) - 1
n+1 = 2^(h+1)
h = log2(n+1) - 1

Example: n = 15
h = log2(15 + 1) - 1 = log2(16) - 1 = 4 - 1 = 3

OR take the absolute value of h = |log2(n)| = |log2(15)| = |3.906...| = 3
```

## Tree traversal
A tree is not a linear but hierarchical structure. For each node we visit there may be more than one possibility to go to a 'next' node. To read or process each node in the tree just once we can use two strategies: breadth first or depth first.

Breadth-first means you visit all nodes on each level of depth from left to right before going to the next level: start at root (level 0), then all nodes on level 1, then all nodes on level 2, etc. Thus for any node, you first visit all children before going on to visit any grandchildren. The level-order algorithm does just that.

Depth-first on the other hand will visit the entire subtree of a child node before visiting other child nodes. These algorithms can start at the root node or left subtree or right subtree. Examples are:
- in-order: left subtree -> root -> right subtree
- pre-order: root -> left subtree -> right subtree 
- post-order: left subtree -> right subtree -> root  

## Cost of operations
The time cost of operations on a tree is related to the height of the tree. The more dense or closest to being a perfect binary tree the less height is needed and the more efficient the operations on the tree can be.

The worst case scenario is a binary tree with only left nodes. This tree will resemble a linked-list with a maximum possible height of N-1.

The best case scenario is a perfect binary tree with a most minimum possible height of log2(n).  

Compared to arrays and linked-lists this can greatly optimize the most common search, insert and delete operations to an average cost of O(log(n)).
|           |unsorted array | sorted array | linked list | balanced BST |
|---        |---            |---           |---          | ---          |    
|search (x) |O(n)           |O(log(n))     | O(n)        | O(log(n))    | 
|insert (x) |O(n)           |O(n)          | O(n)        | O(log(n))    |
|delete (x) |O(n)           |O(n)          | O(n)        | O(log(n))    |

To put this into perspective: If a processor can process 1 million comparison per second and we have to go through a collection of 1 billion records you get the following time calculation: 
```
n = 10^8
processing power per second = 1 000 000 / 1 = 10^6
10^8 / 10^6 = 10^2 = 100 seconds for O(n) operations

log2(10^8) with 2^x = 10^8 and x = 10 000 = 10^4
processing power per second = 1 000 000 / 1 = 10^6
10^4 / 10^6 = 10^(-2) = 1 / 100 seconds or 10 milliseconds for O(log(n)) operations

````
## MEMORY STORAGE
Usually the tree data is stored in nodes at random memory locations whereby the node contain three data points: left pointer, data value and right pointer. 

Perfect binary trees can also be stored in arrays whereby you don't need to store the left and right pointers because they can be found through index: 
- left child index: 2i+1 
- right child index: 2i+2

```
['a', 'b', 'c', 'd', 'e', 'f', 'g']

		    0a
    1b				2c
3d		4e		5f		6g

The left child of 'b' or arr[1] = arr[2*1+1] = arr[3] = 'd'
The right child of 'b' or arr[1] = arr[2*1+2] = arr[4] = 'e'

The left child of 'a' or arr[0] = arr[2*0+1] = arr[1] = 'd'
The right child of 'a' or arr[0] = arr[2*0+2] = arr[2] = 'e'
```
You could use an array for unbalanced trees and imperfect trees but that requires explicitly storing null or undefined for each missing node at the corresponding index position to maintain a workable index based logic. 