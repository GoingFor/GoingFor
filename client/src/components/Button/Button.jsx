// hier würde ich jeweils für den grauen und für einen blauen button einen default und disabled button anlegen und diese einzeln exportieren
import React from 'react';
import './style.css';

const Button = ({ onClick, className, children }) => {

    return(
        <button 
            className={`btn ${className}`} 
            onClick={onClick}>

                {children}

        </button>
    )
}

export default Button;
