import React from "react";
import './ServicesElement.css';
import ItalicButton from "../../elements/ItalicButton/ItalicButton";

export default function ServicesElement({title, text, path}){
    return(
        <div className="services-element">
            <h4>{title.toUpperCase()}</h4>
            <p>{text}</p>
            <ItalicButton path={path} string={'Saber más ->'}/>
        </div>
    );
}