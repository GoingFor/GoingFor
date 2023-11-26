import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Carousel } from '../../components/Carousel/Carousel.jsx';
import { Button } from '../../components/Button/index.js';
import parookavilleData from './parookavilleData.json';
import './style.css';

const Wishlist = () => {
    const { user } = useAuth();
    const [eventsData, setEventsData] = useState([]);

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

    const getEvents = async(eventIds) => {
        const eventsData = [];
        for (const eventId of eventIds) {
            try {
                const response = await axios.get(`/api/events/getevent/${eventId}`);
                eventsData.push(response.data);
                // console.log(response.data);


            } catch (error) {
                console.log('fehler beim abrufen der events', error)
            }
        }
        return eventsData;
    }

    useEffect(() => {
        if( user && user.likedEvents && user.likedEvents.length > 0) {
            getEvents(user.likedEvents)
                .then((eventsData) => {
                    setEventsData(eventsData);
                    // console.log(eventsData[0].event.name);
                })
                .catch((error) => {
                    console.log('fehler beim abrufen der eventdaten', error);
                })
        }
    }, [user]);


    const handleDelEvent = async(eventId) => {
        try {
            await axios.delete('/api/user/removeevent', {data: {eventId}});
            setEventsData(eventsData.filter((event) => event.event._id !== eventId));

        } catch(error){
            console.log('Fehler beim entfernen des events', error);
        }
    }



    return(
        <div className='wl'>
            {/* wl = wishlist page */}
            {/* ph = page header */}
            {/* mc = mobile content */}
            {/* sr = stars and reviews */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}

            <div className='wl-ph-wrapper'>
                <Link to={'/home/profile'}>
                    <PageHeader 
                        pageTitle='Wunschliste'
                    />
                </Link>
            </div>

            <main className='wl-mc-wrapper'>
                <div className='wl-mc'>
                    <Link className='wl-mc-link' to={'/home'}>
                        <Button 
                            className='wl-mc-btn' 
                                >Finde dein Festival
                        </Button>
                    </Link>

                    {eventsData.length > 0 ? (
                        <ul className='wl-mc-list'>
                            {eventsData.map((data) => (
                                <li key={data.event._id}>
                                    
                                    <div className='wl-card-wrapper'>
                                        <div className='wl-carousel'>
                                            <Carousel data={parookavilleData.slides}/>
                                        </div>

                                        <div className='wl-text-info'>
                                            <div className='wl-text-le'>
                                                <div className='wl-subtitle'>{data.event.name}</div>
                                                <div className='wl-sr-le-wrapper'>
                                                    <p className='wl-sr-le'>{data.event.postcode} {data.event.city}</p>
                                                    {data.event.endDate? (
                                                        <>
                                                        <p className='wl-sr-le'>{new Date(data.event.startDate).toLocaleDateString()} - {new Date(data.event.endDate).toLocaleDateString()}</p>
                                                        <p className='wl-sr-le'>{calcDateDiff(data.event.startDate, data.event.endDate)}</p>
                                                        </>
                                                    ):(
                                                        <p className='wl-sr-le'>{new Date(data.event.startDate).toLocaleDateString()}</p>
                                                    )}  
                                                </div>
                                            </div>
                                            <div className='wl-text-ri'>
                                                <div className='wl-sr-ri'>5,0 (133)</div>
                                            </div>
                                        </div>

                                        <div className='wl-del'>
                                            <button
                                                className='wl-del-btn'                                            
                                                onClick={() => handleDelEvent(data.event._id)}
                                            >   Aus Wunschliste entfernen
                                            </button>
                                        </div>


                                    </div> 
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='wl-list-empty-text'>Du hast keine Events in deiner Wunschliste.</p>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Wishlist;
