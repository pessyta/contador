
/*

const tiempoRestante = document.getElementById("tiempoRestante");

const btn_iniciar = document.getElementById("iniciar");

let segundos = parseFloat(document.getElementById("segundos").value);

setInterval(myTimer,1000);

function myTimer(){


        let segundos = parseFloat(document.getElementById("segundos").value);
       segundos--;
       tiempoRestante.innerHTML = segundos;
       if(segundos == 0){
        alert("¡Game Over!");
        }


btn_iniciar.addEventListener('click', actualizarTiempo);

function actualizarTiempo(){
    let segundos = parseFloat(document.getElementById("segundos").value);
    tiempoRestante.innerHTML = segundos;
      if(segundos ==0){
        alert("Se terminó el tiempo");
    }else{
        segundos--;
        setTimeout("actualizarTiempo()", 1000);
        tiempoRestante.innerHTML = segundos;
    }  
}

}

function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
   
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
   
    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
  }
   
  setInterval(muestraReloj, 1000);

  function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
   
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
   
    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
  }
   
  window.onload = function() {
    setInterval(muestraReloj, 1000);
  }

const tiempoRestante = document.getElementById("tiempoRestante");

const btn_iniciar = document.getElementById("iniciar");





btn_iniciar.addEventListener('click', actualizarTiempo);


function actualizarTiempo(){

let tiempo = document.getElementById("reloj").value;
reloj.innerHTML = tiempo;
console.log(tiempo);

      if(tiempo ==0){
        alert("Se terminó el tiempo");
    }else{
        tiempo-1;
        setTimeout("actualizarTiempo", 1000);
    }  
}


*/