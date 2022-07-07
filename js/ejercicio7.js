//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50).
let num = parseInt(prompt("Ingrese un numero <=50"));
if (num <= 50) {
    for (i = num; i >= 1; i--) {
        for (u = num; u > num + 1 - i; u--) {
            document.write(i);
        }
        document.write(i + "<br>");
    }
} else {
    document.write("No ingresó un numero meno o igual a 50");
}
