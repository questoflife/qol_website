import React from 'react';
import CTAButton from './CTAButton';

function InfoSection() {
    return (
        <div id="info-section" className="section">
            <div className="section-content-column">
                <div className="col-2">
                    <div className="mycard bg-mycard">
                        <div className="mycard-content">
                            <div className="mycard-content-block">
                                <div className="mycard-title background title-group">Level Up Together</div>
                                <p>
                                    Life is supposed to be played co-op. Our groups provide a safe and supportive space in which you'll get to know yourself better, level up your communication skills, build meaningful connections with others in your group, and help each other get unstuck and move towards your goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mycard bg-mycard">
                        <div className="mycard-content">
                            <div className="mycard-content-block">
                                <div className="mycard-title background title-group">With People Who Care</div>
                                <p>
                                    We're a <span className="heavy-text">not-for-profit</span> community interest company powered by donations.
                                </p>
                                <p>
                                    Our groups are run by an amazing team of volunteers, many of which started as members in our groups and now want to give back to the community.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mycard bg-mycard">
                        <div className="mycard-content">
                            <div className="mycard-content-block">
                                <div className="mycard-title background title-group">Anywhere in the World</div>
                                <p>We meet online on Discord and have members from 30+ countries.</p>
                            </div>
                        </div>
                    </div>
                    <CTAButton href="https://discord.gg/m9hVVajQU3" icon="fa-brands fa-discord" text="Join the Community" />
                </div>
            </div>
        </div>
    );
}

export default InfoSection;