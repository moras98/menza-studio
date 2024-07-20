import React from "react";
import UnderlinedTitle from "../../../../components/UnderlinedTitle/UnderlinedTitle";
import ItalicButton from "../../../../elements/ItalicButton/ItalicButton";
import './AboutContent.css';

export default function AboutContent (){

    const leftStyle = {
        backgroundImage: `url('/menza-studio/assets/images/about-content.jpg')`,
    }

    return(
        <div className="about-content">
            <div style={leftStyle} className="left">
                <div className="left-filter"></div>
            </div>
            <div className="right">
                <UnderlinedTitle>
                    <h3>Sobre Nosotros</h3>
                </UnderlinedTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                <ItalicButton string={'Saber más ->'} path={'/menza-studio/sobre-nosotros'}/>
            </div>
        </div>
    );
}