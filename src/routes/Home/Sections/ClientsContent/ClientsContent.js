import React from "react";
import './ClientsContent.css';
import UnderlinedTitle from "../../../../components/UnderlinedTitle/UnderlinedTitle";
import { useTranslation } from "react-i18next";

export default function ClientsContent(){
    const {t} = useTranslation('home');

    // const clientsArr = [
    //     {name: 'cliente', src: '/menza-studio/assets/clients/facebook.jpg'},
    //     {name: 'cliente', src: '/menza-studio/assets/clients/nativa.jpg'},
    //     {name: 'cliente', src: '/menza-studio/assets/clients/facebook.jpg'},
    //     {name: 'cliente', src: '/menza-studio/assets/clients/nativa.jpg'},
    //     {name: 'cliente', src: '/menza-studio/assets/clients/facebook.jpg'},
    //     {name: 'cliente', src: '/menza-studio/assets/clients/nativa.jpg'},
    //     {name: 'cliente', src: '/menza-studio/assets/clients/facebook.jpg'},
    //     {name: 'cliente', src: '/menza-studio/assets/clients/nativa.jpg'},
    // ];

    const clientsArr = [
        {name: 'argencons', src: '/menza-studio/assets/clients/argencons.png'},
        {name: 'grapheno', src: '/menza-studio/assets/clients/grapheno.png'},
        {name: 'la-tahona', src: '/menza-studio/assets/clients/la-tahona.png'},
        {name: 'plantesia', src: '/menza-studio/assets/clients/plantesia.png'},
        {name: 'argencons', src: '/menza-studio/assets/clients/argencons.png'},
        {name: 'grapheno', src: '/menza-studio/assets/clients/grapheno.png'},
        {name: 'la-tahona', src: '/menza-studio/assets/clients/la-tahona.png'},
        {name: 'plantesia', src: '/menza-studio/assets/clients/plantesia.png'},
        {name: 'vladimir', src: '/menza-studio/assets/clients/vladimir.png'},
        {name: 'renmax', src: '/menza-studio/assets/clients/renmax.png'},
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