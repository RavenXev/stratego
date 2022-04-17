import getAvailableMoves from "./getAvailableMoves";
import canAttackSpace from "./canAttackSpace";
function runGame(isGameOver, whoseTurn, gameState){

    chosenPiece = gameState[0]; 
    // assume chosen position is 0, you can change this whenever.
    // returns an object with three keys 
    // {rank: , position: , color: }


    while(!isGameOver){

        getAvailableMoves(chosenPiece.rank, chosenPiece.position, gameState)
        //returns an array of all possible moves

        //select another location on the board
        //validate if its a valid move; check if the location exists in the array above

        canAttackSpace()
        


    }

}

export default runGame