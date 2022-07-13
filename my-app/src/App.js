import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

//useState variables -> set users, ghosts and houses and maybe hauntings
//fetch user data as an effect on page l oad
const [users, setUsers] = useState([])
const [ghosts, setGhosts] = useState([])
const [houses, setHouses] = useState([])
const [error, setError] = useState("")
const [currentUser, setCurrentUser] = useState({})

const history = useHistory()

useEffect(()=> {
    fetch("http://localhost:9292/users")
    .then((response) => response.json())
    .then((json) => {
      setUsers(json)
    })

    fetch("http://localhost:9292/ghosts")
    .then((response) => response.json())
    .then((json) => {
      setGhosts(json)
    })

    fetch("http://localhost:9292/houses")
    .then((response) => response.json())
    .then((json) => {
      setHouses(json)
    })
}, [])

const handleLogin = details => {
    
  let login = false
  
  users.forEach(temp=>{

    if(temp.password === details.password && temp.name === details.name){
      console.log('logged in!')
      login = true
      setCurrentUser(temp)
    }
  })

  if(!login){
    setError("Error: Incorrect Details")
  }
  else {
    if(currentUser.is_ghost){
      history.push("/home")
    }
    else {
      history.push("/properties")
    }
  }

}





const App = () => {
  return (
    <div>
      <Route exact path="/" >
        <Login
        handleLogin={handleLogin}
        error={error}
        onSignup={handleSignup}/>
      </Route>

      <Route path="/signup" >
        <SignUp
        handleLogin={handleLogin}
        error={error}
        onSignup={handleSignup}/>
      </Route>
      
      <Route path="/home" >
        <HomePage
        ghosts = {ghosts}
        houses = {houses}/>
      </Route>

      <Route path="/properties" >
        <HomePage
        handleLogin={handleLogin}
        error={error}
        onSignup={handleSignup}
        houses = {houses}/>
      </Route>

    </div>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
