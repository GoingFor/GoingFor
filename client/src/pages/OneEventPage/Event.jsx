import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { PageHeader } from '../../components/PageHeader/index.js';
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
            setEvent(data.event);
            // console.log(data.event.name);

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

                </div>



            </main>
        </div>
    )
}

export default Event;
