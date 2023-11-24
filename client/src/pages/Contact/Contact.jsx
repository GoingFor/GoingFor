import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Button } from '../../components/Button/index.js';
import './contact.css';

const Contact = () => {
  const developers = [
    { name: 'Sasa Misic', role: 'Teamlead', imageUrl: 'photos/developers/sasa.jpg' },
    { name: 'Jana Heyn', role: 'Git Hub Leader', imageUrl: 'photos/developers/jana.jpg' },
    { name: 'Melanie Silies', role: 'Frontend Engineer', imageUrl: 'photos/developers/melli.jpg' },
    { name: 'Roman Tide', role: 'Backend Engineer', imageUrl: 'photos/developers/roman.png' },
  ];

  const DeveloperInfo = ({ name, role, imageUrl }) => (
    <div className='developerCard'>
      <img className='developerImg' src={`/${imageUrl}`} alt={`${name} - ${role}`} />
      <h3 className='developer-name'>{name}</h3>
      <p className='developer-role'>{role}</p>
    </div>
  );



  const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
  
        try {
          const response = await fetch('/api/contact/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
  
          if (response.ok) {
            console.log('E-Mail erfolgreich versendet!');
            alert('E-Mail erfolgreich versendet!')
          } else {
            console.error('Fehler beim Senden der E-Mail');
            alert('Fehler beim Senden der E-Mail')
          }
        } catch (error) {
          console.error('Fehler beim Senden der E-Mail', error);
        }
  
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
  
    
      return(
        <form className='contactForm' onSubmit={handleSubmit}>
        <label 
        className='contactFormLabel' 
        htmlFor="name">
            Name:
            </label>
        <input 
        className='contactFormInput' 
        type="text" 
        id="name" 
        name="name" 
        value={formData.name}
        onChange={handleChange}
        required />

        <label 
        className='contactFormLabel' htmlFor="email">
            Email:
        </label>
        <input 
        className='contactFormInput' 
        type="email" 
        id="email" 
        name="email" 
        value={formData.email}
        onChange={handleChange}
        required />

        <label 
        className='contactFormLabel' htmlFor="message">
            Nachricht:
        </label>
        <textarea 
        className='contactFormTextarea' 
        id="message" 
        name="message" 
        rows="8" 
        value={formData.message}
        onChange={handleChange}
        required>
        </textarea>

        <button 
        className='contactFormButton' 
        type="submit">
            Senden
        </button>
        </form>
    )};


  return (
    <div className='contactPageContainer'>

      <div className='cp-ph-wrapper'>
        <Link to={'/home/profile'}>
          <PageHeader 
            pageTitle='Kontaktiere uns'
                    />
        </Link>
      </div>

      <div className='cp-subtitle-wrapper'>
        <p className='cp-subtitle-text'>Du hast Anregungen, Wünsche oder Feedback? </p>
        <p className='cp-subtitle-text'>Fühl dich frei, uns über das Formular zu kontaktieren.</p>
      </div>

      <ContactForm />
      <div className="developers">
        <h2 className='developers-h2'>Die Köpfe dahinter</h2>
        <div className='developerContainer'>
            {developers.map((developer, index) => (
            <DeveloperInfo key={index} {...developer} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
