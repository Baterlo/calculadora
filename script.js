var veneno = 0;
var vida = 400;
var daño = 0;

actualizar();

function actualizar(){
  var test = document.getElementById('veneno').value;
  if (test >=0 && test <=40){
    veneno = test;
    daño = veneno * 5 + 50;
  }
  test = document.getElementById('vida').value;
  if (test>0 ){
    vida = test;
  }
  document.getElementById('daño').innerHTML = daño;
  document.getElementById('vida1').innerHTML = vida-daño;
  document.getElementById('doubt').innerHTML = daño*1.25;
  document.getElementById('vida2').innerHTML = vida-daño*1.25;
  document.getElementById('whisp').innerHTML = daño -50;
  document.getElementById('vida3').innerHTML = vida-(daño -50);
  document.getElementById('noWhisp').innerHTML = daño - 100;
  document.getElementById('vida4').innerHTML = vida-(daño - 100);
  document.getElementById('doubtWhisp').innerHTML = daño*1.25 -50;
  document.getElementById('vida5').innerHTML = vida-(daño*1.25 -50);
  document.getElementById('noDWhisp').innerHTML = daño*1.25 -90;
  document.getElementById('vida6').innerHTML = vida-(daño*1.25 -90);
}

document.getElementById('btn1').addEventListener('click',actualizar);

