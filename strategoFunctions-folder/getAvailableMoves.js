/**
 * Returns array of all locations the piece can move to.
 * @param {number} rank rank of the piece.
 * @param {number} position location on the board.
 */
function getAvailableMoves(rank, position) {
  function our_remove(current_moves,remove){
    new_moves = []
    for (move of current_moves){
      if (move != remove){
        new_moves.push(move)
      }
    }
    return new_moves
  }
  current_moves = [position+1,position-1,position+10,position-10]
  // 42,43,52,53,46,47,56,57 are all banned spaces. The return array
  // should never contain any of these locations.
  // obviously, any location below 0 or above 99 should not exist.
  not_available_spaces = [42,43,52,53,46,47,56,57]
  for (space of not_available_spaces){
      for (index = 0; index < current_moves.length; index++){
        if (current_moves[index] == space || current_moves[index] < 0 || current_moves[index] > 99){
          current_moves = our_remove(current_moves, current_moves[index])
      }
    }
  }
  // if the rank is 0 (flag) or 99 (bomb), return an empty array.
  if (rank == 0 || rank == 99){
    return []
  }
  // check if the piece is on the right or left edge of the board
  // AKA if the piece is on 0,10,20,30,40,50,60,70,80,90
  // or 9,19,29,39,49,59,69,79,89,99. 
  // for instance, a piece on 9 cannot move to 10 and vice versa.
  edgeleft = [-1,9,19,29,39,49,59,69,79,89]
  edgeright = [10,20,30,40,50,60,70,80,90,100]
  for (space of edgeleft){
    if (position-1 == space){
      current_moves = our_remove(current_moves, space)
    }
  }
  for (space of edgeright){
    if (position+1 == space){
      current_moves = our_remove(current_moves, space)
    }
  }
  //Examples
  // If rank=2 and position=0
  // Return [0,10,20,30,40,50,60,70,80,90,1,2,3,4,5,6,7,8,9]
  if (rank == 2){
    for (index = 0; index < 10; index++){ //vertical spaces 
      move = index*10+position%10
      add_move = true
      for (j = 0; j < current_moves.length; j++){
        if (move == current_moves[j]){
          add_move = false
        }
      }
      if (add_move){
        current_moves.push(move)
      }
    }
    for (index = 0; index < 10; index++){  //horizontal spaces
      move = index + position-position%10
      add_move = true
      for (j = 0; j < current_moves.length; j++){
        if (move == current_moves[j]){
          add_move = false
        }
      }
      if (add_move){
        current_moves.push(move)
      }
    }
    current_moves = our_remove(current_moves, position)
  }
  // If rank=4 and position = 50
  // Return [40,60,49,51]
  console.log(rank, position)
  return current_moves
}

export default getAvailableMoves;
