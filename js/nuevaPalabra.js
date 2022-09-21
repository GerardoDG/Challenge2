var nuevaPalabra = document.querySelector(".lecturatexto");
const mensajedeConfirmacion = document.querySelector(".mensajedeConfirmacion")
const btnguardar = document.querySelector(".guardar");
const btncancel = document.querySelector(".cancelado");

function mostrarPantalla() {
    pantallaPrincipal.style.display = "none";
    pantallaAgregar.style.display = "flex";
    pantallaJuego.style.display = "none";
}

function anadirnuevaPalabra() {

    const regex = /[A-Z]+/i;
    if (regex.test(nuevaPalabra.value)) {
        console.log(nuevaPalabra.value);
        palabras.push(nuevaPalabra.value.toUpperCase())
        console.log(palabras);
        mensajedeConfirmacion.style.display = "flex";
        mensajedeConfirmacion.textContent = `Se guardo correctamente la palabra`
        nuevaPalabra.value = "";
    } else {
        mensajedeConfirmacion.style.display = "flex";
        mensajedeConfirmacion.textContent = `Ingresa sin numeros ni caracteres especiales`;
        nuevaPalabra.value = "";
    }

}



btncancel.addEventListener("click", (comenzarJuego))
btnguardar.addEventListener("click", (anadirnuevaPalabra))