import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Button } from '../../components/Button/index.js';
import './style.css';


const Feedback = () => {

    const handleSubmit = () => {
        e.preventDefault();
    }

    return(
        
        <div className='fb'>
            {/* fb = feedback seite */}
            {/* ph = page header */}
            {/* mc = mobile content */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}
            {/* fb-mobile -> fb-mc-wrapper */}

            <div className='fb-ph-wrapper'>
                <Link to={'/home/profile'}>
                    <PageHeader 
                        pageTitle='Teile dein Feedback'
                    />
                </Link>
            </div>

            <main className='fb-mc-wrapper'>
                <div className='fb-mc'>
                    <div className='fb-mc-text-container'>
                        <p>
                            Vielen Dank, dass du Dir die Zeit nimmst, deine Wünsche, Anregungen und Ideen mit uns zu teilen. Wir werden alles, was uns möglich ist intern besprechen und versuchen umzusetzen, um GoingFor noch besser zu machen. Bei Rückfragen kommen wir gern auf deine Nachricht zurück.
                        </p>
                    </div>

                    <div className='fb-mc-form-container'>
                        <form className='fb-mc-from' onSubmit={handleSubmit}>
                            <textarea 
                                placeholder='Gib uns Feedback...'
                                name='fb-text'
                                id='fb-text' 
                                cols='30' 
                                rows='10'>
                            </textarea>

                            <Button
                                className='fb-mc-btn'
                                > Senden
                            </Button>  
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default Feedback;
