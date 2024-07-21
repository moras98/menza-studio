import React from "react";
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import SectionContent from "../../elements/SectionConrent/SectionContent";
import UnderlinedTitle from "../../components/UnderlinedTitle/UnderlinedTitle";
import Section from "../../elements/Section/Section";
import { useTranslation } from "react-i18next";
import { services_es, services_en } from "../../services/services";

export default function Services (){
    const {i18n, t} = useTranslation('services');
    const currentLanguage = i18n.language;
    const services = currentLanguage === 'es' ? services_es : services_en;

    return(
        <>
            <ParallaxSection isHalfHeight={true} img={'/menza-studio/assets/images/hero-section.jpg'}>
                <h1 style={{color: 'white'}} className="hero-content">{t('title')}</h1>
            </ParallaxSection>
            <Section backgroundColor={'white'}>
                <SectionContent>
                    <div id="1" className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>{services[0].name}</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>{services[0].fullText}</p>
                        </div>
                    </div>
                    <div id="2" className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>{services[1].name}</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>{services[1].fullText}</p>
                        </div>
                    </div>
                    <div id="3" className="about-information">
                        <div className="left">
                                <UnderlinedTitle>
                                    <h3>{services[2].name}</h3>
                                </UnderlinedTitle>
                            </div>
                            <div className="right">
                                <p>{services[2].fullText}</p>
                        </div>
                    </div>
                    <div id="4" className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>{services[3].name}</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                                <p>{services[3].fullText}</p>
                        </div>
                    </div>
                    <div id="5" className="about-information">
                         <div className="left">
                            <UnderlinedTitle>
                                <h3>{services[4].name}</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>{services[4].fullText}</p>
                        </div>
                    </div>
                    <div id="6" className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>{services[5].name}</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>{services[5].fullText}</p>
                        </div>
                    </div>
                </SectionContent>
            </Section>
        </>
    );
}