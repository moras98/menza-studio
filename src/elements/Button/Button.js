import React from "react";
import { NavLink } from "react-router-dom";
import './Button.css';

export default function Button({ text, path, isFilled }) {
    return (
        <NavLink
            to={path}
            className={`button ${isFilled ? 'filled' : 'outlined'}`}
        >
            {text}
        </NavLink>
    );
}
