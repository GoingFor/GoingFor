import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components/Card/index.js';
import { Button } from '../../components/Button/index.js';
import { PageHeader } from '../../components/PageHeader/index.js';
import { PiUserCircle } from 'react-icons/pi';
import { HiPencil, HiOutlineHeart, HiMap, HiChevronRight } from 'react-icons/hi2';

import './style.css';

const Profile = () => {
    const [ userData, setUserData ] = useState({});

    const getUserData = () => {
        const token = localStorage.getItem('access_token');

        if (token) {
            axios
                .get('/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setUserData(response.data);
                })
                .catch((error) => {
                    console.error('Fehler beim abrufen der benutzerdaten', error);
                });
        }
    };

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
                    <div className='pr-mc-user'>
                        <div className='pr-mc-user-le'>
                            <div className='pr-mc-user-avatar-icon'></div>
                            <div className='pr-mc-user-le-text'>
                                <p className='pr-mc-user-name'>{userData.username}</p>
                                <p className='pr-mc-user-show-pr'>Profil anzeigen</p>
                            </div>
                        </div>
                        <div className='pr-mc-user-ri'>
                            <HiChevronRight className='pr-mc-icon-ri'/> 
                        </div>
                    </div>

                    <Button 
                        className='pr-mc-btn' 
                            >Inseriere ein Festival
                    </Button>

                    <div className='pr-mc-text'>
                        <h4 className='pr-mc-text-header'>Einstellungen</h4>

                        <ul className='pr-mc-list'>
                            <Link className='pr-mc-link' to={'/home/personaldata'}>
                                <li className='pr-mc-list-item'> 
                                    <div className='pr-mc-list-item-wrapper'>
                                        <div className='pr-mc-list-item-le'>
                                            <PiUserCircle className='pr-mc-icon-le'/>
                                            <p className='pr-text-body-le'>Persönliche Daten</p>
                                        </div>
                                        <div className='pr-mc-list-item-ri'>
                                            <HiChevronRight className='pr-mc-icon-ri'/> 
                                        </div>
                                    </div>   
                                </li>
                            </Link>

                            <Link className='pr-mc-link' to={'/home/feedback'}>
                                <li className='pr-mc-list-item'> 
                                    <div className='pr-mc-list-item-wrapper'>
                                        <div className='pr-mc-list-item-le'>
                                            <HiPencil className='pr-mc-icon-le'/>
                                            <p className='pr-text-body-le'>Gib uns Feedback</p>
                                        </div>
                                        <div className='pr-mc-list-item-ri'>
                                            <HiChevronRight className='pr-mc-icon-ri'/> 
                                        </div>
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
                            
                        </ul>  
                    </div>
                </div>
            </main>

            <main className='pr-dc-wrapper'>
                <div className='pr-dc'>
                    <Card className='a-card'>
                        <div className="text">
                            <p className="subtitle">Festival Inserieren</p>
                            <p className="cardText">Inseriere (d)ein Festival und sorge dafür, dass andere Leute es finden.</p>
                        </div>
                    </Card> 

                <Link className='pr-dc-link' to={'/home/personaldata'}>
                    <Card className='b-card'>
                        <div className="text">
                            <p className="subtitle">Persönliche Daten</p>
                            <p className="cardText">Mach Angaben zu deiner Person und lass uns wissen, wie wir dich erreichen können.</p>
                        </div>
                    </Card> 
                </Link>

                <Link className='pr-dc-link' to={'/home/feedback'}>
                    <Card className='c-card'>
                        <div className="text">
                            <p className="subtitle">Gib uns Feedback</p>
                            <p className="cardText">Mach Angaben zu deiner Person und lass uns wissen, wie wir dich erreichen können.</p>
                        </div>
                    </Card> 
                </Link>

                <Link className='pr-dc-link' to={'/home/wishlist'}>
                    <Card className='d-card'>
                        <div className="text">
                            <p className="subtitle">Wunschliste</p>
                            <p className="cardText">Finde deine gemerkten Festivals wieder</p>
                        </div>
                    </Card> 
                </Link>

                <Link className='pr-dc-link' to={'/home/hosting'}>
                    <Card className='e-card'>
                        <div className="text">
                            <p className="subtitle">Deine Inserate</p>
                            <p className="cardText">Verwalte deine inserierten Events.</p>
                        </div>
                    </Card> 
                </Link>

                </div>
            </main>
        </div>
    )
}

export default Profile;
