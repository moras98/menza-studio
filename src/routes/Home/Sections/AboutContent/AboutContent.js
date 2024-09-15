import React from "react";
import UnderlinedTitle from "../../../../components/UnderlinedTitle/UnderlinedTitle";
import ItalicButton from "../../../../elements/ItalicButton/ItalicButton";
import './AboutContent.css';
import { useTranslation } from "react-i18next";

export default function AboutContent (){
    const {t, i18n} = useTranslation('home');
    const currentLanguage = i18n.language;

    // const leftStyle = {
    //     backgroundImage: `url('/menza-studio/assets/images/about-content.jpg')`,
    // }

    return(
        <div className="about-content">
            {/* <div style={leftStyle} className="left">
                <div className="left-filter"></div>
            </div> */}
            <div className="right">
                <UnderlinedTitle>
                    <h3>{t('about_title')}</h3>
                </UnderlinedTitle>
                <p>{t('about_text')}</p>
                <ItalicButton string={t('about_btn')} path={ currentLanguage === 'es' ? '/sobre-nosotros' : '/about-us'}/>
            </div>
        </div>
    );
}