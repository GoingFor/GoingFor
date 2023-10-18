import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../Logo/logo.png"; 
import "./style.css";

const Header = () => {
    return(
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <Navbar />
        </div>
    )
}

export default Header;