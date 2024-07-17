import React from "react";
import ParallaxSection from "../elements/ParallaxSection";
import Button from "../elements/Button/Button";
import '../animations.css';
import SectionContent from "../elements/SectionContent";
import Section from "../elements/Section";
import Filter from "../elements/Filter";

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
        </>
    );
}

function HeroContent(){

    const heroContentStyle = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        animation: 'fadeInLeft 2s ease-out'
    }

    const buttonsDivStyle = {
        marginTop: '2vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '2vh',
    }

    return(
        <div style={heroContentStyle}>
            <h1 style={{color:'white'}}>TEXTO DE EJEMPLO 1</h1>
            <h2 style={{color: "#979dacff"}}>TEXTO DE EJEMPLO 2</h2>
            <div style={buttonsDivStyle}>
                <Button text={'CONTACTO'} path={'/'} isFilled={true}/>
                <Button text={'SABER MÁS'} path={'/'} isFilled={false}/>
            </div>
        </div>
    );
}

function AboutContent(){

    const containerSyle = {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '16px',
        width: '100%',
        minHeight: '50vh',
        backgroundColor: 'white',
        overflow: 'hidden',
        boxShadow: '4px 4px 4px 2px rgba(0, 0, 0, 0.2)',
    }

    const leftStyle = {
        display: 'flex',
        flex: 1,
        backgroundImage: `url('./assets/images/about-content.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const rightStyle = {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        gap: '1vw'
    }

    const leftFilter = {
        borderRadius: '16px 0 0 16px',
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(to right, #001233ff, #023e7dff)',
        width: '100%',
        opacity: '0.8'
    }

    return(
        <div style={containerSyle}>
            <div style={leftStyle}>
                <div style={leftFilter}></div>
            </div>
            <div style={rightStyle}></div>
        </div>
    );
}