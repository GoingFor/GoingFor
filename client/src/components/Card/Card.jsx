import React from "react";
import "./style.css";


const Card = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
}

export default Card;

{/* Anwendungsbeipiel: 
<Card>
  <div className="text">
        <p className="subtitle">Wo?</p>
        <p className="cardText">49716 Meppen</p>
        <p className="cardText">Deutschland</p>
    </div>
</Card> 
*/}
