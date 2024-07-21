import React from "react";
import './ContactContent.css';
import UnderlinedTitle from "../../../../components/UnderlinedTitle/UnderlinedTitle";
import Button from "../../../../elements/Button/Button";
import { useTranslation } from "react-i18next";

export default function ContactContent(){
    const {i18n, t} = useTranslation('home');
    const currentLanguage = i18n.language;

    return(
        <div className="contact-content">
            <div className="left">
                <UnderlinedTitle>
                    <h3 style={{color: 'white'}}>{t('contact_title')}</h3>
                </UnderlinedTitle>
            </div>
            <div className="right">
                <Button text={t('contact_btn')} isFilled={true} path={currentLanguage === 'es' ? '/contacto' : '/contact'}/>
            </div>
        </div>
    );
}