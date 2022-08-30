/**
 * ##########
 * HASH TABLE
 * ##########
 * The base properties are an array and a limit of index positions.
 * 
 * To print the hash table, simply log the array.
 * 
 * Inserting values into the table:
 * To take into account possible hash collisions, store the key-value pairs as
 * an array of arrays at each index position
 * 
 * If the index position has no values stored, simply set new value
 * If a value is already stored at a given index we have a hash collision:
 * - loop over existing entries and update the value if the key already exists
 * (avoid duplicate keys)
 * - if the key does not already exist, push a new array to the exisiting array
 * 
 * When looking up keys run the key through the hash function and compare:
 * - either the key does not exist
 * - loop over the array of arrays and only return the value for which the key
 * matches the first value [i][0] [[0:key, 1:value], [], [],...]
 * */
const hash = require('./hash_function');
module.exports = class HashTable {
    constructor(max){
        this.table = [];
        this.limit = max;
    }
    print(){
        console.log(this.table);
        return this.table;
    }
    insert(key, value){
        const index = hash(key, this.limit);
        if(this.table[index] === undefined){
            this.table[index] = [
                [key, value]
            ]
        //console.log('The key-value pair was succesfully added to the hash table');
        } else {
            let overwritten = false;
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index][i][1] = value;
                    //console.log(`The key ${key.toUpperCase()} already exists, existing value overwritten with: ${value}`);
                    overwritten = true;
                }        
            }
            if(!overwritten){
                this.table[index].push([key, value]); 
                //console.log('The key-value pair is succesfully added to the hash table');
            }
        }
    }
    find(key){
        const index = hash(key, this.limit);
        if(this.table[index] === undefined){
            //console.log('Key not found in this hash table');
            return null;
        } else {
            for(let i = 0; i < this.table[index].length; i++){
                const current = this.table[index][i];
                if(!current){
                    //console.log(`The key: ${key}, cannot be found in this hash table`);              
                    return null;
                } 
                if(current[0] === key){
                    //console.log(`Value found for the key ${key.toUpperCase()} is: ${current[1]}. Key-value pair found at index [${index}] [${i}]`);
                    return current[1];
                }
            }
        }
    }
    remove(key){
        const index = hash(key, this.limit);
        if(this.table[index] === undefined){
            //console.log(`${key} not found in this hash table`);
            return null;
        } else {
            for(let i = 0; i < this.table[index].length; i++){ 
                const current = this.table[index][i];
                if(current[0] === key){
                    delete this.table[index][i];
                    //console.log(`The key-value pair found at index [${index}] [${i}] has been removed`);
                    return [current[0], current[1]];
                }
            }           
        }
    }
}