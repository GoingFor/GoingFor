import React, {useState} from 'react';
import axios from 'axios';
import { Button } from '../../components/Button/index.js';
import {FaGoogle, FaInstagram, FaFacebook, FaXTwitter} from 'react-icons/fa6';
import goingfor_logo from '../../assets/goingfor_logo.png';
import './style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const googleLink = 'https://www.google.com'

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post('api/login', {username, password});

            if(response.status === 200){
                // erfolgreiche anmeldung = weiterleitung zur startseite
                window.location.href = '/startseite';
            } else {
                console.log('anmedlung fehlgeschlaggen');
            }
        } catch(error){
            console.error('Fehler bei der Anmeldung', error);
        }
    }

    const handleLogin = () => {
        console.log('login erfolgreich');
    }

    const googleLogin = () => {
        window.open(googleLink, '_blank');
    }


    return(
        <div className='login_container'>
            <form className='login_form' onSubmit={handleSubmit}>
                <input 
                    className='login-input'
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> 
                <input 
                    className='login-input'
                    type='password' 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* hier kommt die button comp rein */}
                <Button className='login-btn' onClick={handleLogin}>Login</Button>


                <div className='social-media-login'>
                    <p className='social-media-login-text'>or login with</p>

                    {/* hier kommt der google button rein */}
                    <button onClick={googleLogin} className='icon-style'>
                        <FaGoogle/>
                    </button>

                    {/* hier kommt der insta button rein*/}
                    <button className='icon-style'>
                        <FaInstagram/>
                    </button>

                    {/* hier kommt der fb button rein */}
                    <button className='icon-style'>
                        <FaFacebook/>
                    </button>

                    {/* hier kommt der twitter button rein */}
                    <button className='icon-style'>
                        <FaXTwitter/>
                    </button> 
                </div>      
            </form>   


            <img className='goingfor_logo' src={goingfor_logo} alt='goingfor-logo'/>
        </div>
    )
}

export default Login
