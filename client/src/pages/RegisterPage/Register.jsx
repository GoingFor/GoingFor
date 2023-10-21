import React from 'react';
import { Button } from '../../components/Button/index.js';
import {FaGoogle, FaInstagram, FaFacebook, FaXTwitter} from 'react-icons/fa6';
import goingfor_logo from '../../assets/goingfor_logo.png';
import './style.css';

const Register = () => {

    const googleLink = 'https://www.google.com'

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleRegister = () => {
        console.log('anmeldung erfolgreich');
    }

    const googleLogin = () => {
        window.open(googleLink, '_blank');
    }


    return(
        <div className='register_container'>
            <form className='register_form' onSubmit={handleSubmit}>
                <input 
                className='register-input'
                    type='text'
                    placeholder='Username'
                /> 
                <input 
                    className='register-input'
                    type='email'
                    placeholder='Email'
                /> 
                <input 
                    className='register-input'
                    type='password' 
                    placeholder='Password'
                />
                {/* hier kommt die button comp rein */}
                <Button label='Register' onClick={handleRegister} className='register-btn'/>

                <div className='social-media-register'>
                    <p className='social-media-register-text'>or register with</p>


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

export default Register
