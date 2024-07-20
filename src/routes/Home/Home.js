import React from "react";
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import SectionContent from "../../elements/SectionConrent/SectionContent";
import Section from "../../elements/Section/Section";
import Filter from "../../elements/Filter/Filter";
import HeroContent from "./Sections/HeroContent/HeroContent";
import AboutContent from "./Sections/AboutContent/AboutContent";
import ServicesContent from "./Sections/ServicesContent";
import ClientsContent from "./Sections/ClientsContent/ClientsContent";
import ContactContent from "./Sections/ContactContent/ContactContent";

export default function Home(){
    return(
        <>
            {/* HERO SECTION */}
            <ParallaxSection img={'/menza-studio/assets/images/hero-section.jpg'} isHalfHeight={false}>
                <HeroContent/>
            </ParallaxSection>
            {/* ABOUT SECTION */}
            <Section backgroundImage={'/menza-studio/assets/images/about-section.jpg'}>
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
            <Section backgroundColor={'white'} isHalf={true}>
                <SectionContent centered={true}>
                    <ClientsContent/>
                </SectionContent>
            </Section>
            {/* CONTACT SECTION */}
            <Section isHalf={true}>
                <SectionContent centered={true}>
                    <ContactContent/>
                </SectionContent>
            </Section>
        </>
    );
}