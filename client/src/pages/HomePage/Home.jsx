import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import MapComponent from '../../components/Map/Map';
import './style.css';

const Home = () => {
    const [mapInitialized, setMapInitialized] = useState(false);

    return (
        <div className="home-container">
            <div className="map-container">
                <MapComponent />
            </div>
            <Footer/>
        </div>
    );
};


export default Home;
