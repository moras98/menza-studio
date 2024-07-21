import React from "react";
import './About.css';
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import SectionContent from "../../elements/SectionConrent/SectionContent";
import UnderlinedTitle from "../../components/UnderlinedTitle/UnderlinedTitle";
import Section from "../../elements/Section/Section";
import TeamMember from "../../elements/TeamMember/TeamMember";
import { useTranslation } from "react-i18next";

export default function About (){
    const {t} = useTranslation('about');

    return(
        <>
            <ParallaxSection isHalfHeight={true} img={'/menza-studio/assets/images/hero-section.jpg'}>
                <h1 style={{color: 'white'}} className="hero-content">{t('title')}</h1>
            </ParallaxSection>
            <Section backgroundColor={'white'}>
                <SectionContent>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>{t('subtitle1')}</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>{t('text1')}</p>
                        </div>
                    </div>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>{t('subtitle2')}</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>{t('text2')}</p>
                        </div>
                    </div>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>{t('subtitle3')}</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>{t('text3')}</p>
                        </div>
                    </div>
                </SectionContent>
            </Section>
            <Section isHalf={true}>
                <SectionContent centered={true}>
                    <UnderlinedTitle><h3 style={{color: 'white'}}>{t('subtitle4')}</h3></UnderlinedTitle>
                    <p style={{color:'white', textAlign: 'center'}}>{t('text4')}</p>
                    <div className="team">
                        <TeamMember src={'/menza-studio/assets/images/donald_sims.png'} name={'Nombre Apellido'} position={'Profesión'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque.'} email={''} phone={''} linkedin={'https://www.linkedin.com'}/>
                        <TeamMember src={'/menza-studio/assets/images/donald_sims.png'} name={'Nombre Apellido'} position={'Profesión'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque.'} email={''} phone={''} linkedin={'https://www.linkedin.com'}/>
                    </div>
                </SectionContent>
            </Section>
        </>
    );
}