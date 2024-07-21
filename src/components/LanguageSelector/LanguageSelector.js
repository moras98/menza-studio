import React from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';
import './LanguageSelector.css';

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const langaugeInEnglish = i18n.language === 'en';

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

    return (
        <div className="language-selector">
            <img 
                src="/menza-studio/assets/flags/uruguay-flag.png"
                alt="cambiar idioma a español"
                className={'language-flag ' + (!langaugeInEnglish ? 'selected-lg' : '')}
                onClick={() => changeLanguage('es')}
            />
            <img 
                src="/menza-studio/assets/flags/gb-flag.png"
                alt="cambiar idioma a inglés"
                className={'language-flag ' + (langaugeInEnglish ? 'selected-lg' : '')}
                onClick={() => changeLanguage('en')}
            />
        </div>
    );
}
