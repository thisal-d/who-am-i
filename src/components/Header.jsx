import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";


function Header(){
    return (
        <header>
            <div>
                <p>Who Am I</p>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;