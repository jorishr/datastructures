const swap = require('./swap');
const bubbleSort = require('./bubble_sort');
const selectionSort = require('./selection_sort');
const insertionSort = require('./insertion');
const mergeSort = require('./merge'); 

describe('Array sorting algorithm tests', () => {
    test('Swap array values in place', () => {
        expect(swap([1,2,3,4,5], 0, 1)).toStrictEqual([2,1,3,4,5]);
        expect(swap([1,2,3,4,5], 1, 1)).toStrictEqual([1,2,3,4,5]);
        expect(swap([1,2,3,4,5], 0, 4)).toStrictEqual([5,2,3,4,1]);
        expect(swap([1,2,3,4,5], 3, 2)).toStrictEqual([1,2,4,3,5]);
        expect(() => {swap([], 0, 2).toThrowError()})
        expect(() => {swap([], null, 2).toThrowError()})
        expect(() => {swap([], 0, 'a').toThrowError()})
        expect(() => {swap([1,2,3,4,5], 6, 2).toThrowError()})
        expect(() => {swap([1,2,3,4,5], 0, -1).toThrowError()})
        expect(() => {swap([1,2,3,4,5], -1, 3).toThrowError()})
        expect(() => {swap('abcd', 0, 1).toThrowError()})
        expect(() => {swap(15636, 0, 1).toThrowError()})
        expect(() => {swap({'a': 1}, 0, 1).toThrowError()})
    })
    test('Bubble sort arranges integer array in ascending order', () => {
        expect(bubbleSort([2,3,5,4,1])).toStrictEqual([1,2,3,4,5]);
        expect(bubbleSort([1,3,5,4,2])).toStrictEqual([1,2,3,4,5]);
        expect(bubbleSort([1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
    })
    test('Bubble sort arranges integer array in descending order', () => {
        expect(bubbleSort([2,3,5,4,1], false)).toStrictEqual([5,4,3,2,1]);
        expect(bubbleSort([1,3,5,4,2], false)).toStrictEqual([5,4,3,2,1]);
        expect(bubbleSort([1,2,3,4,5], false)).toStrictEqual([5,4,3,2,1]);
    })
    test('Selection sort arranges integer array in ascending order', () => {
        expect(selectionSort([2,3,5,4,1])).toStrictEqual([1,2,3,4,5]);
        expect(selectionSort([1,3,5,4,2])).toStrictEqual([1,2,3,4,5]);
        expect(selectionSort([1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
    })
    test('Insertion sort arranges integer array in ascending order', () => {
        expect(insertionSort([2,3,5,4,1])).toStrictEqual([1,2,3,4,5]);
        expect(insertionSort([1,3,5,4,2])).toStrictEqual([1,2,3,4,5]);
        expect(insertionSort([1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
        expect(insertionSort([])).toStrictEqual([]);
        expect(insertionSort([1])).toStrictEqual([1]);
        expect(insertionSort([2,1])).toStrictEqual([1,2]);
    })
    test('Merge sort arranges integer array in ascending order', () => {
        expect(mergeSort([2,3,5,4,1])).toStrictEqual([1,2,3,4,5]);
        expect(mergeSort([1,3,5,4,2])).toStrictEqual([1,2,3,4,5]);
        expect(mergeSort([1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
        expect(mergeSort([])).toStrictEqual([]);
        expect(mergeSort([1])).toStrictEqual([1]);
        expect(mergeSort([2,1])).toStrictEqual([1,2]);
    })
})