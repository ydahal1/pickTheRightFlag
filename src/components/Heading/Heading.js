import React from "react";
import "./Heading.css";

const Heading = props => (
    <div className="col-lg-12 heading" >    
        <h3> Guess the Flag </h3>
        <h5> If you guess the right one you will earn 1 point</h5>
        <h1>{props.correctAnswer}</h1>
        </div>
);

export default Heading;