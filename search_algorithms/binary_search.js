/**
 * BINARY SEARCH
 * - assume the array is sorted
 * 
 * Binary search compares the target value to the middle element of the array.
 * If they are unequal, the half in which the target cannot lie is eliminated 
 * and the search continues on the remaining half until it is successful. 
 * 
 * If the search ends with the remaining half being empty, the target is not in
 * the array.
 * 
 * LOGIC
 * The key challenge is to halve the array on each iteration. You start with
 * the middle of the original array with two possibilities: go up (right) or go
 * down (left).
 *  
 * - Discarding the lower half means you adjust the starting index of search 
 * range: arr[0] is moved to arr[middle + 1]. 
 * 
 * - Discarding the upper half means you bring down the last index: 
 * arr[last] is moved to arr[middle - 1]
 * 
 * Example: seek index for number 4 in [0,1,2,3,4].
 * - middle value = (arr.length - 1) / 2 = 4 / 2 = 2, arr[2] = 2
 * Three options are open: 
 *     arr[i] = key, return i
 *     arr[i] < key, discard all elem < arr[i]
 *         new search range: [arr[middle + 1] ... arr[last]]
 *         in the example: [0,1,2,[3,4]] 
 *     arr[i] > key -> discard all elem > arr[i]
 *         new search range = [arr[0] ... arr[middle - 1]];
 *         in the example: [[0,1],2,3,4]
 * 
 * Repeat the process as long startindex of range < endindex of range
 *  
 * The loop should end when the search range has just one element left, thus 
 * when startIndex == lastIndex
 *  */
function binarySearch(input, key, start = 0, end = input.length - 1){
    //invalid search range
    if(start > end) return null;
    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        if(input[mid] === key){
            return mid;
        } else if(input[mid] < key){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;    
}
/**
 * TIME COMPLEXITY EVALUATION
 * Since we half the array on each iteration the algorithm is time-efficient with
 * O(log(n)). For each doubling in length of the array(n), the time to complete
 * the function will only increase with one unit of time. 
 * *
 * 
 * OBJECT SEARCH
 * If search key is an object you need to convert the comparison inputs into strings
 * */
function objectBinarySearch(input, key, start = 0, end = input.length - 1){
    //invalid search range
    if(start > end) return null;
    const keyValue = JSON.stringify(key);
    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        const midValue = JSON.stringify(input[mid]);
        if(midValue === keyValue){
            return mid;
        } else if(midValue < keyValue){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;    
}
module.exports = {
    binarySearch,
    objectBinarySearch
}