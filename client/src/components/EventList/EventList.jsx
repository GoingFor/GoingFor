import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './eventslist.css';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events/list');
        setEvents(response.data);
        
      } catch (error) {
        console.error('Fehler beim Abrufen der Event-Daten:', error);
      }
    };

    fetchEvents();
  }, []); 
  // Leeres Array, damit useEffect nur einmal ausgeführt wird

 
    return (
        <div className='eventListContainer'>
            <h1 className="EventList-heading">Entdecke alle Festivals!</h1>

          {events.map((event) => (
            <div key={event._id} className="EventList-card">
                {event.photos && <img className="EventList-img" src={event.photos} alt={event.name} />}
              <h1 className="EventList-h1">{event.name}</h1>
              <h3 className="EventList-h3-date">
                {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
              </h3>
              <h3 className="EventList-h3">{event.zipCode} {event.city}</h3>
              <h3 className="EventList-h3">{event.genre}</h3>
              <p className="EventList-text">{event.description}</p>
              <Link to={`home/event/${event.id}`}>
              <b>Weitere Infos</b>
            </Link>
            </div>
          ))}
        </div>
      );
};

export default EventList;
