import React from 'react';
import { Link } from 'react-router-dom';
import goingfor_logo from '../../assets/goingfor_logo.png';
import { Button } from '../../components/Button/index.js';
import './style.css';
import { FaBurger } from 'react-icons/fa6';

const Info = () => {
    return(
        <div className='ip'>
                {/* ip = infopage */}
                {/* mc = mobile content */}
                {/* le = left */}
                {/* ri = right */}
                {/* btn = button */}
            <div className='ip-logo-wrapper'>
                <img className='ip-logo' src={goingfor_logo} alt='goingfor-logo'/>
            </div>

            <div className='ip-subtitle-wrapper'>
                <p className='ip-subtitle'>
                    Find YOUR Perfect Events All Over The World
                </p>
            </div>

            <div className='button-wrapper'>
                <Link to={'/login'}>
                    <Button className='ip-login-btn'>Login</Button>
                </Link>
                
                <Button className='ip-register-btn'>Anmelden</Button>
            </div>
            
            
            
        </div>
    )
}

export default Info;
