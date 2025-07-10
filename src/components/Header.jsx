import React from "react";
import { NavLink  } from "react-router-dom";
import "../styles/Header.css";


function Header(){
    return (
        <header className="header">
            <div>
                <p className="header-title">Who Am I</p>
            </div>
            <div className="header-links-container">
                <nav>
                    <ul className="header-links">
                        <li><NavLink  className="header-link" to="/">Home</NavLink ></li>
                        <li><NavLink  className="header-link" to="/about">About</NavLink ></li>
                        <li><NavLink  className="header-link" to="/projects">Projects</NavLink ></li>
                        <li><NavLink  className="header-link" to="/contact">Contact</NavLink ></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;