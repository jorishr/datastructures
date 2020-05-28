# Recursion
Recursion is the process of sub-dividing a problem into multiple, smaller instances of the SAME problem. Put into practice, that generally means writing a function that calls or invokes itself multiple times.

## Factorial example
The classic example of this concept is the factorial function. The factorial of a number n is the product of all positive integers less than or equal to n. 

In other words, the factorial of 5 is 5 x 4 x 3 x 2 x 1. The mathematical notation for this is 5!.
```Javascript
function factorial(n){
  if (n < 0) return null;  
  if (n === 0){
    return 1;
  }
  return n * factorial(n - 1);
}
```
Here the return value of the factorial function calls itself with a parameter that is one less. 

Programatically, the current function is paused and put into memory, waiting for the subsequent recursion call to return a value. The datastructure used for this purpose is the STACK or call stack. 

At the bottom of the stack we get the main program function which has a pending multiplication that depends on the answer of the recursive call factorial(n-1).


As long as we don't reach factorial(1) the stack keeps on growing with pending multipliers that have to solved. 

This results in a RECURSION TREE:

                        fac(5)
                    fac(n-1)
                fac(n-2)
            fac(n-3)
        fac(n-4)
    fac(n-5)

Once you reach factorial(0) the answer is 1 and as a cascade the stack can be cleared as each function can return a value:
```
    fac(0) = 1
        1 * fac(0) = 1
            2 * fac(1) = 2
                3 * fac(2) = 6
                    4 * fac(3) = 24 
                        5 * fac(4) = 120     
```
### Time and space complexity
The time complexity calculation of the above factorial function: 
- compare if n = 1 return 1	-> one constant unit of time
- n * fac(n - 1) 	
    -> one constant unit of time for multiplication and one constant unit of time for substraction
- repeated n times
```
T(n) = T(n - 1) + 3 for n > 0, T(0) = 1 constant unit of time
	 = T(n - 2) + 6
	 = T(n - 3) + 9
	 ...
	 = T(0) + 3n
	 = 1 + 3n
```
Thus time complexity in big-o-notation is O(n) or a linear growth pattern.

The space complexity calculation: for each recursive call the current call is paused and thus stored in the call stack:
```
|fac(1)|
|fac(2)|
|fac(3)|
|fac(4)|
|fac(5)|
|------|
```
The maximum number of stack frames is n or equal to the max depth of the recursion tree (longest possible path from root to leaf). This results in a space complexity of O(n).

A potential issue with this recursive approach is that for very large numbers, the STACK requires a lot of memory because of the linear growth rate O(n). The recursion tree can become extremely deep, possibly overflowing the available stack space.

Possible solutions for this issue are [MEMOIZATION](memoization.md) and [TAIL RECURSION](tail_recursion.md). 

## Fibonacci sequence example
Another classic example case for recursion is the fibonacci sequence: 0 1 1 2 3 5 8 13 21 ...

Basic recursive function:
```javascript
function fib(n){
    if(n <= 1) return n;    // 0 or 1
    else fib(n - 2) + fib(n - 1);
}
```
To find the 4th fibonacci number you get:
```
fib(4)	= fib(2) + fib(3)
		= (fib(0) + fib(1)) + (fib(1) + fib(2))
		= (fib(0) + fib(1)) + (fib(1) + (fib(0) + fib(1)))
 		= (0 + 1) + (1 + (0 + 1)
		= 1 + (1 + 1)
		= 3
```
Or a recursion tree that looks like this:
```
					        fib(4)
			fib(2)			                fib(3)
	fib(0)	        fib(1)	         fib(1)	        fib(2)
							                    fib(0)  fib(1)	
```
This is extremely inefficient because:
- it uses double recursion, 
- once the two recursive functions finish we still need to remember the expression to make the sum of the two results
- the recursion will contain duplicates with f(1) being calculated thrice and fib(0) and fib(2) calculated twice.

### Time and space complexity calculation
- comparison: 1 constant unit of time
- substractions (n - 1) and (n - 2): 2 * 1 constant unit of time
- sum: 1 constant unit of time
- function is repeated n - 1 and n - 2 times
```
T(n) = T(n - 1) + T(n - 2) + 4 for n > 1 and T(0) = T(1) = 1

Assume T(n - 1) ~= T(n - 2)

T(n) = 2*T(n - 1) + 4
	 ...
	 = 2^n*T(0) + (2^n - 1)4
	 = 2^n + 4*2^n + 4
	 = (4 + 1) * 2^n + 4

T(n) ~= 2^n or a big-o-notation of O(2^n), an exponential growth rate. 
```
The SPACE complexity is related to the max depth of the recursion tree which is n resulting in a linear space complexity of O(n).