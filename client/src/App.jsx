import React from 'react';
import { Button } from './components/Button/index.js';
import { Card } from './components/Card/index.js'
import { Login } from './pages/LoginPage/index.js';
import { Header } from './components/Header/index.js';
import Logo from './components/Logo';
import Navbar from './components/Navbar/Navbar';
import 'typeface-roboto';
import './App.css';
import Hero from './components/Herosection/Herosection.jsx';


function App() {

    // const handleLogin = () => {
    //     console.log('login erfolgreich');
    // }

    // const handleSignup = () => {
    //     console.log('anmeldung erfolgreich');
    // }

    return(
        <div className='App'>
            {/* <Login/> */}
            {/* <Button label='Anmelden'/> */}
            {/* <Button label='Anmelden' onClick={handleSignup}/> */}
            
            {/* <Card/> */}

            {/* <Header /> */}
            <Hero
              subtitle="Woraus Träume gemacht sind"
              title="Events für Abenteurer"
              text="Wir finden für Dich dein einmaliges Ereignis. Sag uns einfach, was Du magst und wir zeigen Dir die beste Location voll mit Abenteuer und Spaß. Sag’s deinen  Freunden und habt eine tolle Zeit zusammen."
            />
         
            

      

        </div>
    )
}

export default App
