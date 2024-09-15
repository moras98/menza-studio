import React from "react";
import './Footer.css';
import { useTranslation } from "react-i18next";
import routes from "../../routes/routes";
import { NavLink, useNavigate } from "react-router-dom";
import { services_en, services_es } from "../../services/services";

export default function Footer(){
    const navigate = useNavigate();
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language || 'es';
    const currentRoutes = routes[currentLanguage];
    const currentServices = currentLanguage === 'es'? services_es : services_en;
    // const langaugeInEnglish = i18n.language === 'en';

    const links = [
        { label: currentRoutes.label.home, path: currentRoutes.home },
        { label: currentRoutes.label.about, path: currentRoutes.about },
        { label: currentRoutes.label.services, path: currentRoutes.services },
        { label: currentRoutes.label.contact, path: currentRoutes.contact },
    ];

    const services = [
        { label: currentServices[0].name, path: `${currentRoutes.services}#1`},
        { label: currentServices[1].name, path: `${currentRoutes.services}#2`},
        { label: currentServices[2].name, path: `${currentRoutes.services}#3`},
        { label: currentServices[3].name, path: `${currentRoutes.services}#4`},
        { label: currentServices[4].name, path: `${currentRoutes.services}#5`},
        { label: currentServices[5].name, path: `${currentRoutes.services}#6`},
    ];

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                // Optional: show a message to indicate that the text has been copied
                currentLanguage === 'es' ? alert('Teléfono copiado!') : alert('Phone copied!');
            })
            .catch((err) => {
                console.error('Error al copiar al portapapeles: ', err);
            });
    };


    const changeLanguage = (lng) => {
        const currentPath = window.location.pathname;
        const currentRoutes = routes[i18n.language];
        const newRoutes = routes[lng];

        // Encuentra la clave de la ruta actual en el idioma actual
        const currentRouteKey = Object.keys(currentRoutes).find(
            key => currentRoutes[key] === currentPath
        );

        // Si no encuentra la ruta, navega a la página principal
        const newPath = currentRouteKey ? newRoutes[currentRouteKey] : newRoutes.home;

        i18n.changeLanguage(lng).then(() => {
            navigate(newPath);
        });
    };

    return(
        <div className="footer">
            <div className="footer-content">
                <div className="img-container">
                    <img alt="logo" src="/menza-studio/assets/images/logo-blanco.png"/>
                </div>
                <div className="footer-column">
                    {links.map((e, idx)=> <NavLink to={e.path} onClick={()=>{window.scrollTo(0, 0);}} key={idx} className={'footer-link'}>{e.label}</NavLink>)}
                </div>
                <div className="footer-column">
                    {services.map((e, idx)=> <NavLink to={e.path} onClick={()=>{window.scrollTo(0, 0);}} key={idx} className={'footer-link'}>{e.label}</NavLink>)}
                </div>
                <div className="footer-column">
                    <NavLink className="footer-link" onClick={() => changeLanguage('es')}>ESP</NavLink>
                    <NavLink className="footer-link" onClick={() => changeLanguage('en')}>ENG</NavLink>
                </div>
                <div className="footer-column">
                    <img alt="email" src="/menza-studio/assets/icons/email.svg" onClick={()=>window.location.href = 'mailto:example@example.com'}/>
                    <img alt="email" src="/menza-studio/assets/icons/phone.svg" onClick={() => copyToClipboard('+1234567890')}/>
                    <img alt="email" src="/menza-studio/assets/icons/linkedin.svg" onClick={()=> window.open('https://www.linkedin.com/company/sequeira-menza-abogados?trk=public_profile_topcard-current-company', '_blank')}/>
                </div>
            </div>
        </div>
    );
}