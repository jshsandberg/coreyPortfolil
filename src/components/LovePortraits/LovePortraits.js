import React from 'react';
import "./LovePortraits.css";

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../utils/LoveVerticalPortraits", false, /\.(png|jpe?g|svg)$/));

const verticalImages = Object.entries(cache).map(module => module[1].default);

importAll(require.context("../../utils/HorizantalPortraits", false, /\.(png|jpe?g|svg)$/));

const horizantalImages = Object.entries(cache).map(module => module[1].default);




const LovePortraits = () => {
    return (
        <div className="portraitHolder">
            {verticalImages.map(image => (
                <img className="portraitImage" src={image} />
            ))}
        </div>
    );
}

export default LovePortraits;