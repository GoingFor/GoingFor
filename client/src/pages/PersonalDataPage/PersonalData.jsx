import React from 'react';
import { Link } from 'react-router-dom';
// import { Card } from '../../components/Card/index.js';
// import { Button } from '../../components/Button/index.js';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const PersonalData = () => {
    return(
        <div className="pd">
        {/* pd = personal data seite*/}
        {/* ph = page header */}
        {/* mc = mobile content */}
        {/* dc = desktop content */}
        {/* le = left */}
        {/* ri = right */}
        {/* btn = button */}

            <div className='pd-ph-wrapper'>
                <Link to={'/home/profile'}>
                    <PageHeader 
                        pageTitle='Persönliche Daten'
                    />
                </Link>
            </div>

            <main className='pd-mc-wrapper'>
                <div className='pd-mc'>
                    <ul className='pd-mc-list'>
                        <li className='pd-mc-list-item'> 
                            <div className='pd-mc-list-item-wrapper'>
                                <div className='pd-mc-list-item-le'>
                                    <p className='pd-mc-text-body-le'>Offizieller Name</p>
                                    <p className='pd-mc-text-body-sm-le'>Pipi Langstrumpf</p>  
                                </div>
                                <div className='pd-mc-list-item-ri'>
                                    <p className='pd-mc-text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>

                        <li className='pd-mc-list-item'> 
                            <div className='pd-mc-list-item-wrapper'>
                                <div className='pd-mc-list-item-le'>
                                    <p className='pd-mc-text-body-le'>Telefonnummer</p>
                                    <p className='pd-mc-text-body-sm-le'>+49 17****555</p>  
                                </div>
                                <div className='pd-mc-list-item-ri'>
                                    <p className='pd-mc-text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>

                        <li className='pd-mc-list-item'> 
                            <div className='pd-mc-list-item-wrapper'>
                                <div className='pd-mc-list-item-le'>
                                    <p className='pd-mc-text-body-le'>E-Mail Adresse</p>
                                    <p className='pd-mc-text-body-sm-le'>p******@gmail.com</p>  
                                </div>
                                <div className='pd-mc-list-item-ri'>
                                    <p className='pd-mc-text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>

                        <li className='pd-mc-list-item'> 
                            <div className='pd-mc-list-item-wrapper'>
                                <div className='pd-mc-list-item-le'>
                                    <p className='pd-mc-text-body-le'>Notfallkontakt</p>
                                    <p className='pd-mc-text-body-sm-le'>Einrichten...</p>  
                                </div>
                                <div className='pd-mc-list-item-ri'>
                                    <p className='pd-mc-text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>
                    </ul>  
                </div>
            </main>  

            <main className='pd-dc-wrapper'>
                <div className='pd-dc-item-wrapper'>
                    <div className='pd-dc-item-le'>
                        <p className='pd-dc-text-body-le'>Offizieller Name</p>
                        <p className='pd-dc-text-body-sm-le'>Pipi Langstrumpf</p>
                    </div>
                    <div className='pd-dc-item-ri'>
                        <p className='pd-dc-text-body-ri'>Bearbeiten</p>
                    </div>
                </div>

                <div className='pd-dc-item-wrapper'>
                    <div className='pd-dc-item-le'>
                        <p className='pd-dc-text-body-le'>Telefonnummer</p>
                        <p className='pd-dc-text-body-sm-le'>+49 17****555</p>
                    </div>
                    <div className='pd-dc-item-ri'>
                        <p className='pd-dc-text-body-ri'>Bearbeiten</p>
                    </div>
                </div>    

                <div className='pd-dc-item-wrapper'>
                    <div className='pd-dc-item-le'>
                        <p className='pd-dc-text-body-le'>E-Mail Adresse</p>
                        <p className='pd-dc-text-body-sm-le'>p******@gmail.com</p>
                    </div>
                    <div className='pd-dc-item-ri'>
                        <p className='pd-dc-text-body-ri'>Bearbeiten</p>
                    </div>
                </div>
                <div className='pd-dc-item-wrapper'>
                    <div className='pd-dc-item-le'>
                        <p className='pd-dc-text-body-le'>Notfallkontakt</p>
                        <p className='pd-dc-text-body-sm-le'>Einrichten...</p>
                    </div>
                    <div className='pd-dc-item-ri'>
                        <p className='pd-dc-text-body-ri'>Bearbeiten</p>
                    </div>
                </div>
                
            </main>    
        </div>
    )
}

export default PersonalData;
