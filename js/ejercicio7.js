/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tablaMultiplicar(numero) {
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(numero * i);
    }
    return tabla;
}

function mostrarTabla(numero, resultados) {
    document.write(`Tabla de multiplicar del ${numero}:`);
    document.write("<p>");
    for (let i = 0; i < resultados.length; i++) {
        document.write(`${numero} x ${i + 1} = ${resultados[i]}<br>`);
    }
    document.write("</p>");
}

let numero = prompt("Ingrese un número para mostrar su tabla de multiplicar:");

if (numero === null) {
    alert("Operación cancelada.");
} else {
    numero = parseInt(numero);
    if (!isNaN(numero) && numero > 0) {
        let resultados = tablaMultiplicar(numero);
        mostrarTabla(numero, resultados);
    } else {
        alert("Debe ingresar un número válido y mayor que cero.");
    }
}