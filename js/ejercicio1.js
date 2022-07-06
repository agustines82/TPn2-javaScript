//Escribir un progama que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un numero valido indicarlo en un mensaje.
let edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18) {
    document.write("Ud. tiene edad para conducir");
} else {
    document.write("Ud. NO tiene edad para conducir");
}
