import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Feed from "./components/Feed";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/user" component={User} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
