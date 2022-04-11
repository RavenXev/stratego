/**
 * Returns 1,0,or -1 depending on the outcome of an attempted attack.
 * 1 if attacker wins
 * 0 if tie.
 * -1 if opponent wins.
 * Null is an empty space. 1-10 are regular pieces. Flag is 0. Bomb is 99.
 * 
 * 
 * @param {number} attacker rank of the attacking piece.
 * @param {number or null} opponent rank of the piece being attacked.
 */
function canAttackSpace(attacker, opponent){
// Special cases:
// If opponent is null (space is empty), return 1.
// If attacker is 1 (spy), and opponent is 10, spy wins. return 1.
// If attacker is 3 (miner), and 99 (bomb) is opponent, miner wins. return 1.
}

export default canAttackSpace;