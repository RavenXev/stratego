import { auth, database } from "./config";
import { onAuthStateChanged } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { onDisconnect, ref, set, onValue, push, onChildAdded} from "firebase/database";
function userIsOnline(){

let userId;
let userRef;
let gameRef;

const allGamesRef = ref(database, 'games')
const allUsersRef = ref(database,'users')

const app = document.querySelector('#app')

function initGame(){

  //fires when a player changes
  onValue(allUsersRef, (snapshot)=>{
    const data =  snapshot.val();
    let userIds = Object.keys(data)
  })

  onChildAdded(allGamesRef, (snapshot)=>{
    const addedGame = snapshot.val();
    const gameButton = document.createElement('button')
    console.log(addedGame.host)
    gameButton.textContent = addedGame.host
    app.appendChild(gameButton)
  })
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    //logged in
    userId = user.uid;
    userRef = ref(database, 'users/'+userId)
    set(userRef,{
      id: userId,
      name: 'hello'
    })


    gameRef = ref(database, 'games/' +userId)
    set(gameRef,{
      host: userId,
      opponent: 'Ada lovelace'
    } )
    
    //remove any games I host when I disconnect:
    onDisconnect(gameRef).remove()

    //remove me from firebase when I disconnect
    onDisconnect(userRef).remove();
    
    //begin game
    initGame();

  } else {
    //user is signed out
  }
});

signInAnonymously(auth).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage);
});

};

export default userIsOnline;