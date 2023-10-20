import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/index.js'

const LayoutPage = () => {
    return(
        <div className='layoutContainer'>
            <Navbar />
            <div className="background"></div>
            <Footer />
        </div>
    )
}

export default LayoutPage;