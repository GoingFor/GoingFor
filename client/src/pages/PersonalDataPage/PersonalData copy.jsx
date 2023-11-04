import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const PersonalData = () => {

    const { user, getUserData } = useAuth();

    useEffect(() => {
        getUserData();
    }, []);
    
    {/* pd = personal data seite*/}
        {/* ph = page header */}
        {/* mc = mobile content */}
        {/* dc = desktop content */}
        {/* le = left */}
        {/* ri = right */}
        {/* btn = button */}

    return(
        <div className="pd">
        

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
                                    <p className='pd-mc-text-body-sm-le'>{user.fullname}</p>  
                                </div>
                                <div className='pd-mc-list-item-ri'>
                                    <p className='pd-mc-text-body-ri'>Bearbeiten</p>
                                </div>
                            </div>    
                        </li>

                        <li className='pd-mc-list-item'> 
                            <div className='pd-mc-list-item-wrapper'>
                                <div className='pd-mc-list-item-le'>
                                    <p className='pd-mc-text-body-le'>Benutzername</p>
                                    <p className='pd-mc-text-body-sm-le'>{user.username}</p>  
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
                                    <p className='pd-mc-text-body-sm-le'>{user.email}</p>  
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
                                    <p className='pd-mc-text-body-sm-le'>{user.phonenumber}</p>  
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
                        <p className='pd-dc-text-body-sm-le'>{user.fullname}</p>
                    </div>
                    <div className='pd-dc-item-ri'>
                        <p className='pd-dc-text-body-ri'>Bearbeiten</p>
                    </div>
                </div>

                <div className='pd-dc-item-wrapper'>
                    <div className='pd-dc-item-le'>
                        <p className='pd-dc-text-body-le'>Benutzername</p>
                        <p className='pd-dc-text-body-sm-le'>{user.username}</p>
                    </div>
                    <div className='pd-dc-item-ri'>
                        <p className='pd-dc-text-body-ri'>Bearbeiten</p>
                    </div>
                </div>   

                <div className='pd-dc-item-wrapper'>
                    <div className='pd-dc-item-le'>
                        <p className='pd-dc-text-body-le'>E-Mail Adresse</p>
                        <p className='pd-dc-text-body-sm-le'>{user.email}</p>
                    </div>
                    <div className='pd-dc-item-ri'>
                        <p className='pd-dc-text-body-ri'>Bearbeiten</p>
                    </div>
                </div>

                <div className='pd-dc-item-wrapper'>
                    <div className='pd-dc-item-le'>
                        <p className='pd-dc-text-body-le'>Telefonnummer</p>
                        <p className='pd-dc-text-body-sm-le'>{user.phonenumber}</p>
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
