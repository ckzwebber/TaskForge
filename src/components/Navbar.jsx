import React from 'react';
import "./Navbar.css";
import Logo from "../assets/images/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><img src={Logo} /></li>
                <li>TaskForge</li>
                </ul>
        </nav>
    );
}
export default Navbar;