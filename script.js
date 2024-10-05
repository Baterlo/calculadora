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
  if ((temp=vida-daño)<0){
    temp=0;
  }
  document.getElementById('vida1').innerHTML = temp;
  document.getElementById('doubt').innerHTML = daño*1.25;
  if ((temp=vida-daño*1.25)<0){
    temp=0;
  }
  document.getElementById('vida2').innerHTML = temp;
  document.getElementById('whisp').innerHTML = daño -50;
  if (vida<=(daño -50)) {
    test = 0;
  }else{
    test = (vida - (daño - 100));
  }
  document.getElementById('vida3').innerHTML = test;
  document.getElementById('doubtWhisp').innerHTML = daño*1.25 -50;
  if (vida<=(daño*1.25 -50)) {
    test = 0;
  }else{
    test = (vida - (daño*1.25 - 90));
  }
  document.getElementById('vida5').innerHTML = test;
}

document.getElementById('veneno').addEventListener('keyup', (e) =>{
  if (e.keyCode === 13){
    actualizar();
  }
});
document.getElementById('vida').addEventListener('keyup', (e) =>{
  if (e.keyCode === 13){
    actualizar();
  }
});


