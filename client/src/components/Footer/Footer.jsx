import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";
import { IoMdAddCircleOutline, IoMdSearch, IoIosHeartEmpty } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";

const Footer = () =>
{
    return(
        <div className="footercontainer">
            <div className="footericons">
                <div className="iconcontainer">
                    <Link className="footer-link" to={'/home/event'}>
                        <div className="icon">
                            <IoMdAddCircleOutline/>
                        </div>
                        <p>Eintragen</p>
                    </Link>
                </div>
                <div className="iconcontainer">
                    <Link className="footer-link" to={'/home'}>
                        <div className="icon">
                            <IoMdSearch/>
                        </div>
                        <p>Entdecken</p>
                    </Link>
                </div>
                <div className="iconcontainer">
                    <Link className="footer-link" to={'/home/wishlist'}>
                        <div className="icon">
                            <IoIosHeartEmpty/>
                        </div>
                        <p>Gemerkt</p>
                    </Link>
                </div>
                <div className="iconcontainer">
                    <Link className="footer-link" to={'/home/profile'}>
                        <div className="icon">
                            <PiUserCircleLight/>
                        </div>
                        <p>Profil</p>
                    </Link>
                </div>
            </div>
            
            <div className="rechtl">
                <a className="rechtl-link" href="#">Impressum</a>
                <a className="rechtl-link" href="#">Datenschutz</a>
            </div>
        </div>
    )
}

export default Footer;