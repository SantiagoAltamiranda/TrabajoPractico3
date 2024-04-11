/*
5- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.

*/
function texto(cadena) {
    if (cadena === ""){
        return "La cadena esta vacia"
    } else if (cadena === null) {            
    } else if (/^[0-9]+/.test(cadena)) {
        return "La cadena contiene caracteres no validos."
    } else if (/^[A-Z]+$/.test(cadena)) {
        return "La cadena esta formada solo por mayusculas.";
    } else if (/^[a-z]+$/.test(cadena)) {
        return "La cadena esta formada solo por minusculas.";
    } else {
        return "La cadena esta formada por una mezcla de mayusculas y minusculas."
    }
}

let cadena = prompt("Ingrese una cadena de texto:");
if (cadena !== null){
    let resultado = texto(cadena);
    alert(resultado);
}