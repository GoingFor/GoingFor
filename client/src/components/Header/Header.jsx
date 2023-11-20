import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import HamburgerImage from '/src/assets/hamburger.png';
import goingfor_logo from '../../assets/goingfor_logo.png';
import Home from '../../pages/Homepage/Home'; 


const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showGenresMenu, setShowGenresMenu] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); // Füge filteredEvents hinzu

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const eventsResponse = await axios.get('/api/events/list');
        if (eventsResponse.data.success) {
          console.log(eventsResponse);
          setEvents(eventsResponse.data.data);

          const allGenres = eventsResponse.data.data.flatMap(event => event.genreOptions);
          console.log(allGenres);

          const uniqueGenres = [...new Set(allGenres)];
          setGenres(uniqueGenres);
          setFilteredEvents(eventsResponse.data.data); // Initialisiere filteredEvents mit allen Events
        } else {
          console.error('Error fetching events:', eventsResponse.data.message);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setDisplayMode('genre');
    setShowGenresMenu(false);

    // Filtere die Events nach dem ausgewählten Genre
    const newFilteredEvents = events.filter((event) => {
      return genre ? event.genreOptions.includes(genre) : true;
    });
    setFilteredEvents(newFilteredEvents);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to={'/home'}>
            <img src={goingfor_logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={() => setShowNavbar(!showNavbar)}>
          <img src={HamburgerImage} alt="Hamburger" />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to={'/home'}>Home</NavLink>
            </li>
            <li onClick={() => setShowGenresMenu(!showGenresMenu)}>
            <span>Genres</span>
            {showGenresMenu && (
                <ul className="submenu">
                <li><NavLink to="/home">Alle anzeigen</NavLink></li>
                {genres.map((genre) => (
                    <li key={genre}>
                    <NavLink to={`/events/genres/${genre}`} onClick={() => handleGenreClick(genre)}>
                        {genre}
                    </NavLink>
                    </li>
                ))}
                </ul>
            )}
            </li>
            <li>
              <NavLink to='/home/contact'>Kontakt</NavLink>
            </li>
            <li>
              <NavLink to={'/home/profile'}>Profil</NavLink>
            </li>
            <li>
              <NavLink to='home/event'>Event erstellen</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Home filteredEvents={filteredEvents} />
    </>
  );
};

export default Header;
