let form = document.getElementById('calculadora');
console.log ("DOM",form)
form.style.backgroundColor = '#0E6251 ';

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

let pesoing=25

if(pesoing<=30){
    holliday(pesoing)
}else{
    superficie(pesoing)
}
  

function holliday (peso){


    if (peso>20){

        console.log(1500+(peso-20)*20)

    }else if ((peso<=20) && (peso>10)){

        console.log(((peso-10)*50)+1000)

    }else {
        console.log(peso*100)
    }

    }


function superficie (peso){
    console.log(((peso*4)+7)/(peso+90))

}
