/**
 * ##########
 * MERGE SORT
 * ##########
 * Merge sort is an efficient general-purpose comparison-based sorting
 * algorithm. It uses a divide-and-conquer approach whereby the array is first
 * broken down into single units through a recursive process of dividing the 
 * array in half.
 * 
 * Then compare each element with its adjacent value and merge the results 
 * back together to produce the complete sorted array.
 * 
 * [5,3,4,2,1]
 * Divde 
 *     -> [5,3,4]              -- [2,1]
 *      -> [5,3] -- [4]                 [2] -- [1]
 *      -> [5] -- [3] --  [4]
 * Merge  
 *      -> [3,5] -- [4]                 [1,2]
 *      -> [3,4,5]                      [1,2]
 *      -> [1,2,3,4,5]
 */ 
module.exports = function mergeSort(arr){
    const n = arr.length;
    if(n <= 1) return arr;

    const mid = Math.floor((n / 2));
    const leftArr  = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid, n));
    return merge(leftArr, rightArr);
}
/**
 * The left an right array can be of different length.
 * The .shift method allows us to 'empty' out the array one by one
 * Once one of the array is empty, exit the loop.
 * If the other one has elements left in it, those can be simply added through
 * concatenation because they will have been ordered in a previous step.
 * 
 */
function merge(arr1, arr2){
    let sortedArr = [];
    while(arr1.length && arr2.length){
        let min;
        if(arr1[0] <= arr2[0]){
            min = arr1.shift();
        } else {
            min = arr2.shift();
        }
        sortedArr.push(min);
    }
    //if one of the arrays has elements left in it, concat to result arr
    if(arr1.length){
        sortedArr = sortedArr.concat(arr1);
    } 
    if(arr2.length){
        sortedArr = sortedArr.concat(arr2);
    }
    return sortedArr;
}
/**
 * TIME COMPLEXITY
 * The time complexity for this approach will be O(n * log(n)) while the space 
 * complexity is O(n).
 * 
 * T(n) = 2T(n/2) + n because you get two lists of half the size of the 
 * original list and add the n steps taken to merge the resulting two lists.
 */