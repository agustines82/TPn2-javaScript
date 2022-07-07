/* Crea script para generar la pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
*/
let num = parseInt(prompt("Ingrese un numero <=50"));
if (num <= 50) {
    for (i = 1; i <= num; i++) {
        for (u = 1; u <= i; u++) {
            document.write(u);
        }
        document.write("<br>");
    }
} else if (num >= 50) {
    document.write("Debe ingresar un número menor a 50");
}
