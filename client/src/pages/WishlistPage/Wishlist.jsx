import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Carousel } from '../../components/Carousel/Carousel.jsx';
import festivalmeppenData from './festivalmeppenData.json';
import parookavilleData from './parookavilleData.json';
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
                            <div className='wl-text-le'>
                                <div className='wl-subtitle'>KleinStadtFestival</div>
                                <div className='wl-sr-le-wrapper'>
                                    <p className='wl-sr-le'>49716 Meppen</p>
                                    <p className='wl-sr-le'>23. + 24.08.2024</p>
                                    <p className='wl-sr-le'>2 Tage</p>
                                    <p className='wl-sr-le'>Notiz hinzufügen</p>
                                </div>
                            </div>
                            <div className='wl-text-ri'>
                                <div className='wl-sr-ri'>5,0 (133)</div>
                            </div>
                        </div>
                    </div>   

                    <div className='wl-card-wrapper'>
                        <div className='wl-carousel'>
                            <Carousel data={parookavilleData.slides}/>
                        </div>
                        <div className='wl-text-info'>
                            <div className='wl-text-le'>
                                <div className='wl-subtitle'>Parookaville</div>
                                <div className='wl-sr-le-wrapper'>
                                    <p className='wl-sr-le'>47652 Weeze</p>
                                    <p className='wl-sr-le'>19. + 21.07.2024</p>
                                    <p className='wl-sr-le'>3 Tage</p>
                                    <p className='wl-sr-le'>Notiz hinzufügen</p>
                                </div>
                            </div>
                            <div className='wl-text-ri'>
                                <div className='wl-sr-ri'>4,3 (2568)</div>
                            </div>
                        </div>
                    </div>  
                </div>
            </main>
        </div>
    )
}

export default Wishlist;
