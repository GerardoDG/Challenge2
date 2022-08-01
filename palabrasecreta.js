var palabras = ["ALURA", "HTML", "CODIGO", "PRUEBA", "CHALLENGE", "JAVA", "AHORCADO", "JUEGO", "CSS", "AMOR", "CORAZON", "AZUL", "RAP"];
var pincel = document.querySelector("canvas").getContext("2d");
var letras = [];
var palabraCorrecta = '';
var errores = 9;
var hit = 0;
var palabraAgregada = false;
let reg = new RegExp("^[a-zA-Z\s]*$", "g");
var gano = false;
var perdio = false;

function elegirPalabra() {
    var palabra = palabras[Math.floor(Math.random() * palabras.length)];
    var palabraSecreta = palabra;
    return palabraSecreta;
}


function guardarpalabra() {
    var ingresotexto = document.querySelector('.lecturatexto').value;
    var palabraSecreta = ingresotexto.toUpperCase();
    if (!reg.test(palabraSecreta)) {
        alert("Ingrese el texto sin caracteres especiales o numeros, utilice unicamente MAYUSCULAS.");
        palabraSecreta.value = "";
        palabraSecreta.focus();
        return
    }
    if (palabraSecreta.length < 3) {
        alert("Ingrese una palabra que tenga mas de 3 letras")
        return
    } else {
        palabraAgregada = true;
        palabras.push(palabraSecreta);
        return palabraSecreta;
    }
}

function dibujarLinea(palabra) {
    var palabraSecreta = palabra;
    pincel.lineWidth = 5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "darkslateblue";
    pincel.beginPath();

    var ancho = 600 / palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        pincel.moveTo(300 + (ancho * i), 640);
        pincel.lineTo(330 + (ancho * i), 640);
    }

    pincel.stroke();
    pincel.closePath();
}

function escribirLetrasCorrectas(index) {
    pincel.font = "bold 52px inter";
    pincel.lineWidth = 5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "darkslateblue";

    var ancho = 600 / palabraSecreta.length;
    pincel.fillText(palabraSecreta[index], 305 + (ancho * index), 620);
}

function escribirLetraIncorrecta(letra, erroresleft) {
    pincel.font = "bold 40px inter";
    pincel.lineWidth = 5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "darkslateblue";
    pincel.fillText(letra, 335 + (40 * (10 - erroresleft)), 710, 40);
}

function verificarLetras(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {

        if (!(/[A-ZÑ]/i.test(event.key))) {
            return false;
        }

        letras.push(key);
        return false;
    } else {
        letras.push(key);
        return true;
    }
}

function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}

function adicionarLetraIncorrecta(letter) {
    if (palabraSecreta.indexOf(letter) < 0) {
        errores -= 1;
        dibujar(errores);

    }
}

function haGanado(hit, palabraSecreta) {
    if (hit == palabraSecreta.length) {
        alert("Felicidades a ganado!!\nTE ATREVES A INTENTAR DE NUEVO?");
        gano = true;
    }
}

function haPerdido(errores) {
    if (errores == 0) {
        alert("Eres un HANGMAN!!\n TE ATREVES A INTENTAR DE NUEVO??");
        perdio = true;
    }
}

function nuevasVariable() {
    hit = 0
    errores = 9
    letras = []
}

function juegoHorca() {
    nuevasVariable();
    document.onkeydown = (e) => {


        var letra = e.key.toUpperCase();

        if (errores != 0 && hit != palabraSecreta.length) {
            if (!verificarLetras(e.key)) {
                if (palabraSecreta.includes(letra)) {

                    //console.log(letra);
                    adicionarLetraCorrecta(palabraSecreta.indexOf(letra));

                    for (var i = 0; i < palabraSecreta.length; i++) {
                        if (palabraSecreta[i] === letra) {
                            escribirLetrasCorrectas(i);
                            if (escribirLetrasCorrectas(i) != 0) {
                                hit++;
                            }
                        }
                    }
                } else {
                    if (!verificarLetras(e.key)) return
                    adicionarLetraIncorrecta(letra);
                    escribirLetraIncorrecta(letra, errores);
                }
                //console.log(hit,palabraSecreta.length)
            }
            haGanado(hit, palabraSecreta);
            setTimeout(haPerdido(errores), 2000);

        }
    }
}