/**
 * ###########
 * BUBBLE SORT
 * ###########
 * The bubble sort algorigtm repeatedly goes through the list to be sorted, 
 * compares each pair of adjacent items and swaps them if they are in the wrong
 * order (ascending or descending arrangement).
 * 
 * The basic approach below has time complexity of O(n^2). If you add a 
 * tracking variable swapped, the best case can be improved to O(n) because if 
 * an inner loop completes without swapping values, the arr is sorted.
 * 
 * You can also shorten the loops to stop n - 1 since the comparison already
 * checks the last value (i + 1) at the penultimate step.
 */
const swap = require('./swap');
function bubbleSort(arr, ascending = true){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        //let swapped = false;
        for(let j = 0; j < n - 1; j++){
            if(ascending){
                if(arr[j] > arr[j + 1]) swap(arr, j, j + 1);
                //swapped = true;
            } else {
                if(arr[j] < arr[j + 1]) swap(arr, j, j + 1);
                //swapped = true;
            }
        }
        //if(!swapped) return arr;
    }
    return arr;
}
module.exports = bubbleSort;