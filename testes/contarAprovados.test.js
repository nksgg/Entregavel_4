const { contarAprovados } = require('../codigos/contarAprovados');

test('deve contar corretamente os alunos aprovados', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    contarAprovados(5, [55, 48, 65, 40, 75]);
    expect(console.log).toHaveBeenCalledWith("A quantidade de alunos que passaram no exame foi: 3");
});

test('deve retornar 0 alunos aprovados quando nenhum aluno passar', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    contarAprovados(3, [30, 40, 20]);
    expect(console.log).toHaveBeenCalledWith("A quantidade de alunos que passaram no exame foi: 0");
});

test('deve retornar 5 alunos aprovados quando todos passarem', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    contarAprovados(4, [60, 75, 80, 50]);
    expect(console.log).toHaveBeenCalledWith("A quantidade de alunos que passaram no exame foi: 4");
});
