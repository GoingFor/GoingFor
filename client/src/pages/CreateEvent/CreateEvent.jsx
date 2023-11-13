import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import MapComponent from '../../components/Map';



function CreateEvent() {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    campingOptions: [],
    websiteLink: '',
    cheapestTicket: '',
    savingTip: '',
    offeredDescription: '',
    accessibilityOptions: [],
    photos: '',
    startDate: '',
    endDate: '',
    genreOptions: [],
    locationOptions:[],
    street: '',
    number: '',
    zipCode: '',
    city: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleCampingCheckboxChange = (option) => {
    const updatedCampingOptions = formData.campingOptions.includes(option)
      ? formData.campingOptions.filter((item) => item !== option)
      : [...formData.campingOptions, option];
    setFormData({ ...formData, campingOptions: updatedCampingOptions });
  };
  const handleGenreCheckboxChange = (option) => {
    const updatedGenreOptions = formData.genreOptions.includes(option)
      ? formData.genreOptions.filter((item) => item !== option)
      : [...formData.genreOptions, option];
    setFormData({ ...formData, genreOptions: updatedGenreOptions });
  };

  const handleAccessibilityCheckboxChange = (option) => {
    const updatedAccessibilityOptions = formData.accessibilityOptions.includes(option)
      ? formData.accessibilityOptions.filter((item) => item !== option)
      : [...formData.accessibilityOptions, option];
    setFormData({ ...formData, accessibilityOptions: updatedAccessibilityOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Form data before sending:', formData);
  
      const response = await axios.post('/api/events/createevent', formData);
  
      console.log('Server response:', response.data);
      console.log('Event erfolgreich erstellt!', formData);
    } catch (error) {
      console.error('Fehler beim Erstellen des Events:', error);
    }
  };
  

  return (
    <div className="form-container">
      <div className="create-event-form">
        <h2 className="create-event-heading">Neues Event erstellen</h2>

        <form onSubmit={handleSubmit}>
          <div className='create-form-input-container'>
            <label className='create-form-label' htmlFor="name">Event Name</label>
            <p className='input-description'>
              Der offizielle Name des Festivals
            </p>
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
            <p className='input-description'>
              Beschreibe dein Event (max 300 Zeichen)
            </p>
            <textarea
              className='create-form-textarea'
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={300} 
              required
            ></textarea>
          </div>

          <div className='create-form-input-container'>
            <div className="address-input-group">
              <div>
                <label className='create-form-label' htmlFor="street">Straße</label>
                <input
                  className='create-form-input'
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className='create-form-label' htmlFor="number">Nummer</label>
                <input
                  className='create-form-input'
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className='create-form-input-container'>
            <div className="address-input-group">
              <div>
                <label className='create-form-label' htmlFor="zipCode">PLZ</label>
                <input
                  className='create-form-input'
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className='create-form-label' htmlFor="city">Ort</label>
                <input
                  className='create-form-input'
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className='create-form-input-container'>
            <label className='create-form-label'>
              Location
              <p className='input-description'>
                Brauchen Besucher Gummistiefel oder Sonnenbrille?
              </p>
              </label> 
            <label className='create-form-label-checkbox'>
                <input
                  className='create-form-input-checks'
                  type="checkbox"
                  value="Indoor"
                  checked={formData.genreOptions.includes('Indoor')}
                  onChange={() => handleGenreCheckboxChange('Indoor')}
                />
                Indoor
              </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="OutdoorWiese"
                checked={formData.genreOptions.includes('OutdoorWiese')}
                onChange={() => handleGenreCheckboxChange('OutdoorWiese')}
              />
              Outdoor - Wiese
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="OutdoorBefestigt"
                checked={formData.genreOptions.includes('OutdoorBefestigt')}
                onChange={() => handleGenreCheckboxChange('OutdoorBefestigt')}
              />
              Outdoor Befestigt
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="IndoorOutdoor"
                checked={formData.genreOptions.includes('IndoorOutdoor')}
                onChange={() => handleGenreCheckboxChange('IndoorOutdoor')}
              />
              Kombination Indoor und Outdoor
            </label>
            </div>

          <div className='create-form-input-container'>
          <label className='create-form-label'>
            Genres
            <p className='input-description'>
              Welche Musikgenres sind vertreten?
            </p>
            </label>
          <div>
          <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Rock"
                checked={formData.genreOptions.includes('Rock')}
                onChange={() => handleGenreCheckboxChange('Rock')}
              />
              Rock
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Pop"
                checked={formData.genreOptions.includes('Pop')}
                onChange={() => handleGenreCheckboxChange('Pop')}
              />
              Pop
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Metal"
                checked={formData.genreOptions.includes('Metal')}
                onChange={() => handleGenreCheckboxChange('Metal')}
              />
              Metal
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Elektro"
                checked={formData.genreOptions.includes('Elektro')}
                onChange={() => handleGenreCheckboxChange('Elektro')}
              />
              Elektro
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Gothic"
                checked={formData.genreOptions.includes('Gothic')}
                onChange={() => handleGenreCheckboxChange('Gothic')}
              />
              Gothic
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Hip-Hop"
                checked={formData.genreOptions.includes('Hip-Hop')}
                onChange={() => handleGenreCheckboxChange('Hip-Hop')}
              />
              Hip-Hop
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Indie"
                checked={formData.genreOptions.includes('Indie')}
                onChange={() => handleGenreCheckboxChange('Indie')}
              />
              Indie
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Mittelalter"
                checked={formData.genreOptions.includes('Mittelalter')}
                onChange={() => handleGenreCheckboxChange('Mittelalter')}
              />
              Mittelalter
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Jazz"
                checked={formData.genreOptions.includes('Jazz')}
                onChange={() => handleGenreCheckboxChange('Jazz')}
              />
              Jazz
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Blues"
                checked={formData.genreOptions.includes('Blues')}
                onChange={() => handleGenreCheckboxChange('Blues')}
              />
              Blues
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Reagae"
                checked={formData.genreOptions.includes('Reagae')}
                onChange={() => handleGenreCheckboxChange('Reagae')}
              />
              Reagae
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Schlager"
                checked={formData.genreOptions.includes('Schlager')}
                onChange={() => handleGenreCheckboxChange('Schlager')}
              />
              Schlager
            </label>
            {/* ... Weitere Genres hier ... */}
          </div>
        </div>

          <div className='create-form-input-container'>
          <label className='create-form-label'>
            Camping
            <p className='input-description'>
              Ist Camping vor Ort möglich? Wähle alle zutreffenden Optionen aus
            </p>
            </label>
          <div>
          <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Zeltplätze"
                checked={formData.campingOptions.includes('Zeltplätze')}
                onChange={() => handleCampingCheckboxChange('Zeltplätze')}
              />
              Zeltplätze
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Wohnmobile"
                checked={formData.campingOptions.includes('Wohnmobile')}
                onChange={() => handleCampingCheckboxChange('Wohnmobile')}
              />
              Wohnmobile
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Reservierung"
                checked={formData.campingOptions.includes('Reservierung')}
                onChange={() => handleCampingCheckboxChange('Reservierung')}
              />
              Reservierung erforderlich
            </label>
            <label className='create-form-label-checkbox'>
              <input
                className='create-form-input-checks'
                type="checkbox"
                value="Nein"
                checked={formData.campingOptions.includes('Nein')}
                onChange={() => handleCampingCheckboxChange('Nein')}
              />
              Nicht möglich
            </label>
            {/* ... Weitere Camping-Optionen hier ... */}
          </div>
        </div>

          <div className='create-form-input-container'>
            <label className='create-form-label' htmlFor="websiteLink">Website Link</label>
            <p className='input-description'>
              Füge einen Link zur offiziellen Website oder Social Media hinzu
            </p>
            <input
              className='create-form-input'
              type="text"
              id="websiteLink"
              name="websiteLink"
              value={formData.websiteLink}
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
            <p className='input-description'>
              Gibt es Kombi- oder EarlyBird Tickets?
            </p>
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
            <p className='input-description'>
              Liste hier hervorzuhebende Dinge auf. z.B. Sitzplätze im Schatten oder VIP-Pakete
            </p>
            <p className='input-description'>
              Trennung durch Komma
            </p>
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
          <label className='create-form-label'>
            Barrierefreiheit
            <p className='input-description'>
              Wählen Sie die Barrierefreiheitsoptionen für das Event aus.
            </p>
          </label>
          <div>
            <label
            className='create-form-label-checkbox'>
              <input
                className='create-form-input'
                type="checkbox"
                value="Rollstuhlgerecht"
                checked={formData.accessibilityOptions.includes('Rollstuhlgerecht')}
                onChange={() => handleAccessibilityCheckboxChange('Rollstuhlgerecht')}
              />
              Rollstuhlgerecht
            </label>
            <label
            className='create-form-label-checkbox'>
              <input
                className='create-form-input'
                type="checkbox"
                value="Gehörlosenfreundlich"
                checked={formData.accessibilityOptions.includes('Gehörlosenfreundlich')}
                onChange={() => handleAccessibilityCheckboxChange('Gehörlosenfreundlich')}
              />
              Gehörlosenfreundlich
            </label>
            <label
            className='create-form-label-checkbox'>
              <input
                className='create-form-input'
                type="checkbox"
                value="Hilfe"
                checked={formData.accessibilityOptions.includes('Hilfe')}
                onChange={() => handleAccessibilityCheckboxChange('Hilfe')}
              />
              Hilfe vor Ort
            </label>
            <label
            className='create-form-label-checkbox'>
              <input
                className='create-form-input'
                type="checkbox"
                value="Begleitperson"
                checked={formData.accessibilityOptions.includes('Begleitperson')}
                onChange={() => handleAccessibilityCheckboxChange('Begleitperson')}
              />
              Begleitperson gratis
            </label>
          </div>
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

          <button className='form-button' type="submit">Event erstellen</button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
