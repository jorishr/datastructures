# Tail recursion
- [Tail recursion](#tail-recursion)
  - [Factorial example](#factorial-example)
  - [Fibonacci sequence example](#fibonacci-sequence-example)
  - [Is a number an even number](#is-a-number-an-even-number)

A potential issue with the classic recursive approach is that for very large data, the STACK requires a lot of memory because of the linear growth rate O(n). The recursion tree can become extremely deep, possibly overflowing the available stack space.

Moreover, the Fibonacci sequence example illustrates that when multiple recursion expressions are used in the same function that function may become very slow because it has to traverse multiple recursion trees with great depth and duplicate calculations.  

Tail recursion does not necessarily improves the running time but does dramatically reduce the memory consumption down to constant space.

## Factorial example
By using a helper function with an accumulator we can make the recursive process much more efficient.

The idea of the tail recursion is to make a single recursive call and after you made that call there is nothing left to evaluate or remember.

For each function call we evaluate the expression and store the intermediate result in an accumulator parameter and then make another recursive call with no other expressions left to store or remember. 
```javascript
function go(n, acc = 1){
    n === 1 ? acc : go((n - 1), (n * acc);
}
function factorial(n){
    if(n < 0) return null;
    return go(n, 1);
}
```
Recursion tree:
```
                        fac(5)
                    go(5,1)
                go(4, 5)
            go(3, 20)
        go(2, 60)
    go(1, 120)
```
Time complexity for this function is O(n) 
- compare: 1 constant unit of time
- subtract and multiply: 2 constant units of time
- repeated n times: T(n) = 3n

The big gain however is the reduced space complexity from O(n) to O(1) as there is no need to store function calls on the stack. There is max one function call on the stack at any time.
```
go(5,1) returns go(4,5), go(5,1) popped from the stack 
    go(4,5) returns go(3,20), go(4,5) popped from the stack 
        ...
            go(1, 120) returns value 120         
```

## Fibonacci sequence example
The basic recursion function has linear space complexity of O(n) and very inefficient time complexity of O(2^n). See [recursion.md](recursion)
```javascript
function fib(n){
    if(n <= 1) return n;    // 0 or 1
    else fib(n - 2) + fib(n - 1);
}
```
By using tail recursion we can reduce the time complexity to a linear growth pattern O(n) and optimize the space complexity to a constant. 

As with factorial example we can use a helper function. The helper function takes a pair of numbers as parameters whereby parameter a is the current number in the sequence. Parameter b is the next number in the sequence. The function updates the pair so that we move along in the sequence until we get to n-th position. 

```javascript
function go(n, a = 0, b = 1){
    if(n === 0) return a;
    else if(n === 1) return b;
    else return go(n - 1, b, (a + b));

function fib(n){
    return go(n, 0, 1);
}
```
To find the 4th position in the sequence we get:
```
fib(4) = go(4, 0, 1)
	   = go(3, 1, 1)
	   = go(2, 1, 2)
	   = go(1, 2, 3)
	   = return b = 3
```
Recursion tree:
```
                     fib(4)
                go(4, 0, 1)
            go(3, 1, 1)
        go(2, 1, 2)
    go(1, 2, 3)
```
Time complexity: 
O(n) or linear growth rate. The function call is repeated n times with constant time for comparisons, subtractions and calculations (n * (1 + 1 + + 1 + 1)).
 
Space complexity: 
O(1) or constant space because no function environments need to be stored on the call stack. Each recursive call is immediately resolved and popped from the stack.

Another way to optimize the Fibonacci sequence is by using [memoization](memoization.md).

## Is a number an even number
To check whether a number is even or odd you can use the module or a recursive function by  continuously subtracting 2 until you 0 (even) or 1 (odd). This approach is tail recursive and uses constant space O(1) while the running time is O(n).

To account for negative number you can add additional condition that set the recursion in motion with the positive equivalent integer.
```javascript
function isEven(n){
    if(n === 0){
        return true;
    } else if(n === 1){
        return false;
    } else if(n < 0){
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
}
```
Obviously, to have both constant time and space complexity use the modulo approach.
```javascript
function isEven(n){
    if(n < 0) return isEven(-n);
    else return n % 2 === 0;
}
```