function somarNumeros(n, listaDeNumeros) {
    let soma = 0;

    for (let i = 0; i < n; i++) {
        soma += listaDeNumeros[i];
    }

    console.log(`A soma dos ${n} números é: ${soma}`);
}

module.exports = { somarNumeros };
