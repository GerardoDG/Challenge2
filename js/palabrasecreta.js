let palabra, letrasnon, errores, findeljuego, guionesbajos, letrasusadas, letrasequivocadas, letra, index, busquedainicio;

var palabras = ["ALURA", "HTML", "CODIGO", "PRUEBA", "JAVA", "LAPTOP", "CURSO", "RETO", "CSS"];

const equivocadas = document.querySelector(".equivocadas");
const bases = document.querySelector(".letters");

const btnNuevo = document.querySelector(".nuevojuego");
btnNuevo.addEventListener("click", comenzarJuego)

const mensajeFinal = document.querySelector(".mensajeFinal");
const mostrarPalabra = document.querySelector(".mostrarPalabra");

const canvas = document.querySelector(".dibujoAhorcado");
const pincel = canvas.getContext("2d");

const btnguardar = document.querySelector(".guardar");
btnguardar.addEventListener("click", anadirnuevaPalabra);
const btncancel = document.querySelector(".cancelado");
btncancel.addEventListener("click", menuPrincipal)

var nuevaPalabra = document.querySelector(".lecturatexto");

const btnRendirse = document.querySelector(".desistir");
btnRendirse.addEventListener("click", menuPrincipal)


function anadirnuevaPalabra() {
    if (nuevaPalabra.value != "") {
        console.log(nuevaPalabra.value);
        palabras.push(nuevaPalabra.value.toUpperCase());
        console.log(palabras);
        nuevaPalabra.value = "";
        comenzarJuego();
    } else {
        window.alert("El campo no puede estár vacio, para no ingresar una palabra presiona en CANCELAR");
        pantalla2();
    }

}



function comenzarJuego() {
    pantallaPrincipal.style.display = "none";
    pantallaAgregar.style.display = "none";
    pantallaJuego.style.display = "flex";
    palabra = elegirPalabra();
    letrasnon = palabra.length;
    errores = 0;
    findeljuego = false;
    letrasusadas = [];
    letrasequivocadas = [];
    mensajeFinal.style.display = "none";
    mostrarPalabra.style.display = "none";
    pincel.clearRect(0, 0, canvas.width, canvas.height);
    console.log(palabra);
    dibujarhorca(errores);
    mostrarGuiones();

    guionesbajos = document.querySelectorAll(".letra");


    window.addEventListener("keydown", comprobarLetra);
    console.log(palabras);
}



function ganador() {
    if (letrasnon == 0) {
        mensajes(ganador = true, palabra);
        findeljuego = true;
    } else if (errores == 6) {
        mensajes(ganador = false, palabra);
        findeljuego = true;
    }
}

function revisarletra() {
    if (!letrasusadas.includes(letra)) {
        busquedainicio = 0;
        index = palabra.indexOf(letra, busquedainicio)
        if (index != -1) {
            console.log();
            letrasusadas.push(letra)
            while (index != -1) {
                letrasnon--
                guionesbajos[index].textContent = letra;
                busquedainicio = index + 1;
                index = palabra.indexOf(letra, busquedainicio)
            }
        } else {
            console.log();
            letrasusadas.push(letra)
            letrasequivocadas.push(letra)
            equivocadas.textContent = letrasequivocadas.join("");
            errores++;
            dibujarhorca(errores)
        }
        ganador()
    }
}

function comprobarLetra(e) {
    if (!findeljuego) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 192) {
            letra = (e.key).toUpperCase();
            console.log(letra);
            revisarletra();
        } else {
            window.alert("Tecla presionada no permitida")
        }
    }

}

function elegirPalabra() {
    return palabras[Math.floor(Math.random() * palabras.length)];
}

function mostrarGuiones() {
    bases.innerHTML = "";
    let divpadre = document.createElement("div");
    for (let i = 0; i < palabra.length; i++) {
        let div = document.createElement("div");
        div.classList.add("letra");
        divpadre.appendChild(div);
    }
    bases.appendChild(divpadre);
}

function dibujarrectos(a, b, c, d) {
    pincel.fillStyle = "darkslateblue";
    pincel.fillRect(a, b, c, d);
}


function dibujarcirculo(a, b, c, d, tamano) {
    pincel.lineWidth = 8;
    pincel.strokeStyle = "darkslateblue";
    pincel.beginPath();
    pincel.arc(a, b, c, d, tamano);
    pincel.stroke();
}

function dibujarrectainclinada(a, b, c, d) {
    pincel.lineWidth = 8
    pincel.strokeStyle = "darkslateblue";
    pincel.beginPath();
    pincel.moveTo(a, b);
    pincel.lineTo(c, d);
    pincel.stroke();
}

function dibujarhorca() {
    if (errores == 0) {
        dibujarrectos(0, 350, 300, 10);
        dibujarrectos(40, 20, 10, 330);
        dibujarrectos(50, 20, 130, 10);
        dibujarrectos(180, 20, 10, 50);
    }
    if (errores == 1) {
        dibujarcirculo(185, 100, 30, 0, 2 * 3.14);
    }
    if (errores == 2) {
        dibujarrectos(180, 130, 10, 120);
    }
    if (errores == 3) {
        dibujarrectainclinada(185, 135, 140, 180);
    }
    if (errores == 4) {
        dibujarrectainclinada(185, 135, 230, 180);
    }
    if (errores == 5) {
        dibujarrectainclinada(185, 250, 140, 300);
    }
    if (errores == 6) {
        dibujarrectainclinada(185, 250, 230, 300);
    }
}



function mensajes(ganador) {
    mensajeFinal.style.display = "flex";
    if (ganador) {
        mensajeFinal.classList.add("msj1");
        mensajeFinal.classList.remove("msj2");
        mensajeFinal.textContent = `¡Ganador!`;
    } else {
        mensajeFinal.classList.add("msj2");
        mensajeFinal.classList.remove("msj1");
        mensajeFinal.textContent = `¡Intenta de Nuevo!`

        mostrarPalabra.style.display = "flex";
        mostrarPalabra.textContent = `La palabra secreta era: ${palabra}`;
    }
}