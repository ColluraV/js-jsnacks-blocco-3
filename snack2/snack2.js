const listaNum=[];
const numPari=[];
const numDispari=[];


let i = 1;
while ( i<= 40 ){
    let numRandom = Math.round(Math.random() * 100 );
    listaNum.push (numRandom);

    i+= 1;
}

console.log(listaNum);


    
    for(let iFor=0; iFor <=listaNum.length; iFor++ ) ;{

        let singNum = parseInt( listaNum[iFor]);
        if ( singNum % 2 === 0 ){
            numPari.push(singNum);

        }else{( singNum % 2 !== 0 )
            numDispari.push(singNum);
            
        }
    }
