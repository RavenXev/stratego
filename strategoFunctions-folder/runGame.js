import getAvailableMoves from "./getAvailableMoves";
import canAttackSpace from "./canAttackSpace";
 
 
function runGame(isGameOver, whoseTurn, gameState) {
  let whoseTurn = whoseTurn; // this string will either be "red" or "blue"
 
  chosenPiece = gameState[30];
  otherLocation = gameState[40];
  // assume chosen position is 30 and chosen space to attack is 40 (needs to be changed to allow for user input)
  // also assume chosenPiece.color is the correct color for any given turn
  // chosenPiece an object with three keys
  // {rank: , position: , color: }
 
  while (!isGameOver) {
 
    let available_moves = getAvailableMoves(chosenPiece.rank, chosenPiece.position, gameState);
    //returns an array of all possible moves
 
    //select another location on the board
    //validate if its a valid move; check if the location exists in the array above
    if (otherLocation in available_moves) {
      resultOfAttack = canAttackSpace(chosenPiece, gameState[otherLocation]);
    }
 
 
    if (resultOfAttack == 2) {
      isGameOver = true;
      console.log(whoseTurn + 'wins!')
      return whoseTurn
      //check whoseTurn to find out winner
 
    }
 
    if (resultOfAttack == 1) {
      //make the piece move over the losing piece (otherLocation)
      chosenPiece.position = otherLocation.position
      otherLocation = chosenPiece
      chosenPiece = null
 
    }
 
    if (resultOfAttack == 0) {
      //remove both pieces from the array
      otherLocation = null
      chosenPiece = null
    }
 
    if (resultOfAttack == -1) {
      //remove only the current piece from the location
      chosenPiece = null
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
