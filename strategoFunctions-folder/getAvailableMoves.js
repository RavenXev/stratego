/**
 * Returns array of all locations the piece can move to.
 * @param {number} rank rank of the piece.
 * @param {number} position location on the board.
 */
function getAvailableMoves(rank, position) {
  // 42,43,52,53,46,47,56,57 are all banned spaces. The return array
  // should never contain any of these locations.
  // obviously, any location below 0 or above 99 should not exist.
  // if the rank is 0 (flag) or 99 (bomb), return an empty array.

  // check if the piece is on the right or left edge of the board
  // AKA if the piece is on 0,10,20,30,40,50,60,70,80,90
  // or 9,19,29,39,49,59,69,79,89,99. 
  // for instance, a piece on 9 cannot move to 10 and vice versa.

  //Examples
  // If rank=2 and position=0
  // Return [0,10,20,30,40,50,60,70,80,90,1,2,3,4,5,6,7,8,9]

  // If rank=4 and position = 50
  // Return [40,60,49,51]
  console.log(rank, position)
}

export default getAvailableMoves;
