import React from "react";

export default function Body({children}){
    const style = {
        with: '100%',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, #001233ff, #023e7dff)'
    }
    return(
        <div style={style}>
            {children}
        </div>
    );
}