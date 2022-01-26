function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour:12,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    });
}


const timerScreen = document.querySelector('.relogio');
const bIniciar = document.querySelector('.iniciar');
const bPausar = document.querySelector('.pausar');
const bZerar = document.querySelector('.zerar');
let timer;
let seconds=0;
function iniciarRelogio(){
    timer = setInterval( function(){
        seconds ++;
        timerScreen.innerText = criaHoraDosSegundos(seconds);
        timerScreen.classList.remove("pausado");
        console.log('Somando:' + seconds);
    }, 1000)
}
function PausarRelogio(){
    clearInterval(timer);
    timerScreen.classList.add("pausado");
}
function zerarRelogio(){
    clearInterval(timer);
    timerScreen.classList.remove("pausado");
    seconds=0;
    timerScreen.innerText = criaHoraDosSegundos(seconds);
}
document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('iniciar')){
        iniciarRelogio();
    }
    if (el.classList.contains('pausar')){
        PausarRelogio();
    }
    if (el.classList.contains('zerar')){
        zerarRelogio();
    }
})
