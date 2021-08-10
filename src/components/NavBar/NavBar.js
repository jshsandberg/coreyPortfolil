import React, { useState, useEffect } from "react";
import "./NavBar.css"

const items = ["Home", "About", "Portraits", "Love", "35mm Film", "Rentals", "Pricing", "Contact"]

const NavBar = ({cb}) => {

    const [value, setValue] = useState(2);

    useEffect(() => {
        console.log("rerender")
    })

    return (
        <>
            <div className="navBarContainer">
                {items.map((item, i) => {
                        return (
                            <h4 key={i} onClick={() => {cb(item.toLowerCase()); setValue(i)}} className={`navBarItem ${value === i ? `navBarItemActive` : `navBarItemNonActive`}`}>{item}</h4>
                        )
                    })}
            </div>
        </>
    )
}

export default NavBar