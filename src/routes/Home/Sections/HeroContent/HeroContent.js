import React from "react";
import Button from "../../../../elements/Button/Button";
import './HeroContent.css';
import { useTranslation } from "react-i18next";

export default function HeroContent(){
    const {i18n, t} = useTranslation('home');
    const currentLanguage = i18n.language;

    return(
        <div className="hero-content">
            {/* <h1 style={{color:'white'}}>{t('title')}</h1>
            <h2 style={{color: "#979dacff"}}>{t('subtitle')}</h2> */}
            <img src="/menza-studio/assets/images/logo-blanco-completo.png"/>
            <div className="buttons-div">
                <Button text={t('hero_contact')} path={currentLanguage === 'es' ? '/contacto' : '/contact'} isFilled={true}/>
                <Button text={t('hero_learn_more')} path={currentLanguage === 'es' ? '/sobre-nosotros' : '/about-us'} isFilled={false}/>
            </div>
        </div>
    );
}