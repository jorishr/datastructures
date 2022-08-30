# Edge list implementation of a graph
A graph (G) contains a set of vertices (V) and a set of edges (E). The vertices and edges can be stored in the computer's memory as a list data structure. The easiest option in Javascript is to use two arrays:
- a vertex array
- an edge array

Vertices are stored by their names. 
Edges can be stored as objects with two fields: firstVertex, secondVertex

## Example
```
Undirected graph example

    A ----- B  
   / \      |  \
  /   \     |   \
 C     D    G    H     
  \     \   |   /
   \     \  |  /
    E ----- F 

const vertexArr = ["A", "B", "C", "D", "E", "F", "G", "H"]
const edgeArr = [
    {"firstVertex": "A", "secondVertex": "B", "weight": 1}
    {"firstVertex": "A", "secondVertex": "C", "weight": 4}
    {"firstVertex": "A", "secondVertex": "D", "weight": 5}
    {"firstVertex": "B", "secondVertex": "G", "weight": 8} 
    {"firstVertex": "B", "secondVertex": "H", "weight": 22}
    ...
]

Since we have an undirected graph the order of the first/second vertex is irrelevant. When working with a directed graph, use startVertex and endVertex.

To add weight to edges, simply add a new key-value pair to the object.
```
## Cost of storage and operations
The approach above is not very efficient.

The vertex array stores n values. Those values are strings that can be of any length. In this example the strings have one character but if you would store the name of cities, the length of each string will vary and with it varies the amount memory required.

On average, however, we can assume that the string length will within a reasonable range, approaching a constant on average. The space complexity therefore would be O(|V|) or O(n) with n = |V|.

A similar situation arises with edge list. To get O([E]) however we should not store the name each vertex but the index position in the vertex list. By doing so all edge list objects will carry integer values with the same memory space requirements.
```
const edgeArr = [
 {"firstVertex": 0, "secondVertex": 1, "weight": 1}
 {"firstVertex": 0, "secondVertex": 2, "weight": 4}
 {"firstVertex": 0, "secondVertex": 3, "weight": 5}
 {"firstVertex": 1, "secondVertex": 6, "weight": 8} 
 {"firstVertex": 1, "secondVertex": 7, "weight": 22}
 ...
]

That brings the overall space complexity to O(|V| + |E|).

If |V| = n and |E| = n(n - 1) / 2, we get O(n + n(n - 1) / 2) which results in: O(2n + n^2) or O(n^2)
```
The time cost for common operations is equally bad.
- find all adjacent vertices of a given vertex
Or find all nodes connected to a given node. This means performing a linear search that loops over the entire edge list array and checks if firstVertex or secondVertex equals to index position of the given node in the vertex array. This results in a time complexity of O(|E|), thus O(n(n - 1) / 2) = O(n^2).
- check if two given vertices are connected
This too requires a linear search and results in O(n^2)

Better and less costly graph implementations exist in the form of an adjacency matrix and an adjacency list.