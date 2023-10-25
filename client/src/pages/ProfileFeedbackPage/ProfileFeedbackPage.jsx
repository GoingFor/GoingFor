import React from 'react';
import { PageHeader } from '../../components/PageHeader/index.js';
import { Button } from '../../components/Button/index.js';
import './style.css';


const ProfileFeedbackPage = () => {

    const handleSubmit = () => {
        e.preventDefault();
    }

    return(
        
        <div className='fb'>

            {/* fb = feedbackseite */}
            {/* mc = mobile content */}
            {/* le = left */}
            {/* ri = right */}
            {/* btn = button */}

            <section className='fb-mobile'>
                <PageHeader 
                    pageTitle='Teile dein Feedback'
                />

                <main className='fb-mc'>
                    <div className='fb-mc-text-container'>
                        <p>
                            Vielen Dank, dass du Dir die Zeit nimmst, deine Wünsche, Anregungen und Ideen mit uns zu teilen. Wir werden alles, was uns möglich ist intern besprechen und versuchen umzusetzen, um GoingFor noch besser zu machen. Bei Rückfragen kommen wir gern auf deine Nachricht zurück.
                        </p>
                    </div>

                    <div className='fb-mc-form-container'>
                        <form className='fb-mc-from' onSubmit={handleSubmit}>
                            <textarea 
                                placeholder='Gib uns Feedback...'
                                name='feedback'
                                id='feedback' 
                                cols='30' 
                                rows='10'>
                            </textarea>

                            <Button
                                className='fb-mc-btn'
                                > Senden
                            </Button>  
                        </form>
                    </div>

                </main>
            </section>

        </div>
    )

}

export default ProfileFeedbackPage;
