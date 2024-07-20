import React from "react";
import './About.css';
import ParallaxSection from "../../elements/ParallaxSection/ParallaxSection";
import SectionContent from "../../elements/SectionConrent/SectionContent";
import UnderlinedTitle from "../../components/UnderlinedTitle/UnderlinedTitle";
import Section from "../../elements/Section/Section";
import TeamMember from "../../elements/TeamMember/TeamMember";

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
                                <h3>¿Qué buscamos?</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                        </div>
                    </div>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>¿Cómo trabajamos?</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                        </div>
                    </div>
                    <div className="about-information">
                        <div className="left">
                            <UnderlinedTitle>
                                <h3>¿Por qué eleginos?</h3>
                            </UnderlinedTitle>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                        </div>
                    </div>
                </SectionContent>
            </Section>
            <Section isHalf={true}>
                <SectionContent centered={true}>
                    <UnderlinedTitle><h3 style={{color: 'white'}}>Nuestro equipo</h3></UnderlinedTitle>
                    <p style={{color:'white', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                    <div className="team">
                        <TeamMember src={'/assets/images/donald_sims.png'} name={'Nombre Apellido'} position={'Profesión'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque.'} email={''} phone={''} linkedin={'https://www.linkedin.com'}/>
                        <TeamMember src={'/assets/images/donald_sims.png'} name={'Nombre Apellido'} position={'Profesión'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque.'} email={''} phone={''} linkedin={'https://www.linkedin.com'}/>
                    </div>
                </SectionContent>
            </Section>
        </>
    );
}