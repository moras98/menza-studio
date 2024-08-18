import React from "react";
import './Contact.css'
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import Section from "../../elements/Section/Section";
import SectionContent from "../../elements/SectionConrent/SectionContent";
import UnderlinedTitle from "../../components/UnderlinedTitle/UnderlinedTitle";
import { useTranslation } from "react-i18next";

export default function Contact(){
    const {t} = useTranslation('contact');
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
                            <div className="contact-info">
                                <div className="contacts">
                                    <p>Email</p>
                                </div>
                                <div className="contacts">
                                    <img alt="email" src="/menza-studio/assets/icons/email.svg"/>
                                    {/* <img alt="email" src="/menza-studio/assets/icons/phone.svg"/> */}
                                    {/* <img alt="email" src="/menza-studio/assets/icons/linkedin.svg"/> */}
                                </div>  
                            </div>
                            <div className="contact-info">
                                <div className="contacts">
                                    <p>Teléfono</p>
                                </div>
                                <div className="contacts">
                                    {/* <img alt="email" src="/menza-studio/assets/icons/email.svg"/> */}
                                    <img alt="email" src="/menza-studio/assets/icons/phone.svg"/>
                                    {/* <img alt="email" src="/menza-studio/assets/icons/linkedin.svg"/> */}
                                </div>  
                            </div>
                            <div className="contact-info">
                                <div className="contacts">
                                    <p>LinkedIn</p>
                                </div>
                                <div className="contacts">
                                    {/* <img alt="email" src="/menza-studio/assets/icons/email.svg"/> */}
                                    {/* <img alt="email" src="/menza-studio/assets/icons/phone.svg"/> */}
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