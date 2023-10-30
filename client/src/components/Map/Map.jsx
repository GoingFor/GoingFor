import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer,LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./style.css";

const { BaseLayer, Overlay } = LayersControl;

const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            // Erstellen Sie die Karte
            const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
        
            // Fügen Sie einen Kachel-Layer hinzu
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        
            // Beispiel-Pin hinzufügen
            L.marker([51.505, -0.09]).addTo(map);
        }
    }, []); // Leerer Abhängigkeitsarray stellt sicher, dass der Effekt nur einmal ausgeführt wird
    
    return (
        <MapContainer center={[52.646559927548765, 7.088724562463824]} zoom={5} style={{ height: '100vh' }}>
            <LayersControl position="topright">
                <BaseLayer checked name="Thunderforest">
                    <TileLayer url="https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dddc9e07de57409598a166dc35e41db3" attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors" />
                </BaseLayer>
            </LayersControl>
        </MapContainer>
    );
};

export default MapComponent;
