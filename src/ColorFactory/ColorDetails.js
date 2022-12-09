import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import "./ColorDetails.css"

function ColorDetails({ colors }) {
    const { color } = useParams();
    const currentColor = colors[color];

    if (!currentColor) {
        return <Redirect to="/colors" />;
    }

    return (
        <div className="ColorDetails" style={{ backgroundColor: colors[color] }}>
            <p>this is {color}.</p>
            <p>Isn't it beautiful?</p>
            <p>
                <Link to="/colors">Go back</Link>
            </p>
        </div>
    );
}

export default ColorDetails;