const pantallaPrincipal = document.querySelector("#pantalla1");
const pantallaAgregar = document.querySelector("#pantalla2");
const pantallaJuego = document.querySelector("#pantalla3");


function first() {
    menuPrincipal();
}

function menuPrincipal() {
    pantallaPrincipal.style.display = "flex";
    pantallaAgregar.style.display = "none";
    pantallaJuego.style.display = "none";

    const btnPrincipal = document.querySelector(".btn-principal");
    const btnanadirPalabra = document.querySelector(".btn-nuevapalabra");
    btnPrincipal.addEventListener("click", (comenzarJuego));
    btnanadirPalabra.addEventListener("click", (mostrarPantalla));
}

window.addEventListener("load", first)