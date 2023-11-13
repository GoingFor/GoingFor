import React, { useState } from 'react';
import EventList from '../../components/EventList/EventList.jsx';
//import MapComponent from '../../components/Map/Map';
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
            {mapInitialized ? 'Listenansicht' : 'Kartenansicht'}
          </button>
  
          {mapInitialized ? (
            <MapComp />
          ) : (
            <EventList />
          )}
        </div>
      </div>
    );
};


export default Home;
