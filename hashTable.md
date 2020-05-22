# Hash tables
The concept of a hash table is a key-value. 

A hashtable can be used to creat ASSOCIATIVE ARRAYS - a map of key value pairs, or OBJECTS.

It is the perfect solution for associating data with a name. For example, a persons name and a number of other atributes like address, email, age, etc.
```
'John' => new Person('<id>','NewCity', 'Main Road', 30);

hashtable.put('John', new Person(...));
hashtable.get('John');	//-> list all related data

Each new person object instance is stored in an array:

a[0]	//-> 'John'	
a[1]	//-> 'Mary'
a[2]	//-> 'Al'	
...
```
To create that array you need a HASH FUNCTION. The hash function takes in a string, converts it to an integer and maps that integer into an index in the array.

The hashcode function maps from the KEY (string) into hashcode, and from the hashcode it maps into an index.

## Hash collision
The potential number of hashcodes is FINITE and may be smaller than the number of string combinations which is infinite. Theoretically different strings could result into the same hash code.

Additionally, we map the hashcode into an array that may be much smaller than the millions of hashcode combinations. Thus different hashcodes can result into the same array index. This is called a HASH COLLISION.

One possible solution for a hash collision could be to CHAIN the values at the same index position into a linked list. Example:

a[0]	//-> (p0, 'Jenny'), (p1, 'Eric')

Thus the array becomes an array of linked-lists that hold the individual values.

## Time complexity
Hash tables are very fast and efficient. The time complexity in Big O Notation is O(1) for insert, search an delete. Thus the time to insert, lookup or delete an element is not tied to the overall number of elements in the table.