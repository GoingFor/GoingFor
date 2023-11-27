import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Button } from '../../components/Button/index.js';
import './style.css';

const Comment = () => {
    return (
        <div className='comment'>
            {/* comment = erstellte bewertungen */}
            {/* ph = page header */}
            {/* mc = mobile content */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}
            
            <div className='comment-ph-wrapper'>
                <Link to={'/home/profile'}>
                    <PageHeader 
                        pageTitle='Erstelle Bewertungen'
                    />
                </Link>
            </div>

            <main className='comment-mc-wrapper'>
                <div className='comment-mc'>
                <Link className='comment-mc-link' to={'/home'}>
                        <Button 
                            className='comment-mc-btn' 
                                >Finde dein Festival
                        </Button>
                    </Link>

                    <div className='comment-card-wrapper'>
                        <p className='comment-text'>Du hast noch kein Festival bewertet!</p>
                    </div>
                </div>    
            </main>
        </div>

    )
};

export default Comment;