var veneno = 10;
var vida = 400;
var daño = veneno * 5 + 50;

document.getElementById('veneno').innerHTML = "Veneno = " +veneno;
document.getElementById('vida').innerHTML = "Vida = " +vida;

document.getElementById('daño').innerHTML = daño;
document.getElementById('doubt').innerHTML = daño*1.25;
document.getElementById('whisp').innerHTML = daño -50;
document.getElementById('noWhisp').innerHTML = daño - 100;
document.getElementById('doubtWhisp').innerHTML = daño*1.25 -50;
document.getElementById('noDWhisp').innerHTML = daño*1.25 -90;
