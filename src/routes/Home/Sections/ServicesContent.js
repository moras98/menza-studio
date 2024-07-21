import React from "react";
import UnderlinedTitle from "../../../components/UnderlinedTitle/UnderlinedTitle";
import ServicesGrid from "../../../components/ServicesGrid/ServicesGrid";
import { useTranslation } from "react-i18next";

export default function ServicesContent(){
    const {t} = useTranslation('home');
    return(
        <div>
            <UnderlinedTitle>
                <h3 style={{color: 'white'}}>{t('services_title')}</h3>
            </UnderlinedTitle>
            <ServicesGrid/>
        </div>
    );
}