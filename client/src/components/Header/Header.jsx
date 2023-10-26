import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import HamburgerImage from '/src/assets/hamburger.png';
import goingfor_logo from '../../assets/goingfor_logo.png';

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return(
        <>
        <div className="nav-container">
            <div className="nav-logo">
                <img src={goingfor_logo} alt="Logo" />
            </div>
             <div className="menu-icon" onClick={handleShowNavbar}>
                <img src={HamburgerImage} alt="Hamburger" />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/categories">Kategorien</NavLink>
                    </li>
                    <li>
                    <NavLink to="/regions">Regionen</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">Kontakt</NavLink>
                    </li>
                    <li>
                    <NavLink to="/profil">Profil</NavLink>
                    </li>
                </ul>
            </div>   
        </div>
        </>
    )
}

export default Header;