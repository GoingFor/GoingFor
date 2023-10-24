import React from 'react';
import { Card } from '../../components/Card/index.js';
import { Button } from '../../components/Button/index.js';
import { PageHeader } from '../../components/PageHeader/index.js';
import { PiUserCircle } from 'react-icons/pi';
import { HiPencil, HiOutlineHeart, HiMap, HiChevronRight } from 'react-icons/hi2';

import './style.css';

const Profile = () => {

    const handleFeedback = (e) => {
        e.preventDefault();
    }

    // Seiten verlinken:
    // Inseriere ein Festival
    // Persönliche Daten
    // Gib uns Feedback
    // Wunschliste
    // Meine Inserate

    return(
        <div className='profile'>
            <section className='mobile'>
                <PageHeader 
                    pageTitle='Profil'
                />

                <main className='mobile-content'>
                    <Button 
                        className='mc-btn' 
                        onClick={handleFeedback}
                            >Inseriere ein Festival
                    </Button>

                    <div className='mc-text'>
                        <h4 className='mc-text-header'>Einstellungen</h4>

                        <ul className='mc-list'>
                            <li className='mc-list-item'> 
                                <div className='mc-list-item-wrapper'>
                                    <div className='mc-list-item-le'>
                                        <PiUserCircle className='mc-icon-le'/>
                                        <p className='text-body-le'>Persönliche Daten</p>
                                    </div>
                                    <div className='mc-list-item-ri'>
                                        <HiChevronRight className='mc-icon-ri'/> 
                                    </div>
                                </div>   
                            </li>

                            <li className='mc-list-item'> 
                                <div className='mc-list-item-wrapper'>
                                    <div className='mc-list-item-le'>
                                        <HiPencil className='mc-icon-le'/>
                                        <p className='text-body-le'>Gib uns Feedback</p>
                                    </div>
                                    <div className='mc-list-item-ri'>
                                        <HiChevronRight className='mc-icon-ri'/> 
                                    </div>
                                </div>   
                            </li>

                            <li className='mc-list-item'> 
                                <div className='mc-list-item-wrapper'>
                                    <div className='mc-list-item-le'>
                                        <HiOutlineHeart className='mc-icon-le'/>
                                        <p className='text-body-le'>Wunschliste</p>
                                    </div>
                                    <div className='mc-list-item-ri'>
                                        <HiChevronRight className='mc-icon-ri'/> 
                                    </div>
                                </div>   
                            </li>

                            <li className='mc-list-item'> 
                                <div className='mc-list-item-wrapper'>
                                    <div className='mc-list-item-le'>
                                        <HiMap className='mc-icon-le'/>
                                        <p className='text-body-le'>Meine Inserate</p>
                                    </div>
                                    <div className='mc-list-item-ri'>
                                        <HiChevronRight className='mc-icon-ri'/> 
                                    </div>
                                </div>   
                            </li>
                        </ul>  
                    </div>
                </main>
            </section>

            <section className='profile-desktop'>
                <Card className='a-card'>
                    <div className="text">
                        <p className="subtitle">Festival Inserieren</p>
                        <p className="cardText">Inseriere (d)ein Festival und sorge dafür, dass andere Leute es finden.</p>
                    </div>
                </Card> 

                <Card className='b-card'>
                    <div className="text">
                        <p className="subtitle">Persönliche Daten</p>
                        <p className="cardText">Mach Angaben zu deiner Person und lass uns wissen, wie wir dich erreichen können.</p>
                    </div>
                </Card> 

                <Card className='c-card'>
                    <div className="text">
                        <p className="subtitle">Gib uns Feedback</p>
                        <p className="cardText">Mach Angaben zu deiner Person und lass uns wissen, wie wir dich erreichen können.</p>
                    </div>
                </Card> 

                <Card className='d-card'>
                    <div className="text">
                        <p className="subtitle">Deine Inserate</p>
                        <p className="cardText">Verwalte deine inserierten Events.</p>
                    </div>
                </Card> 

                <Card className='e-card'>
                    <div className="text">
                        <p className="subtitle">Wunschliste</p>
                        <p className="cardText">Finde deine gemerkten Festivals wieder</p>
                    </div>
                </Card> 
            </section>

        </div>
    )
}

export default Profile;
