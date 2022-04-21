import getAvailableMoves from "./getAvailableMoves";
import canAttackSpace from "./canAttackSpace";


function runGame(isGameOver, whoseTurn, gameState) {
  let whoseTurn = whoseTurn; // this string will either be "red" or "blue"
  
  chosenPiece = gameState[0];
  // assume chosen position is 0
  // also assume chosenPiece.color is the correct color for any given turn
  // chosenPiece an object with three keys
  // {rank: , position: , color: }

  while (!isGameOver) {


    getAvailableMoves(chosenPiece.rank, chosenPiece.position, gameState);
    //returns an array of all possible moves

    //select another location on the board
    //validate if its a valid move; check if the location exists in the array above

    resultOfAttack = canAttackSpace(chosenPiece, gameState[otherLocation]);

    if (resultOfAttack == 2) {
      isGameOver = true;
      //check whoseTurn to find out winner
    }

    if (resultOfAttack == 1) {
      //make the piece move over the losing piece (otherLocation)
    }

    if (resultOfAttack == 0) {
      //remove both pieces from the array
    }

    if (resultOfAttack == -1) {
      //remove only the current piece from the location
    }

    //change the turn
    if(whoseTurn = "red"){
      whoseTurn = "blue"
    }
    else if(whoseTurn="blue"){
      whoseTurn = "red"
    }

  } // end of while loop
}

export default runGame;
