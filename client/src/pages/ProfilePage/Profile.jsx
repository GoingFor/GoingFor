import React from 'react';
import { Card } from '../../components/Card/index.js';
import { Button } from '../../components/Button/index.js';
import { ImArrowLeft2 } from 'react-icons/im';
import { PiUserCircle } from 'react-icons/pi';
import { HiPencil, HiOutlineHeart, HiMap, HiChevronRight } from 'react-icons/hi2';

import './style.css';

const Profile = () => {

    const handleFeedback = (e) => {
        e.preventDefault();
    }

    return(
        <div className='profile'>
            <section className='mobile'>
                <header className='mobile-header'>
                    <Button className='mh-btn'>
                        <ImArrowLeft2 className='mh-icon'/>    
                    </Button>

                    <h2 className='mh-h2'>Profil</h2>
                </header>

                <main className='mobile-content'>
                    <Button 
                        className='mc-btn' 
                        onClick={handleFeedback}
                            >Inseriere ein Festival
                    </Button>

                    <div className='mc-text'>
                        <h4 className='mc-text-header'>Einstellungen</h4>
                        <ul className='mc-text-list'>
                            <li> 
                                <span>
                                    <PiUserCircle className='mc-icon'/>
                                </span>
                                <span>Persönliche Daten</span> 
                                <span>
                                    <HiChevronRight className='mc-icon-re'/> 
                                </span>
                            </li>

                            <li>
                                <span>
                                    <HiPencil className='mc-icon'/> 
                                </span>                               
                                <span>Gib uns Feedback </span>
                                <span>
                                    <HiChevronRight className='mc-icon-re'/>    
                                </span>                                
                            </li>

                            <li> 
                                <span>
                                    <HiOutlineHeart className='mc-icon'/> 
                                </span>
                                <span>Wunschliste </span>
                                <span>
                                    <HiChevronRight className='mc-icon-re'/> 
                                </span>
                            </li>

                            <li> 
                                <span>
                                    <HiMap className='mc-icon'/> 
                                </span> 
                                <span>Meine Inserate </span>
                                <span>
                                    <HiChevronRight className='mc-icon-re'/> 
                                </span>  
                            </li>
                        </ul>  
                    </div>
                </main>
            </section>

            <section className='desktop'>
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
