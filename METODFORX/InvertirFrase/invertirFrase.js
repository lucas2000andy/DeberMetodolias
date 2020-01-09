var frase = prompt("ingreso de frase: ");

var textoMostrar = [];

var min = 0;

var max = frase.length - 1;

var cont = frase.length - 1;

function ordenar() {
    if (cont < 0) {
        while (cont < max) {
            cont++;
            textoMostrar.push(frase[cont]);
        }
        console.log("texto ingresado: " + frase);

        console.log("texto ordenado: " + textoMostrar);

    } else {

        if (frase[cont] == " ") {
            min = cont - 1;
            while (cont < max) {
                cont++;
                textoMostrar.push(frase[cont]);

            }
            textoMostrar.push(" ");
            max = min;
            cont = max - 1;
            ordenar();
        } else {
            cont--;
            ordenar();
        }
    }
}
ordenar();