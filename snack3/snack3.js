
const btnNumArray = document.querySelector(".confermaNum");
const printArray = document.querySelector("[id=risultato]");


btnNumArray.addEventListener("click", function () {
             /* variabile legata ciclowhile nascosto*/
    const numerInputElement = document.querySelector("[id=numeroInput]").value;

    console.log(numerInputElement);
 
    
    for (let i=0; i<numerInputElement; i++) {
        
        let iRandom =0;

        //dichiaro le variabili che saranno ripetute ed eventualmente stampate "i" volte
        
        let randomArray=[];
        const div = document.createElement("div");            

        /* in alternativa al ciclo while

        for (let a = 0; a < 10; a++) {
            const randomNum = Math.round(Math.random() * 100);
            randomArray.push(randomNum);
         } */  
             
            while ( iRandom < 10 ){
                let numRandom = Math.round(Math.random() * 100 );
                randomArray.push (numRandom);
                iRandom+= 1;
            }
         
            console.log( randomArray )
            div.innerHTML= (randomArray)
            printArray.append(div)
        }
    })