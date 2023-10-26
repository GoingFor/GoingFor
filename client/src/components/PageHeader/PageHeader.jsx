import React from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import './style.css';

const PageHeader = ({ pageTitle }) => {

    return(
        <header className='ph-mc'>
                {/* ph = page header */}
                {/* mc = mobile content */}
                {/* btn = button */}
                
            <button className='ph-mc-return-btn'>
                <ImArrowLeft2 className='ph-mc-icon'/>    
            </button>

            <p className='ph-mc-h2'>{pageTitle}</p>
        </header>
    )
}

export default PageHeader;
