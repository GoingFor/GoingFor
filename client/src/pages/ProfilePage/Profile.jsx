import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx';
import { Card } from '../../components/Card/index.js';
import { Button } from '../../components/Button/index.js';
import { PageHeader } from '../../components/PageHeader/index.js';
import { PiUserCircle } from 'react-icons/pi';
import { HiPencil, HiOutlineHeart, HiMap, HiChevronRight, HiEnvelope } from 'react-icons/hi2';
import './style.css';


const Profile = () => {
    const { user, getUserData, logout } = useAuth();

    useEffect(() => {
        getUserData();
    }, []);

    
    return(
        <div className='pr'>
            {/* pr = profilseite */}
            {/* ph = page header */}
            {/* mc = mobile content */}
            {/* dc = desktop content */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}

            <div className='pr-ph-wrapper'>
                <Link to={'/home'}>
                    <PageHeader 
                        pageTitle='Profil'
                    />
                </Link> 
            </div>

            <main className='pr-mc-wrapper'>
                <div className='pr-mc'>

                    <div className='pr-mc-user-wrapper'>
                        <div className="pr-mc-user">
                            <div className='pr-mc-user-avatar-icon'>
                                <img 
                                    src={user.avatar}
                                    alt={user.username} 
                                    className='pr-mc-user-avatar-image'
                                />
                            </div>
                            <div className='pr-mc-user-text'>
                                <p className='pr-mc-user-name'>{user.username}</p>
                            </div>   
                        </div>
                    </div>
                   

                    <Link className='pr-mc-link' to={'/home/event'}>
                        <Button 
                            className='pr-mc-btn' 
                                >Inseriere ein Festival
                        </Button>
                    </Link>

                    <div className='pr-mc-text'>
                        <h4 className='pr-mc-text-header'>Einstellungen</h4>

                        <ul className='pr-mc-list'>
                            <Link className='pr-mc-link' to={'/home/personaldata'}>
                                <li className='pr-mc-list-item'> 
                                    <div className='pr-mc-list-item-wrapper'>
                                            <PiUserCircle className='pr-mc-icon-le'/>
                                        <p className='pr-text-body-le'><strong>Persönliche Daten</strong> <br />
                                            Mach Angaben zu deiner Person und lass uns wissen, wie wir dich erreichen können</p>
                                        <HiChevronRight className='pr-mc-icon-ri' /> 
                                    </div>   
                                </li>
                            </Link>

                            <Link className='pr-mc-link' to={'/home/wishlist'}>
                                <li className='pr-mc-list-item'> 
                                    <div className='pr-mc-list-item-wrapper'>
                                        <div className='pr-mc-list-item-le'>
                                            <HiOutlineHeart className='pr-mc-icon-le'/>
                                            <p className='pr-text-body-le'>Wunschliste</p>
                                        </div>
                                        <div className='pr-mc-list-item-ri'>
                                            <HiChevronRight className='pr-mc-icon-ri'/> 
                                        </div>
                                    </div>   
                                </li>
                            </Link>

                            <Link className='pr-mc-link' to={'/home/hosting'}>
                                <li className='pr-mc-list-item'> 
                                    <div className='pr-mc-list-item-wrapper'>
                                        <div className='pr-mc-list-item-le'>
                                            <HiMap className='pr-mc-icon-le'/>
                                            <p className='pr-text-body-le'>Meine Inserate</p>
                                        </div>
                                        <div className='pr-mc-list-item-ri'>
                                            <HiChevronRight className='pr-mc-icon-ri'/> 
                                        </div>
                                    </div>   
                                </li>
                            </Link>

                            <Link className='pr-mc-link' to={'/home/comment'}>
                                <li className='pr-mc-list-item'> 
                                    <div className='pr-mc-list-item-wrapper'>
                                        <div className='pr-mc-list-item-le'>
                                            <HiPencil className='pr-mc-icon-le'/>
                                            <p className='pr-text-body-le'>Meine verfassten Bewertungen</p>
                                        </div>
                                        <div className='pr-mc-list-item-ri'>
                                            <HiChevronRight className='pr-mc-icon-ri'/> 
                                        </div>
                                    </div>   
                                </li>
                            </Link>

                            <Link className='pr-mc-link' to={'/home/contact'}>
                                <li className='pr-mc-list-item'> 
                                    <div className='pr-mc-list-item-wrapper'>
                                        <div className='pr-mc-list-item-le'>
                                            <HiEnvelope className='pr-mc-icon-le'/>
                                            <p className='pr-text-body-le'>Gib uns Feedback</p>
                                        </div>
                                        <div className='pr-mc-list-item-ri'>
                                            <HiChevronRight className='pr-mc-icon-ri'/> 
                                        </div>
                                    </div>   
                                </li>
                            </Link>
                        </ul>  

                        

                    </div>

                    <Link className='pr-mc-link' to={'/'}>
                        <Button 
                            className='pr-mc-btn' 
                            onClick={logout}
                                >Logout
                        </Button>
                    </Link>
                    
                </div>
            </main>

        </div>
    )
}

export default Profile;
