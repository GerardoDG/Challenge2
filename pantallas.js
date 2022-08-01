var botoninicio = document.querySelector('.btn-principal');
botoninicio.addEventListener('click', function() {
    document.getElementById('pantalla3').style.display = "flex";
    document.getElementById('pantalla1').style.display = "none";
    dibujarLinea(elegirPalabra());
    juegoHorca();
})


var botonagregar = document.querySelector('.btn-nuevapalabra');
botonagregar.addEventListener('click', pantallaagregado);

function pantallaagregado() {
    document.getElementById('pantalla2').style.display = "flex";
    document.getElementById('pantalla1').style.display = "none";
}

var botonguardar = document.querySelector('.guardar');
botonguardar.addEventListener('click', guardaryjugar);

function guardaryjugar() {
    document.getElementById('pantalla3').style.display = "flex";
    document.getElementById('pantalla2').style.display = "none";
    guardarpalabra()
}

var botoncancelar = document.querySelector('.cancelar');
botoncancelar.addEventListener('click', cancelaragregado);

function cancelaragregado() {
    document.getElementById('pantalla2').style.display = "none";
    document.getElementById('pantalla1').style.display = "flex";
}

var botonnuevojuego = document.querySelector('.nuevojuego');
botonnuevojuego.addEventListener('click', iniciarjuego);

function iniciarjuego() {
    document.getElementById('pantalla3').style.display = "flex";
    document.getElementById('pantalla1').style.display = "none";
    pincel.clearRect(0, 0, 1200, 533)
    dibujarLinea(elegirPalabra());
    juegoHorca();
}

var botondesistir = document.querySelector('.desistir');
botondesistir.addEventListener('click', desistir);

function desistir() {
    document.getElementById('pantalla3').style.display = "none";
    document.getElementById('pantalla1').style.display = "flex";
    console.log(palabras);
}