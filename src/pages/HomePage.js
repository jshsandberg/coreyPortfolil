import React, { useState, useCallback, Suspense } from "react";
import Corey from "../components/Corey/Corey";
import NavBar from "../components/NavBar/NavBar";
import Photobox from "../components/Photobox/Photobox";
import About from "../components/About/About";
import "./HomePage.css";

const Portraits = React.lazy(() => import('../components/Portraits/Portraits'));

const LovePortraits = React.lazy(() => import("../components/LovePortraits/LovePortraits"));

const Film = React.lazy(() => import("../components/35Film/35Film"));




const HomePage = () => {

    const [navBar, setNavBar] = useState("portraits");

    const callbackFunctionNavBar = useCallback((item) => {
        setNavBar(item);
    }, []);


    const renderSwitch = (value) => {
        switch(value) {
            case 'portraits' :
                return  <div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Portraits />
                            </Suspense>
                        </div>;
            case 'love' : 
                return  <div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <LovePortraits />
                            </Suspense>
                        </div>;
            case "35mm film" : 
                return <div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Film />
                            </Suspense>
                        </div>;
            case "about" :
                return <About />;
            case "photobox" :
                return <Photobox />
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