import React from 'react';
import './style.css';
import Footer from '../../components/Footer/index.js';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const LayoutPage = () => {
    return (
        <div className='layoutContainer'>
            <Header/>
            <div className='content'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default LayoutPage;