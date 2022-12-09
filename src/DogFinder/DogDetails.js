import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dogs }) {
    const {name} = useParams(); 
    const currentDog = dogs.find(dog => dog.name.toLowerCase() === name);

    if (!currentDog) {
        return <Redirect to="/dogs"/>
    }

    return (
        <div className="row DogDetails">
            <div className="col d-flex flex-column align-items-center">
                <img src={currentDog.src} alt={currentDog.name} />
                <h2>{currentDog.name}</h2>
                <h3>{currentDog.age} years old</h3>
                <ul>
                    {currentDog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Go Back</Link>
            </div>
        </div>
    );
}

export default DogDetails;