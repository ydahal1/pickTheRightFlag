import React from "react";
import "./People.css";



const peopleCard = props => (
    <div className = "card" >
        <div className="img-container" onClick={props.handleClicks} >
            <img alt={props.name} src={props.image}  id={props.name} className="imgSize"/>
        </div>

    </div>
);

export default peopleCard;