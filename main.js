import "./style.css";
import userIsOnline from "./backend-folder/userIsOnline";
import Game from "./strategoFunctions-folder/GameObject";
import GameSquare from "./strategoFunctions-folder/GameSquare";
import getAvailableMoves from "./strategoFunctions-folder/getAvailableMoves";

let dummyGame = [];
let ranks = [99, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < 100; i++) {
  const newSquare = new GameSquare();
  newSquare.position = i;
  if (i <= 39) {
    newSquare.rank = ranks[Math.floor(Math.random() * ranks.length)];
    newSquare.color = "blue";
  } else if ([42, 43, 52, 53, 46, 47, 56, 57].includes(i)) {
    newSquare.rank = -1;
    newSquare.color = null;
  } else if (i <= 59) {
    newSquare.rank = null;
    newSquare.color = null;
  } else {
    newSquare.rank = ranks[Math.floor(Math.random() * ranks.length)];
    newSquare.color = "red";
  }

  dummyGame.push(newSquare);
}

const app = document.getElementById("app");

let newGame = new Game(false, 'red', dummyGame)


newGame.gameState.forEach((gameSquare) => {
  const square = document.createElement("div");
  square.classList.add("grid-item");
  square.setAttribute('rank',String(gameSquare.rank))
  square.setAttribute('position', gameSquare.position)
  square.setAttribute('color', String(gameSquare.color))
  square.addEventListener('mouseover', ()=>{
    square.style.opacity = 0.2
  })

  square.addEventListener('mouseleave', ()=>{
    square.style.opacity = 1
  })

  square.addEventListener('click', (event)=>{
    const thisSquare = event.target
    thisSquare.classList.toggle('active')
    let rank =thisSquare.getAttribute('rank') 
    let position = thisSquare.getAttribute('position') ;
    let color = thisSquare.getAttribute('color');
    console.log(rank, position, color); 
    console.log(getAvailableMoves(rank, position, color, newGame))
  })


  if (gameSquare.color != null) {
    square.style.backgroundColor = gameSquare.color;
  }

  square.textContent = String(gameSquare.rank);
  app.appendChild(square);
});




userIsOnline();
