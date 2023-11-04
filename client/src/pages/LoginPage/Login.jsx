import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../../components/Button/index.js';
import {FaGoogle, FaInstagram, FaFacebook, FaXTwitter} from 'react-icons/fa6';
import { useAuth } from '../../context/AuthContext.jsx';
import goingfor_logo from '../../assets/goingfor_logo.png';
import './style.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();
    
    const handleLogin = async(e) => {
        e.preventDefault();
        login(email, password);
        navigate('/home/profile');   
    }


    return(
        <div className='login'>
                {/* mc = mobile content */}
                {/* btn = button */}
            <div className='login-wrapper'>
                <form className='login-form' onSubmit={handleLogin}>
                    <input 
                        className='login-input'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                    <input 
                        className='login-input'
                        type='password' 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className='login-btn'>Login</Button>


                    <div className='login-to-register'>
                        <p className='login-to-register-text'>
                            Du hast noch kein Konto?
                        </p>
                        <Link className='login-to-register-link' to={'/register'}>Jetzt registrieren</Link>
                    </div>
                </form> 

                <div className='login-social-wrapper'>
                    <p className='login-social-text'>or login with</p>

                    <div className='login-social-icon-wrapper'>
                        <button className='social-icon'>
                            <FaGoogle/>
                        </button>

                        <button className='social-icon'>
                            <FaInstagram/>
                        </button>

                        <button className='social-icon'>
                            <FaFacebook/>
                        </button>

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

export default Login;
