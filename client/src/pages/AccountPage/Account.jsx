import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const Account = () => {
    const { user, getUserData } = useAuth();

    useEffect(() => {
        getUserData();
    }, []);

    return(
        <div className='ac'>
        {/* ac = account/konto seite*/}
        {/* ph = page header */}
        {/* mc = mobile content */}
        {/* dc = desktop content */}
        {/* le = left */}
        {/* ri = right */}
        {/* btn = button */}
            <div className='ac-ph-wrapper'>
                <Link to={'/home/profile'}>
                    <PageHeader 
                        pageTitle='Konto'
                    />
                </Link>
            </div>

            <main className='ac-mc-wrapper'>
                <div className='ac-mc'>
                    <div className='ac-mc-user'>
                        <div className='ac-mc-user-le'>
                            <div className='ac-mc-user-avatar-icon'>
                                <img 
                                    src={user.avatar}
                                    alt={user.username} 
                                    className='ac-mc-user-avatar-image'
                                />
                            </div>
                            <div className='ac-mc-user-text'>
                                <p className='ac-mc-user-name'>{user.username}</p>
                            </div>
                        </div>
                    </div>

                    <div className='ac-mc-reviews'>
                        
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Account;