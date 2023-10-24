import React from 'react';
import './style.css';

import { Outlet } from 'react-router-dom';

const MinimalLayoutPage = () => {
    return(
        <div className='layoutContainer'>
                 <Outlet />
                 <div className='rechtliches'>
                    <a href="#">Impressum</a>
                    <a href="#">Datenschutz</a>
                 </div>
        </div>
    )
}

export default MinimalLayoutPage;