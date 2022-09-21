let palabra, letrasnon, errores, findeljuego, guionesbajos, letrasusadas, letrasequivocadas, letra, index, busquedainicio, repetida;

const equivocadas = document.querySelector(".equivocadas");
const bases = document.querySelector(".letters");

const btnNuevo = document.querySelector(".nuevojuego");
const btnRendirse = document.querySelector(".desistir");


const mensajeFinal = document.querySelector(".mensajeFinal");
const mostrarPalabra = document.querySelector(".mostrarPalabra");

const canvas = document.querySelector(".dibujoAhorcado");
const pincel = canvas.getContext("2d");

btnNuevo.addEventListener("click", (comenzarJuego));
btnRendirse.addEventListener("click", (menuPrincipal))

function comenzarJuego() {
    console.log(letrasusadas);
    console.log(letrasequivocadas);
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
}

function comprobarLetra(e) {
    if (!findeljuego) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 192) {
            letra = (e.key).toUpperCase();
            revisarletra();
        }
    }

}

function revisarletra() {
    if (!letrasusadas.includes(letra)) {
        busquedainicio = 0
        index = palabra.indexOf(letra, busquedainicio)
        if (index != -1) {
            letrasusadas.push(letra)
            while (index != -1) {
                letrasnon--
                guionesbajos[index].textContent = letra
                busquedainicio = index + 1
                index = palabra.indexOf(letra, busquedainicio)
            }
        } else {
            letrasusadas.push(letra)
            letrasequivocadas.push(letra)
            equivocadas.textContent = letrasequivocadas.join("")
            errores++
            dibujarhorca(errores)
        }
        ganador();
    }

}



function elegirPalabra() {
    return palabras[Math.floor(Math.random() * palabras.length)];
}

function mostrarGuiones() {
    bases.innerHTML = "";
    equivocadas.innerHTML = "&nbsp;"
    for (let i = 0; i < palabra.length; i++) {
        let div = document.createElement("div");
        div.classList.add("letra");
        bases.appendChild(div)
    }
}


function dibujarhorca(errores) {
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

function ganador() {
    if (letrasnon == 0) {
        mensajes(winner = true, palabra)
        findeljuego = true
    } else if (errores == 6) {
        mensajes(winner = false, palabra)
        findeljuego = true
    }
}



function mensajes(winner) {
    mensajeFinal.style.display = "flex";
    if (winner) {
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