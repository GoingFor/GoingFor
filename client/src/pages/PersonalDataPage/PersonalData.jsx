import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const PersonalData = () => {
    const { user, getUserData, isAuthenticated } = useAuth();
    const [ inputValue, setInputValue ] = useState('');
    const [ editMode, setEditMode ] = useState(false);
    const [ userData, setUserData ] = useState({});

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        if(isAuthenticated) {
            setUserData(user);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData, [name]: value
        });
    }

    const handleCancelEditing = () => {
        setInputValue({});
        setEditMode(false);
    }

    const updateUserData = async(updatedData) => {
        try {
            const {data} = await axios.put('/api/user/updatedata', updatedData);
        } catch(err) {
            console.err('Fehler beim Aktualisieren der Benutzerdaten', err)
        }
    }

    const handleSaveChanges = async() => {
        try {
            const updatedData = { ...userData };
            await updateUserData(updatedData);
            setEditMode(false);
            setInputValue({});
            await getUserData();
        } catch(err){
            console.log('Das speichern des aktualisierten Users hat nicht geklappt');
        }
    }

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
                        {[
                            { label: 'Offizieller Name', key: 'fullname', value: userData?.fullname  },
                            { label: 'Benutzername', key: 'username', value: userData?.username },
                            { label: 'Email', key: 'email', value: userData?.email},
                            { label: 'Telefonnummer', key: 'phonenumber', value: userData?.phonenumber }
                        ].map((item) => (
                            <li className='pd-mc-list-item' key={item.key}>
                                <div className='pd-mc-list-item-wrapper'>
                                    <div className='pd-mc-list-item-le'>
                                        <p className='pd-mc-text-body-le'>{item.label}</p>
                                        {editMode === item.key ? (
                                            <input 
                                                className='pd-mc-text-body-le-input'
                                                type='text'
                                                name={item.key}
                                                value={userData[item.key] || ''}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p className='pd-mc-text-body-sm-le'>{item.value}</p>
                                        )}
                                                                              
                                    </div>
                                    <div className='pd-mc-list-item-ri'>
                                        {editMode === item.key ? (
                                            <>
                                                <button 
                                                    className='pd-mc-text-body-ri' 
                                                    onClick={handleSaveChanges}
                                                >   Speichern
                                                </button>

                                                <button
                                                    className='pd-mc-text-body-ri'
                                                    onClick={handleCancelEditing}
                                                >   Abbrechen
                                                </button>
                                            </>   
                                        ) : (
                                            <button 
                                                className='pd-mc-text-body-ri'
                                                onClick={() => setEditMode(item.key)}
                                            >   Bearbeiten
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))
                        }
                    </ul>  
                </div>
            </main>    
        </div>
    )
}

export default PersonalData;
