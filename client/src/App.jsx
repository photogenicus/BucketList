import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Feed from "./components/Feed";
import User from "./components/User";

function App() {
const [loggedIn, setLoggedIn] = useState({
  isLoggedIn: false
})

function logIn() {
  setLoggedIn({isLoggedIn: true})
}

  if(loggedIn.isLoggedIn === true) return <User />
  return <Login logIn={logIn} />  
}


export default App;
