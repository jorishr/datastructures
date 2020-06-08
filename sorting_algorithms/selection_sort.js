/**
 * ##############
 * SELECTION SORT
 * ##############
 * Selection sort is an in-place comparison sorting algorithm that iterates
 * through the list to ensure every element at index i is the smallest/largest
 * element of the list. 
 * 
 * It is similar to bubble sort. 
 * 
 * Use a reference value, default = arr[0]
 * Loop over the remain elements. If el > reference, update reference and swap
 * [3,4,5,1,2]
 * loop 0: ref = 3
 *          loop 0: 
 * 
 * 
 * 
 * 
 * TIME COMPLEXITY
 * It has an O(n^2) time complexity, which makes it inefficient on large lists.
 * The if statement has a straightforward constant time complexity of O(1) but 
 * the outer loop runs n times and the inner loop runs n-1 times. 
 * T = n(n-1) = n^2 - n
 */
const swap = require('./swap'); 
function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        let lowest = i;
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[lowest]) lowest = j;
                swap(arr, i, lowest);
        }
    }
    return arr;
}
module.exports = selectionSort;