import React from "react";
import { NavLink } from "react-router-dom";
import './ItalicButton.css';

export default function ItalicButton({string, path}){

    return(
        <NavLink to={path} className={'italic-button'}>{string}</NavLink>
    );
}