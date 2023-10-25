import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Info } from './pages/InfoPage/index.js';
import { Register } from './pages/RegisterPage/index.js';
import { Login } from './pages/LoginPage/index.js';
import Hero from './components/Herosection/Herosection.jsx';
// import { Profile } from './pages/ProfilePage/index.js';
// import { PersonalDataPage } from './pages/PersonalDataPage/index.js';
// import { FeedbackPage } from './pages/FeedbackPage/index.js';
// import { WishlistPage } from './pages/WishlistPage/index.js';
import LayoutPage from './pages/LayoutPage/Layout.jsx';
import MinimalLayoutPage from './pages/minimalLayoutPage/MinimalLayout.jsx';
import 'typeface-roboto';
import './App.css';



function App() {

    const handleLogin = () => {
        console.log('login erfolgreich');
    }
    // const handleSignup = () => {
    //     console.log('anmeldung erfolgreich');
    //    
    return(
        <Routes>
            <Route path='/' element={ <MinimalLayoutPage />}>
                <Route index element={ <Info />}/>
                
                <Route path='/login' element={ <Login />}/>
                <Route path='/register' element={ <Register />}/>

                {/* <Route path='/register' element={ <Register />}/> */}
            </Route>


            {/* <Route path='/' element={ <LayoutPage /> }> */}
                

                {/* <Route path='/profile' element={ <Profile/> }/> */}
            {/* </Route>  */}

            

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
