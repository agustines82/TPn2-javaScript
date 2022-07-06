//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. Nota: ver funcion Math()
let persona1 = prompt("ingrese su nombre");
let edadPersona1 = parseInt(prompt("ingrese su edad"));
let persona2 = prompt("ingrese su nombre");
let edadPersona2 = parseInt(prompt("ingrese su edad"));
let persona3 = prompt("ingrese su nombre");
let edadPersona3 = parseInt(prompt("ingrese su edad"));

let edadMaxima = Math.max(edadPersona1, edadPersona2, edadPersona3);

if (edadMaxima === edadPersona1) {
    document.write("El Mayor de todos es " + persona1);
} else if (edadMaxima === edadPersona2) {
    document.write("El Mayor de todos es " + persona2);
} else if (edadMaxima === edadPersona3) {
    document.write("El Mayor de todos es " + persona3);
}
