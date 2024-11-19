const { calcularMDC } = require('../codigos/calcularMDC');

test('deve retornar o MDC de 48 e 18', () => {
    expect(calcularMDC(48, 18)).toBe(6);
});

test('deve retornar o MDC de 56 e 98', () => {
    expect(calcularMDC(56, 98)).toBe(14);
});

test('deve retornar o MDC de 101 e 103', () => {
    expect(calcularMDC(101, 103)).toBe(1);
});
