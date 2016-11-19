/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Canvas = null;
var Ctx = null;
var banderaBtn1 = false;
var banderaBtn2 = false;
var banderaBtn3 = false;
var banderaBtn4 = false;
var mousex = 0, mousey = 0;
var x = 0, y = 0;
var radio = 0;
var cont = 0, Pos_Y = 599, RadioGlobo = 0, DiametroGlobo = 0;
var posA = 199.9, posB = 599, aguaInc = 4, posY_agua = 599, h0 = 0;
var altura = 0;
var contAgua = 0;
var cordY_agua = 0;
window.addEventListener("load", function(evt) {
    Iniciar();

    document.addEventListener('mousemove', function(evt) {
        mousex = evt.pageX - Canvas.offsetLeft;
        mousey = evt.pageY - Canvas.offsetTop;
    }, false);

    document.addEventListener('mousedown', mousedown, false);
    document.addEventListener('mouseup', mouseUp, false);

    document.onselectstart = function() {
        return false;
    };
    document.onmousedown = function() {
        return false;
    };
}, false);

function Iniciar() {
    Canvas = document.getElementById('lienzo');
    Ctx = Canvas.getContext("2d");
    Run();
}
function Run() {
    setTimeout(Run, 20);
    Paint(Ctx);
}

function Paint(ctx) {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    Botones(Ctx);
    Globo(Ctx, Pos_Y, cont);
    Cilindro(Ctx);
    Regla(Ctx);
    Marcador(Ctx);
    Agua(Ctx, posY_agua, cordY_agua);
    //Agua(Ctx, 120, 480);
    Actions();
}

function EscribeMensage(ctx, message, posx, posy) {
    ctx.font = '15pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, posx, posy);
}

function Marcador(ctx) {
    EscribeMensage(ctx, "Altura del agua: " + altura.toFixed(2) + "cm", 5, 430);
    EscribeMensage(ctx, "Altura inicial del agua: " + h0.toFixed(2) + "cm", 5, 450);
    EscribeMensage(ctx, "Radio del globo: " + RadioGlobo.toFixed(2) + "cm", 5, 470);
    EscribeMensage(ctx, "Diámetro del globo:" + DiametroGlobo.toFixed(2) + "cm", 5, 490);

    //EscribeMensage(ctx, "posY_agua :" + (599 - (599 - 199) * altura / 10).toFixed(2) + " " + "cordYa " + cordY_agua + "", 5, 510);
    //EscribeMensage(ctx, "posY:" + posY_agua.toFixed(2) + " " + "cordYa " + cordY_agua + "", 5, 530);
    //EscribeMensage(ctx, "altura:" + (altura + aguaInc * 10 / (posB - posA)) + " " + cordY_agua, 5, 550);
}

function Cilindro(ctx) {
    ctx.beginPath();
    ctx.moveTo(274, 600);
    ctx.lineTo(274, 120);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(274, 600);
    ctx.lineTo(676, 600);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(676, 600);
    ctx.lineTo(676, 120);
    ctx.closePath();
    ctx.stroke();

    EscribeMensage(ctx, "Diametro del cilindro:10cm", 350, 625);
}

function Regla(ctx) {
    ctx.beginPath();
    ctx.moveTo(700, 600);
    ctx.lineTo(700, 120);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(700, 600);
    ctx.lineTo(690, 600);
    ctx.lineTo(710, 600);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(700, 480);
    ctx.lineTo(690, 480);
    ctx.lineTo(710, 480);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(700, 360);
    ctx.lineTo(690, 360);
    ctx.lineTo(710, 360);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(700, 240);
    ctx.lineTo(690, 240);
    ctx.lineTo(710, 240);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(700, 120);
    ctx.lineTo(690, 120);
    ctx.lineTo(710, 120);
    ctx.closePath();
    ctx.stroke();

    EscribeMensage(ctx, "0", 710, 600);
    EscribeMensage(ctx, "3", 710, 480);
    EscribeMensage(ctx, "6", 710, 360);
    EscribeMensage(ctx, "9", 710, 240);
    EscribeMensage(ctx, "12", 710, 120);
}

