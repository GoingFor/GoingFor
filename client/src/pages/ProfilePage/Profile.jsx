import React from 'react';
import { Card } from '../../components/Card/index.js';
import { Button } from '../../components/Button/index.js';
import { ImArrowLeft2 } from 'react-icons/im';

import './style.css';

const Profile = () => {

    return(
        <div className='profile'>
            <section className='side-header'>
                <Button className='side-header-btn'>
                    <ImArrowLeft2 className='side-header-icon'/>    
                </Button>
                
                <h2 className='side-h2'>Profil</h2>
            </section>

            <Card>
                <div className="text">
                    <p className="subtitle">FestivaL Inserieren</p>
                    <p className="cardText">Inseriere (d)ein Festival und sorge dafür, dass andere Leute es finden.</p>
                </div>
            </Card> 

            <Card>
                <div className="text">
                    <p className="subtitle">Persönliche Daten</p>
                    <p className="cardText">Mach Angaben zu deiner Person und lass uns wissen, wie wir dich erreichen können.</p>
                </div>
            </Card> 

            <Card>
                <div className="text">
                    <p className="subtitle">Gib uns Feedback</p>
                    <p className="cardText">Mach Angaben zu deiner Person und lass uns wissen, wie wir dich erreichen können.</p>
                </div>
            </Card> 

            <Card>
                <div className="text">
                    <p className="subtitle">Deine Inserate</p>
                    <p className="cardText">Verwalte deine inserierten Events.</p>
                </div>
            </Card> 

            <Card>
                <div className="text">
                    <p className="subtitle">Wunschliste</p>
                    <p className="cardText">Finde deine gemerkten Festivals wieder</p>
                </div>
            </Card> 

        </div>
    )
}

export default Profile;
