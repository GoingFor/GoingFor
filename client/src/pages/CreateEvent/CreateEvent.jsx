import React, { useState } from 'react';
import './style.css';
//
import axios from 'axios';
//


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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here (e.g., send data to an API or process it in your app)
  //   console.log('Form data submitted:', formData);
  // };
  
//
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', formData);
      console.log('Event erfolgreich erstellt!');
    } catch (error) {
      console.error('Fehler beim Erstellen des Events:', error);
    }
  };

  //

  return (
    <div className="create-event-form">
      <h2>Create a New Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Kurze Beschreibung</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="date">Datum</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="camping">Camping</label>
          <input
            type="text"
            id="camping"
            name="camping"
            value={formData.camping}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="ticketLink">Ticket Link</label>
          <input
            type="text"
            id="ticketLink"
            name="ticketLink"
            value={formData.ticketLink}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="cheapestTicket">Günstigste Ticketvariante</label>
          <input
            type="text"
            id="cheapestTicket"
            name="cheapestTicket"
            value={formData.cheapestTicket}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="savingTip">Spartipps</label>
          <input
            type="text"
            id="savingTip"
            name="savingTip"
            value={formData.savingTip}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="offeredDescription">Was wird geboten</label>
          <input
            type="text"
            id="offeredDescription"
            name="offeredDescription"
            value={formData.offeredDescription}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="accessibility">Barrierefreiheit</label>
          <input
            type="text"
            id="accessibility"
            name="accessibility"
            value={formData.accessibility}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="photos">Hier Fotos uploaden</label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="startDate">Startdatum - Enddatum des Festivals</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Erstellen des Event</button>
      </form>
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
// <div>
// <h2>Create a New Event</h2>
// <form onSubmit={handleSubmit}>
// <div>
// <label htmlFor="name">Event Name:</label>
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

