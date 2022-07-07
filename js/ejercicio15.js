//Realiza un script que cuente el número de vocales que tiene un texto.
let cadena = prompt("ingrese su frase");
cadena = cadena.toLowerCase();
let vocales = "aeiouáéíóúöü";
let contador = 0;

for (i = 0; i <= cadena.length; i++) {
    if (vocales.includes(cadena.charAt(i))) {
        contador++;
    }
}

document.write(contador - 1);
