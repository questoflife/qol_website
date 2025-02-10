import React from 'react';
import CTAButton from './CTAButton';

function ServicesSection() {
    const services = [
        {
            id: 'group-coaching',
            icon: 'fa fa-solid fa-users',
            title: 'Support Groups',
            price: 'Pay What You Want',
            description: 'Our groups are great for improving social skills, feeling less alone, developing confidence, and understanding yourself.',
            bestFor: ['Improving Social Skills', 'Feeling Less Alone', 'Developing Confidence', 'Understanding Yourself'],
            buttons: [
                { text: 'More Info', href: '../services.html#services-details-section', className: 'info-button' },
                { text: 'Sign Up', href: 'https://discord.gg/m9hVVajQU3' },
            ],
        },
        // Add other services here...
    ];

    return (
        <div id="services-section" className="section">
            <div className="section-title">Our Services</div>
            <div className="section-content-column">
                {services.map((service) => (
                    <div key={service.id} id={`${service.id}-service-mycard`} className="mycard bg-mycard">
                        <div className="mycard-content">
                            <div className="mycard-content-block">
                                <div className="mycard-title-group">
                                    <div className="mycard-title">
                                        <i className={`${service.icon} services-icon`}></i> {service.title}
                                    </div>
                                    <div className="mycard-title price">
                                        <span className="highlight-text-green">{service.price}</span>
                                    </div>
                                </div>
                                <div className="best-for-group">
                                    {service.bestFor.map((item, index) => (
                                        <div key={index} className="best-for-card">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <p>{service.description}</p>
                                <div className="service-buttons">
                                    {service.buttons.map((button, index) => (
                                        <CTAButton key={index} href={button.href} text={button.text} className={button.className} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesSection;