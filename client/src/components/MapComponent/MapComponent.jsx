import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'; 
import * as L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapComp = () => {
  const [events, setEvents] = useState([]);
  const mapRef = useRef(null); 
  const addressRef = useRef(null); 
  const { genre } = useParams(); 

<<<<<<< HEAD
  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events/list');
      const eventData = response.data.data || [];
      setEvents(eventData);
    } catch (error) {
      console.error('Fehler beim Abrufen der Event-Daten:', error);
    }
  };

=======
  
>>>>>>> develop2
  useEffect(() => {
    fetchEvents();
  }, []);

  const getAddressCoordinates = async (address) => {
    try {
        const geofyApiKey = 'c12334f54874412b87e3c2d4e182416f'; 
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${geofyApiKey}`
        );

      if (response.data && response.data.features && response.data.features.length > 0) {
        const { coordinates } = response.data.features[0].geometry;
        return { lat: coordinates[1], lon: coordinates[0] };
      } else {
        throw new Error('Geocoding failed. No coordinates found for the address.');
      }
    } catch (error) {
      console.error('Error during geocoding:', error);
      throw error;
    }
  };

  const openPopupOnClick = (marker, popupContent) => {
    marker.bindPopup(popupContent);
    marker.on('click', () => {
      marker.openPopup();
    });
  };
  

  const setMarkers = async () => {
  
    const map = mapRef.current;

    if (!map) {
      console.error('Map not available.');
      return;
    }

    // Entferne alle Marker von der Karte
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    if (!Array.isArray(events)) {
      console.error('Events is not an array:', events);
      return;
    }

    const filteredEvents = genre
      ? events.filter(event => {
          const includesGenre = event.genreOptions.includes(genre);
          console.log(`${event.name} - Includes Genre: ${includesGenre}`);
          return includesGenre;
        })
      : events;

      for (const event of filteredEvents) {
      const { street, housenumber, postcode, city, name, description } = event;
      const address = `${street} ${housenumber}, ${postcode} ${city}`;
      try {        
        const coordinates = await getAddressCoordinates(address);

        const marker = L.marker([coordinates.lat, coordinates.lon]).addTo(map);

        const genreList = event.genreOptions.map(genre => `<li>${genre}</li>`).join('');
        
        const popupContent = `
        <b>${name}</b><br>
        ${postcode} ${city}<br>
        <ul>${genreList}</ul>
        <a href="/home/event/${event._id}">
          Details anzeigen
        </a>`;

        openPopupOnClick(marker, popupContent);
      } catch (error) {
        console.error('Error setting marker:', error);
      }
    };
  };

  useEffect(() => {
    setMarkers();
  }, [events, genre]);

  return (
    <div id="map">
      <MapContainer
        center={[52.52, 13.41]}
        zoom={6}
        style={{ height: '100vh' }}
        zoomControl={false}
        layersControl={false}
        ref={mapRef}
        whenCreated={(map) => (mapRef.current = map)}
      >
        <TileLayer
          url="https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dddc9e07de57409598a166dc35e41db3"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        />
      </MapContainer>
    </div>
  );
};

export default MapComp;
