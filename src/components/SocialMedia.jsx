import React from 'react';

function SocialMedia() {
    return (
        <div id="social-media">
            {/* Discord */}
            <a className="social-button" href="https://discord.gg/m9hVVajQU3" target="_blank" rel="noopener noreferrer" role="button">
                <i className="fa-brands fa-discord"></i>
            </a>
            {/* LinkedIn */}
            <a className="social-button" href="https://www.linkedin.com/company/quest-of-life/" target="_blank" rel="noopener noreferrer" role="button">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            {/* Email */}
            <a className="social-button" href="mailto:info@questoflife.org" role="button">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </div>
    );
}

export default SocialMedia;