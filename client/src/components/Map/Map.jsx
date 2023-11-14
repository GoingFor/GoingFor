//import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer,LayersControl,Marker, Popup, useMapEvents  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./style.css";

const { BaseLayer, Overlay } = LayersControl;

const MapComponent = 
({ onLocationSelect , onClose, isOpen, isEditable  }) => {
    // const mapRef = useRef(null); // Ref für das Karten-Element
    const [selectedLocation, setSelectedLocation] = React.useState(null);
    const [markerPosition, setMarkerPosition] = useState(null);
  
    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng;
        setSelectedLocation({ lat, lng });
        setMarkerPosition({ lat, lng });
      };
    
    // const handleConfirm = () => {
    //     if (selectedLocation) {
    //       onLocationSelect(selectedLocation);
    //       onClose();
    //     }
    //   };
      

     useEffect(() => {
    if (isOpen) {
        const map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dddc9e07de57409598a166dc35e41db3').addTo(map);

      map.on('click', handleMapClick);
    }
  }, [isOpen, isEditable]);

  const handleConfirm = () => {
    if (selectedLocation) {
      onLocationSelect(selectedLocation);
      onClose();
    }
  };

    
    return (
        <MapContainer center={[52.646559927548765, 7.088724562463824]} zoom={5} style={{ height: '100vh' }} zoomControl={false} layersControl={false}>
            <LayersControl>
                <BaseLayer checked name="Thunderforest">
                    <TileLayer url="https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dddc9e07de57409598a166dc35e41db3" attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors" />
                </BaseLayer>
            </LayersControl>

            {selectedLocation && (
            <Marker position={markerPosition}>
                <Popup>
                    Ein neuer Pin wurde platziert!
                </Popup>
            </Marker>
            )}
        </MapContainer>
        
    );
};

export default MapComponent;
