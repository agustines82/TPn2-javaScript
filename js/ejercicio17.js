//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
let cadena = prompt("Ingrese su frase");
cadena = cadena.toLowerCase();
let vocales = "aeiouáéíóúöü";

if (vocales.includes(cadena.charAt(0))) {
    document.write(cadena.charAt(0));
} else if (vocales.includes(cadena.charAt(1))) {
    document.write(cadena.charAt(1));
} else if (vocales.includes(cadena.charAt(2))) {
    document.write(cadena.charAt(2));
} else if (vocales.includes(cadena.charAt(3))) {
    document.write(cadena.charAt(3));
} else if (vocales.includes(cadena.charAt(4))) {
    document.write(cadena.charAt(4));
} else if (vocales.includes(cadena.charAt(5))) {
    document.write(cadena.charAt(5));
}
