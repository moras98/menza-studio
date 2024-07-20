import React from "react";
import './ContactContent.css';
import UnderlinedTitle from "../../../../components/UnderlinedTitle/UnderlinedTitle";
import Button from "../../../../elements/Button/Button";

export default function ContactContent(){
    return(
        <div className="contact-content">
            <div className="left">
                <UnderlinedTitle>
                    <h3 style={{color: 'white'}}>¿Necesita más información?</h3>
                </UnderlinedTitle>
            </div>
            <div className="right">
                <Button text={'CONTÁCTENOS'} isFilled={true} path={'/contacto'}/>
            </div>
        </div>
    );
}