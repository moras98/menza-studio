import React from "react";
import './Filter.css';

export default function Filter({isBlue}){
    return(
        <div className={'background-filter ' + (isBlue ? 'blue' : 'not-blue')}></div>
    );
}