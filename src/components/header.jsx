import React, { useState, useEffect } from 'react';

const Header = () => {
    // State to determine if the header/navbar is in responsive (mobile) mode
    const [responsive, setResponsive] = useState(false);

    // Handler to toggle the responsive mode
    const handleResponsiveNavbar = (e) => {
        e.preventDefault();
        setResponsive((prevResponsive) => !prevResponsive);
    };

    // Helper function to detect a mobile user agent
    const isMobileUserAgent = () => {
        let isMobileUA = false;
        let isTouchDevice = false;
        let isCoarsePointer = false;
        try {
            isMobileUA = /Mobi|Android/i.test(navigator.userAgent);
        } catch (e) {
            console.log(e);
        }
        try {
            isTouchDevice = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;
        } catch (e) {
            console.log(e);
        }
        try {
            isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
        } catch (e) {
            console.log(e);
        }
        return isMobileUA || isTouchDevice || isCoarsePointer;
    };

    // On mount, if not a mobile device, ensure the header/navbar is not in responsive mode
    useEffect(() => {
        if (!isMobileUserAgent()) {
            setResponsive(false);
        }
    }, []);

    // Compute class names based on the responsive state
    const headerClassName = `page-header${responsive ? ' responsive' : ''}`;
    const navbarClassName = `mynavbar${responsive ? ' responsive' : ''}`;
    const iconClassName = responsive ? 'fa fa-times' : 'fa fa-bars';

    return (
        <div id="page-header" className={headerClassName}>
            <div id="header-mynavbar" className={navbarClassName}>
                {/* LHS / Top Line Block with company branding and menu icon */}
                <div id="header-company-branding-and-hamburger">
                    <a id="header-company-branding-block" href="index.html">
                        <img
                            id="header-company-logo"
                            src="src/images/gecko_big_circle.png"
                            alt="Quest of Life logo - a blue crawling around a crescent moon"
                        />
                        <div id="header-company-name">QUEST OF LIFE</div>
                    </a>
                    {/* Menu Hamburger Button */}
                    <a
                        id="toggle-menu"
                        className="mynavbar-hamburger"
                        href="#"
                        onClick={handleResponsiveNavbar}
                    >
                        <i id="menu-icon" className={iconClassName}></i>
                    </a>
                </div>

                {/* Menu Buttons */}
                <div id="header-menu-buttons">
                    <a className="menu-button" href="about_us.html">
                        About Us
                    </a>
                    <a className="menu-button" href="services.html">
                        Our Services
                    </a>
                    {/*
          <a className="menu-button" href="training.html">
            Training
          </a>
          */}
                    <a className="menu-button" href="support_us.html">
                        Support Us
                    </a>
                </div>

                <div id="header-space-filler"></div>

                {/* Join Button */}
                <a
                    id="mynavbar-join-button"
                    className="cta-button header-button"
                    href="https://discord.gg/m9hVVajQU3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-discord"></i>
                    <div id="mynavbar-button-text-group">
                        Join <span id="hideable-cta-button-text">the Community</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Header;
