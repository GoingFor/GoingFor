import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventList from '../../components/EventList/EventList.jsx';
import MapComp from '../../components/MapComponent/MapComponent.jsx';
import './style.css';
import axios from 'axios';

const Home = () => {
  const [mapInitialized, setMapInitialized] = useState(false);
  const [events, setEvents] = useState([]);
  const { genre } = useParams();

  // const toggleMapView = () => {
  //   setMapInitialized(!mapInitialized);
  // };

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events/list');
        if (response.data.success) {
          setEvents(response.data.data);
        } else {
          console.error('Error fetching events:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = genre
  ? events.filter(event => {
      const includesGenre = event.genreOptions.includes(genre);
      return includesGenre;
    })
  : events;

  return (
    <div className="home-container">
      <div className="home-content-container">
        {/* <button
          className="map-list-toggle-button"
          onClick={toggleMapView}>
          {mapInitialized ? 'Karte' : 'Liste'}
        </button> */}
        <div>
          {filteredEvents.map((event) => (
            <div key={event._id}>{event.name}</div>
          ))}
        </div>
        <MapComp />

        {/* {mapInitialized
          ? (
            <EventList/>)
          : (
            <MapComp />
          )} */}
      </div>
    </div>
  );
};

export default Home;
