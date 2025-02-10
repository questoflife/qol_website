import React from 'react';

function CopyrightNotice() {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="copyright-notice">
                Copyright © {currentYear} Quest of Life CIC. All rights reserved.
            </div>
            <div className="copyright-notice">
                Icons provided by <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font Awesome</a> under{' '}
                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
            </div>
            <div className="copyright-notice">
                Photo by <a href="https://unsplash.com/@lianayoung" target="_blank" rel="noopener noreferrer">Liana Young</a> on{' '}
                <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
            </div>
        </div>
    );
}

export default CopyrightNotice;