let contador = 0;

const valor = document.getElementById("valor");
const btnSumar = document.getElementById("mas");
const btnRestar = document.getElementById("menos");
const btnReseat = document.getElementById("reseat");


btnSumar.addEventListener('click', async () => {
    await setTimeout(() => {
       contador++;
       valor.innerHTML = contador;
    }, 5);
    

})


btnRestar.addEventListener('click', async () => {
    await setTimeout(() => {
       contador--;
       valor.innerHTML = contador;
    }, 5);
    

})


btnReseat.addEventListener('click', async () => {
    await setTimeout(() => {
       contador=0;
       valor.innerHTML = contador;
    }, 5);
    

})

function mostrar(valor){
document.getElementById("segundos").innerHTML=valor;
}
