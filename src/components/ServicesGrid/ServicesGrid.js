import React from "react";
import ServicesElement from "./ServicesElement.js";
import './ServicesGrid.css';

export default function ServicesGrid(){
    return(
        <div>
            <ServicesElement title={'Área 1'} text={'texto'} path={'/'}/>
        </div>
    );
}