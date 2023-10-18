import { Button } from './components/Buttons';
import { Card } from './components/Card/index.js'
import './App.css';

function App() {

    const handleLogin = () => {
        console.log('login erfolgreich');
    }

    const handleSignup = () => {
        console.log('anmeldung erfolgreich');
    }

    return(
        <div className='App'>
            <Button label='Login' onClick={handleLogin}/>
            <Button label='Anmelden' onClick={handleSignup}/>
              
            <Card/>

        </div>
    )


export default App
