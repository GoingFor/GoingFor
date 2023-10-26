import React from 'react';
import { PageHeader } from '../../components/PageHeader/index.js';
import './style.css';

const WishlistPage = () => {
    return(
        <div className='wl'>
            {/* fb = feedbackseite */}
            {/* mc = mobile content */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}

            <PageHeader
                pageTitle='Wunschliste'>
            </PageHeader>
        </div>
    )
}

export default WishlistPage;
