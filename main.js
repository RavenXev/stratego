import "./style.css";
import userIsOnline from "./backend-folder/userIsOnline"
import canAttackSpace from "./strategoFunctions-folder/canAttackSpace"
import getAvailableMoves from "./strategoFunctions-folder/getAvailableMoves"

userIsOnline();
console.log('hello!')

canAttackSpace(3,5);
getAvailableMoves(3,99);

document.querySelector("#app").innerHTML = `
  <h1>Stratego!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
