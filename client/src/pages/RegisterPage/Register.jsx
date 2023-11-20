import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../../components/Button/index.js';
import {FaGoogle, FaInstagram, FaFacebook, FaXTwitter} from 'react-icons/fa6';
import goingfor_logo from '../../assets/goingfor_logo.png';
import './style.css';

const Register = () => {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();

        try {
            await axios.post('/api/auth/signup', {
                username,
                email,
                password
            });

            console.log('Registrierung erfolgreich. Du kannst dich nun einloggen.');
            navigate('/login');

        } catch(error){
            if(error.response.data.msg) {
                console.log('Registrierung fehlgeschlagen!', error.response.data.msg);
                setErrors(error.response.data.msg);
            } else {
                console.log('Registrierung fehlgeschlagen!', error.response.data.message);
                setErrors([error.response.data.message]);

            }
            
        }
    }

    return(
        <div className='reg'>
                {/* reg = register */}
                {/* btn = button */}
            <div className='reg-wrapper'>
                <form className='reg-form' onSubmit={handleRegister}>
                    <input 
                        className='reg-input'
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /> 
                    <input 
                        className='reg-input'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                    <input 
                        className='reg-input'
                        type='password' 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <Button className='reg-btn'>Register</Button>

                    {/* Anzeige von Fehlermeldungen beim Registrieren */}
                    {errors.length > 0 && (
                        <div className='reg-error-msg'>
                            {errors.map((err, index) => (
                                <div className='reg-error-msg-txt' key={index}>{err}</div>
                            ))}
                        </div>
                    )}

                    <div className='register-to-login'>
                        <p className='register-to-login-text'>
                            Du bist bereits registriert?
                        </p>
                        <Link className='register-to-login-link' to={'/login'}>Login</Link>
                    </div>
                </form>  

                <div className='reg-social-wrapper'>
                    <p className='reg-social-text'>or register with</p>

                    <div className='reg-social-icon-wrapper'>
                        <button className='reg-icon'>
                            <FaGoogle/>
                        </button>

                        <button className='reg-icon'>
                            <FaInstagram/>
                        </button>

                        <button className='reg-icon'>
                            <FaFacebook/>
                        </button>

                        <button className='reg-icon'>
                            <FaXTwitter/>
                        </button> 
                    </div>
                </div>     
            </div>

            <div className='reg-logo-wrapper'>
                <img className='reg-logo' src={goingfor_logo} alt='goingfor-logo'/>
            </div>
        </div>
    )
}

export default Register
