/**
 * Returns array of all locations the piece can move to.
 * @param {number} rank rank of the piece.
 * @param {number} position location on the board.
 */
function getAvailableMoves(rank, position) {
  function our_remove(current_move,remove){
    new_array = []
    for (i of current_move){
      if (i == remove){
        console.log('skipped')
      }
      else{
        new_array.push(i)
      }
    }
    return new_array
  }
  current_move = [position+1,position-1,position+10,position-10]
  // 42,43,52,53,46,47,56,57 are all banned spaces. The return array
  // should never contain any of these locations.
  // obviously, any location below 0 or above 99 should not exist.
  not_available_spaces = [42,43,52,53,46,47,56,57]
  for (i of not_available_spaces){
      for (j = 0; j < current_move.length; j++){
        if (current_move[j] == i || position < 0 || position > 99){
          current_move = our_remove(current_move, i)
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
  edgeleft = [0,10,20,30,40,50,60,70,80,90]
  edgeright = [9,19,29,39,49,59,69,79,89,99]
  for (i of edgeleft){
    for (j = 0; j < current_move.length; j++){
      if (current_move[j] == i){
        current_move = our_remove(current_move,i)
      }
    }
  }
  for (i of edgeright){
    for (j = 0; j < current_move.length; j++){
      if (current_move[j] == i){
        current_move = our_remove(current_move, i)
      }
    }
  }
  //Examples
  // If rank=2 and position=0
  // Return [0,10,20,30,40,50,60,70,80,90,1,2,3,4,5,6,7,8,9]
  if (rank == 2){
    for (i = 0; i < 10; i++){
      move = i*10+position%10
      add_move = true
      for (j = 0; j < current_move.length; j++){
        if (move == current_move[j]){
          add_move = false
        }
      }
      if (add_move){
        current_move.push(move)
      }
    }
    for (i = 0; i < 10; i++){
      add_move = true
      for (j = 0; j < current_move.length; j++){
        if (i == current_move[j]){
          add_move = false
        }
      }
      if (add_move){
        current_move.push(i)
      }
    }
  }
  // If rank=4 and position = 50
  // Return [40,60,49,51]
  console.log(rank, position)
  return current_move
}

export default getAvailableMoves;
