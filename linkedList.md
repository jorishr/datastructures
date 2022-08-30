- [1. Linked-list vs array](#1-linked-list-vs-array)
  - [1.1. Access/read](#11-accessread)
  - [1.2. Insertion/deletion](#12-insertiondeletion)
  - [1.3. Space complexity](#13-space-complexity)
- [2. Doubly linked list](#2-doubly-linked-list)

A linked list is an ordered collection of data. 

The nodes are NOT stored in a sequential order as in array, they can be found at unrelated memory allocations.

The list of data points is linked together with pointers. Each data point or NODE has a POINTER that points to the next value or next node in the list.

The very first node is the HEAD, the TAIL or last node has a pointer value of NULL.

Each node in the list consists of the actual DATA field plus a REFERENCE or pointer.

## 1. Linked-list vs array
### 1.1. Access/read
Reading elements is generally faster for an array as the indexed elements are stored in one sequential memory block. If index[0] is stored at memory allocation block 200, then we know immediately where ALL other indexed elements can be found. Since the operation of accessing elements takes constant time or O(1) for an array, an array is good choice for storing data that will be read often.

A linked-list on the other hand has a time complexity of O(n) in the worst of cases. Only the memory location for the head is known and can be accessed in constant time. All other elements are stored at random or unknown memory locations that have to be discovered by traversing the list. If that search value is stored at the end of the list you'll have traverse all nodes. Therefore time complexity is O(n).

### 1.2. Insertion/deletion
Insertion/deletion can come in three scenarios: at the beginning, the end, and at index.

- prepend

For the array, the insertion at the beginning is costly because you have to shift all other elements to the next index. Thus, the average time complexity is O(n).

For the linked-list this is a fast operation because you only need to create a node and point it to the previous head of the list. Time complexity is O(1), or constant.

- append

For inserting an element at the end of the data structure, the time complexity is reversed: adding an additional value to the array takes constant time O(1) because we already know that the last index is array.length - 1. One exception, depending on the programming language: if the array's memory location is full, a new and bigger size array needs to be created with a copy of the original one. In this case the time-complexity is also O(n).

A linked-list requires you to traverse the entire list to find the last node and adjust its pointer. Thus for a linked-list appending has a time-complexity of O(n).

- at nth

For inserting an element at nth position both array and linked-list have a time-complexity of O(n) at worst because you have to shift the remaining elements in the array or traverse the list to find the nth position and to adjust the pointers.

### 1.3. Space complexity
An array has a fixed size that can be extended (doubled) as needed. This means that as long as the array is not at full capacity, some of the allocated memory is unused. Plus, if you want to double the array size you need a solid sequential block of memory to be available. 

For a linked-list each node is stored separately, so there is no unused memory space. However, storing the pointers alongside each element means you use more (double) memory for each element (example: 4 byte integer + 4 byte pointer).

## 2. Doubly linked list
An additional field can be added to store a pointer to the previous element in the list. The advantage is that reverse traversal becomes much easier to program. The cost is that you have additional memory requirements to store an additional pointer for each node.