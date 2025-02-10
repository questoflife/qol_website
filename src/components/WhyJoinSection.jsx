import React from 'react';
import CTAButton from './CTAButton';

function WhyJoinSection() {
    const benefits = [
        { id: 'meaningful-relationships', icon: 'fa-solid fa-handshake', label: 'Relationships', quote: '"I feel more empathetic towards people and people\'s response to me has improved."' },
        { id: 'communication-skills', icon: 'fa-solid fa-comment', label: 'Communication Skills', quote: '"I learned to assert more boundaries and I to trust myself in making decisions on who to trust."' },
        // Add other benefits here...
    ];

    return (
        <div id="why-join-section" className="section">
            <div className="section-content-column">
                <div className="section-title">Why Join?</div>
                <div className="mycard clear-mycard">
                    <div className="mycard-content">
                        <div className="mycard-content-block">
                            <div className="centred-mycard medium-mycard-text">
                                Participants report <span className="heavy-text">improvements</span> across different areas of their lives
                            </div>
                        </div>
                        <div className="mycard-content-block">
                            <div id="benefit-grid-container">
                                <div className="grid-of-cards">
                                    {benefits.map((benefit) => (
                                        <div key={benefit.id} id={`benefit-card-${benefit.id}`} className="grid-item">
                                            <div className="grid-icon">
                                                <i className={`${benefit.icon} fa-2xl`}></i>
                                            </div>
                                            <div className="grid-label">{benefit.label}</div>
                                            <div className="grid-quote">{benefit.quote}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p id="challenges-text" className="centred-mycard medium-mycard-text">
                                No matter what challenges you’re facing, <br />
                                <span className="heavy-text">you are not alone</span>
                            </p>
                            <p className="centred-mycard small-mycard-text">
                                **Our groups are run by volunteers with no formal training in coaching/therapy. We don't treat, diagnose or offer any kind of medical advice.
                            </p>
                        </div>
                        <CTAButton href="https://discord.gg/m9hVVajQU3" icon="fa-brands fa-discord" text="Join the Community" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyJoinSection;