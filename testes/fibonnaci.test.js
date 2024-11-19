const fibonnaci = require('../codigos/fibonnaci');

test('deve retornar os primeiros 5 números da sequência de Fibonacci', () => {
    expect(fibonnaci(5)).toEqual([0, 1, 1, 2, 3]);
});

test('deve retornar os primeiros 10 números da sequência de Fibonacci', () => {
    expect(fibonnaci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('deve retornar um array vazio quando a quantidade de números for 0 ou menor', () => {
    expect(fibonnaci(0)).toEqual([]);
    expect(fibonnaci(-5)).toEqual([]);
});

test('deve retornar apenas o número 0 quando a quantidade for 1', () => {
    expect(fibonnaci(1)).toEqual([0]);
});

test('deve retornar os dois primeiros números da sequência de Fibonacci quando a quantidade for 2', () => {
    expect(fibonnaci(2)).toEqual([0, 1]);
});
