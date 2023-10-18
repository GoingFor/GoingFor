import React, {useState} from 'react';
import "./style.css";

const Navbar = () => {
  const [isKategorieOpen, setKategorieOpen] = useState(false);
  const [isRegionOpen, setRegionOpen] = useState(false);

  const handleKategorieClick = () => {
    setKategorieOpen(!isKategorieOpen);
    setRegionOpen(false); 
  };

  const handleRegionClick = () => {
    setRegionOpen(!isRegionOpen);
    setKategorieOpen(false); 
  };


  return (
    <nav className="navbar">
      <ul>
      <li
          onClick={handleKategorieClick}
        >
          Kategorie
          {isKategorieOpen && (
            <ul className="submenu">
              <li>Rock</li>
              <li>Punk</li>
              <li>Electro</li>
              <li>Country</li>
              <li>Blues</li>
              <li>Jazz</li>
              <li>Gothic</li>
              <li>Hip-Hop</li>
              <li>Klassik</li>
              <li>Kunst+Kultur</li>
              <li>Metal</li>
              <li>Pop</li>
              <li>Mittelalter</li>
              <li>Reagae</li>
              <li>Schlager</li>
              <li>Ska</li>
              <li>Volksmusik</li>
            </ul>
          )}
        </li>
        <li
          onClick={handleRegionClick}
        >
          Region
          {isRegionOpen && (
            <ul>
              <ul className="submenu">
                <li>🇩🇪 Niedersachsen</li>
                <li>🇩🇪 Nordrhein Westfalen</li>
                <li>🇩🇪 Schleswig Holstein</li>
                <li>🇩🇪 Mecklenburg Vorpommern</li>
                <li>🇩🇪 Berlin</li>
                <li>🇩🇪 Brandenburg</li>
                <li>🇩🇪 Hamburg</li>
                <li>🇩🇪 Bremen</li>
                <li>🇩🇪 Thüringen</li>
                <li>🇩🇪 Saarland</li>
                <li>🇩🇪 Sachsen</li>
                <li>🇩🇪 Sachsen-Anhalt</li>
                <li>🇩🇪 Baden Würtemberg</li>
                <li>🇩🇪 Bayern</li>
                <li>🇩🇪 Hessen</li>
                <li>🇩🇪 Rheinland-Pfalz</li>
                <li>🇳🇱 Niederlande</li>
                <li>🇧🇪 Belgien</li>
                <li>🇱🇺 Luxemburg</li>
                <li>🇫🇷 Frankreich</li>
                <li>🇨🇭 Schweiz</li>
                <li>🇦🇹 Österreich</li>
                <li>🇨🇿 Tschechien</li>
                <li>🇵🇱 Polen</li>
                <li>🇩🇰 Dänemark</li>
              </ul>
              </ul>
          )}
        </li>
        <li>Karte</li>
        <li>Kontakt</li>
        <li>Profil</li>
      </ul>
    </nav>
  );
}

export default Navbar;