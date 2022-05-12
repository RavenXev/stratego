/**
 * Returns array of all locations the piece can move to.
 * @param {number} rank rank of the piece.
 * @param {number} position location on the board.
 * @param {Array} board array of pieces on board
 */

function getAvailableMoves(rank, position, color, Game) {
  // if the rank is 0 (flag) or 99 (bomb), return an empty array.
  rank = parseInt(rank);
  if(isNaN(rank)) rank = null;

  position = parseInt(position);
  let anticolor;
  if (color === "red") {
    anticolor = "blue";
  } else if (color === "blue") {
    anticolor = "red";
  }
  if (rank === 0 || rank === 99 || rank === null || rank == -1) {
    return [];
  }

  // check if the piece is on the right or left edge of the board
  // AKA if the piece is on 0,10,20,30,40,50,60,70,80,90
  // or 9,19,29,39,49,59,69,79,89,99.
  // for instance, a piece on 9 cannot move to 10 and vice versa.
  else if (rank === 2) {
    

  } else {
    // everything else but a 2
    let validMoves = [position + 1, position - 1, position + 10, position - 10];
    return validMoves.filter(
      (currentPosition) =>
        currentPosition >= 0 &&
        currentPosition <= 99 &&
        (Game.pieceAt(currentPosition) == null ||
          Game.colorAt(currentPosition) == anticolor)
    );
  }
}

export default getAvailableMoves;
