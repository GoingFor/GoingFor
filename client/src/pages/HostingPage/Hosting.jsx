import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const Hosting = () => {

    return(
        <div className='ho'>
            {/* ho = hosting seite / meine inserate */}
            {/* mc = mobile content */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}
            <section className='ho-mobile'>
                <div className='ho-ph-wrapper'>
                    <Link to={'/home/profile'}>
                        <PageHeader 
                            pageTitle='Meine Inserate'
                        />
                    </Link>
                </div>

                <main className='ho-mc'>
                    hier kommt ein grid mit den inseraten rein
                </main>
                
            </section>
        </div>
    )
}

export default Hosting;
