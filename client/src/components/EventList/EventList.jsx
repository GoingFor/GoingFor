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
        console.log('Response data:', response.data);
        setEvents(response.data.data);

        
      } catch (error) {
        if (error.response) {
          // Die Anfrage wurde gemacht und der Server hat mit einem Statuscode geantwortet
          // Der Statuscode liegt im Bereich von 2xx, aber die Antwort enthält einen Fehler
          console.error('Fehlerhafte Antwort vom Server:', error.response.data);
        } else if (error.request) {
          // Die Anfrage wurde gemacht, aber es kam keine Antwort zurück
          console.error('Keine Antwort vom Server erhalten');
        } else {
          // Etwas ist während der Anfrage-Einrichtung schiefgegangen
          console.error('Fehler bei der Anfrage:', error.message);
        }
      }
    };

    fetchEvents();
  }, []); 
  // Leeres Array, damit useEffect nur einmal ausgeführt wird

 
    return (
        <div className='eventListContainer'>
            <h1 className="EventList-heading">Entdecke alle Festivals!</h1>

          <div className='eventListCardContainer'>
          {events.map((event) => (
            <div key={event._id} className="EventList-card">
                {event.photos && <img className="EventList-img" src={event.photos} alt={event.name} />}
              <h1 className="EventList-h1">
              <Link to={`/home/event/${event._id}`}>{event.name}</Link>
              </h1>
              <h3 className="EventList-h3-date">
                {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
              </h3>
              <h3 className="EventList-h3">{event.postcode} {event.city}</h3>
              <h3 className="EventList-h3">{event.genre}</h3>
              <p className="EventList-text">{event.description}</p>
            </div>
          ))}
          </div>
        </div>
      );
};

export default EventList;
