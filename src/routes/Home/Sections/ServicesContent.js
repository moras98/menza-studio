import React from "react";
import UnderlinedTitle from "../../../components/UnderlinedTitle/UnderlinedTitle";
import ServicesGrid from "../../../components/ServicesGrid/ServicesGrid";

export default function ServicesContent(){
    return(
        <div>
            <UnderlinedTitle>
                <h3 style={{color: 'white'}}>Nuestros Servicios</h3>
            </UnderlinedTitle>
            <ServicesGrid/>
        </div>
    );
}