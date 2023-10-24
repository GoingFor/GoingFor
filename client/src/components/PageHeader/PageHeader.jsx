import React from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import './style.css';

const PageHeader = ({ pageTitle }) => {

    return(
        <header className='mobile-header'>
            <button className='mh-return-btn'>
                <ImArrowLeft2 className='mh-icon'/>    
            </button>

            <h2 className='mh-h2'>{pageTitle}</h2>
        </header>
    )
}

export default PageHeader;
