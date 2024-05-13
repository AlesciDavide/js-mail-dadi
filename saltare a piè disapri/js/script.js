let listaNumeri = [];

for(let i = 0; i < 6; i++){
    let numeroInserito = Number.parseInt(prompt('inserisci il numero ' + (i+1)));
    if( numeroInserito % 2 == 0){
        listaNumeri.push(numeroInserito);
    };
}

console.log(listaNumeri);