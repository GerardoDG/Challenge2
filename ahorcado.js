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
    if (errores == 1) {
        dibujarrectos(0, 350, 294, 10);
    } else if (errores == 2) {
        dibujarrectos(40, 20, 10, 330);
    } else if (errores == 3) {
        dibujarrectos(50, 20, 130, 10);
    } else if (errores == 4) {
        dibujarrectos(180, 20, 10, 50);
    } else if (errores == 5) {
        dibujarcirculo(185, 100, 30, 0, 2 * 3.14);
    } else if (errores == 6) {
        dibujarrectos(180, 130, 10, 120);
    } else if (errores == 7) {
        dibujarrectainclinada(185, 135, 140, 180);
        dibujarrectainclinada(185, 135, 230, 180);
    } else if (errores == 8) {
        dibujarrectainclinada(185, 250, 140, 300);
        dibujarrectainclinada(185, 250, 230, 300);
    }
}