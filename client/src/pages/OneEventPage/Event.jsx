import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import axios from 'axios';
import { PageHeader } from '../../components/PageHeader/index.js';
import {Card} from '../../components/Card/index.js';
import { HiOutlineHeart } from 'react-icons/hi2';
import './style.css';

const Event = () => {
    const { id } = useParams();
    const [ event, setEvent ] = useState({});
    const [ liked, setLiked ] = useState(false);
    const [ userData, setUserData ] = useState({})
    const { user } = useAuth();

    useEffect(() => {
        getEventData(id);
    }, [id])

    const getEventData = async(eventId) => {
        try {
            const { data } = await axios.get(`/api/events/getevent/${eventId}`);

            if(data.event.offeredDescription){
                setEvent({...data.event, offeredDescription: data.event.offeredDescription.split(', ')});
                console.log('if: event after setting state:', data.event.offeredDescription);
            } else {
                setEvent(data.event);
                console.log('else: event after setting state:', data.event);
            }
        } catch(error) {
            console.log('Event - getEventData: Fehler beim Abrufen der Eventdaten', error)
        }
    }

    const calcDateDiff = (startDate, endDate) => {
        if (endDate) {
          const start = new Date(startDate);
          const end = new Date(endDate);
          const timeDiff = end - start + 1;
          const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
          return `${daysDiff} Tage`;
        } else {
          return new Date(startDate).toLocaleDateString();
        }
      };
    

    const handleAddEvent = async(event) => {
        try {
            await axios.put('/api/user/addevent', {
                event,
                user
            });
            
            console.log('event erfolgreich auf die wunschliste gepackt!', event);
            
        } catch(error){
            console.log('fehler beim hinzufügen des events:', error.response.data);
        } 
    }


    return(
        <div className='evt'>
            {/* evt = eventseite */}
            {/* ph = page header */}
            {/* mc = mobile content */}
            {/* dc = desktop content */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}


            <div className='evt-ph-wrapper'>
                <Link to={'/home'}>
                    <PageHeader pageTitle='Event' />
                </Link> 
                
            </div>

            <main className='evt-mc-wrapper'>
                <div className="evt-mc">

                    <button className='evt-ph-btn' onClick={() => handleAddEvent(event)}>
                        <HiOutlineHeart className={`evt-ph-icon ${liked ? 'liked' : ''}`}/>
                    </button> 

                    <div className="evt-mc-header">{event.name}</div>
                    {event.description && (
                        <div className="evt-mc-des">{event.description}</div>
                    )}

                    <div className='evt-mc-grid-wrapper'>
                        <div className='evt-mc-grid'>
                        
                        <Card>
                            <div className="text">
                                <p className="subtitle">Wann?</p>
                                {event.endDate ? (
                                    <>
                                        <p className="cardText">{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>
                                        <p className="cardText">{calcDateDiff(event.startDate, event.endDate)}</p>
                                    </>
                                ):(
                                    <p className="cardText">{new Date(event.startDate).toLocaleDateString()}</p>
                                )
                                }
                            </div>
                        </Card> 

                        <Card>
                            <div className="text">
                                <p className="subtitle">Wo?</p>
                                <p className="cardText">{event.street} {event.housenumber}</p>
                                <p className="cardText">{event.postcode} {event.city}</p>
                            </div>
                        </Card>

                        {
                            ( event.cheapestTicket || event.savingTip ) && (
                                <Card>
                                    <div className="text">
                                        <p className="subtitle">Tickets</p>
                                        <p className="cardText">{event.cheapestTicket}</p>
                                        <p className="cardText">{event.savingTip}</p>
                                    </div>
                                </Card> 
                            )}
                        
                        {
                            event.genreOptions && 
                            event.genreOptions.length > 0 && (
                                <Card>
                                    <div className="text">
                                        <p className="subtitle">Genres</p>
                                        <p className="cardText">{event.genreOptions.join(', ')}</p>
                                    </div>
                                </Card> 
                        )}

                        {
                            event.locationOptions && 
                            event.locationOptions.length > 0 && (
                                <Card>
                                    <div className="text">
                                        <p className="subtitle">Location</p>
                                        <p className="cardText">{event.locationOptions}</p>
                                    </div>
                                </Card> 
                        )}

                        {
                            event.campingOptions && 
                            event.campingOptions.length > 0 && (
                                <Card>
                                    <div className="text">
                                        <p className="subtitle">Camping</p>
                                        <p className="cardText">{event.campingOptions.join(', ')}</p>
                                    </div>
                                </Card> 
                        )}

                        
                        {   
                            event.accessibilityOptions && 
                            event.accessibilityOptions.length > 0 && (
                                <Card>
                                    <div className="text">
                                        <p className="subtitle">Barrierefreiheit</p>
                                        <p className="cardText">{event.accessibilityOptions.join(', ')}</p>
                                    </div>
                                </Card> 
                        )}

                        {event.websiteLink && (
                            <Card>
                                <div className="text">
                                    <p className="subtitle">Mehr</p>
                                    <p className="cardText">{event.websiteLink}</p>
                                    <p className="cardText"></p>
                                </div>
                            </Card> 
                        )}
                        </div>
                    </div>

                    { event.offeredDescription && (
                        <div className="evt-mc-offered-des-wrapper">
                            <div className='evt-mc-offered-des'>
                                <p className="evt-mc-subtitle-xs">Was dir dieses Event bietet</p>
                                <ul className='evt-mc-offered-des-list'>
                                    {event.offeredDescription.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul> 
                            </div>    
                        </div>
                    )}

                    <div className="evt-mc-reviews-wrapper">
                        <div className='evt-mc-reviews'>
                            <p className="evt-mc-subtitle-xs">Bewertungen</p>
                            <div className="evt-mc-card-wrapper">
                                <div className="evt-mc-card">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sequi esse totam accusantium nostrum. Necessitatibus repudiandae similique reiciendis architecto, consequuntur nam vel nemo cum, dolore facilis voluptate nobis vitae tempora?</p>
                                </div>
                                
                                <div className="evt-mc-card">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sequi esse totam accusantium nostrum. Necessitatibus repudiandae similique reiciendis architecto, consequuntur nam vel nemo cum, dolore facilis voluptate nobis vitae tempora?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Event;
