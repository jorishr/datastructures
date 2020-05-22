# Queues
A queue is first-in-first-out (FIFO) collection of data. Insertion and deletion of 
elements can only happens at one end of the collection. Insertion happens at
the end or tail of the collection, deletion happens at the front or head of 
the collection.

Time complexity of most operations is O(1) or constant time as only one element
is added or removed.

Queues can be implemented in JS with three different approaches:
- A. with the use of an array and the methods .push() and .shift().
- B. with use of a circular array
- C. with use of a linked list

The disadvantage of the array implementation is that allocated memory for a fixed size array may remain unused as long as the queue is not full. Also, once an array is full you either deny new entries or have to copy the existing array into a new array which has a time cost of O(n).

If we adhere to the strict time complexity requirements for a queue (O(1)) we have to modify the classical linked list by also storing the tail of the list in addition to the head. By doing so we can avoid the linked list traversal to find the last node, an operation that takes O(n).