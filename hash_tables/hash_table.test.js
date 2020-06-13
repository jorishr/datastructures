const hash = require('./hash_function');
const HashTable = require('./hash_table');
describe('Hash function test', () => {
    test('Hash function converts input string into integer between 0 and max index', () => {
        expect(hash('hello world', 5)).toBe(1)
        expect(hash('hello', 5)).toBe(2)
        expect(hash('hello ', 5)).toBe(4)
        expect(hash('hello!', 5)).toBe(0)
    })
})
describe('Test hash table functionality', () => {
    const testHashTable = new HashTable(10); 
    test('Instanciate new hashtable, insert key-value pairs, find keys', () => {
        expect(testHashTable).toBeInstanceOf(HashTable);
        expect(testHashTable.limit).toBe(10);
        expect(testHashTable.table).toStrictEqual([]);
    })   
    test('Hashtable print function', () => {
        expect(testHashTable.print()).toStrictEqual([]);
    })
    test('Insert key-value pairs into hashtable - lookup those keys and return value', () => {
        const insert1 = testHashTable.insert('name', 'John');
        const insert2 = testHashTable.insert('name', 'Jane'); //overwrites value
        const insert3 = testHashTable.insert('location', 'somewhere');
        expect(testHashTable.find('name')).toStrictEqual('Jane');
        expect(testHashTable.find('location')).toStrictEqual('somewhere');
    })
    test('Delete key-value pair from hastable', () => {
        expect(testHashTable.find('name')).toBe('Jane');
        const deleted = testHashTable.remove('name');
        expect(testHashTable.find('name')).toBe(null);
    })
})