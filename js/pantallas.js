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
    const btnañadirPalabra = document.querySelector(".btn-nuevapalabra");
    btnPrincipal.addEventListener("click", () => { comenzarJuego() });
    btnañadirPalabra.addEventListener("click", () => { pantalla2() })
}

function pantalla2() {
    pantallaPrincipal.style.display = "none";
    pantallaAgregar.style.display = "flex";
    pantallaJuego.style.display = "none";
}

window.addEventListener("load", first)