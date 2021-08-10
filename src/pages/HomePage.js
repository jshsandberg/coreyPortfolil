import React, { useState, useCallback } from "react";
import Corey from "../components/Corey/Corey";
import NavBar from "../components/NavBar/NavBar"
import Portraits from "../components/Portraits/Portraits";
import LovePortraits from "../components/LovePortraits/LovePortraits";
import Film from "../components/35Film/35Film";
import About from "../components/About/About"
import "./HomePage.css"

const HomePage = () => {

    const [navBar, setNavBar] = useState("portraits");

    const callbackFunctionNavBar = useCallback((item) => {
        setNavBar(item);
    }, []);


    const renderSwitch = (value) => {
        switch(value) {
            case 'portraits' :
                return <Portraits />;
            case 'love' : 
                return <LovePortraits />
            case "35mm film" : 
                return <Film />
            case "about" :
                return <About />
        }
    }


    return (
        <>
            <div className="homePageContainer">
                <Corey />
                <NavBar cb={callbackFunctionNavBar} />
                <>
                    {renderSwitch(navBar)}
                </>
            </div>

        </>
    )
} 

export default HomePage