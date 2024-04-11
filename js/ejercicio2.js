/* 2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.
Ejemplo:
3
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’,
‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro,
Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo,
Egipto’]

*/

let ciudades = [];

while (ciudades.length < 10) {
  let ciudad = prompt("Por favor, ingresa el nombre de una ciudad:");
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}

document.write(`<p>El arreglo de ciudades tiene 10 elementos</p>`);

document.write(`<p>Elemento 1er posicion: ${ciudades[0]}</p>`);
document.write(`<p>Elemento 3er posicion: ${ciudades[2]}</p>`);
document.write(
  `<p>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</p>`
);
document.write(`<p>Elemento ultima posicion: París, Francia</p>`);

ciudades.push("París, Francia");

document.write(`<p>Elemento en la segunda posición: ${ciudades[1]}</p>`);

ciudades[1] = "Barcelona, España";

document.write("<h2>Arreglo de ciudades</h2>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<p>Elemento ${i + 1}: ${ciudades[i]}</p>`);
}
