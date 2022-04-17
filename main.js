import "./style.css";
import userIsOnline from "./backend-folder/userIsOnline"
import Piece from "./strategoFunctions-folder/Piece"
userIsOnline();

let gameStateDummyArray = [];

for(let i=0; i<100; i++){
  let newPiece = new Piece(3,i,"red")
  gameStateDummyArray.push(newPiece)
}

console.log(gameStateDummyArray)
document.querySelector("#app").innerHTML = `
  <h1>Stratego!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
