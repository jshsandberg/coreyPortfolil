import React from "react";

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../utils/CoreyPortraits", false, /\.(png|jpe?g|svg)$/));

const coreyPics = Object.entries(cache).map(module => module[1].default);


const About = () => {


    return (
        <>
            <p>
                Hello there! My name is Corey and I'm a photographer from the Phoenix, AZ area.

                I enjoy each type of photography for it's own specific nuances, but my favorite has to be portraits. I love being able to capture a personal moment someone has at a given time and be able to store it for the rest of time.

                I'm a huge fan of music, collecting records, film + television, traveling, my nephew, and getting to know people 
                from all walks of life. I am also a graduate of Arizona State University (fork ‘em devils)!

                Let's create something amazing together soon.

                Much love.
            </p>
            <div className="portraitHolder">
                {coreyPics.map(image => (
                    <img className="portraitImage" src={image} />
                ))}
            </div>
        </>
    )
}

export default About