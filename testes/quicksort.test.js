const { quicksort } = require('../codigos/quicksort');

test('deve ordenar um array de números', () => {
    expect(quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

test('deve retornar um array vazio se o array de entrada for vazio', () => {
    expect(quicksort([])).toEqual([]);
});

test('deve ordenar um array com um único número', () => {
    expect(quicksort([42])).toEqual([42]);
});
