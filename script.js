var segundos = 0;
var minutos = 0;
var horas = 0;

var cronometro;
var tempo = 1000;

function comecar() {
    cronometro = setInterval(() => {
        segundos++;
        if (segundos < 10){
            document.getElementById("segundos").innerHTML = `0${segundos}`;
        }else{
            document.getElementById("segundos").innerHTML = `${segundos}`;
        }

        if (segundos >= 60){
            segundos = 0;
            minutos ++;
            if (minutos < 10){
                document.getElementById("minutos").innerHTML = `0${minutos}`;
            }else{
                document.getElementById("minutos").innerHTML = `${minutos}`;
            }
        }

        if(minutos >= 60){
            minutos = 0;
            horas++;
            if (horas < 10){
                document.getElementById("horas").innerHTML = `0${horas}`;
            }else{
                document.getElementById("horas").innerHTML = `${horas}`;
            }
        }

        if (horas >= 99){
            clearInterval(cronometro);
        }
        
        console.log(segundos);
    }, tempo);

    document.getElementById("comecar").disabled = true;
}

function pausar() {
    clearInterval(cronometro);
    document.getElementById("comecar").disabled = false;
}

function reiniciar() {
    segundos = 0;
    minutos = 0;
    horas = 0;

    document.getElementById("segundos").innerHTML = `0${segundos}`;
    document.getElementById("minutos").innerHTML = `0${minutos}`;
    document.getElementById("horas").innerHTML = `0${horas}`;
    document.getElementById("comecar").disabled = false;
}