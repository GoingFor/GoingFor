import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import * as L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const MapComp = () => {
  const [events, setEvents] = useState([]);
  const mapRef = useRef(null); 
  const addressRef = useRef(null); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events/list');
        console.log(response.data);
        setEvents(response.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Event-Daten:', error);
      }
    };

    fetchEvents();
  }, []);

  const getAddressCoordinates = async (address) => {
    try {
        const apiKey = 'c12334f54874412b87e3c2d4e182416f'; 
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apiKey}`
        );
        console.log(address);

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

  const setMarkers = async () => {
    
    events.forEach(async (event) => {
      const { street, housenumber, postcode, city, name, description } = event;
      const address = `${street} ${housenumber}, ${postcode} ${city}`;
      try {        
        const coordinates = await getAddressCoordinates(address);
        console.log(coordinates);
        console.log(address);
        const map = mapRef.current;

        const marker = L.marker([coordinates.lat, coordinates.lon]).addTo(map);
        
        const popupContent = `<b>${name}</b><br>${description}<br><a href="/event/${event.id}">Details anzeigen</a>`;
        marker.bindPopup(popupContent).openPopup();
      } catch (error) {
        console.error('Error setting marker:', error);
      }
    });
  };

  useEffect(() => {
    setMarkers();
  }, [events]);

  return (
    <div id="map">
      <MapContainer
        center={[52.52, 13.41]}
        zoom={6}
        style={{ height: '100vh' }}
        zoomControl={false}
        layersControl={false}
        ref={mapRef}
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
