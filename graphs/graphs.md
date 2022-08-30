# GRAPHS
- [GRAPHS](#graphs)
  - [Description](#description)
  - [Example](#example)
  - [Weighted graphs](#weighted-graphs)
  - [Number of edges](#number-of-edges)
  - [Path](#path)
  - [Connection strength](#connection-strength)
  - [Use cases](#use-cases)
  - [Tree as a graph](#tree-as-a-graph)

## Description
A graph is a collection of ordered nodes (or vertices) connected by a set of edges.

To represent this structure use pairs of a vertex and an edge whereby the order matters: 
G = (V, E)

(a, b) != (b, a) if a != b

The first object is always a SET of vertices or nodes, the second object represents a SET of edges.

The edges can be directed (one way) or undirected (two way) and can be represented by their origin and destination in ordered (directed edge) or unordered (undirected edge) pairs.

Edges can also be self-loops whereby origin and destination are the same vertex.

It is also possible to have parallel edges whereby two vertices are connected through multiple directed or undirected edges. An example would be an intercity road network or flight network with multiple road/flights between two destinations.

Multi-edges and self-loops complicate working with graphs. 

## Example
```
     v_a --- v_b 
     / \      |  \
    /   \     |   \
v_c    v_d   v_g   v_h     
    \     \   |   /
     \     \  |  /
     v_e ---> v_f 
         <---
The name of vertices and order is irrelevant. We have set of node or vertices:

V = {v_a, v_b, v_c, v_d, v_e, v_f, v_g, v_h}

Edges can be represented by the pair of vertices they connect:
- directed edge is an ordered pair: 
    (v_e, v_f) != (v_f, v_e)
- undirected edge is an unordered pair: {v_a, v_b} = {v_b, v_a}

E = {
    {v_a, v_b}, {v_a, v_c}, {v_a, v_d} 
    {v_b, v_g}, {v_b, v_h}, 
    {v_c, v_e},
    {v_f, v_h}, 
    {v_d, v_f},
    {v_g, v_f},
    (v_e, v_f), 
    (v_f, v_e),
    }

Thus we have a Graph (G) with set of 8 vertices (V) and a set of 11 edges (E). G = (8, 11)

It is easier to work with graphs that have only directed edges, a digraph, or only undirected edges, an undirected graph. If not stated explicitly, assume the graph is undirected.  
```
## Weighted graphs
In a standard unweighted graph all edges are off equal importance or value (1). However, in some cases you may want to assign a greater or lesser importance to a connection. For example, some roads between city a and city b can be considered to be faster or better suited for certain type of traffic.

Each can get a label or weight attached that, for example, represents the distance.

## Number of edges

The maximum number of edges depends on the type of graph. 
The minimum number of edges is always 0, as we can have a graph with only vertices and no connections or edges. 

If we exclude multi-edges and self-loops the maximum number of edges will be:
- directed graph with n = |V|:      n(n - 1)

From each vertex an edge can connect to all other vertices (n - 1).  
- undirected graph with n = |V|:    n(n - 1) / 2
 
From each vertex an edge can connect to all other vertices (n - 1) but each connection is 
bi-directional thereby halving the possibilities as (v1, v2) = (v2, v1).

Thus a directed graph with |V| = 4, can have 0 <= E <= n(n-1) edges or 0 <= |E| <= 12. 
An undirected graph with |V| = 4, can have 0 <= E <= n(n-1) / 2 edges or 0 <= |E| <= 6. 

The maximum number of edges can grow very fast compare to n and approaches n^2. With |V| = 10, |E| = 90 and |V| = 100, |E| = 9900

If the number of edges is close to maximum, the graph is called DENSE.
If the number of edges is close to minimum (0), the graph is called SPARSE.

The density is relevant for choosing the type of memory storage. A dense graph is usually stored in an adjacency matrix while a sparse graph is usually stored in an adjacency list.

## Path
A WALK (in undirected graph) is sequence of vertices whereby each adjacent pair of vertices is connected through an edge. Example: v_a -> v_b -> v_h -> v_f

In a directed graph all adjacent pair connection need to be aligned or go into the same direction. 

In a walk both vertices and edges can be repeated.

An OPEN walk has different starting and ending vertices, while a closed walk starts and ends at the same vertex.

A TRAIL is an open walk whereby vertices can be repeated but not the edges.
An example would be:

v_b -> v_h -> v_f -> v_g -> v_b -> v_a

The trail repeats vertex v_b to get to v_a while no edges are repeated.

A CIRCUIT is a closed trail: starts and ends at the same vertex, can repeat vertices but not edges.

A SIMPLE PATH is the most common path whereby no vertex is repeated (which also means no edges are repeated). A path is also an open walk. 

For example, the following WALK is NOT a simple path as the vertices v_a and v_b and their connection edge are repeated:

v_a -> v_b -> v_h -> v_f -> v_g -> v_b -> v_a -> v_d

A cycle is a path that starts and ends at the same vertex: no edges nor vertices are repeated except the starting vertex.

A graph with no cycle is an ACYCLIC GRAPH. For example, a tree structure is an acyclic graph. You cannot return to the root without repeating edges or vertices. 

A DAG is a directed acyclic graph:
        ---> C --> E ------
        |        ^        |
        A       /         |
        |      /          |
        ---> B --> D <----|



## Connection strength
A CONNECTED graph means that there is connection or edges from each vertex to any other vertex in an undirected graph.

If the graph is a directed graph we talk about a STRONGLY CONNECTED graph.

A weakly connected graph is directed graph whereby not all vertices are directly connected, but by converted the directed edges into undirected edges, the graph becomes connected.

Example:
A -> B <- C
|---------^
There is no connection from B to A or B to C. By making the edges undirected those missing connections are created.

## Use cases
A social network as an undirected graph of people whereby a friendship relation is mutual and thus represented by an undirected edge. Friend suggestions can be made by visiting vertices that are connected to each friend but don't have an edge connecting to the person you are making the suggestions for.

In the example, for v_a we could suggest v_e, v_f, v_g and v_h and the problem can be stated as: find all vertices for which the shortest path from v_a equals 2 (edges).

The world wide web can be represented as a directed graph with each page linking to serveral other pages. Each unique url is vertex in the graph and the edges are not mutual, there has to be a specific link in each direction. A menu link on a page to the same page would be represented by a self-loop edge.

Web crawling can be seen a basic graph traversal.

## Tree as a graph
A tree, for example, has only one edge per parent-child relationship, resulting in n - 1 edges as all nodes have a parent except for the root node. The connections between nodes are usually directed through the use of a pointer. To make them undirected you can store an additional field in each node: the parent.

All nodes are readable or visitable from the root node with only one possible path from root to the node. This makes the tree acyclic, you cannot start at root (or any given node) and return to that vertex without repeating and edge and/or vertex. 