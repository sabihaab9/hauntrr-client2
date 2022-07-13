import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

//useState variables -> set users, ghosts and houses and maybe hauntings
//fetch user data as an effect on page l oad
const [users, setUsers] = useState([])
const [ghosts, setGhosts] = useState([])
const [houses, setHouses] = useState([])

useEffect(()=> {
    fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((json) => {
      setUsers(json)
    })

    fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((json) => {
      setGhosts(json)
    })

    fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((json) => {
      setHouses(json)
    })
}, [])



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
      
      <Route path="/homepage" >
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
