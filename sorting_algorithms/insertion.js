/**
 * ##############
 * INSERTION SORT
 * ##############
 * [4,3,5,1,2]
 *      -> i = 1, compare [0] > [1], swap 3,4   -> [3,4,5,1,2]
 *      -> i = 2, compare [1] > [2], no swap  
 *                compare [0] > [1], no swap
 *      -> i = 3, compare [2] > [3], swap 1,5   -> [3,4,1,5,2]    
 *                compare [1] > [2], swap 1,4   -> [3,1,4,5,2]
 *                compare [0] > [1], swap 1,3   -> [1,3,4,5,2]
 *      -> i = 4, compare [3] > [4], swap 2,5   -> [1,3,4,2,5] 
 *                compare [2] > [3], swap 2,4   -> [1,3,2,4,5] 
 *                compare [1] > [2], swap 2,3   -> [1,2,3,4,5]
 *                compare [0] > [1], no swap 
 */

const swap = require('./swap');
function insertionSort(arr){
    const n = arr.length;
    let current = 1;
    while(current < n){
        let j = current;
        //find all previous values that are greater and swap places
        while(arr[j - 1] > arr[j] && j > 0){
            swap(arr, j - 1, j);
            j--;
        }
        current++;
    }
    return arr;
}
module.exports = insertionSort;