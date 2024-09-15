import React from "react";
import './About.css';
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import SectionContent from "../../elements/SectionConrent/SectionContent";
import UnderlinedTitle from "../../components/UnderlinedTitle/UnderlinedTitle";
import Section from "../../elements/Section/Section";
import TeamMember from "../../elements/TeamMember/TeamMember";
import { useTranslation } from "react-i18next";
import { members } from "./team-members";

export default function About (){
    const {t, i18n} = useTranslation('about');
    const currentLanguage = i18n.language;
    const currentMembers = members[currentLanguage]

    return(
        <>
            <ParallaxSection isHalfHeight={true} img={'/menza-studio/assets/images/hero-section.jpg'}>
                <h1 style={{color: 'white'}} className="hero-content">{t('title')}</h1>
            </ParallaxSection>
            <Section backgroundColor={'white'} isHalf={true}>
                <SectionContent>
                    <div className="about-information">
                        {/* <div className="left">
                            <UnderlinedTitle>
                                <h3>{t('subtitle1')}</h3>
                            </UnderlinedTitle>
                        </div> */}
                        <div className="right">
                            <h5 style={{textAlign: 'center', fontWeight: 400, color: '#5c677dff'}}>{t('text1')}</h5>
                        </div>
                    </div>
                    <div className="about-information">
                        {/* <div className="left">
                            <UnderlinedTitle>
                                <h3>{t('subtitle2')}</h3>
                            </UnderlinedTitle>
                        </div> */}
                        <div className="right">
                            <h5 style={{textAlign: 'center', fontWeight: 400, color: '#5c677dff'}}>{t('text2')}</h5>
                        </div>
                    </div>
                    <div className="about-information">
                        {/* <div className="left">
                            <UnderlinedTitle>
                                <h3>{t('subtitle3')}</h3>
                            </UnderlinedTitle>
                        </div> */}
                        <div className="right">
                            <h5 style={{textAlign: 'center', fontWeight: 400, color: '#5c677dff'}}>{t('text3')}</h5>
                        </div>
                    </div>
                </SectionContent>
            </Section>
            <Section isHalf={true}>
                <SectionContent centered={true}>
                    <UnderlinedTitle><h3 style={{color: 'white'}}>{t('subtitle4')}</h3></UnderlinedTitle>
                    {/* <p style={{color:'white', textAlign: 'center'}}>{t('text4')}</p> */}
                    <div className="team">
                        {currentMembers.map((e, idx)=><TeamMember key={idx} member={e}/>)}
                    </div>
                </SectionContent>
            </Section>
        </>
    );
}