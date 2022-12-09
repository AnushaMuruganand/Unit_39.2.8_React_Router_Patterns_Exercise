import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogFinder/DogList";
import DogDetails from "./DogFinder/DogDetails";
import Color from "./ColorFactory/Color";
import ColorDetails from "./ColorFactory/ColorDetails";
import Home from "./Home";
import ColorForm from "./ColorFactory/ColorForm";

const DEFAULT_COLORS = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

function AppRoutes({ dogs }) {
    const initialColors = JSON.parse(localStorage.getItem("colors")) || DEFAULT_COLORS;
    const [colors, setColors] = useState(initialColors);

    // Save colors to localStorage upon any change in the colors array
    useEffect(
        function syncColorsToLocalStorage() {
            return localStorage.setItem("colors", JSON.stringify(colors));
        }, [colors]
    );

    function handleAdd(newColorObj) {
        setColors(prevColors => ({ ...prevColors, ...newColorObj }));
    }
    
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route path="/dogs/:name" >
                <DogDetails dogs={dogs} />
            </Route>
            <Route exact path="/colors">
                <Color colors={colors}/>
            </Route>
            <Route exact path="/colors/new">
                <ColorForm addColor={handleAdd} />
            </Route>
            <Route path="/colors/:color">
                <ColorDetails colors={colors} />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default AppRoutes;