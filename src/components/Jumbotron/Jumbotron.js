import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Click on an animal to get started!</h1>
            <p className="lead">Click on a new image every turn to earn a point. If you click on an image twice, the game is over. Try to beat your high score!</p>
        </div>
    </div>
);

export default Jumbotron;