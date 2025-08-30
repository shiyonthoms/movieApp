import React from "react";
import '../styles/navbar.css'

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img className="nav-logo-img" src="./netflix-logo.png" alt="logo" />
            </div>
            <div className="nav-items">
                <h3>Shiyon</h3>
                <button className="nav-btn">Sign Out</button>
                
            </div>
            
        </nav>
    )
}


export default NavBar