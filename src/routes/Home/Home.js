import React from "react";
import ParallaxSection from "../../elements/ParallaxSection";
import SectionContent from "../../elements/SectionContent";
import Section from "../../elements/Section";
import Filter from "../../elements/Filter";
import HeroContent from "./Sections/HeroContent";
import AboutContent from "./Sections/AboutContent";
import ServicesContent from "./Sections/ServicesContent";
import ClientsContent from "./Sections/ClientsContent";
import ContactContent from "./Sections/ContactContent";

export default function Home (){
    return(
        <>
            {/* HERO SECTION */}
            <ParallaxSection img={'./assets/images/hero-section.jpg'} isHalfHeight={false}>
                <HeroContent/>
            </ParallaxSection>
            {/* ABOUT SECTION */}
            <Section backgroundImage={`url('./assets/images/about-section.jpg')`}>
                <SectionContent centered={true}>
                    <AboutContent/>
                </SectionContent>
                <Filter isBlue={false}/>
            </Section>
            {/* SERVICES SECTION */}
            <Section>
                <SectionContent centered={true}>
                    <ServicesContent/>
                </SectionContent>
            </Section>
            {/* CLIENTS SECTION */}
            <Section>
                <SectionContent centered={true}>
                    <ClientsContent/>
                </SectionContent>
            </Section>
            {/* CONTACT SECTION */}
            <Section>
                <SectionContent centered={true}>
                    <ContactContent/>
                </SectionContent>
            </Section>
        </>
    );
}