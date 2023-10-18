import React from 'react';
import { Button } from './components/Button/index.js';
import { Card } from './components/Card/index.js'
import { Login } from './pages/LoginPage/index.js';
import './App.css';

function App() {

    // const handleLogin = () => {
    //     console.log('login erfolgreich');
    // }

    // const handleSignup = () => {
    //     console.log('anmeldung erfolgreich');
    // }

    return(
        <div className='App'>
            <Login/>
            {/* <Button label='Anmelden'/> */}
            {/* <Button label='Anmelden' onClick={handleSignup}/> */}
            
            {/* <Card/> */}
            

        </div>
    )
}

export default App
