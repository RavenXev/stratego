import "./style.css";
import printGameState from "./strategoFunctions-folder/printGameState"
import dummyArray from "./strategoFunctions-folder/dummyArray.json"

printGameState(dummyArray)

const app = document.getElementById('app')

let sampleArray = [
  {rank:9, position:0, color: "red"}, 
  {rank:0, position:0, color: "blue"},
  {rank:2, position:0, color: "red"},
  {rank:4, position:0, color: "blue"}
]

sampleArray.forEach((piece) => {
  //forEach runs through an array and for each element runs a function
  const newDiv = document.createElement('div')
  newDiv.classList.add('newPieceClass')
  newDiv.style.backgroundColor = piece.color
  newDiv.textContent= piece.rank
  app.appendChild(newDiv)
})

