import React from 'react'

import '../LandingPage/LandingPage.css';
import BackgroundImage from '../LandingPage/images/back2.png'
export default function LandingPage() {
    return (
        
        <header style={ HeaderStyle }>
            <div></div>
        </header>
    )
}

const HeaderStyle = {
    marginTop: "0px",
    width: "100%",
    height: "90vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover"
}