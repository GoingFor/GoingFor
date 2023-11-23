import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Info } from './pages/InfoPage/index.js';
import { Register } from './pages/RegisterPage/index.js';
import { Login } from './pages/LoginPage/index.js';
import { Profile } from './pages/ProfilePage/index.js';
import { PersonalData } from './pages/PersonalDataPage/index.js';
import { Feedback } from './pages/FeedbackPage/index.js';
import { Wishlist } from './pages/WishlistPage/index.js';
import { Hosting } from './pages/HostingPage/index.js';
import { Home } from './pages/HomePage/index.js';
import LayoutPage from './pages/LayoutPage/Layout.jsx';
import MinimalLayoutPage from './pages/minimalLayoutPage/MinimalLayout.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import {CreateEvent} from './pages/CreateEvent/index.js';
import {Event} from './pages/OneEventPage/index.js';
import Contact from './pages/Contact/Contact.jsx';
import 'typeface-roboto';
import './App.css';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function App() {
    const [selectedGenre, setSelectedGenre] = useState(null);

    return(
        <AuthProvider>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={ <MinimalLayoutPage />}>
                    <Route index element={ <Info />}/>
                    <Route path='/login' element={ <Login />}/>
                    <Route path='/register' element={ <Register />}/>
                </Route>  

                <Route element={ <LayoutPage /> }>
                    {/* <Route path='/home' element={ <Home />}/> */}
                    <Route path='/home' element={<Home selectedGenre={selectedGenre} />} />
                    <Route path='/home/profile' element={ <Profile/> }/>
                    <Route path='/home/personaldata' element={ <PersonalData />}/>
                    {/* <Route path='/home/feedback' element={ <Feedback />}/> */}
                    <Route path='/home/wishlist' element={ <Wishlist />}/>
                    <Route path='/home/hosting' element={ <Hosting />}/>
                    <Route path='/home/contact' element={ <Contact />}/>
                    <Route path='/home/event' element={ <CreateEvent /> }/>
                    <Route path='/home/event/:id' element={ <Event /> }/>
                    <Route path="/events/genres/:genre" element={<Home/>} />
                </Route> 
            </Routes>
        </AuthProvider>
    )
}

export default App


