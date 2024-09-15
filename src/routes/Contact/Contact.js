import React from "react";
import './Contact.css'
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import Section from "../../elements/Section/Section";
import SectionContent from "../../elements/SectionConrent/SectionContent";
import UnderlinedTitle from "../../components/UnderlinedTitle/UnderlinedTitle";
import { useTranslation } from "react-i18next";

export default function Contact(){
    const {i18n, t} = useTranslation('contact');
    const currentLanguage = i18n.language;

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

    return(
        <>
            <ParallaxSection isHalfHeight={true} img={'/menza-studio/assets/images/hero-section.jpg'}>
                <h1 style={{color: 'white'}} className="hero-content">{t('title')}</h1>
            </ParallaxSection>
            <Section isHalf={true}>
                <SectionContent centered={true}>
                    <div className="contact-section">
                        <div className="left">
                            <UnderlinedTitle><h3 style={{color:'white'}}>{t('subtitle')}</h3></UnderlinedTitle>
                        </div>
                        <div className="right">
                            <div className="contact-info" onClick={()=>window.location.href = 'mailto:example@example.com'}>
                                <div className="contacts">
                                    <p>Email</p>
                                </div>
                                <div className="contacts">
                                    <img alt="email" src="/menza-studio/assets/icons/email.svg"/>
                                </div>  
                            </div>
                            <div className="contact-info" onClick={() => copyToClipboard('+1234567890')}>
                                <div className="contacts">
                                    <p>Teléfono</p>
                                </div>
                                <div className="contacts">
                                    <img alt="email" src="/menza-studio/assets/icons/phone.svg"/>                                
                                </div>  
                            </div>
                            <div className="contact-info" onClick={()=> window.open('https://www.linkedin.com/company/sequeira-menza-abogados?trk=public_profile_topcard-current-company', '_blank')}>
                                <div className="contacts">
                                    <p>LinkedIn</p>
                                </div>
                                <div className="contacts">
                                    <img alt="email" src="/menza-studio/assets/icons/linkedin.svg"/>
                                </div>  
                            </div>
                        </div>
                    </div>
                </SectionContent>
            </Section>
        </>
    );
}