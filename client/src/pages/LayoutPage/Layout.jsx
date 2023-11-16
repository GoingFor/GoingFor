import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/index.js';
import './style.css';


const LayoutPage = () => {
    // const { isAuthenticated } = useAuth();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if(!isAuthenticated){
    //         navigate('/login');
    //     }
    // }, []);


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