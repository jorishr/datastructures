# Time complexity
The time complexity depends on multiple factors. Most are related to the configuration of the machine the program is running on: single vs multe processing units, read and write speed of the memory, 32 bit vs 64 bit systems, sequential vs multithreaded execution, etc.

As a programmer however the most important factor to consider is the relationship between the input size of the data and the running time. If possible, write a program whereby the rate of growth is linear at worst or constant at best.

A program of linear time complexity will take up n units of time to run a program with data input size = n. Thus if a processor can process one million instruction per second (10^6), the program will take 10^-3 or 1 millisecond to process 1000 (10^3) input elements and 1 full second to process a million input elements.

If the time complexity is constant, the running time for the program will the same for a thousand and a millions input elements.

## Examples
```javascript
function sum(a, b){
    return a + b;
}
```
The program will take one unit of time for the calculation (a + b) and one unit of time to return the result. Thus the total time = 1 + 1 = 2 units of time.
```javascript
const arr = [1, 2, 3];
const n   = arr.length;
function sumOfList(array, n){
    let sum = 0;
    for(let i = 0; i < n; i++>){
        sum = sum + array[i];
    }
    return sum;
}
```
The actions performed here are:
- write a variable: constant unit of time (w)
- the loop runs n + 1 times (including the false condition) and for each loop updates and compares the variable i with variable n, updating and comparing will take constant time
- and the loop writes to the variable sum n times the result of the operation sum + arr[i]with each variable update and each calculation taking a constant unit of time (w) and (s) 
- return variable: constant unit of time (r)
Total time = 
    w 
    + (n + 1) * w + (n + 1) * c 
    + n * w + n * s
    + r
If we assume that writing to a variable (w), comparing variables (c), calculating a sum (s) and returning a variable (r) take exactly one unit of time than we can simplify the time calculation:
```
w = r = c = s = 1 
time(t) =   1 
            + (n + 1) * 1 + (n + 1) * 1 
            + n * 1 + n * 1
            + 1
        =   1 + 2(n + 1) + 2n + 1 
        =   2 + 2n + 2 + 2n
        =   4 + 4n
```
In the example n = 3, thus the program sumOfList will take 16 units of processing time to complete. If n = 6, t = 28; if n = 12, t = 52. This is a linear growth rate.

All linear growth functions can grouped into a set called Big O of n: O(n). See asymptotic notation in [big_o_notation](big_o_notation.md);