import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAbutton';

function Services() {
    return (
        <div className="page-content">
            <Header />

            <main className="page-body">
                <TitleSection />
                <ServicesDetails />
                <MotivationSection />
                <MoreInfoSection />
            </main>

            <Footer />
        </div>
    );
}

// Sub-components
const TitleSection = () => (
    <div id="services-title-section" className="section page-title-section">
        <div className="section-content-column">
            <div className="mycard clear-mycard centred-mycard">
                <div className="tagline-title">Services</div>
            </div>
        </div>
        <div id="services-title-diagonal-strip"></div>
    </div>
);

const ServicesDetails = () => {
    const groupCoachingItems = [
        { title: 'Up to 7 Members', content: 'Each group consists of up to 7 members...' },
        { title: '1-2 Facilitators', content: 'Most of our groups are run by 2 facilitators...' },
        // Add other items
    ];

    const coachingItems = [
        { title: '50 Mins', content: 'The standard 1-1 session lasts for 50 minutes...' },
        // Add other items
    ];

    return (
        <div id="services-summary-section" className="section page-title-section">
            <div className="section-content-column">
                <ServiceCard
                    title="Support Groups"
                    icon="fa-users"
                    price="Pay What You Want"
                    items={groupCoachingItems}
                    bestFor={['Improving Social Skills', 'Feeling Less Alone', 'Developing Confidence']}
                />

                <ServiceCard
                    title="1-on-1 Coaching"
                    icon="fa-user"
                    price="£50 / 50mins"
                    items={coachingItems}
                    bestFor={['Focused Self-Discovery', 'Getting Unstuck', 'Faster Progress']}
                />
            </div>
        </div>
    );
};

const ServiceCard = ({ title, icon, price, items, bestFor }) => (
    <div className="mycard bg-mycard">
        <div className="mycard-content">
            <div className="mycard-content-block">
                <div className="mycard-title-group">
                    <div className="mycard-title">
                        <i className={`fa fa-solid ${icon}`}></i> {title}
                    </div>
                    <div className="mycard-title price">
                        <span className="highlight-text-green">{price}</span>
                    </div>
                </div>

                <div className="service-meta-dropdown-group">
                    {items.map((item, index) => (
                        <CollapsibleItem key={index} title={item.title} content={item.content} />
                    ))}
                </div>

                <div className="small-mycard-text">Our groups are great for</div>
                <div className="best-for-group">
                    {bestFor.map((item, index) => (
                        <div key={index} className="best-for-card">{item}</div>
                    ))}
                </div>

                <div className="service-buttons">
                    <CTAButton className="info-button" href="#services-details-section" text="More Info" />
                    <CTAButton href="https://discord.gg/m9hVVajQU3" text="Sign Up" />
                </div>
            </div>
        </div>
    </div>
);

const CollapsibleItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="service-meta-dropdown">
            <button type="button" className={`collapsible heavy-text ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && (
                <div className="content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

const MotivationSection = () => (
    <div id="motivation-section" className="section page-title-section">
        <div className="section-content-column">
            <div className="mycard clear-mycard">
                <div className="mycard-content-block">
                    <p className="medium-mycard-text heavy-text">Motivation should be effortless.</p>
                    {/* Add remaining content */}
                    <CTAButton
                        href="https://discord.gg/m9hVVajQU3"
                        icon="fa-brands fa-discord"
                        text="Join the Community"
                    />
                </div>
            </div>
        </div>
    </div>
);

const MoreInfoSection = () => {
    const [openSection, setOpenSection] = useState(null);

    const sections = [
        {
            title: 'Facilitated Peer Support Groups',
            content: {/* JSX content */}
        },
        {
            title: '1-on-1 Coaching',
            content: {/* JSX content */}
        }
    ];

    return (
        <div id="services-details-section" className="section page-title-section">
            <div className="section-content-column">
                <div className="mycard clear-mycard">
                    <div className="section-title">More Info</div>
                    <div className="mycard-content-block">
                        {sections.map((section, index) => (
                            <div key={index}>
                                <button
                                    type="button"
                                    className={`collapsible ${openSection === index ? 'active' : ''}`}
                                    onClick={() => setOpenSection(openSection === index ? null : index)}
                                >
                                    {section.title}
                                </button>
                                {openSection === index && (
                                    <div className="content">
                                        {section.content}
                                    </div>
                                )}
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;