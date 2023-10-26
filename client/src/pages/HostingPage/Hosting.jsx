import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const Hosting = () => {

    return(
        <div className='ho'>
            <section className='ho-mobile'>
                <Link to={'/profile'}>
                    <PageHeader 
                        pageTitle='Meine Inserate'
                    />
                </Link>
            </section>
        </div>
    )
}

export default Hosting;
