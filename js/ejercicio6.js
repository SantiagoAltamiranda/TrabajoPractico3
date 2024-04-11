/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)
Ejemplo:
5
Input:
lado A = 24
lado B = 5
Output: 58
*/

function calcularPerimetro(ladoA, ladoB) {
  return 2 * (ladoA + ladoB);
}

function solicitarLadosRectangulo() {
  let ladoA = prompt("Ingrese la longitud del lado A:");
  let ladoB = prompt("Ingrese la longitud del lado B:");

  if (!esNumeroValido(ladoA) || !esNumeroValido(ladoB)) {
    alert("Por favor ingrese valores numericos validos.");
    return null;
  }

  return [parseFloat(ladoA), parseFloat(ladoB)];
}

function esNumeroValido(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function mostrarPerimetro(perimetro) {
  alert(`El perimetro del rectangulo es: ${perimetro}`);
}

let lados = solicitarLadosRectangulo();
if (lados !== null) {
  let perimetro = calcularPerimetro(lados[0], lados[1]);
  mostrarPerimetro(perimetro);
}
