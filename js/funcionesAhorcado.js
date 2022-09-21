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