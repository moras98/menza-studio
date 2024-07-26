import React from "react";
import './TeamMemberCV.css';
import { useTranslation } from "react-i18next";

export default function TeamMemberCV({teamMember}){
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language;
    return(
        <div className="team-member-cv">
            <div className="left">
                <div className='img-container'>
                    <img alt={teamMember.name} src={teamMember.src}/>
                </div>
                <h4>{teamMember.name}</h4>
                <h5>{teamMember.position}</h5>
                <div className="links">
                    <img alt="email logo" src="/menza-studio/assets/icons/email.svg"/>
                    <img alt="phone logo" src="/menza-studio/assets/icons/phone.svg"/>
                    <img alt="linkedin logo" src="/menza-studio/assets/icons/linkedin.svg"/>
                </div>
                <p className="curriculum-link">{currentLanguage === 'es'? 'Currículum Completo' : 'Complete Curriculum'}</p>
            </div>
            <div className="right">
                {/* Contenido a la derecha scrolleable con experiencia */}
                <p>{teamMember.description}</p>
                {teamMember.cv.map((e, idx)=> <CVRow row={e} key={idx}/>)}
            </div>
        </div>
    );
}


function CVRow({row}){
    return(
        <div className="cv-row">
            <h5>{row.title}</h5>
            <p>{row.description}</p>
        </div>
    );
}