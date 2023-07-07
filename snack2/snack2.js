//dichiaro array
const listaNum=[];
const numPari=[];
const numDispari=[];

//genero i numeri casuali
let i = 1;
while ( i<= 20 ){
    let numRandom = Math.round(Math.random() * 100 );
    listaNum.push (numRandom);

    i+= 1;
}
 
    console.log(listaNum);
    console.log("***********");

//separo i numeri pari e dispari
 
    const bloccoPari = document.querySelector(".pari");
    const bloccoDispari = document.querySelector(".dispari");



    for(let iFor=0; iFor < listaNum.length; iFor++ ) {

        const div = document.createElement("div");
        div.classList.add("fs-2")

        let singNum = parseInt( listaNum[iFor]);
        
        if ( singNum % 2 == 0 ){
            numPari.push(singNum);
            div.innerHTML= (singNum)
            bloccoPari.append(div)
        }

         if( singNum % 2 !== 0 ){
            numDispari.push(singNum);
            div.innerHTML= (singNum)
            bloccoDispari.append(div)
        }
    } 
    console.log(numPari);
    console.log(numDispari)

