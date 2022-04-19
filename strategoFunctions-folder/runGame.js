import getAvailableMoves from "./getAvailableMoves";
import canAttackSpace from "./canAttackSpace";


function runGame(isGameOver, whoseTurn, gameState) {
  let whoseTurn = whoseTurn;
  chosenPiece = gameState[0];
  // assume chosen position is 0, you can change this to test other things.
  // returns an object with three keys
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


  } // end of while loop
}

export default runGame;
