import React from "react";
import './Section.css';

export default function Section({ backgroundColor, backgroundImage, isHalf, children }) {
    const sectionClasses = `section ${isHalf ? 'half-section' : 'full-section'}`;

    const style = {
        backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        minHeight: isHalf ? '50vh' : '100vh',
    };

    return (
        <div className={sectionClasses} style={style}>
            {children}
        </div>
    );
}
