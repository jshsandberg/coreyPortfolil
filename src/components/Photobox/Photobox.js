import React, { useState } from "react";
import PhotoBox from "../../utils/PhotoBox/Photobox.jpg";
import "./Photobox.css";

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../utils/PhotoBoxCarousel", false, /\.(png|jpe?g|svg)$/));

const carouselImages = Object.entries(cache).map(module => module[1].default);

const Photobox = () => {

    const [indexFirstImage, setIndexFirstImage] = useState(0);
    const [indexLastImage, setIndexLastImage] = useState(5);
    const [carouselImage, setCarouselImage] = useState(carouselImages[0])



    return (
        <>
            <div className="photoboxTextContainer">
                <img src={PhotoBox} alt="photobox" />
                <div className="photoboxTextHolder">
                    <p>This custom-built handmade open-air photo booth in the Phoenix, AZ area was created to service any and all events, parties, weddings, or gatherings that you may host. It is sure to get any party going!</p>

                    <p>Guests will love our wide array of backdrops, props, and the gorgeous 4x6 prints (with your custom logos/titles) they will be able to take with them. Not to mention our onsite attendant is sure to be energetic and ready to keep things rolling along!</p>

                    <p>We hope you enlist our services soon. Please fill out the contact form to inquire further. We can't wait to be a part of the memories you are soon to make!</p>
                </div>

            </div>
            <div className="photoboxCarousel">
                <img src={carouselImage} alt="shownCarouselImage" />
                <div className="carouselImage">
                    {carouselImages.map((image, i) => (
                        i >= indexFirstImage && i < indexLastImage ? <img onClick={() => setCarouselImage(image)} className="carouselImage" src={image} alt="carouselImage" /> : null
                    ))}
                </div>
              
            </div>
        </>
    )
}

export default Photobox