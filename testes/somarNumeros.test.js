const { somarNumeros } = require('../codigos/somarNumeros');

test('deve somar corretamente os números fornecidos', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    somarNumeros(5, [10, 20, 30, 40, 50]);
    expect(console.log).toHaveBeenCalledWith("A soma dos 5 números é: 150");
});

test('deve somar corretamente quando o array estiver vazio', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    somarNumeros(0, []);
    expect(console.log).toHaveBeenCalledWith("A soma dos 0 números é: 0");
});
