const { verificarPrimo } = require('../codigos/verificarPrimo');

test('deve identificar 29 como primo', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    verificarPrimo(29);
    expect(console.log).toHaveBeenCalledWith("O número 29 é primo.");
});

test('deve identificar 30 como não primo', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    verificarPrimo(30);
    expect(console.log).toHaveBeenCalledWith("O número 30 não é primo.");
});

test('deve identificar 1 como não primo', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    verificarPrimo(1);
    expect(console.log).toHaveBeenCalledWith("O número 1 não é primo.");
});
