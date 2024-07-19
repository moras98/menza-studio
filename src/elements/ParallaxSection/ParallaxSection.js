import React from "react";
import Filter from "../Filter/Filter";
import './ParallaxSection.css';

export default function ParallaxSection({img, isHalfHeight, children}){
    const style = {
        height: isHalfHeight ? '50vh' : '100vh',
        backgroundImage: `url('${img}')`,
    }

    return(
        <div style={style} className="parallax-section">
            {children}
            <Filter isBlue={true}/>
        </div>
    );
}