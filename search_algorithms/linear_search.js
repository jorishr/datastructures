/**
 * LINEAR SEARCH
 * - time complexity: O(n)
 * - loop over all elements and compare to key
 * 
 * - to allow duplicates use an array to store indices
 * - to allow search for objects, convert to str before comparing
 */
function linearSearch(input, key){
    let result = [];
    for(let i = 0; i < input.length; i++){
        //if(input[i] === key) return i;
        if(typeof(key) === 'object'){
            if(JSON.stringify(input[i]) === JSON.stringify(key)) result.push(i);
        } else {
            if(input[i] === key) result.push(i);
        }
    }
    if(result.length > 1) return result;
    else if(result.length === 1) return result[0];
    else return -1;
}
module.exports = {
    linearSearch
}