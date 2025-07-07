import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";


function Header(){
    return (
        <header>
            <p>Who Am I</p>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;