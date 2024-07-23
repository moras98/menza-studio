import React from "react";
import './TeamMemberCV.css';

export default function TeamMemberCV({teamMember}){
    return(
        <div className="team-member-cv">
            <div className="left">
                <div className='img-container'>
                    <img alt={teamMember.name} src={teamMember.src}/>
                </div>
                <h4>{teamMember.name}</h4>
                <h5>{teamMember.position}</h5>
                <div>Links</div>
            </div>
            <div className="right">
                {/* Contenido a la derecha scrolleable con experiencia */}
            </div>
        </div>
    );
}