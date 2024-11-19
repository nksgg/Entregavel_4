function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Seleciona o pivô
    const esquerda = []; // Elementos menores que o pivô
    const direita = [];  // Elementos maiores que o pivô

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue; // Ignora o pivô na comparação
        if (arr[i] < pivot) {
            esquerda.push(arr[i]);
        } else {
            direita.push(arr[i]);
        }
    }

    // Recursivamente ordena as sublistas e combina com o pivô
    return [...quicksort(esquerda), pivot, ...quicksort(direita)];
}

module.exports = { quicksort };
