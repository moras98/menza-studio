import React from "react";
import Button from "../../../../elements/Button/Button";
import './HeroContent.css';

export default function HeroContent(){
    return(
        <div className="hero-content">
            <h1 style={{color:'white'}}>TEXTO DE EJEMPLO 1</h1>
            <h2 style={{color: "#979dacff"}}>TEXTO DE EJEMPLO 2</h2>
            <div className="buttons-div">
                <Button text={'CONTACTO'} path={'/'} isFilled={true}/>
                <Button text={'SABER MÁS'} path={'/sobre-nosotros'} isFilled={false}/>
            </div>
        </div>
    );
}