function contarAprovados(n, notasAlunos) {
  let contador = 0;

  for (let i = 0; i < n; i++) {
      if (notasAlunos[i] >= 50) {
          contador++;
      }
  }

  console.log(`A quantidade de alunos que passaram no exame foi: ${contador}`);
}

// Exemplo de uso:
const numeroDeAlunos = 5; // Substitua com o número de alunos
const notasDosAlunos = [55, 48, 65, 40, 75]; // Substitua com as notas dos alunos

contarAprovados(numeroDeAlunos, notasDosAlunos);

module.exports = { contarAprovados };
