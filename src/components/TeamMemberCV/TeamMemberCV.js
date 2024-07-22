import React from "react";
import './TeamMember.css';

export default function TeamMemberCV({teamMember}){
    return(
        <div className="team-member-cv">
            <div className="left">
                {/* No es scrolleable */}
                {/* <img/> */}
                {/* <h4>Nombre</h4> */}
                {/* <h5>Profesion o puesto </>h5 */}
                {/* <div>Links</div> */}
            </div>
            <div className="right">
                {/* Contenido a la derecha scrolleable con experiencia */}
            </div>
        </div>
    );
}