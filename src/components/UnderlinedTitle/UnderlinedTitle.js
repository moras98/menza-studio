import React from "react";
import './UnderlinedTitle.css';

export default function UnderlinedTitle({children}){
    return(
        <div className="underlined-title">
            {children}
        </div>
    );
}