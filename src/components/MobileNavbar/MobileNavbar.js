import React, { useState } from "react";
import './MobileNavbar.css';
import { useTranslation } from "react-i18next";
import routes from "../../routes/routes";
import { NavLink } from "react-router-dom";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

export default function MobileNavbar(){
    const {i18n} = useTranslation();

    const currentLanguage = i18n.language || 'es'; // Idioma por defecto 'es'
    const currentRoutes = routes[currentLanguage];
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const links = [
        { label: currentRoutes.label.home, path: currentRoutes.home },
        { label: currentRoutes.label.about, path: currentRoutes.about },
        { label: currentRoutes.label.services, path: currentRoutes.services },
        { label: currentRoutes.label.contact, path: currentRoutes.contact },
    ];

    return(
        <div className="mobile-navbar">
            <div className="mobile-navbar-elements">
                <div className="mobile-navbar-logo">
                    <NavLink to={currentRoutes.home}><img src="/menza-studio/assets/images/logo-blanco.png" alt="logo"/></NavLink>
                </div>
                <div className="mobile-navbar-button" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            <div className={menuOpen ? "mobile-menu-open" : 'mobile-menu-closed'}>
                <ul className="mobile-nav-ul">
                    {links.map((e, idx)=> <li key={idx}><NavLink to={e.path} onClick={()=>{closeMenu(); window.scrollTo(0, 0);}}>{e.label}</NavLink></li>)}
                    <li><LanguageSelector onClick={closeMenu}/></li>
                </ul>
            </div>
        </div>
    );
}