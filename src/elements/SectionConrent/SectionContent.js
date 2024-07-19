import React from "react";
import './SectionContent.css';

export default function SectionContent({ children, centered }) {
    const sectionContentStyle = {
        justifyContent: centered ? 'center' : 'flex-start'
    };

    return (
        <div className="section-content" style={sectionContentStyle}>
            {children}
        </div>
    );
}
