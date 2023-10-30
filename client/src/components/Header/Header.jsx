import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import HamburgerImage from '/src/assets/hamburger.png';
import goingfor_logo from '../../assets/goingfor_logo.png';
import CreateEvent from "../../pages/CreateEvent/CreateEvent";

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
                    <NavLink to="/">Home</NavLink>
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
                    <li onClick={handleRegionsMenu}>
                        <span>Regionen</span>
                        {showRegionsMenu && (
                            <ul className="submenu">
                                <li><NavLink to="/alleregionen">
                                    Überall</NavLink></li>
                                <li><NavLink to="/nds">
                                    Niedersachsen</NavLink></li>
                                <li><NavLink to="/nrw">
                                    Nordrhein-Westfahlen</NavLink></li>
                                <li><NavLink to="/schleswig">
                                    Schleswig-Holstein</NavLink></li>
                                <li><NavLink to="/meckpomm">
                                    Mecklenburg Vorpommern</NavLink></li>
                                <li><NavLink to="/hamburg">
                                    Hamburg</NavLink></li>
                                <li><NavLink to="/bremen">
                                    Bremen</NavLink></li>
                                <li><NavLink to="/brandenburg">
                                    Brandenburg</NavLink></li>
                                <li><NavLink to="/berlin">
                                    Berlin</NavLink></li>
                                <li><NavLink to="/sachsen">
                                    Sachsen</NavLink></li>
                                <li><NavLink to="/sachsen-anhalt">
                                    Sachsen-Anhalt</NavLink></li>
                                <li><NavLink to="/thüringen">
                                    Thüringen</NavLink></li>
                                <li><NavLink to="/saarland">
                                    Saarland</NavLink></li>
                                <li><NavLink to="/baden">
                                    Baden-Würtemberg</NavLink></li>
                                <li><NavLink to="/rheinland">
                                    Rheinland-Pfalz</NavLink></li>
                                <li><NavLink to="/bayern">
                                    Bayern</NavLink></li>
                                <li><NavLink to="/hessen">
                                    Hessen</NavLink></li>
                                    <li><NavLink to="/nl">
                                    Niederlande</NavLink></li>
                                <li><NavLink to="/belgien">
                                    Belgien</NavLink></li>
                                <li><NavLink to="/lux">
                                    Luxemburg</NavLink></li>
                                <li><NavLink to="/frankreich">
                                    Frankreich</NavLink></li>
                                <li><NavLink to="/swiss">
                                    Schweiz</NavLink></li>
                                <li><NavLink to="/austria">
                                    Österreich</NavLink></li>
                                <li><NavLink to="/tschech">
                                    Tschechien</NavLink></li>
                                <li><NavLink to="/polen">
                                    Polen</NavLink></li>
                                <li><NavLink to="/denmark">
                                    Dänemark</NavLink></li> 
                            </ul>
                        )}
                    </li>
                    <li>
                    <NavLink to="/contact">Kontakt</NavLink>
                    </li>
                    <li>
                    <NavLink to="/profil">Profil</NavLink>
                    </li>
                    <li>
                    <NavLink to="/create-event">Create Event</NavLink> 
                    </li>
                </ul>
            </div>   
        </div>
        </>
    )
}

export default Header;