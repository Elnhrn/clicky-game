import React from "react";
import "./Navbar.css";

// TODO: fix styling with separate CSS
const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="/">Clicky Game</a>
        <h5 className="navbar-msg">{props.msg}</h5>
        <h5 className="navbar-score navbar-right">Score: {props.score} | Top Score: {props.topScore}</h5>
    </nav>
);

export default Navbar;