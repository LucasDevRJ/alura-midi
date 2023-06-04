function tocaSomPom() {
    document.querySelector("#som_tecla_pom").play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");
//listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador++;
}