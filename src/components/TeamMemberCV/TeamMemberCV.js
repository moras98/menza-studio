import React from "react";
import "./TeamMemberCV.css";
import { useTranslation } from "react-i18next";

export default function TeamMemberCV({ teamMember }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            currentLanguage === 'es' ? alert('Teléfono copiado!') : alert('Phone copied!');
        })
        .catch((err) => {
            console.error('Error al copiar al portapapeles: ', err);
        });
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    copyToClipboard(phone);
  };

  return (
    <div className="team-member-cv">
      <div className="left">
        <div className="img-container">
          <img alt={teamMember.name} src={teamMember.src} />
        </div>
        <div>
          <h4>{teamMember.name}</h4>
          <h5>{teamMember.position}</h5>
          <div className="links">
            <img 
              alt="email logo" 
              src="/menza-studio/assets/icons/email.svg" 
              onClick={() => handleEmailClick(teamMember.email)} 
            />
            <img 
              alt="phone logo" 
              src="/menza-studio/assets/icons/phone.svg" 
              onClick={() => handlePhoneClick(teamMember.phone)} // Asegúrate de que teamMember.phone esté definido
            />
            <img 
              alt="linkedin logo" 
              src="/menza-studio/assets/icons/linkedin.svg" 
              onClick={() => window.open(teamMember.linkedin, '_blank')} // Añadido para manejar el clic en LinkedIn
            />
          </div>
          <p className="curriculum-link">
            {currentLanguage === "es"
              ? "Currículum Completo"
              : "Complete Curriculum"}
          </p>
        </div>
      </div>
      <div className="right">
        <h4>{teamMember.description}</h4>
      </div>
    </div>
  );
}
