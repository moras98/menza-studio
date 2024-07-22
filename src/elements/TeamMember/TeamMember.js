import React, { useState } from "react";
import './TeamMember.css';
import Modal from "../Modal/Modal";

export default function TeamMember({src, name, position, description, email, phone, linkedin}){

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return(
        <>
            <div className="team-member" onClick={openModal}>
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
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                
            </Modal>
        </>
    );
}