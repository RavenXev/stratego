/**
 * Returns array of all locations the piece can move to.
 * @param {number} rank rank of the piece.
 * @param {number} position location on the board.
 * @param {Array} board array of pieces on board
 */
function getAvailableMoves(rank, position, board) {
  function our_remove(current_moves,remove){
    new_moves = []
    for (move of current_moves){
      if (move != remove){
        new_moves.push(move)
      }
    }
    return new_moves
  }
  function checkup(position, board){
    close_up = position%10+90
    index = close_up
    while (index > position){
      if (board[index] != null){
        close_up = index
      }
      index -= 10
    }
    return close_up
  }
  function checkdown(position, board){
    close_down = position%10
    index = close_down
    while (index < position){
      if (board[index] != null){
        close_down = index
      }
      index += 10
    }
    return close_down
  }
  function checkright(position, board){
    close_right = position-position%10+9
    for(let index = close_right; index > position; index--){
      if (board[index] != null){
        close_right = index
      }          
    }
    return close_right
  }
  function checkleft(position, board){
    close_left = position-position%10
    for(index = close_left; index < position; index++){
      if (board[index] != null){
        close_left = index
      }                   
    }
    return close_left
  }
  current_moves = [position+1,position-1,position+10,position-10]
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
    current_moves = []
    close_left = checkleft(position, board)
    close_down = checkdown(position, board)
    close_right = checkright(position, board)
    close_up = checkup(position, board)
    index2 = close_down
    while (index2 <= close_up){ //vertical spaces
      current_moves.push(index2)
      index2 += 10
    }
    for (index = close_left; index <= close_right; index++){  //horizontal spaces
      current_moves.push(index)
    }
    current_moves = our_remove(current_moves,position)
  }
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

  // If rank=4 and position = 50
  // Return [40,60,49,51]
  console.log(rank, position)
  return current_moves
}

export default getAvailableMoves;
