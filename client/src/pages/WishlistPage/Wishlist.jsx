import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Carousel } from '../../components/Carousel/Carousel.jsx';
import festivalmeppenData from './festivalmeppenData.json';
import './style.css';

const Wishlist = () => {
    return(
        <div className='wl'>
            {/* wl = feedbackseite */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}
            <section className='wl-mobile'>
                <div className='wl-ph-wrapper'>
                    <Link to={'/home/profile'}>
                        <PageHeader 
                            pageTitle='Wunschliste'
                        />
                    </Link>
                </div>

                <main className='wl-mc'>
                    <div className='wl-carousel'>
                        <Carousel data={festivalmeppenData.slides}/>

                    </div>
                </main>

            </section>
        </div>
    )
}

export default Wishlist;
