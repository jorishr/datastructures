/**
 * #############
 * HASH FUNCTION
 * #############
 * Convert a string (key) into an index number for an array. In the example
 * below we make a sum of the character codes for each character in the string
 * Divide the sum by the number of available index positions you want and use 
 * the remainder. 
 * 
 * For example, the remainder of % 5 will be either 0, 1, 2, 3 or 4
 */
module.exports = function hash(str, maxIndex){
    let sum = 0;
    for(let i = 0; i < str.length; i++){
      sum += str.charCodeAt(i);
    }
    //console.log(`The sum of the character codes in this string is ${sum}`);
    let result = sum % maxIndex;
    return result;
}