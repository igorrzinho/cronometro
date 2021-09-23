var watch=document.getElementById('chronometer');//puxa o elemento com id "chronometer"
var seconds=0;//variavel "seconds" declarada
var minutes=0;//variavel "minutes" declarada
var hours=0;//variavel "hours" declarada
var timer;


function start(){

    seconds++;//"seconds" recebe +1
    if (seconds>59) {// se "seconds" for maior que 59 o "minutes" recebe +1 eo "seconds" volta a valer 0
        seconds=0;
        minutes++;
    }
    if (minutes>59) {// se ",minutes" for maior que 59 o "hours" recebe +1 eo "minutes" volta a valer 0
        minutes=0;
        hours++;
    }
    show()
   }
function start2(){
    start()//chama a função "start"
    clearInterval(timer)//nao deixa chamar mais de uma vezes a funçao start
    timer=setInterval(start,1000)//chama a função "start" a cada segundo
}
function pause(){
    clearInterval(timer)//pausa o timer para nao chavar mais a função 
}
function restart(){//faz todos as variaveis receber 0
    clearInterval(timer)
    seconds=0;
    minutes=0;
    hours=0;
    show()
}

function numbers(num){
    if (num<10) {//se "num" for menor que 10 retorna "0"+num
        return (`0${num}`)
    }else{//se nao retorna apenas num
        return(num)
    }
}
function show(){
    watch.innerText=numbers(hours)+':'+numbers(minutes)+':'+numbers(seconds);
}
show()


