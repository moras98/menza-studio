import React from "react";
import ParallaxSection from "../../elements/ParallaxSection";
import SectionContent from "../../elements/SectionContent";
import Section from "../../elements/Section";
import Filter from "../../elements/Filter";
import HeroContent from "./Sections/HeroContent";
import AboutContent from "./Sections/AboutContent";
import ServicesContent from "./Sections/ServicesContent";

export default function Home (){
    return(
        <>
        <ParallaxSection img={'./assets/images/hero-section.jpg'} isHalfHeight={false}>
            <HeroContent/>
        </ParallaxSection>
        <Section backgroundImage={`url('./assets/images/about-section.jpg')`}>
            <SectionContent centered={true}>
                <AboutContent/>
            </SectionContent>
            <Filter isBlue={false}/>
        </Section>
        <Section>
            <SectionContent centered={true}>
                <ServicesContent/>
            </SectionContent>
        </Section>
        </>
    );
}