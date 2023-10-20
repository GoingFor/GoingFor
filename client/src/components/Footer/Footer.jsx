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
                    <a href="#">
                        <div className="icon">
                            <IoMdAddCircleOutline/>
                        </div>
                        <p>Eintragen</p>
                    </a>
                </div>
                <div className="iconcontainer">
                    <a href="#">
                        <div className="icon">
                            <IoMdSearch/>
                        </div>
                        <p>Entdecken</p>
                    </a>
                </div>
                <div className="iconcontainer">
                    <a href="#">
                        <div className="icon">
                            <IoIosHeartEmpty/>
                        </div>
                        <p>Gemerkt</p>
                    </a>
                </div>
                <div className="iconcontainer">
                    <a href="#">
                        <div className="icon">
                            <PiUserCircleLight/>
                        </div>
                        <p>Profil</p>
                    </a>
                </div>
            </div>
            <div className="rechtl">
                <a href="#">Impressum</a>
                <a href="#">Datenschutz</a>
            </div>
        </div>
    )
}

export default Footer;