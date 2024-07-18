import React from "react";
import UnderlinedTitle from "../../../components/UnderlinedTitle";

export default function AboutContent (){
    const containerSyle = {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '16px',
        width: '100%',
        minHeight: '50vh',
        backgroundColor: 'white',
        overflow: 'hidden',
        boxShadow: '4px 4px 4px 2px rgba(0, 0, 0, 0.2)',
    }

    const leftStyle = {
        display: 'flex',
        flex: 1,
        backgroundImage: `url('./assets/images/about-content.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const rightStyle = {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        gap: '1vw'
    }

    const leftFilter = {
        borderRadius: '16px 0 0 16px',
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(to right, #001233ff, #023e7dff)',
        width: '100%',
        opacity: '0.8'
    }

    return(
        <div style={containerSyle}>
            <div style={leftStyle}>
                <div style={leftFilter}></div>
            </div>
            <div style={rightStyle}>
                <UnderlinedTitle>
                    <h3>Sobre Nosotros</h3>
                </UnderlinedTitle>
                <p></p>
            </div>
        </div>
    );
}