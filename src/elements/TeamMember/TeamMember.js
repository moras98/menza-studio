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
                    <h3>{name}, {position}</h3>
                    <p>{description}</p>
                </div>
                <div className="icons">
                    <img alt="email" src="/assets/icons/email.svg"/>
                    <img alt="phone" src="/assets/icons/phone.svg"/>
                    <img alt="linkedin" src="/assets/icons/linkedin.svg"/>
                </div>
            </div>
        </div>
    );
}