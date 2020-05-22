# About data structures
Data structures are ways to organize and store information in a computer efficiently.

Common data structures from every day life: 
- dictionary: a list of sorted words
- city maps: 2D map of geometric info
- cashbook in business: cash in/cash out table form

Some data structures are LINEAR: lists, hash tables, stacks and queues. Others are HIEARCHICAL: trees and heaps.

There are two ways to study data structures:
- mathematical/logical approach that looks at the abstract data type, the logical operations that can be performed on it and the cost (in processing time / in memory space) of those operations. For example, a list that can store a given number of elements of any type, and that can have its elements read/modified by their position in the list.
- practical implementation in a programming language of arrays, linked-list, stacks, queues, graphs, etc.

## Lists
Description: a dynamic list with a given size, with operations like insert, remove, count, modify, read and specific datatype.

These requirements can be implemented through either an array or a linked-list.

### Array
- size: you declare a max size, when the array is full you copy the array into a new array with double the size. If list is empty, you set the variable to be -1 and the size will be n + 1. If you set the variable to 0, the size will be n.

- read: since there is an index order the operation takes constant time or O(1) 

- insert/remove at index position: remove the element and shift the remaining elements to the front or back. Each time you insert/remove an element you update the size variable. The efficiency of these operations is O(1) at best and O(n) at worst. The best scenario is when you add/remove the last elements and leave other elements untouched. Worst scenario is adding/removing at the beginning which results in shifting all other array elements. If the array is full and you want to add another element the cost of copying the existing array into a new array double the size is O(n) as well.

The cost in time for most other operations in an array is O(n) which is acceptable but not very efficient for a dynamic list with lots of insert/delete operations. 

An array is usually stored as one continuous data block in memory.  

### Linked-list
An alternative solution solution would be to use a LINKED LIST data structure as it can, in some cases, more efficiently insert or remove nodes from the list without reorganization of the entire data structure. Drawbacks of linked-lists, however, are: 
- random access of data elements is not allowed. Nodes must be accessed sequentially starting from the first one (head). Therefore, search operation is slow on a linked list with O(n).
- it uses more memory than arrays because of the storage used by the pointers that lead to the next node in the list.