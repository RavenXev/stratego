import "./style.css";
import userIsOnline from "./backend-folder/userIsOnline"

userIsOnline();


document.querySelector("#app").innerHTML = `
  <h1>Stratego!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
