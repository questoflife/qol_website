import React from 'react';

function CTAButton({ href, icon, text, className = '' }) {
    return (
        <a className={`cta-button ${className}`} href={href} target="_blank" rel="noopener noreferrer">
            {icon && <i className={icon}></i>} {text}
        </a>
    );
}

export default CTAButton;