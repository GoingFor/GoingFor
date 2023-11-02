import React, { useEffect }from 'react';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom';
import { Info } from './pages/InfoPage/index.js';
import { Register } from './pages/RegisterPage/index.js';
import { Login } from './pages/LoginPage/index.js';
// import Hero from './components/Herosection/Herosection.jsx';ç
import { Profile } from './pages/ProfilePage/index.js';
import { PersonalData } from './pages/PersonalDataPage/index.js';
import { Feedback } from './pages/FeedbackPage/index.js' ;
import { Wishlist } from './pages/WishlistPage/index.js';
import { Hosting } from './pages/HostingPage/index.js';
import { Home } from './pages/HomePage/index.js';
import LayoutPage from './pages/LayoutPage/Layout.jsx';
import MinimalLayoutPage from './pages/minimalLayoutPage/MinimalLayout.jsx';
import 'typeface-roboto';
import { UserContextProvider } from './context/UserContext.jsx';
import CreateEvent from './pages/CreateEvent/index'; 

import './App.css';




axios.defaults.baseURL = 'http://localhost:3002/api';



function App() {

      
    return(
        <UserContextProvider>
            <Routes>
                <Route path='/' element={ <MinimalLayoutPage />}>
                    <Route index element={ <Info />}/>
                    <Route path='/login' element={ <Login />}/>
                    <Route path='/register' element={ <Register />}/>
                    <Route path='/create' element={<CreateEvent />} />
                </Route>


                <Route element={ <LayoutPage /> }>
                    <Route path='/home' element={ <Home />}/>
                    <Route path='/home/profile' element={ <Profile/> }/>
                    <Route path='/home/personaldata' element={ <PersonalData />}/>
                    <Route path='/home/feedback' element={ <Feedback />}/>
                    <Route path='/home/wishlist' element={ <Wishlist />}/>
                    <Route path='/home/hosting' element={ <Hosting />}/>
                </Route> 
            </Routes>
        </UserContextProvider>

    )
}

export default App




// CHATGPT_INTEGRATION

// const searchBar = document.getElementById('search-bar');
// const chatBox = document.getElementById('chat-box');

// searchBar.addEventListener('keypress', async function (e) {
//   if (e.key === 'Enter') {
//     const userMessage = searchBar.value;
//     chatBox.innerHTML += `<div><strong>Sie:</strong> ${userMessage}</div>`;

//     const response = await sendMessageToServer(userMessage);
//     chatBox.innerHTML += `<div><strong>ChatGPT GPT:</strong> ${response}</div>`;

//     searchBar.value = ''; // Clearing the search bar after sending a message
//   }
// });

// async function sendMessageToServer(message) {
//   try {
//     const response = await fetch('/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ message: message }),
//     });

//     const data = await response.json();
//     return data.response;
//   } catch (error) {
//     console.error('Error sending message to server:', error);
//     return 'Sorry, there was an error processing your request.';
//   }
// }
