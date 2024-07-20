import React from "react";
import './Contact.css'
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import Section from "../../elements/Section/Section";
import SectionContent from "../../elements/SectionConrent/SectionContent";

export default function Contact(){
    return(
        <>
            <ParallaxSection isHalfHeight={true} img={'./assets/images/hero-section.jpg'}>
                <h1 style={{color: 'white'}} className="hero-content">Contacto</h1>
            </ParallaxSection>
            <Section>
                <SectionContent></SectionContent>
            </Section>
        </>
    );
}