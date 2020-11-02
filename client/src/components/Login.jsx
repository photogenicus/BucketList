import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });

  const { username, password } = login;

  function loginDetails(e) {
    e.preventDefault();
    console.log("Im inside loginDetails");
    axios
      .post("/api/user", login)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="login-form">
      <div className="sign-up-title">
        <p>Sign up for a free account</p>
      </div>
      <div className="form-details">
        <form onSubmit={loginDetails}>
          <input
            type="text"
            className="login-field"
            placeholder="Username"
            value={username || ""}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <input
            type="password"
            className="login-field"
            id="password-field"
            placeholder="Password"
            value={password || ""}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
