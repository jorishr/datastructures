function swap(data, i, j){
    //error and edge case handling
    const n = data.length;
    const typeI = typeof(i) === 'number'; 
    const typeJ = typeof(j) === 'number'; 
    if(n === 0) throw new Error('Array cannot be empty');
    if(!Array.isArray(data)){
        throw new Error('Invalid data data. Expected: Array');
    }
    if(!typeI || !typeJ || i < 0 || j < 0 || i > n - 1 || j > n - 1){
        throw new Error('Invalid index parameters. Use a positive integer between 0 and n - 1');
    }
    //fn logic
    if(i === j) return data;
    let tmp = data[i];
    data[i]  = data[j];
    data[j]  = tmp;
    return  data; 
}
module.exports = swap;