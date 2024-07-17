import React from "react";

export default function Section({backgroundColor, backgroundImage, isHalf, children}){
    const style = {
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repear',
        width: '100%',
        minHeight: isHalf ? '50vh' : '100vh',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
        <div style={style}>{children}</div>
    );
}