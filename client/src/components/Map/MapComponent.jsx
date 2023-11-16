import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, LayersControl, Marker, Popup, useMapEvents } from 'react-leaflet';
import PinForm from './PinForm.jsx'; 
import 'leaflet/dist/leaflet.css';
import './style.css';

const { BaseLayer } = LayersControl;

const MapComponent = ({ onLocationSelect, onClose, isOpen, isEditable, pins, onPinDelete }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setSelectedLocation({ lat, lng });
    setMarkerPosition({ lat, lng });
  };

  useEffect(() => {
    if (isOpen) {
      const map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dddc9e07de57409598a166dc35e41db3').addTo(map);

      map.on('click', handleMapClick);

      pins.forEach((pin) => {
        const marker = L.marker(pin.coordinates).addTo(map);

        const popupContent = document.createElement('div');

        const titleInput = document.createElement('input');
        titleInput.type = 'url';
        titleInput.value = pin.title || '';
        popupContent.appendChild(titleInput);

        const commentInput = document.createElement('textarea');
        commentInput.value = pin.comment || '';

        const convertToLinks = (text) => {
          return text.replaceAll(/(https?:\/\/[^\s]+)/g, (url) => {
            return `<a href="${url}" target="_blank">${url}</a>`;
          });
        };

        commentInput.innerHTML = convertToLinks(pin.comment);

        popupContent.appendChild(commentInput);

        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'rating-container';
        for (let i = 1; i <= 5; i++) {
          const star = document.createElement('span');
          star.className = `star ${pin.rating >= i ? 'selected' : ''}`;
          star.innerHTML = '&#9733;';
          ratingContainer.appendChild(star);
        }
        popupContent.appendChild(ratingContainer);

        const saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        saveButton.addEventListener('click', () => {
          pin.title = titleInput.value;
          pin.comment = commentInput.value;
          marker.getPopup().setContent(titleInput.value);
          marker.closePopup();
        });
        popupContent.appendChild(saveButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
          onPinDelete(pin.id);
          marker.closePopup();
          map.removeLayer(marker);
        });
        popupContent.appendChild(deleteButton);

        commentInput.addEventListener('click', (e) => {
          if (e.target.tagName === 'A') {
            window.open(e.target.getAttribute('href'), '_blank');
          }
        });

        marker.bindPopup(popupContent).openPopup();
      });
    }
  }, [isOpen, isEditable, pins, onPinDelete]);

  const handleConfirm = () => {
    if (selectedLocation) {
      onLocationSelect(selectedLocation);
      onClose();
    }
  };

  return (
    <>
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

      {/* Add your additional UI components here */}
      {/* Example: <button onClick={handleConfirm}>Confirm</button> */}
    </>
  );
};

export default MapComponent;





// import React, { useRef, useEffect, useState } from 'react';
// import L from 'leaflet';
// import { MapContainer, TileLayer,LayersControl,Marker, Popup, useMapEvents  } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import "./style.css";

// const { BaseLayer, Overlay } = LayersControl;

// const MapComponent = 
// ({ onLocationSelect , onClose, isOpen, isEditable  }) => {
//     // const mapRef = useRef(null); // Ref für das Karten-Element
//     const [selectedLocation, setSelectedLocation] = React.useState(null);
//     const [markerPosition, setMarkerPosition] = useState(null);
  
//     const handleMapClick = (e) => {
//         const { lat, lng } = e.latlng;
//         setSelectedLocation({ lat, lng });
//         setMarkerPosition({ lat, lng });
//       };
    
//     // const handleConfirm = () => {
//     //     if (selectedLocation) {
//     //       onLocationSelect(selectedLocation);
//     //       onClose();
//     //     }
//     //   };
      

//      useEffect(() => {
//     if (isOpen) {
//         const map = L.map('map').setView([51.505, -0.09], 13);

//       L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dddc9e07de57409598a166dc35e41db3').addTo(map);

//       map.on('click', handleMapClick);
//     }
//   }, [isOpen, isEditable]);

//   const handleConfirm = () => {
//     if (selectedLocation) {
//       onLocationSelect(selectedLocation);
//       onClose();
//     }
//   };

    
//     return (
//         <MapContainer center={[52.646559927548765, 7.088724562463824]} zoom={5} style={{ height: '100vh' }} zoomControl={false} layersControl={false}>
//             <LayersControl>
//                 <BaseLayer checked name="Thunderforest">
//                     <TileLayer url="https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dddc9e07de57409598a166dc35e41db3" attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors" />
//                 </BaseLayer>
//             </LayersControl>

//             {selectedLocation && (
//             <Marker position={markerPosition}>
//                 <Popup>
//                     Ein neuer Pin wurde platziert!
//                 </Popup>
//             </Marker>
//             )}
//         </MapContainer>
        
//     );
// };

// export default MapComponent;
