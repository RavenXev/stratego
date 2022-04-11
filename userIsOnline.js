import { auth, database } from "./backend-folder/config";
import { onAuthStateChanged } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { onDisconnect, ref, set } from "firebase/database";
function userIsOnline(){

let userId;
let userRef;

onAuthStateChanged(auth, (user) => {
  if (user) {
    //logged in
    userId = user.uid;
    userRef = ref(database, 'users/'+userId)
    set(userRef,{
      id: userId,
      name: 'hello'
    })

    //remove me from firebase when I disconnect
    onDisconnect(userRef).remove();
    
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