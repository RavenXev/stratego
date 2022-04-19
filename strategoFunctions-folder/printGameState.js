function printGameState(gameState){
    let finalPrint = "";
    for(let i=0;i<100;i++){
        finalPrint += gameState[i].rank + " "
        if(i%10 == 9) finalPrint += "\n"
    }

    return finalPrint
}

export default printGameState