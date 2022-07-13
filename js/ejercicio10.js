//Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
let fila = parseInt(prompt("Ingrese el numero de filas"));
let col = parseInt(prompt("Ingrese el numero de columnas"));
let contador = fila * col;

document.write("<table>");
document.write("<tbody>");
for (i = fila; i > 0; i--) {
    document.write(`<tr>`);
    for (x = col; x > 0; x--) {
        document.write(`<td>` + contador + `</td>`);
        contador--;
    }
    document.write(`</tr>`);
}
document.write("</tbody>");
document.write("</table>");
