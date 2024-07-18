import React from "react";
import UnderlinedTitle from "../../../components/UnderlinedTitle";
import ItalicButton from "../../../elements/ItalicButton/ItalicButton";

export default function AboutContent (){
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
        gap: '1vw',
        padding: '1vw'
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
            <div style={rightStyle}>
                <UnderlinedTitle>
                    <h3>Sobre Nosotros</h3>
                </UnderlinedTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh ut risus luctus pellentesque. Maecenas luctus eu eros at molestie. Etiam pharetra nisi hendrerit dapibus faucibus. Integer faucibus magna risus. Fusce a dolor ac nulla efficitur gravida ut et felis. Nam consectetur eget ligula eu commodo. Nunc blandit a elit id viverra. Nunc eget urna quam.Nunc tempus pulvinar massa a aliquet. Praesent faucibus lectus eu sapien scelerisque tempor. Sed aliquam, neque vitae ultricies aliquet, massa turpis pharetra eros, a bibendum turpis neque sit amet sem. Sed convallis semper lacus, et varius nulla pretium sit amet. Integer vel magna ligula. Pellentesque tincidunt dapibus ligula quis eleifend. In efficitur venenatis orci, non venenatis orci iaculis in. Curabitur ultrices quis neque id scelerisque. Nam in pharetra elit.</p>
                <ItalicButton string={'Saber más ->'} path={'/'}/>
            </div>
        </div>
    );
}