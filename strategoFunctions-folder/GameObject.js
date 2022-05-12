import getAvailableMoves from "./getAvailableMoves";
class Game {
    #isGameOver;
    #whoseTurn;
    #gameState;
    constructor(isGameOver, whoseTurn, gameState){
        this.#isGameOver = isGameOver;
        this.#whoseTurn = whoseTurn;
        this.#gameState = gameState;
    }

    pieceAt(index){
        return this.#gameState[index].rank;
    }

    colorAt(index){
        return this.#gameState[index].color;
    }

    getAvailableMoves(index){
        const piece = this.#gameState[index]
        if(piece.rank != null && piece.rank != -1){
            getAvailableMoves(piece.rank, piece.position, this)
        }
    }

    get isGameOver(){
        return this.#isGameOver;
    }

    get whoseTurn(){
        return this.#whoseTurn;
    }

    get gameState(){
        return this.#gameState;
    }

    set isGameOver(newIsGameOver){
        if(newIsGameOver === true || newIsGameOver === false){
            this.#isGameOver = newIsGameOver
        }
    }

    set whoseTurn(whoseTurn){
        if(whoseTurn === 'red' || whoseTurn === 'blue'){
            this.#whoseTurn = whoseTurn
        }
    }

    set gameState(newGameState){
        if(Array.isArray(newGameState) && newGameState.length === 100){
            this.#gameState = newGameState;
        }
    }

}

export default Game