import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Login.css";
import {
  AuthenticateUsername,
  AuthenticatePassword,
} from "../Utils/Authenticators.jsx";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      alert("Login successful");
      setLoading(false);
    } catch (error) {
      console.error("There was an error with the login:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const InputValidation = () => {
    return (
      AuthenticateUsername(form.username) && AuthenticatePassword(form.password)
    );
  };

  console.log("InputValidation", InputValidation());

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login_style">
          <h1>Login</h1>
          <form>
            <div class="login__group field">
              <input
                name="username"
                type="text"
                class="login__field"
                placeholder="Username"
                onChange={handleChange}
              ></input>

              <label class="login__label">Username</label>
            </div>
            <div class="login__group field">
              <input
                name="password"
                type="password"
                class="login__field"
                placeholder="password"
                style={{ marginBottom: "20px" }}
                onChange={handleChange}
              ></input>

              <label class="login__label">Password</label>
            </div>
            <Link to={"/Register"}>Don't have an account?</Link>
            <div className="login__button_div">
              <button
                type="submit"
                className="login__button"
                onClick={handleSubmit}
                disabled={loading === true || !InputValidation()}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
