# Matrix optimization
## Matrix memory problem
The problem with an adjacency matrix is inefficient use of memory, especially for sparse graphs which are the majority of the graphs we work with.

What could be improved upon is the fact that the matrix not only stores the information about the existing edges between vertices but also explicitely stores the absense of a connection in the form of the value 0, Infinity or other.

See the social network example in the [adjacencyMatrix.md](adjacencyMatrix.md). If each user has on average 10^3 connection but the total number of possible connections is approximately 10^18 then each row in the matrix will contain 10^3 1's and up to 10^9 - 10^3 0's. This is very inefficient use of memory space. Even if our values are stored as booleans of 1 bytes, the 1's will amount to roughly 1 kb while storing non-existing connection will require close to 1 gigabyte of memory.

## Storing edges
Instead of storing information about all possible edges in a V * V matrix we can choose to store only the information about existing connections. To do so, we keep the concept of the matrix design but create row of variable length. Each row will only store the index position of the node that is connected to node represented by the row.
```
Base adjacency matrix:
    0   1   2   3
-----------------
0 | 0   1   1   0  
1 | 1   0   0   1
2 | 1   0   0   1
3 | 0   1   1   0
Becomes:
0 | [1, 2]
1 | [0, 3]
2 | [0, 3]
3 | [1, 2]

This can be stored as a two-dimensional array. Or each row can be stored as a linked-list or a BST. 
```
The space complexity is no longer O(n^2) (with n = |V|) but now depends on the number of EXISTING edges, or O(e). For a SPARSE graphs this means space complexity is guaranteed to be significantly less than O(n^2).

If we return to the example of social network and assume that a single user will have no more than 10 000 (10^4) connections, then the matrix will have a maximum of 10^9 * 10^4 = 10^13 cells. A lot less than the approximately 10^18 for a classic adjacency matrix.

## Comparing time complexity
|                        |       Classic Matrix      |     Optimized Matrix     |
|---                     |---                        |---                       |
|finding adjacent nodes  | O(n)                      | O(n)                     |
|                        | O(1) if indices are given |                          |
|are nodes connected     | O(n)                      | O(n)                     |
|                        | O(1) if indices are given |                                 |
|insert new edge         | O(n) flip 0 to 1 at Mij   | O(1) if you can push to arr (JS)|
|                        | O(1) if indices are given | >= O(n) if you need to sort arr |
The best cases in an AM no longer apply with an AL, om average, because you will always have to loop through the a significant chunk of the array or list of the stored edges for a given row. Because, the index of the number stored as a value is the index position in the matrix, not in the actual array.

However, the reduced space complexity may offset the theoretical increase in time consumption, especially for very sparse graphs as in the social network example.

Assume a processor can handle a million (10^6) instructions per second. The actual cost in processing time is then:
|                        |       Classic Matrix         |   Optimized Matrix           |
|---                     |---                           |---                           |
|finding adjacent nodes  | 10^9 / 10^6 = 1000s ~ 16min  | 10^4 / 10^6 = 10^-2 = 10ms   |
|                        | row length = 10^9            | row length = 10^4            |
|are nodes connected     | O(n): 10^9 / 10^6 = 1000s    | 10^4 / 10^6 = 10ms           |
|                        | O(1): 1 / 10^6 = 1microsecond|                              |

Thus, as long as the graph is SPARSE the best solutions is to use the optimized version.

## Further optimizations: linked-list and BST
If the array of edges for each row is kept IN ORDER a binary search can be performed which further reduces the time consumption of some search related operations to O(log(n)). Keeping an array sorted, however, can become costly in itself. Especially when a lot insert and delete operations take place.

### Adjacency list
If a linked-list is used insertion has a O(1) at best at the head, O(n) for insertion at the tail end of the list. But in general, insertion and deletion is more efficient in an linked-list than in an array.

Another advantage of a linked-list implementation would be that it is easy to add an addtional field to each node in the list to store the WEIGTH of an edge. Something that cannot be done in the optimized version of the matrix above.

To implement an adjacency matrix based linked-list or ADJACENCY LIST each value in the vertex array needs to store a pointer to the first cell of the corresponding matrix row, that is the head of the linked-list.

The space complexity for an adjacency list will be related to the number of existing edges plus the number of vertices O(|E| + |V|), which is significantly less than the classic adjacency matrix with O(|V|^2) 

### BST
By storing the edges of matrix in a BST the time cost of search, insert and delete will reduce even further. 