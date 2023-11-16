import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Button } from '../../components/Button/index.js';
import './style.css';

const Hosting = () => {

    return(
        <div className='ho'>
            {/* ho = hosting seite / meine inserate */}
            {/* ph = page header */}
            {/* mc = mobile content */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}
            
            <div className='ho-ph-wrapper'>
                <Link to={'/home/profile'}>
                    <PageHeader 
                        pageTitle='Meine Festivals'
                    />
                </Link>
            </div>

            <main className='ho-mc-wrapper'>
                <div className='ho-mc'>
                    <Link className='ho-mc-link' to={'/home/event'}>
                        <Button 
                            className='ho-mc-btn' 
                                >Inseriere ein Festival
                        </Button>
                    </Link>

                    <div className='ho-card-wrapper'>
                        <p className='ho-text'>Ziemlich leer hier... Erstelle ein Festival!</p>
                    </div>
                </div>    
            </main>
        </div>
    )
}

export default Hosting;
