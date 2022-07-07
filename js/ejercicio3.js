//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.Nota: usar confirm()

let cadenas = prompt("Ingrese una cadena de texto");
document.write(cadenas + "-");
while (confirm(cadenas) === true) {
    cadenas = prompt("Ingrese una cadena de texto");
    document.write(cadenas + "-");
}
