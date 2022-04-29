import "./style.css";
import printGameState from "./strategoFunctions-folder/printGameState";
import dummyArray from "./strategoFunctions-folder/dummyArray.json";
import userIsOnline from "./backend-folder/userIsOnline"

printGameState(dummyArray);

const app = document.getElementById("app");

dummyArray.forEach((piece) => {
  //forEach runs through an array and for each element runs a function

  const newDiv = document.createElement("div"); // use Javascript to make a new div
  newDiv.classList.add("grid-item"); // add a class to it for CSS styling purposes. You can select all of these with ".newPieceClass"

  if (piece != null && piece != "lake") {
    newDiv.style.backgroundColor = piece.color;
    newDiv.textContent = piece.rank;
  }
  if (piece == null) {
    newDiv.textContent = "null";
  }
  if (piece == "lake") {
    newDiv.textContent = "lake";
    newDiv.style.backgroundColor = "#ADD8E6"; // light blue for lakes
  }

  app.appendChild(newDiv);
});


userIsOnline();