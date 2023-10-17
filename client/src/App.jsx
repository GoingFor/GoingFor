import { Button } from './components/Buttons';
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

        </div>
    )
}

export default App
