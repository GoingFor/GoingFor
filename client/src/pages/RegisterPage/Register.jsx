import React from 'react';
import { Button } from '../../components/Button/index.js';
import {FaGoogle, FaInstagram, FaFacebook, FaXTwitter} from 'react-icons/fa6';
import goingfor_logo from '../../assets/goingfor_logo.png';
import './style.css';

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className='reg'>
                {/* reg = register */}
                {/* btn = button */}
            <div className='reg-wrapper'>
                <form className='reg-form' onSubmit={handleSubmit}>
                    <input 
                        className='reg-input'
                        type='text'
                        placeholder='Username'
                    /> 
                    <input 
                        className='reg-input'
                        type='email'
                        placeholder='Email'
                    /> 
                    <input 
                        className='reg-input'
                        type='password' 
                        placeholder='Password'
                    />
                    <Button className='reg-btn'>Register</Button>
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
