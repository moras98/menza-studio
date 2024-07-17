import React from "react";

export default function SectionContent({children, centered}){
    return(
        <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            alignItems: 'center',
            justifyContent: centered ? 'center' : 'flex-start'
        }}>
            {children}
        </div>
    );
}