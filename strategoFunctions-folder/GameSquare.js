class GameSquare {
  
    #rank = null;
    #position = null;
    #color = null;

    constructor(rank, position, color) {
    this.#rank = rank;
    this.#position = position;
    this.#color = color;
  }


    get rank(){
      return this.#rank;
    }

    get position(){
      return this.#position;
    }

    get color(){
      return this.#color;
    }

    set rank(num){
      if(num === 99 || (num>=0 && num<=9) || num == null || num === -1)
      this.#rank = num;
    }

    set position(index){
      if(index <= 99 && index >=0){
        this.#position = index
      }
    }
    
    set color(color){
      if(color === 'red' || color == 'blue' || color == null) {
        this.#color = color
      }
    }
    
}

export default GameSquare