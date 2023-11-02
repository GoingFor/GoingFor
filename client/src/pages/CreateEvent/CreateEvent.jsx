import React, { useState } from 'react';
import './style.css';
import MapComponent from '../../components/Map';


function CreateEvent() {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    camping: '',
    ticketLink: '',
    cheapestTicket: '',
    savingTip: '',
    offeredDescription: '',
    accessibility: '',
    photos: '',
    startDate: '',
    endDate: '',
  });

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    closeMap();
  };

  const openMap = () => {
    setIsMapOpen(true);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API or process it in your app)
    console.log('Form data submitted:', formData);
    console.log('Ausgewählte Position:', selectedLocation);

      //! Logik zum Speichern der Daten hinzufügen!
  };

  return (
    <div className="form-container">
    <div className="create-event-form">
      <h2 className="create-event-heading">Neues Event erstellen</h2>
   
      <button className='form-button' onClick={openMap}>Wähle den Ort auf der Karte</button>

      {isMapOpen && <div className="map-container-in-form"><MapComponent onLocationSelect={handleLocationSelect} onClose={closeMap} />
      </div>}


      <form onSubmit={handleSubmit}>
        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="name">Event Name</label>
          <input
            className='create-form-input'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="description">Kurze Beschreibung</label>
          <textarea
            className='create-form-textarea'
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="date">Datum</label>
          <input
            className='create-form-input'
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="camping">Camping</label>
          <input
            className='create-form-input'
            type="text"
            id="camping"
            name="camping"
            value={formData.camping}
            onChange={handleChange}
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="ticketLink">Ticket Link</label>
          <input
            className='create-form-input'
            type="text"
            id="ticketLink"
            name="ticketLink" 
            value={formData.ticketLink}
            onChange={handleChange}
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="cheapestTicket">Günstigste Ticketvariante</label>
          <input
            className='create-form-input'
            type="text"
            id="cheapestTicket"
            name="cheapestTicket"
            value={formData.cheapestTicket}
            onChange={handleChange}
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="savingTip">Spartipps</label>
          <input
            className='create-form-input'
            type="text"
            id="savingTip"
            name="savingTip"
            value={formData.savingTip}
            onChange={handleChange}
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="offeredDescription">Was wird geboten</label>
          <input
            className='create-form-input'
            type="text"
            id="offeredDescription"
            name="offeredDescription"
            value={formData.offeredDescription}
            onChange={handleChange}
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="accessibility">Barrierefreiheit</label>
          <input
            className='create-form-input'
            type="text"
            id="accessibility"
            name="accessibility"
            value={formData.accessibility}
            onChange={handleChange}
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="photos">Hier Fotos uploaden</label>
          <input
            className='create-form-input'
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="startDate">Startdatum - Enddatum des Festivals</label>
          <input
            className='create-form-input'
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div className='create-form-input-container'>
          <label className='create-form-label' htmlFor="endDate">End Date:</label>
          <input
            className='create-form-input'
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        {selectedLocation && <p>Ausgewählte Position: {selectedLocation.lat}, {selectedLocation.lng}</p>}


        <button className='form-button' type="submit">Event erstellen</button>
      </form>
    </div>
    </div>
  );
}

export default CreateEvent;




// import React, { useState } from 'react';
// import './style.css'

// function CreateEvent() {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
// date: '',
// });

// const handleChange = (e) => {
// const { name, value } = e.target;
// setFormData({
// ...formData,
// [name]: value,
// });
// };

// const handleSubmit = (e) => {
// e.preventDefault();
// // Handle form submission here (e.g., send data to an API or process it in your app)
// console.log('Form data submitted:', formData);
// };

// return (
// <div className='create-form-input-container'>
// <h2>Create a New Event</h2>
// <form onSubmit={handleSubmit}>
// <div>
// <label className='create-form-label' htmlFor="name">Event Name:</label>
// <input
//          type="text"
//          id="name"
//          name="name"
//          value={formData.name}
//          onChange={handleChange}
//          required
//        />
// </div>

// php
// Copy code
//     <div>
//       <label htmlFor="description">Description:</label>
//       <textarea
//         id="description"
//         name="description"
//         value={formData.description}
//         onChange={handleChange}
//         required
//       ></textarea>
//     </div>

//     <div>
//       <label htmlFor="date">Date:</label>
//       <input
//         type="date"
//         id="date"
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//         required
//       />
//     </div>

//     <button type="submit">Create Event</button>
//   </form>
// </div>
// );
// }

// export default CreateEvent;

