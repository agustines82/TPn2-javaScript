// Realizar un script que pida numeros hasta que se pulse cancelar. Si no es un numero deberá saltar un alert y seguir pidiendo numeros. Al salir con CANCELAR deberá indicarse la suma total de los numeros ingresados

/*
do {
    let suma = parseInt(prompt("Ingrese un numero"));
    if (isNaN(suma) === true) {
        alert("El caracter ingresado no es un numero");
    } else [(contar = contar + suma)];
} while (suma !== null);

document.write(contar);
*/
let suma = 0;
let contar = 0;

do {
    let suma = parseInt(prompt("Ingrese un numero"));

    while (isNaN(suma)) {
        alert("el caracter ingresado no es un numero");
        suma = parseInt(prompt("Ingrese un numero"));
    }

    contar = suma + contar;
} while (Number(suma) === NaN);

document.write(contar);
