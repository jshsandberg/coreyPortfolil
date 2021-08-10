import React from 'react';
import "./Portraits.css";

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../utils/VerticalPortraits", false, /\.(png|jpe?g|svg)$/));

const verticalImages = Object.entries(cache).map(module => module[1].default);

importAll(require.context("../../utils/HorizantalPortraits", false, /\.(png|jpe?g|svg)$/));

const horizantalImages = Object.entries(cache).map(module => module[1].default);




const Portraits = () => {
    return (
        <div className="portraitHolder">
            {verticalImages.map(image => (
                <img className="portraitImage" src={image} />
            ))}
        </div>
    );
}

export default Portraits;