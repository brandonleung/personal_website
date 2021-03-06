import React from 'react'

import scully from "../images/scully.jpg"
import nalaRandall from "../images/nalarandall.jpg"

const Cats = () => {
    return (
        <div id="cats" className="section" style={{'background': '#D5EDF9'}}>
            <h2 className="cats-section">Cats</h2>
            <div className="content-container">
                I have three awesome cats. From left to right their names are Scully, Randall, and Nala.
            </div>
            <div className="cats-container">
                <img className="cats-img" src={scully} />
                <img className="cats-img" src={nalaRandall} />
            </div>
        </div>
    );
}

export default Cats;