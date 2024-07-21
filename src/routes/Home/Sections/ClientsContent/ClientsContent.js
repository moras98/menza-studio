import React from "react";
import './ClientsContent.css';
import UnderlinedTitle from "../../../../components/UnderlinedTitle/UnderlinedTitle";
import { useTranslation } from "react-i18next";

export default function ClientsContent(){
    const {t} = useTranslation('home');

    const clientsArr = [
        {name: 'cliente', src: '/menza-studio/assets/clients/facebook.jpg'},
        {name: 'cliente', src: '/menza-studio/assets/clients/nativa.jpg'},
        {name: 'cliente', src: '/menza-studio/assets/clients/facebook.jpg'},
        {name: 'cliente', src: '/menza-studio/assets/clients/nativa.jpg'},
        {name: 'cliente', src: '/menza-studio/assets/clients/facebook.jpg'},
        {name: 'cliente', src: '/menza-studio/assets/clients/nativa.jpg'},
        {name: 'cliente', src: '/menza-studio/assets/clients/facebook.jpg'},
        {name: 'cliente', src: '/menza-studio/assets/clients/nativa.jpg'},
    ];
    return(
        <div>
            <UnderlinedTitle>
                <h3>{t('clients_title')}</h3>
            </UnderlinedTitle>
            <div className="clients-carousel">
                <div className="clients-slide">
                    {clientsArr.map((client, idx) => <img key={idx} src={client.src} alt={client.name}/>)}
                </div>
                <div className="clients-slide">
                    {clientsArr.map((client, idx) => <img key={idx} src={client.src} alt={client.name}/>)}
                </div>
            </div>
        </div>
    );
}