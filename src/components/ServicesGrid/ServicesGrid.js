import React from "react";
import ServicesElement from "./ServicesElement.js";
import './ServicesGrid.css';
import { useTranslation } from "react-i18next";
import { services_es, services_en } from "../../services/services.js";

export default function ServicesGrid(){
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const services = currentLanguage === 'es' ? services_es : services_en;

    return(
        <div className="services-grid">
            {services.map((e, idx)=><ServicesElement key={idx} title={e.name} text={e.description} path={e.path}/>)}
        </div>
    );
}