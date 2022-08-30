const linearSearch = require('./linear_search').linearSearch;
const binarySearch = require('./binary_search').binarySearch;
const objectBinarySearch = require('./binary_search').objectBinarySearch;

describe('Search a given element in a datastructure', () =>{
    test('Linear search in O(n) returns the index of a given element', () =>{
        expect(linearSearch('', 'a')).toBe(-1);
        expect(linearSearch('a', 'a')).toBe(0);
        expect(linearSearch('abcd', 'a')).toBe(0);
        expect(linearSearch('bcda', 'a')).toBe(3);
        expect(linearSearch('abcda', 'a')).toStrictEqual([0,4]);
        expect(linearSearch([1,2,3,4,5,3], 3)).toStrictEqual([2,5]);
        expect(linearSearch([1,2,3,4,5], 3)).toBe(2);
        expect(linearSearch([], 3)).toBe(-1);
        expect(linearSearch([{'a': 1},{'b': 2},{'c': 3}], {})).toBe(-1);
        expect(linearSearch([{'a': 1},{'b': 2},{'c': 3}], {'c': 3})).toBe(2);
    })
    test('Binary search in O(log(n)) returns the index of a given element', () =>{
        expect(binarySearch([1,2,3,4,5], 3)).toBe(2);
        expect(binarySearch([], 3)).toBe(null);
        expect(binarySearch([1,2,3,4,5,6], 3, 5, 0)).toBe(null);
        expect(binarySearch([1,2,3,4,5,6], 3, 0, 1)).toBe(-1);
        expect(binarySearch([1,2,3,4,5,6], 3, 3, 5)).toBe(-1);
    })
    test('Object binary search in O(log(n)) returns the index of a given object', () =>{
        expect(objectBinarySearch([{'a': 1},{'b': 2},{'c': 3}], {'c': 3})).toBe(2);
        expect(objectBinarySearch([{'a': 1},{'b': 2},{'c': 3}], {})).toBe(-1);
    })
})