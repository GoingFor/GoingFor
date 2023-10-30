import React from 'react';
import { Link } from 'react-router-dom';
import goingfor_logo from '../../assets/goingfor_logo.png';
import { Button } from '../../components/Button/index.js';
import './style.css';
import Hero from '../../components/Herosection/Herosection';
import { Carousel } from '../../components/Carousel/Carousel.jsx';
import imagesData from './InfositeCarouselData.json';
import meetpeopleData from './MeetpeopleData.json';


const Info = () => {

    const heroPropsList = [
        {
            title: 'Woraus Träume gemacht sind',
            subtitle: 'Events für Abenteurer',
            text: "Wir finden für Dich dein einmaliges Ereignis. Sag uns einfach, was Du magst und wir zeigen Dir die beste Location voll mit Abenteuer und Spaß. Sag's deinen  Freunden und habt eine tolle Zeit zusammen.",
        },
        {
            title: 'Events, die für dich gemacht sind',
            subtitle: 'Triff neue Leute',
            text: 'Triff coole Leute, die so ticken, wie du!',
        },
        {
            title: 'Sag was gutes',
            subtitle: 'Bewerte Events',
            text: 'Bewerte die besuchten Events und hilf, das Event perfekt zu machen. Was hat dir gefallen, was willst du mit anderen Gästen teilen?',
        }
        
    ];

    return(
        <div className='ip'>
                {/* ip = infopage */}
                {/* mc = mobile content */}
                {/* le = left */}
                {/* ri = right */}
                {/* btn = button */}
            <div className='ip-logo-wrapper'>
                <img className='ip-logo' src={goingfor_logo} alt='goingfor-logo'/>
            </div>

            <div className='ip-subtitle-wrapper'>
                <p className='ip-subtitle'>
                    Find YOUR Perfect Events All Over The World
                </p>
            </div>

            <div className='button-wrapper'>
                <Link to={'/login'}>
                    <Button className='ip-login-btn'>Login</Button>
                </Link>
                
                <Link to={'/register'}>
                    <Button className='ip-register-btn'>Anmelden</Button>
                </Link>
            </div>
            <div className='ip-heros'>
            <Hero {...heroPropsList[0]} />
            <Hero {...heroPropsList[1]} />
            <div className="ip-carousel">
                <Carousel data={meetpeopleData.slides} />
            </div>
            <Hero {...heroPropsList[2]} />
            </div>
            <div className="ip-inspiration">
             <p className="hero-title">Lass dich inspirieren</p>
             <p className="hero-subtitle">Schau doch mal</p> 
            </div>
            <div className="ip-carousel">
                <Carousel data={imagesData.slides} />
            </div>
            
        </div>
    )
}

export default Info;
