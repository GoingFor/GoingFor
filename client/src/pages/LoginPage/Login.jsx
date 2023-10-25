import React, {useState} from 'react';
import axios from 'axios';
import { Button } from '../../components/Button/index.js';
import {FaGoogle, FaInstagram, FaFacebook, FaXTwitter} from 'react-icons/fa6';
import goingfor_logo from '../../assets/goingfor_logo.png';
import './style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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


    return(
        <div className='login'>
                {/* mc = mobile content */}
                {/* btn = button */}
            <div className='login-wrapper'>
                <form className='login-form' onSubmit={handleSubmit}>
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
                    <Button className='login-btn'>Login</Button>
          
                </form> 

                <div className='login-social-wrapper'>
                    <p className='login-social-text'>or login with</p>

                    <div className='login-social-icon-wrapper'>
                        {/* hier kommt der google button rein */}
                        <button className='social-icon'>
                            <FaGoogle/>
                        </button>
                        {/* hier kommt der insta button rein*/}
                        <button className='social-icon'>
                            <FaInstagram/>
                        </button>
                        {/* hier kommt der fb button rein */}
                        <button className='social-icon'>
                            <FaFacebook/>
                        </button>
                        {/* hier kommt der twitter button rein */}
                        <button className='social-icon'>
                            <FaXTwitter/>
                        </button> 
                    </div>
                    
                </div>  
            </div>
              
            <div className='login-logo-wrapper'>
                <img className='login-logo' src={goingfor_logo} alt='goingfor-logo'/>
            </div>
        </div>
    )
}

export default Login
