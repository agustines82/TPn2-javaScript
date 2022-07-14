// Realizar un script que pida numeros hasta que se pulse cancelar.
// Si no es un numero deberá saltar un alert y seguir pidiendo numeros.
// Al salir con CANCELAR deberá indicarse la suma total de los numeros ingresados

let numero = 0;
let contador = 0;

do {
    numero = prompt("Ingresa un numero");
    if (!isNaN(parseInt(numero)) && numero != null) {
        contador = contador + parseInt(numero);
    } else {
        if (numero != null) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != null);

document.write("La suma total de los numeros introducidos es: " + contador);
