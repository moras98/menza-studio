import React from "react";
import Filter from "./Filter";

export default function ParallaxSection({img, title, isHalfHeight, children}){
    const style = {
        widht: '100%',
        height: isHalfHeight ? '50vh' : '100vh',
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return(
        <div style={style}>
            {children}
            <Filter isBlue={true}/>
        </div>
    );
}