const listaemailDb = ['gigilatrottola@gmail.com', 'mariopassasotto@alice.it', 'emanuelepigliafiori@tiscali.it', 'davide.alesci@gmail.com', 'robertotagliacavi@hotmail.it'];

let nomeUtente = prompt('inserisci il tuo nome');
let nomeUtenteLower = nomeUtente.toLocaleLowerCase();

if(listaemailDb.includes(nomeUtenteLower)){
    console.log('la tua email è presente, ora puoi accedere!! ' + nomeUtenteLower);
}else{
    console.log('La tua email non è presente, prova con una\' altra');
}
