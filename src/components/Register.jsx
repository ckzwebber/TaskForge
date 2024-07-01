import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Login.css";

const Login = () => {
  const handleClickLogin = (e) => console.log(e);

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login_style">
          <h1>Register</h1>
          <form onSubmit={handleClickLogin}>
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
            <Link to={"/login"}>Already have an account?</Link>
            <div className="login__button_div">
              <button type="submit" className="login__button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
