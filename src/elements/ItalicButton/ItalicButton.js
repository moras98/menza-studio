import React from "react";
import './ItalicButton.css';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function ItalicButton({ string, path }) {
    const isHashLink = path.includes('#');

    const handleClick = () => {
        if (!isHashLink) {
            window.scrollTo(0, 0); // Scroll al inicio de la página
        }
    };

    if (isHashLink) {
        return (
            <HashLink smooth to={path} className={'italic-button'}>
                {string}
            </HashLink>
        );
    } else {
        return (
            <NavLink to={path} className={'italic-button'} onClick={handleClick}>
                {string}
            </NavLink>
        );
    }
}
