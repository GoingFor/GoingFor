import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Carousel } from '../../components/Carousel/Carousel.jsx';
import festivalmeppenData from './festivalmeppenData.json';
import './style.css';

const Wishlist = () => {
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
                    <div className='wl-card-wrapper'>
                        <div className='wl-carousel'>
                            <Carousel data={festivalmeppenData.slides}/>
                        </div>
                        
                        <div className='wl-text-info'>
                            <div className='wl-subtitle'>KleinStadtFestival in Meppen</div>
                            <div className='wl-sr-ri'>49716 Meppen</div>
                            <div className='wl-sr-ri'>2 Tage</div>
                            <div className='wl-sr-ri'>23. + 24.08.2024</div>
                            <div className='wl-sr-ri'>Notiz hinzufügen</div>
                            <div className='wl-sr-le'>5,0</div>
                        </div>
                    </div>   
                </div>
            </main>
        </div>
    )
}

export default Wishlist;
