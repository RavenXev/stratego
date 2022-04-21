function printGameState(gameState){
    let finalPrint = "\n\n";
    for(let i=0;i<100;i++){
        let addedElement = "";
        if (gameState[i]==null){
            addedElement = "N"; 
        }
        else if(gameState[i].rank ==0){
            addedElement = "0"
        }
        else if(gameState[i].rank){
            addedElement = gameState[i].rank
        }
        else if(gameState[i]=="lake"){
            addedElement = "L";
        }
        finalPrint += addedElement.toString().padEnd(4, ' ')
        if(i%10 == 9) finalPrint += "\n\n"
    }

    console.log(finalPrint)
}

export default printGameState