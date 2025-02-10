import React from 'react';
import FooterCTAButtons from './FooterCTAButtons';
import SocialMedia from './SocialMedia';
import AdminLinks from './AdminLinks';
import CopyrightNotice from './CopyrightNotice';

function Footer() {
    return (
        <div className="page-footer">
            <div id="footer-columns">
                <FooterCTAButtons />
                <hr />
                <SocialMedia />
            </div>
            <AdminLinks />
            <CopyrightNotice />
        </div>
    );
}

export default Footer;