import React from 'react';

function FooterCTAButtons() {
    return (
        <div className="footer-cta-buttons">
            <a id="footer-join-button" className="cta-button footer-button" href="https://discord.gg/m9hVVajQU3" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-discord"></i> Join the Community
            </a>
            <a id="footer-support-us-button" className="cta-button footer-button" href="../support_us.html">
                <i className="fa-solid fa-hand-holding-heart"></i> Support Us
            </a>
        </div>
    );
}

export default FooterCTAButtons;