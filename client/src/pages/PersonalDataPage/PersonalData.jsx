import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const PersonalData = () => {
    const { user, getUserData } = useAuth();
    const [ editing, setEditing ] = useState(false);
    const [editableValue, setEditableValue] = useState('');

    useEffect(() => {
        getUserData();
    }, []);

    const saveChanges = async() => {
        try {
            const updatedUser = {
                ...user,
                [fieldToEdit]: editableValue,
            };

            axios
                .put('/api/user/update')
                .then(response => {
                    console.log('Benutzerdaten erfolgreich aktualisiert', response.data);
                    setEditing(false);
                })

        } catch(err){
            console.log('leider hat hier die abfrage nicht geklappt')
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
                            { label: 'Offizieller Name', value: user.fullname },
                            { label: 'Benutzername', value: user.username },
                            { label: 'Email', value: user.email },
                            { label: 'Telefonnummer', value: user.phonenumber },
                            { label: 'Notfallkontakt', value: 'Einrichten...' },
                        ].map((item, index) => (
                            <li className='pd-mc-list-item' key={index}>
                                <div className='pd-mc-list-item-wrapper'>
                                    <div className='pd-mc-list-item-le'>
                                        <p className='pd-mc-text-body-le'>{item.label}</p>
                                        {editing ?  (
                                            <input 
                                                type='text'
                                                value={editableValue}
                                                onChange={(e) => setEditableValue(e.target.value)}
                                            />
                                        ) : (
                                            <p className='pd-mc-text-body-sm-le'>{item.value}</p>
                                            )}
                                         
                                    </div>
                                    <div className='pd-mc-list-item-ri'>
                                        {editing ? (
                                            <button onClick={saveChanges}>Speichern</button>

                                        ) : (
                                            <button onClick={(e) => setEditing(true)}>Bearbeiten</button>
                                            
                                        )}
                                        {/* <p className='pd-mc-text-body-ri'>Bearbeiten</p> */}
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
