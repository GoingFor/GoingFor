import React from "react";
import "./style.css";
import { IoMdAddCircleOutline, IoMdSearch, IoIosHeartEmpty } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";

const Footer = () =>
{
    return(
        <div className="footercontainer">
            <div className="footericons">
                <div className="iconcontainer">
                <a className="footer-link" href="/home/hosting">
                        <div className="icon">
                            <IoMdAddCircleOutline/>
                        </div>
                        <p>Eintragen</p>
                    </a>
                </div>
                <div className="iconcontainer">
                    <a className="footer-link" href="/home/find">
                        <div className="icon">
                            <IoMdSearch/>
                        </div>
                        <p>Entdecken</p>
                    </a>
                </div>
                <div className="iconcontainer">
                    <a className="footer-link" href="/home/wishlist">
                        <div className="icon">
                            <IoIosHeartEmpty/>
                        </div>
                        <p>Gemerkt</p>
                    </a>
                </div>
                <div className="iconcontainer">
                    <a className="footer-link" href="/home/profile">
                        <div className="icon">
                            <PiUserCircleLight/>
                        </div>
                        <p>Profil</p>
                    </a>
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