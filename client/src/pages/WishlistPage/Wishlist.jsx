import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Carousel } from '../../components/Carousel/Carousel.jsx';
import festivalmeppenData from './festivalmeppenData.json';
import parookavilleData from './parookavilleData.json';
import './style.css';

const Wishlist = () => {
    const { user } = useAuth();

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
                    {user && user.likedEvents && user.likedEvents.length > 0 ? (
                        <ul className='wl-mc-list'>
                            {user.likedEvents.map((ev, index) => (
                                <li key={index}>
                                    
                                    <div className='wl-card-wrapper'>
                                        <div className='wl-carousel'>
                                            <Carousel data={festivalmeppenData.slides}/>
                                        </div>

                                        <div className='wl-text-info'>
                                            <div className='wl-text-le'>
                                                <div className='wl-subtitle'>{ev.name}</div>
                                                <div className='wl-sr-le-wrapper'>
                                                    <p className='wl-sr-le'>{ev.postcode} {ev.city}</p>
                                                    {ev.endDate? (
                                                        <>
                                                        <p className='wl-sr-le'>{new Date(ev.startDate).toLocaleDateString()} - {new Date(ev.endDate).toLocaleDateString()}</p>
                                                        <p className='wl-sr-le'>{calcDateDiff(ev.startDate, ev.endDate)}</p>
                                                        </>
                                                    ):(
                                                        <p className='wl-sr-le'>{new Date(ev.startDate).toLocaleDateString()}</p>
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
                                                
                                            >   Aus Wunschliste entfernen
                                            </button>
                                        </div>


                                    </div> 
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='wl-subtitle'>Du hast keine Events in deiner Wunschliste.</p>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Wishlist;
