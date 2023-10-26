import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/index.js';
import './style.css';

const LayoutPage = () => {

    return (
        <div className='layoutContainer'>
            <Navbar />
            <div className='content'>
                <Outlet />
            </div>
             <Footer />
        </div>
    );
}

export default LayoutPage;