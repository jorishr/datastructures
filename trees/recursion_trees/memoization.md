# Memoization
To avoid repeating calculations in a recursive function, we can store the results of those calculations in memory. For each new recursive call we add an additional clause that checks for existing calculation results. 

This approach can memory intensive but can save us a significant amount of running time.

Consider basic Fibonacci sequence recursive function:
```javascript
function fib(n){
    if(n <= 1) return n;    // 0 or 1
    else fib(n - 2) + fib(n - 1);
}
```
The issue here is the double recursion with extensive recursion trees that contain lots of duplicate calculations, especially for higher numbers. See [recursion](recursion.md).

Running time complexity is O(2^n) and space complexity is O(n).

To improve the running time complexity we do the following:
```
if(fib(n) is in memory) return fib(n)
else {
    fib(n) = fib(n - 1) + fib(n - 2)
    store fib(n) in memory
    return fib(n)
```
This will result in simplified recursion tree:
```            
                                        fib(5)
                        fib(4)                          fib(3)
                fib(3)          fib(2)   
        fib(2)          fib(1)
fib(1)          fib(0)
```
The tree will be traversed on the left branch first. This means that we have the result for fib(2) and fib(3) stored in memory and thus there is no need to further expand the tree.

To implement this technique we need to use an array and fill it with as many values as we want to calculate in the sequence. We can set the first two values, so we can eliminate the first conditional statement in the function.
```javascript
let fnArr = new Array(50).fill(-1);
fnArr[0] = 0;
fnArr[1] = 1;
function fib(n){
    //if(n <= 1) return n;    // 0 or 1
    else if(fnArr[n] === -1){
        fnArr[n] = fib(n - 2) + fib(n - 1);
        return fnArr[n];
    } else {
        return fnArr[n];
    }
}
fib(5);     // -> 5
fib(10)     // -> 55
fib(20)     // -> 6765
```