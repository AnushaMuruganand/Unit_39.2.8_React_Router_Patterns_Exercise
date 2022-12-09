import React from "react";
import { NavLink } from "react-router-dom";
import "./AppNav.css";

function AppNav() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/dogs">Dog Finder App</NavLink>
            <NavLink exact to="/colors">Color Factory App</NavLink>
        </nav>
    )
    
}

export default AppNav;