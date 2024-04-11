/*
4- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.

*/

function parOImpar(numero) {
    const resultado = ["par", "impar"];
    return resultado[numero % 2];
}

let numUsuario = parseInt(prompt("Ingrese un numero entero:"))
if(!isNaN(numUsuario)) {
    let resultado = parOImpar(numUsuario);
    alert(`El número ${numUsuario} es ${resultado}.`);
} else {
    alert("El número ingresado no es un numero entero.");
}
