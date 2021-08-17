import React, { useState, useEffect } from "react";
import "./NavBar.css"

const items = [ "Home", "About", "Portraits",  "Love",  "35mm Film", "Rentals", "Pricing", "Contact"]

const NavBar = ({cb}) => {

    const [value, setValue] = useState(2);
    const [rental, setRental] = useState(false);

    useEffect(() => {
        console.log(rental)
    })

    return (
        <>
            <div className="navBarContainer">
                {items.map((item, i) => {
                    if (item !== "Rentals") {
                        return (
                            <h4 key={i} 
                                onClick={() => {cb(item.toLowerCase()); setValue(i)}}
                                className={`navBarItem ${value === i ? `navBarItemActive` : `navBarItemNonActive`}`} 
                            >
                                    {item}
                             </h4>   
                        )
                    } else {
                        return (
                            <div className="rentalMenu" onMouseEnter={() => item === "Rentals" ? setRental(true) : null} onMouseLeave={() => item === "Rentals" ? setRental(false) : null}>
                                <h4 key={i} 
                                    onClick={() => {cb(item.toLowerCase()); setValue(i)}}
                                    className={`navBarItem ${value === i ? `navBarItemActive` : `navBarItemNonActive`}`} 
                                >
                                        {item}
                                </h4>   
                                <div className="rentalSubMenu" style={{display: rental ? "flex" : "none"}}>
                                    <h4 onClick={() => {}}>Photobox</h4>
                                    <h4 onClick={() => {}}>Equipment Rental</h4>
                                </div>
                             </div>
                        )
                    }
                       
                    })}
            </div>
        </>
    )
}

export default NavBar