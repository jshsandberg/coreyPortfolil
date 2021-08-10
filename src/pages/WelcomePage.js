import React from "react";
import Corey from "../components/Corey/Corey";
import { useHistory } from "react-router-dom";
import "./WelcomePage.css"

const WelcomePage = () => {

    let history = useHistory();
    

    return (
        <>
            <div className="welcomePageImage">
                <Corey />
                <div className="welcomePageContent">
                    <div className="welcomePagePhoto">
                        <h2>PHOTOGRAPHER</h2>
                        <h4>PHOENIX, AZ</h4>
                    </div>
                    <div className="welcomePageButton">
                        <button onClick={() => history.push("./home")}>ENTER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomePage;