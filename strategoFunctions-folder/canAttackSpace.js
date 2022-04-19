/**
 * Returns 2,1,0,or -1 depending on the outcome of an attempted attack.
 * 2 if the opponent is the flag, and the game is over
 * 1 if attacker wins
 * 0 if tie.
 * -1 if opponent wins.
 * Null is an empty space. 1-10 are regular pieces. Flag is 0. Bomb is 99.
 *
 *
 * @param {object} attacker object/dictionary of the attacking piece.
 * @param {object or null} opponent object/dictionary representing piece being attacked.
 */
function canAttackSpace(attacker, opponent) {
  // If opponent is null (space is empty), return 1.
  if (opponent == null) {
    return 1;
  }

  if (attacker.rank == opponent.rank) {
    return 0;
  }

  //game is over
  if (opponent.rank == 0) {
    return 2;
  }

  // If attacker is 1 (spy), and opponent is 10, spy wins. return 1.
  if (attacker.rank == 1 && opponent.rank == 10) {
    return 1;
  }

  // If attacker is 3 (miner), and 99 (bomb) is opponent, miner wins. return 1.
  if (attacker.rank == 3 && opponent.rank == 99) {
    return 1;
  }

  // If attacker is greater than opponent, opponent wins
  if (attacker.rank > opponent.rank) {
    return 1;
  } else {
    return -1;
  }
}

export default canAttackSpace;
