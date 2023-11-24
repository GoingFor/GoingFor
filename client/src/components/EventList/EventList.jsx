import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './eventslist.css';

const EventList = ({ selectedGenre }) => {
  const [events, setEvents] = useState([]);
  const { genre } = useParams();

  const genreList = event.genreOptions ? event.genreOptions.map(genre => <li key={genre}>{genre}</li>) : null;

  useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/events/list');
            setEvents(response.data.data);
            // const allEvents = response.data.data;
            // const filteredEvents = selectedGenre
                // ? allEvents.filter(event => event.genre === selectedGenre)
                // : allEvents;
            // setEvents(filteredEvents);

        
      } catch (error) {
        // Handle error
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []); // Leeres Array, damit useEffect nur einmal ausgeführt wird

  // const filterEventsByGenre = (events, genre) => {
  //   return genre
  //     ? events.filter((event) => {
  //         const includesGenre = event.genreOptions.includes(genre);
  //         console.log(`${event.name} - Includes Genre: ${includesGenre}`);
  //         return includesGenre;
  //       })
  //     : events;
  // };

  // const filteredEvents = filterEventsByGenre(events, genre);

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


{/* <div className='eventListCardContainer'>
        {filteredEvents.map((event) => (
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
      </div> */}