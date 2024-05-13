let numeroUno = Math.floor(Math.random() * 6 + 1);
let numeroDue = Math.floor(Math.random() * 6 + 1);

if(numeroUno > numeroDue){
    console.log('Vince il computer con: ' + numeroUno + '!!');
}else{
    console.log('Complimenti hai visto te con: ' + numeroDue + '!!');
}