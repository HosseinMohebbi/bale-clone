import React, { useState } from "react";
import "./FooterChanal.css"

export const FooterChanal = () => {
    const[mute, setMute] = useState(false);

    const muteButtonHandler = () => {
        setMute(prev => !prev)
    };

    let showMute = mute ? 'با صدا کردن' : 'بی صدا کردن';

    return ( 
        <div className="footer-chanal-container">
            <button onClick={muteButtonHandler} className="footer-chanal-button">{showMute}</button>
        </div>
    )
};

