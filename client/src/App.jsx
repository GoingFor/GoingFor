import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Button } from './components/Button/index.js';
// import { Card } from './components/Card/index.js'
// import { Login } from './pages/LoginPage/index.js';
// import { Register } from './pages/RegisterPage/index.js';
// import Logo from './components/Logo';
// import Hero from './components/Herosection/Herosection.jsx';

import { Route, Routes } from 'react-router-dom';
import { Info } from './pages/InfoPage/index.js';
import { Register } from './pages/RegisterPage/index.js';
import { Login } from './pages/LoginPage/index.js';
import Hero from './components/Herosection/Herosection.jsx';

import { Profile } from './pages/ProfilePage/index.js';
import { PersonalData } from './pages/PersonalDataPage/index.js';
import { Feedback } from './pages/FeedbackPage/index.js' ;
import { Wishlist } from './pages/WishlistPage/index.js';
import { Hosting } from './pages/HostingPage/index.js';
import LayoutPage from './pages/LayoutPage/Layout.jsx';
import MinimalLayoutPage from './pages/minimalLayoutPage/MinimalLayout.jsx';
import 'typeface-roboto';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';



function App() {

      
    return(

        <div className='App'>
          <Router>
            <Header/>
          </Router>

            {/* <Navbar /> */}
            
            {/* <Hero
              subtitle="Woraus Träume gemacht sind"
              title="Events für Abenteurer"
              text="Wir finden für Dich dein einmaliges Ereignis. Sag uns einfach, was Du magst und wir zeigen Dir die beste Location voll mit Abenteuer und Spaß. Sag’s deinen  Freunden und habt eine tolle Zeit zusammen."
            /> */}


            
            {/* <ProfilePersonalData /> */}
            
            {/* <Profile /> */}
              
            {/* <MinimalLayoutPage/> */}

        <Routes>
            {/* <Route path='/' element={ <MinimalLayoutPage />}>
                <Route index element={ <Info />}/>
                <Route path='/login' element={ <Login />}/>
                <Route path='/register' element={ <Register />}/>
            </Route> */}


            <Route path='/home' element={ <LayoutPage /> }>
                {/* <Route index element={ <Home />}/> */}
                <Route path='/home/profile' element={ <Profile/> }/>
                {/* <Route path='/home/personaldata' element={ <PersonalData />}/> */}
                {/* <Route path='/home/feedback' element={ <Feedback />}/> */}
                {/* <Route path='/home/wishlist' element={ <Wishlist />}/> */}
                {/* <Route path='/home/hosting' element={ <Hosting />}/> */}
            </Route> 


            

        </Routes>
    )
}

export default App

// Hero
//     subtitle="Woraus Träume gemacht sind"
//     title="Events für Abenteurer"
//     text="Wir finden für Dich dein einmaliges Ereignis. Sag uns einfach, was Du magst und wir zeigen Dir die beste Location voll mit Abenteuer und Spaß. Sag’s deinen  Freunden und habt eine tolle Zeit zusammen."


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
