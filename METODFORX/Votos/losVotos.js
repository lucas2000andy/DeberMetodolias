var votos = ["Hernan", "Hugo", "Carlos", "Hernan", "Carlos", "Sofia"];

Array.prototype.unique = function(a) {

    return function() { return this.filter(a) }

}(function(a, b, c) {

    return c.indexOf(a, b + 1) < 0
});


var candidatos = votos.unique();

var cont = 0;


function comPart() {
    let i = 0;
    let acumulador = 0;
    let Cantvotos = [];

    while (cont < candidatos.length) {
        if (i > votos.length - 1) {
            i = 0;
            Cantvotos.push(acumulador);
            cont++;
            acumulador = 0;
        } else {
            if (candidatos[cont] == votos[i]) {
                acumulador++;
            }
            i++;
        }
    }
    return (Cantvotos);
}

var votaciones = comPart();



function ganador(x, y) {
    
    let maximo = Math.max(...y);

    let j = [];

    let m = [];

    y.forEach(function(element, index, array) {
        if (maximo == element) {
            m.push(index);
        }
    });
    if (m.length == 1) {
        return (x[m[0]]);

    } else {

        for (let k = 0; k < m.length; k++) {

            j.push(x[m[k]]);
        }
        j.sort();
        return (j[0]);
    }
}
console.log("Los votos: " + votos + "\n El ganador de las votaciones: " + ganador(candidatos, votaciones));