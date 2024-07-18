import React from "react";

export default function UnderlinedTitle({children}){
    return(
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5vh'
        }}>
            {children}
            <Underline/>
        </div>
    );
}


function Underline() {
    return(
        <div style={{
            display: 'flex',
            width: '50%',
            height: '3px',
            backgroundColor: 'blue'
        }}></div>
    );
}