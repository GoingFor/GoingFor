import React, { useState } from "react";
import "./style.css";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import goingfor_logo from '../../assets/goingfor_logo.png';

const closeMenu = () => {
  setShowMenu(false);
  setShowCategorySubmenu(false);
  setShowRegionSubmenu(false);
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategorySubmenu, setShowCategorySubmenu] = useState(false);
  const [showRegionSubmenu, setShowRegionSubmenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowCategorySubmenu(false);
    setShowRegionSubmenu(false);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleCategorySubmenu = (event) => {
    event.preventDefault();
    setShowCategorySubmenu(!showCategorySubmenu);
    setShowRegionSubmenu(false);
  };
  

  const toggleRegionSubmenu = (event) => {
    event.preventDefault();
    setShowRegionSubmenu(!showRegionSubmenu);
    setShowCategorySubmenu(false);
  };

  return (
    <nav className={`container navbar ${showMenu ? "mobile-menu-open" : ""}`}>
      <img className="logo" src={goingfor_logo} alt='goingfor-logo'/>
      <menu>
        <ul
          className={`nav-links ${showMenu ? "show-menu" : ""}`}
          id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}
        >
            <li className="obermenu" onClick={toggleCategorySubmenu}>Kategorien
            {showCategorySubmenu && (
              <div className="submenu-1">
                <a href="#">Alle anzeigen</a>
                <a href="#">Rock</a>
                <a href="#">Pop</a>
                <a href="#">Elektro</a>
                <a href="#">Metal</a>
                <a href="#">HipHop</a>
                <a href="#">Ska</a>
                <a href="#">Schlager</a>
                <a href="#">Blues</a>
                <a href="#">Jazz</a>
                <a href="#">Reagae</a>
                <a href="#">Punk</a>
                <a href="#">Mittelalter</a>
                <a href="#">Volksmusik</a>
                <a href="#">Country</a>
                <a href="#">Gothic</a>
                <a href="#">Kunst+Kultur</a>
                <a href="#">Klassik</a>
              </div>
            )}
          </li>
          <li className="obermenu" onClick={toggleRegionSubmenu}>Regionen
            {showRegionSubmenu && (
              <div className="submenu-2">
                  <a href="#">Niedersachsen</a>
                  <a href="#">Nordrhein Westfalen</a>
                  <a href="#">Schleswig Holstein</a>
                  <a href="#">Mecklenburg Vorpommern</a>
                  <a href="#">Berlin</a>
                  <a href="#">Brandenburg</a>
                  <a href="#">Hamburg</a>
                  <a href="#">Bremen</a>
                  <a href="#">Thüringen</a>
                  <a href="#">Saarland</a>
                  <a href="#">Sachsen</a>
                  <a href="#">Sachsen-Anhalt</a>
                  <a href="#">Baden Würtemberg</a>
                  <a href="#">Bayern</a>
                  <a href="#">Hessen</a>
                  <a href="#">Rheinland-Pfalz</a>
                  <a href="#">Niederlande</a>
                  <a href="#">Belgien</a>
                  <a href="#">Luxemburg</a>
                  <a href="#">Frankreich</a>
                  <a href="#">Schweiz</a>
                  <a href="#">Österreich</a>
                  <a href="#">Tschechien</a>
                  <a href="#">Polen</a>
                  <a href="#">Dänemark</a>
              </div>
            )}
          </li>
          <li onClick={closeMenu}>
            <a href="#">Karte</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">Kontakt</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">Profil</a>
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={27} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
