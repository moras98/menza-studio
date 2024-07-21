import React from "react";
import './LanguageSelector.css';

export default function LanguageSelector(){
    const langaugeInEnglish = window.location.pathname.includes('/en/');

    return (
        <div className="language-selector">
            <img 
                src="/menza-studio/assets/flags/uruguay-flag.png"
                alt="cambiar idioma a español"
                className={'language-flag ' + (!langaugeInEnglish? 'selected-lg': '')}
                onClick={()=>{}}
            />
            <img 
                src="/menza-studio/assets/flags/gb-flag.png"
                alt="cambiar idioma a español"
                className={'language-flag ' + (langaugeInEnglish? 'selected-lg': '')}
                onClick={()=>{}}
            />
        </div>
    );
}