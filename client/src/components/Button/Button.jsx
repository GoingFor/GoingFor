// hier würde ich jeweils für den grauen und für einen blauen button einen default und disabled button anlegen und diese einzeln exportieren
import React from 'react';
import './style.css';

const Button = ({ onClick, label, className }) => {

    return(
        <button 
            id='default-button'
            className={`btn ${className}`} 
            onClick={onClick}>

                {label}

        </button>
    )
}

export default Button
