import React from "react";
import "./AnimalCard.css";

// TODO: center all AnimalCards in CSS
const AnimalCard = props => (
    <div className="card-container container">
        <div className="card">
            <div className="card-img-top">
                <span onClick={() => props.selectAnimal(props.id)}>
                    <img src={props.image} />
                </span>
            </div>
        </div>
    </div>
);

export default AnimalCard;