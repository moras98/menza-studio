import React from "react";

export default function Filter({isBlue}){
    return(
        <div style={{
            position: 'absolute',
            display: 'flex',
            width: '100%',
            minHeight: '100%',
            zIndex: 1,
            opacity: 0.8,
            backgroundImage: isBlue ? 'linear-gradient(to right, #001233ff, #023e7dff)': '',
            backgroundColor: isBlue ? '' : '#d6d6d6ff'
        }}></div>
    );
}