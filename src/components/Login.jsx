import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import "./Login.css";

const Login = () => {
    return ( 
        <>
        <Navbar/>
        <div className="login">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        </div>
        </>
     );
}
 
export default Login;