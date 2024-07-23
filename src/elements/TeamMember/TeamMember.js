import React, { useState } from "react";
import './TeamMember.css';
import Modal from "../Modal/Modal";
import TeamMemberCV from "../../components/TeamMemberCV/TeamMemberCV";

export default function TeamMember({member}){

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
                    <img alt={member.name} src={member.src}/>
                </div>
                <div className="info">
                    <div className="texts">
                        <h4>{member.name}</h4>
                        <h5 style={{color:'gray', fontWeight:'300'}}>{member.position}</h5>
                        {/* <p>{member.description}</p> */}
                    </div>
                    {/* <div className="icons">
                        <img alt="email" src="/menza-studio/assets/icons/email.svg"/>
                        <img alt="phone" src="/menza-studio/assets/icons/phone.svg"/>
                        <img alt="linkedin" src="/menza-studio/assets/icons/linkedin.svg"/>
                    </div> */}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <TeamMemberCV teamMember={member}/>
            </Modal>
        </>
    );
}