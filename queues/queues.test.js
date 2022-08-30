const PriorityQueue = require('./priority_queue');

describe('Priortity Queue functionality tests', () => {
    const priorityTestQueue = new PriorityQueue();
    test('Instanciate new priority queue', () => {
        expect(priorityTestQueue).toBeInstanceOf(PriorityQueue);
        expect(priorityTestQueue.queue).toStrictEqual([]);
        expect(priorityTestQueue.limit).toBe(10);
    })
    test('Enqueue elements in order of priority, isFull?', () => {
        const enqueu1 = priorityTestQueue.enqueue('a');
        const enqueu2 = priorityTestQueue.enqueue('b', 1);
        const enqueu3 = priorityTestQueue.enqueue('c', 2);
        const enqueu4 = priorityTestQueue.enqueue('d', 3);
        const enqueu5 = priorityTestQueue.enqueue('e', 4);
        const enqueu6 = priorityTestQueue.enqueue('f', 5);
        const enqueu7 = priorityTestQueue.enqueue('x', 2);
        const enqueu8 = priorityTestQueue.enqueue('y', 2);
        const enqueu9 = priorityTestQueue.enqueue('z', 5);
        const enqueu10 = priorityTestQueue.enqueue('last', 0);
        expect(priorityTestQueue.queue).toStrictEqual([['f', 5], ['z', 5], ['e', 4], ['d', 3], ['c', 2], ['x', 2], ['y', 2], ['b', 1], ['a', 0], ['last', 0]])
        expect(priorityTestQueue.isFull()).toBe(true);
    })
    test('Clear the queue, isEmpty?', () => {
        const clear = priorityTestQueue.clear();
        expect(priorityTestQueue.queue).toStrictEqual([]);
        expect(priorityTestQueue.isEmpty()).toBe(true);
    })
})