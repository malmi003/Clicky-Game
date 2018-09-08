import React from "react";
import "./Header.css";

const Header = props => (
    <header>
        <nav>
            <ul>
                <li><a href="/">Ships of the Great Lakes</a></li>
                <li className="push-right">Score: {props.score}&nbsp;|</li>
                <li className="push-right">&nbsp;High Score: {props.highScore}</li>
            </ul>
        </nav>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        <h3 className="title">{props.guessingStatus}</h3>
    </header>
);

export default Header;