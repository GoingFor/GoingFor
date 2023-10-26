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
                <div className='wl-ph-wrapper'>
                    <Link to={'/home/profile'}>
                        <PageHeader 
                            pageTitle='Wunschliste'
                        />
                    </Link>
                </div>

                <main className='wl-mc'>
                    Hier kommen cards im grid modus rein
                </main>

            </section>
        </div>
    )
}

export default Wishlist;
