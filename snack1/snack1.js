let listaNumeri = [];  //array vuoto numeri

const btnLista = document.querySelector(".confermaNum");
let somma = 0;

btnLista.addEventListener("click", function () {
 if (somma<=50) {
    const numerInputElement = document.querySelector("[id=numeroInput]");

    let singNum = parseInt(numerInputElement.value);
    listaNumeri.push (singNum);
    console.log(listaNumeri);
  
    console.log(somma);

   
            somma+= singNum;
    }


})