function Globo(ctx, posY, radio) {
    ctx.fillStyle = "#FF1A00";
    ctx.beginPath();
    ctx.arc(475, posY, radio, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}

function Agua(ctx, alt_Y, niv) {
    ctx.fillStyle = "rgba(0, 0, 255,0.7)";
    ctx.fillRect(275, alt_Y, 400, niv);
    ctx.fill();
}

function Botones(ctx) {
    ctx.fillStyle = "#4096EE";
    ctx.fillRect(10, 10, 155, 50);
    ctx.fill();

    ctx.fillStyle = "#4096EE";
    ctx.fillRect(10, 70, 155, 50);
    ctx.fill();

    ctx.fillStyle = "#4096EE";
    ctx.fillRect(10, 140, 155, 50);
    ctx.fill();

    ctx.fillStyle = "#4096EE";
    ctx.fillRect(10, 199, 155, 50);
    ctx.fill();


    EscribeMensage(ctx, "Inflar Globo", 25, 45);
    EscribeMensage(ctx, "Desinflar Globo", 10, 100);
    EscribeMensage(ctx, "llenar Cilindro", 15, 170);
    EscribeMensage(ctx, "Vaciar Cilindro", 15, 229);

}


function mousedown() {
    var btn1x = 10;
    var btn1y = 10;
    var btn2x = 10;
    var btn2y = 70;
    var btn3x = 10;
    var btn3y = 140;
    var btn4x = 10;
    var btn4y = 199;
    x = mousex;
    y = mousey;
    if ((x >= btn1x && x <= (btn1x + 155)) && (y >= btn1y && y <= (btn1y + 50))) {
        banderaBtn1 = true;
    }
    if ((x >= btn2x && x <= (btn2x + 155)) && (y >= btn2y && y <= (btn2y + 50))) {
        banderaBtn2 = true;
    }
    if ((x >= btn3x && x <= (btn3x + 155)) && (y >= btn3y && y <= (btn3y + 50))) {
        if (h0 < 11.5 && altura < 11.5) {
            banderaBtn3 = true;
        }

    }
    if ((x >= btn4x && x <= (btn4x + 155)) && (y >= btn4y && y <= (btn4y + 50))) {
        banderaBtn4 = true;
    }
}

function mouseUp() {
    banderaBtn1 = false;
    banderaBtn2 = false;
    if (h0 <= 12 && altura <= 12) {
        banderaBtn3 = false;
    }
    banderaBtn4 = false;
}

function Actions() {
    if (banderaBtn1) {
        if (h0 >= 11.9 || altura >= 11.9) {
            banderaBtn1 = false;
            altura = 12;
        }else
        if (cont <= 199) {
            cont = cont + 1;
            Pos_Y = Pos_Y - 1;
            RadioGlobo = (cont * 5) / 200;
            DiametroGlobo = RadioGlobo * 2;
            alturaNueva();
        }
    }
    if (banderaBtn2) {
        if (cont > 0) {
            cont = cont - 1;
            Pos_Y = Pos_Y + 1;
            RadioGlobo = (cont * 5) / 200;
            DiametroGlobo = RadioGlobo * 2;
            alturaNueva();
        }

    }
    if (banderaBtn3) {
        if (h0 >= 11.9 || altura >= 11.9) {
            banderaBtn3 = false;
            h0 = 12;
            altura = 12;
        }else
        if (h0 <= 12 && altura <= 12) {
            posY_agua = posY_agua - aguaInc;
            h0 = h0 + aguaInc * 10 / (posB - posA);
            //altura = altura + aguaInc * 10 / (posB - posA);
            cordY_agua = 599 - posY_agua;
            alturaNueva();
        }
    }
    if (banderaBtn4) {
        if (h0 > 0 && altura > 0) {
            posY_agua = posY_agua + aguaInc;
            h0 = h0 - aguaInc * 10 / (posB - posA);
            //altura = altura - aguaInc * 10 / (posB - posA);
            cordY_agua = 599 - posY_agua;
            alturaNueva();
        } else {
            h0 = 0.00;
        }
        if (altura <= 0 && RadioGlobo <= 0) {
            altura = 0.00;
        }
    }
}

//function altura_del_agua() {
//    var AlturaDelAgua = 12 - ((12 * (posY_agua - posA)) / (posB - posA));
//    h0 = AlturaDelAgua;
//}

function alturaNueva() {
    altura = h0 + 4 * Math.pow(RadioGlobo, 3) / 75;
    if (DiametroGlobo > altura) {
        var R = 5;
        var inc = 0;
        var decim = 0.1;
        var num_ciclos = 0;
        while (num_ciclos < 200) {
            var Alt = h0 + inc;
            var Sol = Alt * Alt * Alt - 3 * RadioGlobo * Alt * Alt + 3 * R * R * Alt - 3 * R * R * h0;
            inc = inc + decim;
            ++num_ciclos;

            if (Sol > 0) {
                inc = inc - 2 * decim;
                decim = decim / 10;
            }
//            if (decim == 0.001) {
//                break;
//            }
        }
        altura = Alt;
    }
    posY_agua = 599 - (599 - 199) * altura / 10;
    cordY_agua = 599 - posY_agua;
}
