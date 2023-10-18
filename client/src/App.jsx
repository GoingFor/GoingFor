import 'typeface-roboto';
import { Button } from './components/Buttons';
import { Card } from './components/Card/index.js'
import './App.css';
import { Header } from './components/Header/index.js';
import Logo from './components/Logo';
import Navbar from './components/Navbar/Navbar';

function App() {

    const handleLogin = () => {
        console.log('login erfolgreich');
    }

    const handleSignup = () => {
        console.log('anmeldung erfolgreich');
    }

    return(
        <div className='App'>
          
            <Header />
            
            <Button label='Login' onClick={handleLogin}/>
            <Button label='Anmelden' onClick={handleSignup}/>
      

        </div>
    )
}

export default App
