import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import HamburgerImage from '/src/assets/hamburger.png';
import goingfor_logo from '../../assets/goingfor_logo.png';

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
    const [showRegionsMenu, setShowRegionsMenu] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
      setShowCategoriesMenu(false); // Verstecke das Kategorien-Submenü beim Klick auf das Hauptmenü
      setShowRegionsMenu(false); // Verstecke das Regionen-Submenü beim Klick auf das Hauptmenü
      
    }

    const handleCategoriesMenu = () => {
        setShowCategoriesMenu(!showCategoriesMenu);
        setShowRegionsMenu(false); // Verstecke das Regionen-Submenü beim Klick auf das Kategorien-Submenü
      };
  
    const handleRegionsMenu = () => {
        setShowRegionsMenu(!showRegionsMenu);
        setShowCategoriesMenu(false); // Verstecke das Kategorien-Submenü beim Klick auf das Regionen-Submenü
      };
  

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
                    <NavLink to={'/home'}>Home</NavLink>
                    </li>
                    <li onClick={handleCategoriesMenu}>
                        <span>Kategorien</span>
                        {showCategoriesMenu && (
                            <ul className="submenu">
                                <li><NavLink to="/allcategories">Alle anzeigen</NavLink></li>
                                <li><NavLink to="/rock">Rock</NavLink></li>
                                <li><NavLink to="/punk">Punk</NavLink></li>
                                <li><NavLink to="/electro">Elektro</NavLink></li>
                                <li><NavLink to="/schlager">Schlager</NavLink></li>
                                <li><NavLink to="/metal">Metal</NavLink></li>
                                <li><NavLink to="/gothic">Gothic</NavLink></li>
                                <li><NavLink to="/mittelalter">Mittelalter</NavLink></li>
                                <li><NavLink to="/jazz">Jazz</NavLink></li>
                                <li><NavLink to="/blues">Blues</NavLink></li>
                                <li><NavLink to="/reagae">Reagae</NavLink></li>
                                <li><NavLink to="/hiphop">Hip-Hop</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li>
                    <NavLink to="/home/contact">Kontakt</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/home/profile'}>Profil</NavLink>
                    </li>
                    <li>
                    <NavLink to="home/event">Event erstellen</NavLink> 
                    </li>
                </ul>
            </div>   
        </div>
        </>
    )
}

export default Header;