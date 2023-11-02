import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/index.js';
import './style.css';


const LayoutPage = () => {

    return (
        <div className='layoutContainer'>
            <Header/>
            <div className='site-content'>
                <Outlet />
            </div>
             <Footer />
        </div>
    );
}

export default LayoutPage;