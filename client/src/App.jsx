import React from 'react';
import { Button } from './components/Button/index.js';
import { Card } from './components/Card/index.js'
import { Login } from './pages/LoginPage/index.js';
import { Register } from './pages/RegisterPage/index.js';
import { Header } from './components/Header/index.js';
import Logo from './components/Logo';
import Navbar from './components/Navbar/Navbar';
import 'typeface-roboto';
import './App.css';

function App() {

    const handleLogin = () => {
        console.log('login erfolgreich');
    }

    // const handleSignup = () => {
    //     console.log('anmeldung erfolgreich');
    // }

    return(
        <div className='App'>

            {/* <Login /> */}
            <Register />


            <Login/>

    
            {/* <Button label='Anmelden' onClick={handleLogin}/> */}

          <Navbar />
            {/* <Login/> */}
            {/* <Button label='Anmelden'/> */}
            {/* <Button label='Anmelden' onClick={handleSignup}/> */}

            
            {/* <Card/> */}

            {/* <Header /> */}

      

        </div>
    )
}

export default App
