function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");
//listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function() {
        tocaSom("#som_tecla_pom");
    }
    contador++;
}