# Big-O-notation
Big O notation is an indicator of algoritmic efficiency. It indicates how the run time of an algorithm scales with respect to the size of the input data. It is a way of measuring the cost of an algorithm in time and memory resources.

Big O is an asymptothic notation whereby the constant and less significant factors are ignored to simplify the time calculation while still maintaining an upper bound (or lower bound) that is close to but more (or less) than the actual run time of the function. This can be done because for very large n values, the less significant factors don't add to or substract much from the result.

Thus T(fn) = 2n^2 + 2 + n will be reduced to T(gn) = n^2 whereby gn is bigger than and relatively close fn resulting in an upperbound of O(n^2). 

To calculate the lower bound of the growth rate, Omega notation is used. The best time estimation is obtained throught the tight bound or Theta notation.

## Big-O values
O(1), or O of one refers to constant run time related to the size of the data. Whether the input data is small or large, the algorithm will take x amount of time to complete.

O(n), or O of n scales linearly with the growth in size of the input data. Thus for every additional input of data it will take the algorithm an extra unit of time to complete. Roughly twice the amount of data will take twice the amount of time.

O(log n), O logarithm represents a logarithm for which the number of operations it takes to run will be log base 2 of the input size (n). Thus for an array with 10 elements it takes log2(10) or roughly 3 operations. As root square of 10 is 3.16...
The perfect example of O(log n) is a binary search. You go to the middle value, if middle > search value, discard right side. Repeat the process. Because in each step you halve the values you have to search through, the time complexity becomes easier the bigger the n number. It is the opposite of an exponential curve.

The variant O(n log n) is like above but multiplied by n, thus being less efficient the bigger n value.

O(n^2), O squared represents an algorithm that scales quadratically and thus is very inefficient. In fact it may never end when n is a large number. A commonly known example for this is the Bubblesort, which uses two loops that iterate over the same dataset.

O(2^n), represents an exponential time complexity. Execution time will double with each new element.

O(n!) algorithms will execute in n factorial time per every new operation. Extremely unperformant.

Consider the example:
```
 ----
|####|
|####|
|####|
|####|
 ----
 ```
If the surface is (a) and a side is represented by (s), then to visit the entire square would be: O(a) = O(s * s) or O(s^2). 

Excellent: O(1)
Good: O(log n)
fair: O(n)
bad: O(n log n)
very unperformant: O(n^2), O(2^n), O(n!)

## Four keys rules to describe an algoritm's Big O Notation complexity
- If you have multiple steps, you add them up. An example would be to loop through two arrays.
```
function(){
	step a()	//-> O(a)
	step b()	//-> O(b)
}
//-> O(a + b)
```
- Drop or ignore constants. Two different loops may seem two different steps but that is not always the case. You need to look at what is actually happening in the loop. Consider the example:
```
function findMinMax(arr){
	forEach elem in arr		//-> O(n)
		min = min(elem, min)
	forEach elem in arr		//-> O(n)
		max = max(elem, max)
}
```
Two loops are given so its tempting to think O(n + n) or O(2n) with n being the size of the array. But in practice the function can be rewritten and simplified to use just one loop and find both min and max values.

Thus here the big-o-notation is O(n).

- Use different variables for different inputs. An example would be two arrays and a loop within a loop.
```
function(arr1, arr2){
	let count = 0;
	for(loop arr1){			//-> O(a)
		for(loop arr2){		//-> O(b)
			if(a === b){
				count++
			}
		}
	}
	return count;
}
//-> O(a * b) with a = length of arr1 and b = length of arr2
```
- Drop or ignore non-dominant terms when multiple steps are present. Example:
```
function(){
	step 1	//-> O(n)
	step 2	//-> O(n^2) n-squared
}
//-> O(n + n^2)
```
But remember that O(n^2) <= O(n + n^2) <= O(n^2 + n^2) whereby O(n) can be considered a constant because what really drives the algorithm here is the dominant factor n^2 (n-squared).

Thus -> O(n^2) n-squared is the correct result here.

## Space complexity
The space complexity is related to how much memory the program will use.

For example, selection sort has a space complexity of O(1), because it only stores one minimum value and its index for comparison, the maximum space used does not increase with the input size.