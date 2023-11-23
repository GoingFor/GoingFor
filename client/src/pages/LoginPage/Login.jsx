import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/index.js';
import {FaGoogle, FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext.jsx';
import goingfor_logo from '../../assets/goingfor_logo.png';
import './style.css';

import Axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, errors } = useAuth();
    const navigate = useNavigate();
    
    const handleLogin = async(e) => {
        e.preventDefault();

        const loginSuccessful = await login(email, password);

        if(loginSuccessful) {
            navigate('/home');   
        }
    }

// const handleLogin = async (e) => {
//   e.preventDefault();
//   const loginSuccessful = await login(email, password);
//   if (loginSuccessful) {
//       navigate('/home');
//   }
// }

    //
    const handleSocialLogin = async (provider) => {
      try {
          const socialAuthURL = `http://localhost:3002/api/auth/${provider}`;
          const response = await Axios.post(socialAuthURL, {
              email: 'example@example.com',
              name: 'John Doe',
          });
          if (response.data) {
              navigate('/home');
          }
      } catch (error) {
          console.error('Ошибка социальной авторизации:', error);
      }
  };
      
      
          //     if (response.data) {
      //       navigate('/home');
      //     }
      //   } catch (error) {
      //     console.error('Ошибка социальной авторизации:', error);
      //   }
      // };
    //


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

                    {/* Anzeige von Fehlermeldungen beim Registrieren */}
                    {errors.length > 0 && (
                        <div className='login-error-msg'>{errors}</div>
                    )}


                    <div className='login-to-register'>
                        <p className='login-to-register-text'>
                            Noch nicht registriert?
                        </p>
                        <Link className='login-to-register-link' to={'/register'}>Anmelden!</Link>
                    </div>
                </form> 

                <div className='login-social-wrapper'>
                    <p className='login-social-text'>or login with</p>

                    {/* <div className='login-social-icon-wrapper'>
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
                            <FaTwitter/>
                        </button> 
                    </div> */}

<div className='login-social-icon-wrapper'>
      {/* Добавляем вызов handleSocialLogin для каждой социальной сети */}
      <button className='social-icon' onClick={() => handleSocialLogin('google')}>
        <FaGoogle/>
      </button>

      <button className='social-icon' onClick={() => handleSocialLogin('instagram')}>
        <FaInstagram/>
      </button>

      <button className='social-icon' onClick={() => handleSocialLogin('facebook')}>
        <FaFacebook/>
      </button>

      <button className='social-icon' onClick={() => handleSocialLogin('twitter')}>
        <FaTwitter/>
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
