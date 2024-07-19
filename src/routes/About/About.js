import React from "react";
import './About.css';
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import SectionContent from "../../elements/SectionConrent/SectionContent";
import UnderlinedTitle from "../../components/UnderlinedTitle/UnderlinedTitle";
import Section from "../../elements/Section/Section";

export default function About (){
    return(
        <>
            <ParallaxSection isHalfHeight={true} img={'./assets/images/hero-section.jpg'}>
                <h1 style={{color: 'white'}} className="hero-content">Sobre Nosotros</h1>
            </ParallaxSection>
            <Section backgroundColor={'white'}>
                <SectionContent>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>TEXTO DE EJEMPLO</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                        </div>
                    </div>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>TEXTO DE EJEMPLO</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                        </div>
                    </div>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>TEXTO DE EJEMPLO</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                        </div>
                    </div>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>TEXTO DE EJEMPLO</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                        </div>
                    </div>
                </SectionContent>
            </Section>
        </>
    );
}