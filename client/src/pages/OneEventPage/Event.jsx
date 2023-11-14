import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { PageHeader } from '../../components/PageHeader/index.js';
import {Card} from '../../components/Card/index.js';
import './style.css';

const Event = () => {
    const { id } = useParams();
    const [ event, setEvent ] = useState({});


    useEffect(() => {
        getEventData(id);
    }, [id])


    const getEventData = async(eventId) => {
        try {
            const { data } = await axios.get(`/api/events/getevent/${eventId}`);
            setEvent({...data.event, offeredDescription: data.event.offeredDescription.split(', ')});
            console.log('event after setting state:', data.event.offeredDescription);

        } catch(error) {
            console.log('Event - getEventData: Fehler beim Abrufen der Eventdaten', error)
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
                    <PageHeader 
                        pageTitle='Event'
                    />
                </Link> 
            </div>

            <main className='evt-mc-wrapper'>
                <div className="evt-mc">
                    <div className="evt-mc-header">{event.name}</div>
                    <div className="evt-mc-des">{event.description}</div>

                    <div className='evt-mc-grid-wrapper'>
                        <div className='evt-mc-grid'>
                        <Card>
                            <div className="text evt">
                                <p className="evt subtitle">Wann?</p>
                                <p className="evt cardText">{event.startDate}</p>
                                <p className="evt cardText">{event.endDate}</p>
                            </div>
                        </Card> 

                        <Card>
                            <div className="text">
                                <p className="subtitle">Wo?</p>
                                <p className="cardText">{event.street} {event.number}</p>
                                <p className="cardText">{event.zipCode} {event.city}</p>
                            </div>
                        </Card>

                        <Card>
                            <div className="text">
                                <p className="subtitle">Tickets</p>
                                <p className="cardText">{event.cheapestTicket}</p>
                                <p className="cardText">{event.savingTip}</p>
                            </div>
                        </Card> 

                        <Card>
                            <div className="text">
                                <p className="subtitle">Genres</p>
                                <p className="cardText">{event.genreOptions}</p>
                            </div>
                        </Card> 

                        <Card>
                            <div className="text">
                                <p className="subtitle">Camping</p>
                                <p className="cardText">{event.campingOptions}</p>
                            </div>
                        </Card> 

                        <Card>
                            <div className="text">
                                <p className="subtitle">Barrierefreiheit</p>
                                <p className="cardText">{event.accessibilityOptions}</p>
                            </div>
                        </Card> 

                        <Card>
                            <div className="text">
                                <p className="subtitle">Mehr</p>
                                <p className="cardText">{event.websiteLink}</p>
                                <p className="cardText"></p>
                            </div>
                        </Card> 
                        </div>
                    </div>

                    <div className="evt-mc-offered-des-wrapper">
                        <div className='evt-mc-offered-des'>
                            <p className="evt-mc-subtitle-xs">Was dir dieses Event bietet</p>
                            {event.offeredDescription && (
                                <ul className='evt-mc-offered-des-list'>
                                    {event.offeredDescription.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul> 
                            )}
                        </div>
                    </div>

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
