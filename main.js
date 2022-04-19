import "./style.css";
import userIsOnline from "./backend-folder/userIsOnline"
import Piece from "./strategoFunctions-folder/Piece"
import printGameState from "./strategoFunctions-folder/printGameState"
userIsOnline();

let gameStateDummyArray = [];

for(let i=0; i<100; i++){
  let newPiece = new Piece(3,i,"red")
  gameStateDummyArray.push(newPiece)
}
console.log(printGameState(gameStateDummyArray))
console.log(gameStateDummyArray)

// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
