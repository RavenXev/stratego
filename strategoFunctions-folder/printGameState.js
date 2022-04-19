function printGameState(gameState){
    let finalPrint = "";
    for(let i=0;i<100;i++){
        let addedElement = "";
        if (gameState[i]==null){
            addedElement = "N"; 
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

    return finalPrint
}

export default printGameState