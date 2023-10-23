import React from 'react';
import './style.css';

import { Outlet } from 'react-router-dom';

const MinimalLayoutPage = () => {
    return(
        <div className='layoutContainer'>
                 <Outlet />
        </div>
    )
}

export default MinimalLayoutPage;