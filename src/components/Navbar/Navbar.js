import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import routes from "../../routes/routes";

export default function Navbar(){

    const {i18n} = useTranslation();

    const currentLanguage = i18n.language || 'es'; // Idioma por defecto 'es'
    const currentRoutes = routes[currentLanguage];

    const links = [
        { label: currentRoutes.label.home, path: currentRoutes.home },
        { label: currentRoutes.label.about, path: currentRoutes.about },
        { label: currentRoutes.label.services, path: currentRoutes.services },
        { label: currentRoutes.label.contact, path: currentRoutes.contact },
    ];

    return(
        <div className="navbar">
            <div className="navbar-elements">
                <div className="logo-container">
                    <NavLink to={currentRoutes.home}><img src="/menza-studio/assets/images/logo-blanco.png" alt="logo"/></NavLink>
                </div>
                <NavbarLinksList links={links}/>
            </div>
        </div>
    );
}

function NavbarLink({label, path}){

    return(
        <li>
            <NavLink className={'navbar-link'} to={path} onClick={()=>{window.scrollTo(0, 0);}}>
                {label}
            </NavLink>
        </li>
    );
}

function NavbarLinksList({links}){

    return(
        <ul className="navbar-links-list">
            {links.map((e, index)=> <NavbarLink key={index} label={e.label} path={e.path}/>)}
            <LanguageSelector/>
        </ul>
    );
}
