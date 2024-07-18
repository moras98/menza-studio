import React from "react";
import Button from "../../../elements/Button/Button";
import '../../../animations.css';

export default function HeroContent(){

    const heroContentStyle = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        animation: 'fadeInLeft 2s ease-out'
    }

    const buttonsDivStyle = {
        marginTop: '2vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '2vh',
    }

    return(
        <div style={heroContentStyle}>
            <h1 style={{color:'white'}}>TEXTO DE EJEMPLO 1</h1>
            <h2 style={{color: "#979dacff"}}>TEXTO DE EJEMPLO 2</h2>
            <div style={buttonsDivStyle}>
                <Button text={'CONTACTO'} path={'/'} isFilled={true}/>
                <Button text={'SABER MÁS'} path={'/'} isFilled={false}/>
            </div>
        </div>
    );
}