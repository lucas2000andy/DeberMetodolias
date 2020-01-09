
var tablas = document.getElementById("tabla");

function generar() {

    var rows = document.getElementById("filas").value;

    var cols = document.getElementById("columnas").value;

    tablas.innerHTML = "";

    if (rows <= 2 || rows >= 50) {
        alert("ingrese un numero entre 3 y 49");

        document.getElementById("filas").value = "";

        document.getElementById("filas").focus();

    } else if ((cols <= 2 || cols >= 50)) {

        alert("ingrese un numero entre 3 y 49");

        document.getElementById("columnas").value = "";
        
        document.getElementById("columnas").focus();
    } else {
        for (let i = 0; i < rows; i++) {
            var tr = document.createElement("tr");

            for (let j = 0; j < cols; j++) {
                var aleatorio = Math.floor(Math.random() * 201) - 100;
                var td = document.createElement("td");

                if (aleatorio < 0) {
                    td.style = "color: red";
                } else {
                    td.style = "color: blue";
                }
                td.appendChild(document.createTextNode(aleatorio));
                tr.appendChild(td);
                tablas.appendChild(tr);
            }
        }
    } var resultado = parseInt(tablas.rows[0].cells[0].innerHTML);
    var horizontal = 1;
    var vertical = 0;
    var n=rows*cols;
    var cont=2;
    var maxrows = rows - 1;
    var minrows = 0;
    var maxcols = cols - 1;
    var mincols = 0;
    var direccion = 1;
    var operacion = 1;
   
    function calculo() {
        //maxrows <= 0 || maxcols <=0
        console.log(resultado);
        if (cont>n) {
            document.getElementById("result").innerHTML = 'Resultado: ' + resultado;
            var fec = new Date();
            document.getElementById("fecha").innerHTML = 'Fecha actual: ' + fec.getDate() + '/' + (fec.getMonth() + 1) + '/' + fec.getFullYear();
            document.getElementById("hora").innerHTML = 'Hora actual: ' + fec.getHours() + ':' + fec.getMinutes() + ':' + fec.getSeconds();
        } else {
            console.log(" operacion: "+operacion);
            if (operacion == 1) {


                resultado += parseInt(tablas.rows[vertical].cells[horizontal].innerHTML);
            } else if (operacion == 2) {

                resultado -= parseInt(tablas.rows[vertical].cells[horizontal].innerHTML);
            } else if (operacion == 3) {

                resultado *= parseInt(tablas.rows[vertical].cells[horizontal].innerHTML);
                operacion = 0;
            }
            switch (direccion) {
                case 1:
                    if (horizontal >= maxcols) {
                        direccion = 2;
                        minrows += 1;
                        vertical = minrows;
                        horizontal = maxcols;
                        operacion++;
                        cont++;
                    } else {
                        operacion++;
                        horizontal++;
                        cont++;
                    }
                    calculo();
                    break;
                case 2:
                    if (vertical >= maxrows) {
                        direccion = 3;
                        maxcols -= 1;
                        vertical = maxrows;
                        horizontal = maxcols;
                        operacion++;
                        cont++;
                    } else {
                        operacion++;
                        vertical++;
                        cont++;
                    }
                    calculo();
                    break;
                case 3:
                    if (horizontal <= mincols) {
                        direccion = 4;
                        maxrows -= 1;
                        vertical = maxrows;
                        horizontal = mincols;
                        operacion++;
                        cont++;
                    } else {
                        operacion++;
                        horizontal--;
                        cont++;
                    }
                    calculo();
                    break;
                case 4:
                    if (vertical <= minrows) {
                        direccion = 1;
                        mincols += 1;
                        horizontal = mincols;
                        vertical = minrows;
                        operacion++;
                        cont++;
                    } else {
                        operacion++;
                        vertical--;
                        cont++;
                    }
                    calculo();
                    break;
            }
            
        }
    }
    calculo();
}