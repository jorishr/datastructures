# Adjacency matrix
Edges are stored in a two-dimensional array with V * V elements that represent the cells of a matrix. If an edge between two vertices exist, the cell or element hold the number value of 1. If no connection exists store 0.

Thus for matrix M with row (i) and column (j) we get Mij = 0 or Mij = 1. 

To add weight to the edges, the weight as an integer can be stored instead of 1 while 0 can be replaced with a number that is most unlikely to be used a weight. Infinity for example.  
```
Undirected graph example
    A   
   / \      
  /   \     
 B     C         
  \   /     
   \ /    
    D  

const vertexArray = ["A", "B", "C", "D"]
const M = [
    [0, 1, 1, 0]
    [1, 0, 0, 1]
    [1, 0, 0, 1]
    [0, 1, 1, 0]
]

When there are no self-loops, the elements on the diagonal of the matrix will always be 0.

For undirected graphs the matrix is SYMMETRIC as Mij = Mji because each connection is bi-directional. This is not the case for directed graphs.
```

## Time complexity
The use of an adjency matrix reduces the time cost of common operations:
- Finding all adjacent nodes of a given node is a three step process using linear search. First, look op the index of the node in the vertexArray. Second, loop over the corresponding row in the matrix and return the index numbers numbers for which the value is 1. Third, look up the index in the vertexArray and return the name of the node(s).

All three steps have a time complexity of O(n) at worst with n = |V| n.

- Are two given nodes connected? Looking up the index of each node is a linear search with a time complexity of O(n) + O(n) and then we know the exact index position to check in the matrix. This will take constant time or O(1). The overall time complexity of the operations is thus O(n) with n = |V|.

To avoid looking up the indices in the vertexArray a HASH TABLE could be implemented with key-value pair that store the vertex names and there corresponding index. Then the above operation will take constant time O(1), at the expense of the memory storage capacity for the hash table.

## Space complexity
Operations on this adjency matrix are much more efficient in terms of time complexity but the big draw back here is that an array of n^2 elements is required to store all the information about the connections. This situation may be unavoidable in a dense graph but should not be used for sparse graphs.

Usually we will work with sparse graphs. A social network site of 1 billion (10^9) users can serve as an example: the average person does not have a connection to all other social network users. The typical user may have around 500 or 1000 (10^3) connections and the most connected outliers may have a million (10^6) connections.

If everybody is connected to everybody else in the network we need a matrix of close to 10^9 * 10^9 or ~= 10^18 elements. This means that, in theory we need to reserve a 1000 petabytes of memory if each edge occupies 1 byte.

If we assume that the AVERAGE number of undirected connections per user is 10^3 then we need a matrix of close to 10^9 * 10^3 / 2 = 10^12 / 2 = 5 * 10^11 elements which means close to 0.5 terabytes or 500 gigabytes of storage. 

This is very much manageable on a single disk. However, we can further optimize the implementation of sparse graphs with an adjacency list.