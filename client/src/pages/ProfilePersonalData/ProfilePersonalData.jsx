import React from 'react';
// import { Card } from '../../components/Card/index.js';
// import { Button } from '../../components/Button/index.js';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const ProfilePersonalData = () => {
    return(
        <div className="personalData">
            <section className='mobile'>
                <PageHeader 
                    pageTitle='Persönliche Daten'
                />

                <main className='mobile-content'>
                    <ul className='mc-list'>
                        <li className='mc-list-item'> 
                            <div className='mc-list-item-wrapper'>
                                <div className='mc-list-item-le'>
                                    <p className='text-body-le'>Offizieller Name</p>
                                    <p className='text-body-sm-le'>Pipi Langstrumpf</p>  
                                </div>
                                <div className='mc-list-item-ri'>
                                    <p className='text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>

                        <li className='mc-list-item'> 
                            <div className='mc-list-item-wrapper'>
                                <div className='mc-list-item-le'>
                                    <p className='text-body-le'>Telefonnummer</p>
                                    <p className='text-body-sm-le'>+49 17****555</p>  
                                </div>
                                <div className='mc-list-item-ri'>
                                    <p className='text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>

                        <li className='mc-list-item'> 
                            <div className='mc-list-item-wrapper'>
                                <div className='mc-list-item-le'>
                                    <p className='text-body-le'>E-Mail Adresse</p>
                                    <p className='text-body-sm-le'>p******@gmail.com</p>  
                                </div>
                                <div className='mc-list-item-ri'>
                                    <p className='text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>

                        <li className='mc-list-item'> 
                            <div className='mc-list-item-wrapper'>
                                <div className='mc-list-item-le'>
                                    <p className='text-body-le'>Notfallkontakt</p>
                                    <p className='text-body-sm-le'>Einrichten...</p>  
                                </div>
                                <div className='mc-list-item-ri'>
                                    <p className='text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>
                    </ul>  
                </main>
            </section>  

            <section className='desktop'>
                <div className='desktop-item-wrapper'>
                    <div className='desktop-item-le'>
                        <p className='text-body-le'>Offizieller Name</p>
                        <p className='text-body-sm-le'>Pipi Langstrumpf</p>
                    </div>
                    <div className='desktop-item-ri'>
                        <p className='text-body-ri'>Bearbeiten</p>
                    </div>
                </div>

                <div className='desktop-item-wrapper'>
                    <div className='desktop-item-le'>
                        <p className='text-body-le'>Telefonnummer</p>
                        <p className='text-body-sm-le'>+49 17****555</p>
                    </div>
                    <div className='desktop-item-ri'>
                        <p className='text-body-ri'>Bearbeiten</p>
                    </div>
                </div>    

                <div className='desktop-item-wrapper'>
                    <div className='desktop-item-le'>
                        <p className='text-body-le'>E-Mail Adresse</p>
                        <p className='text-body-sm-le'>p******@gmail.com</p>
                    </div>
                    <div className='desktop-item-ri'>
                        <p className='text-body-ri'>Bearbeiten</p>
                    </div>
                </div>
                <div className='desktop-item-wrapper'>
                    <div className='desktop-item-le'>
                        <p className='text-body-le'>Notfallkontakt</p>
                        <p className='text-body-sm-le'>Einrichten...</p>
                    </div>
                    <div className='desktop-item-ri'>
                        <p className='text-body-ri'>Bearbeiten</p>
                    </div>
                </div>
                
            </section>    
        </div>
    )
}

export default ProfilePersonalData;
