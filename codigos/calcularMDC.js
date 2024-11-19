function calcularMDC(a, b) {
    while (b != 0) {
      var resto = a % b;
      a = b;
      b = resto;
    }
    return a;
  }
  
  module.exports = { calcularMDC }; // Exporta a função corretamente
  