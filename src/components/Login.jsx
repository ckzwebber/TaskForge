import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Login.css";
import Button from "./Button";

const Login = () => {
  let children = "Login";

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login_style">
          <h1>Login</h1>
          <form>
            <div class="login__group field">
              <input
                type="text"
                class="login__field"
                placeholder="Username"
              ></input>

              <label class="login__label">Username</label>
            </div>
            <div class="login__group field">
              <input
                type="password"
                class="login__field"
                placeholder="password"
                style={{ marginBottom: "20px" }}
              ></input>

              <label class="login__label">Password</label>
            </div>
            <a href="">Forgot password?</a>
            <div className="login__button">
              <Button children={children} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
