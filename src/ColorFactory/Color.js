import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

function Color({ colors }) {

    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));

    return (
        <div>
            <div className="Color">
                <header className="Color-header">
                    <h1 className="Color-title">Welcome to the color factory.</h1>
                    <h1>
                        <Link to="/colors/new">Add a color</Link>
                    </h1>
                </header>
                <div className="Color-intro">
                    <p>Please select a color.</p>
                    <ul>{colorLinks}</ul>
                </div>
            </div>
        </div>
        
    );
}

export default Color;