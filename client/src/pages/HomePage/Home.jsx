import React, { useState } from 'react';
import EventList from '../../components/EventList/EventList.jsx';
//import MapComponent from '../../components/Map/Map';
import './style.css';

const Home = () => {
    const [mapInitialized, setMapInitialized] = useState(false);

    return (
        <div className="home-container">
            <div className="home-content-container">
                <EventList />
            </div>
        </div>
    );
};


export default Home;
