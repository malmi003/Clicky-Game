import React from "react";
import "./Header.css";

const Header = props => (
    <header>
        <nav>
            <ul>
                <li><a href="/">Clicky Game</a></li>
                <li>{props.guessingStatus}</li>
                <li>Current Score: {props.score}</li>
                <li>High Score: {props.highScore}</li>
            </ul>
        </nav>
        <h1>Boats of the Great Lakes Clicky Game</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </header>
);

export default Header;