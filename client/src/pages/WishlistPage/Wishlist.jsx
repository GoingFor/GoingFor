import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const Wishlist = () => {
    return(
        <div className='wl'>
            {/* wl = feedbackseite */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}
            <section className='wl-mobile'>
                <Link to={'/profile'}>
                    <PageHeader 
                        pageTitle='Wunschliste'
                    />
                </Link>

            </section>
        </div>
    )
}

export default Wishlist;
