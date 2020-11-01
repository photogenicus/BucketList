import React from "react";
import Login from "./components/Login";
import Feed from "./components/Feed";
import User from "./components/User";

function App() {
  return (
    <div>
      <h1>Hello Earth</h1>
      <Login />
      <Feed />
      <User />
    </div>
  );
}

export default App;
