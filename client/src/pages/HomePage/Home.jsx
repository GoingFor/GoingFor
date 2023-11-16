import React, { useState } from 'react';
import EventList from '../../components/EventList/EventList.jsx';
import MapComp from '../../components/MapComponent/MapComponent.jsx';
import './style.css';

const Home = () => {
    const [mapInitialized, setMapInitialized] = useState(false);
    const toggleMapView = () => {
        setMapInitialized(!mapInitialized);
      };

    return (
        <div className="home-container">
          <div className="home-content-container">
            <button
            className="map-list-toggle-button"
            onClick={toggleMapView}>
              {mapInitialized ? 'Karte':'Liste'  }
            </button>
    
            {mapInitialized ? (
              <EventList />
            ) : (
              <MapComp />
            )}
          </div> 
      </div>
    );
};


export default Home;
