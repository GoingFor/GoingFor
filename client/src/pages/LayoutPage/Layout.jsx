import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/index.js';
import { Outlet } from 'react-router-dom';

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