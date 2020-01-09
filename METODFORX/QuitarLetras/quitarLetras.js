var deposito = [];

var cont = 0;

var cont1 = 0;

var frase1 = prompt("Ingrese una frase: ");

var frase2 = prompt("ingrese cuales caracteres desea eliminar: ");

var frase = frase1.toLowerCase();

var excluir = frase2.toLowerCase();


function extraer() {

    if (cont > excluir.length - 1) {

        console.log("frase inicial: " + frase1);

        console.log("texto extraido: " + frase2);

        console.log("el resultado de la extraccion es:" + frase.toString());

    } else {

        if (cont1 > frase.length - 1) {
            frase = deposito;
            deposito = [];
            cont1 = 0;
            cont++;
            extraer();


        } else {
            if (excluir[cont] != frase[cont1]) {
                deposito.push(frase[cont1]);
            }
            cont1++;
            
            extraer();
        }
    }
}
extraer();