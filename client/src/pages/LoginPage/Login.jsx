import React from 'react';
import { Button } from '../../components/Button/index.js';
import {FaGoogle, FaInstagram, FaFacebook, FaXTwitter} from 'react-icons/fa6';
import goingfor_logo from '../../assets/goingfor_logo.png';
import './style.css';

const Login = () => {

    const googleLink = 'https://www.google.com'

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    type='text'
                    placeholder='Username'
                /> 
                <input 
                    type='password' 
                    placeholder='Password'
                />
                {/* hier kommt die button comp rein */}
                <Button label='Login' onClick={handleLogin} className='loginBtn'/>

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
