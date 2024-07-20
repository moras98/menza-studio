import React from "react";
import './TeamMember.css';

export default function TeamMember({src, name, position, description, email, phone, linkedin}){
    return(
        <div className="team-member">
            <div className="picture">
                <img alt={name} src={src}/>
            </div>
            <div className="info">
                <div className="texts">
                    <h4>{name}, {position}</h4>
                    <p>{description}</p>
                </div>
                <div className="icons">
                    <img alt="email" src="/menza-studio/assets/icons/email.svg"/>
                    <img alt="phone" src="/menza-studio/assets/icons/phone.svg"/>
                    <img alt="linkedin" src="/menza-studio/assets/icons/linkedin.svg"/>
                </div>
            </div>
        </div>
    );
}