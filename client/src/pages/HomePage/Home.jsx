// In der Home.jsx-Datei
import React, { useState, useEffect } from 'react';
import EventList from '../../components/EventList/EventList.jsx';
import MapComp from '../../components/MapComponent/MapComponent.jsx';
import './style.css';
import axios from 'axios';

const Home = ({ filteredEvents }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [mapInitialized, setMapInitialized] = useState(false);
  const [displayMode, setDisplayMode] = useState('all');
  const [events, setEvents] = useState([]); 
  const { genre } = useParams();


  const toggleMapView = () => {
    setMapInitialized(!mapInitialized);
  };

  useEffect(() => {
    console.log('Selected Genre:', genre);
  
    if (genre) {
      axios.get(`/api/events/genres/${genre}`)
        .then(response => {
          setEvents(response.data.data);
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Daten:', error);
        });
    }
  }, [genre]);

  const displayEvents = displayMode === 'all' ? events : filteredEvents;

  return (
    <div className="home-container">
      <div className="home-content-container">
        <button
          className="map-list-toggle-button"
          onClick={toggleMapView}>
          {mapInitialized ? 'Karte' : 'Liste'}
        </button>
        <div>
          {displayEvents.map((event) => (
            <div key={event._id}>{event.name}</div>
          ))}
        </div>

        {mapInitialized
          ? (
            <EventList
              selectedGenre={selectedGenre} />)
          : (
            <MapComp
              selectedGenre={selectedGenre}
              displayMode={displayMode} />
          )}
      </div>
    </div>
  );
};

export default Home;
