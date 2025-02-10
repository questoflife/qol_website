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
        {
            id: 'personal-coaching',
            icon: 'fa fa-solid fa-user',
            title: '1-on-1 Coaching',
            price: '£50 / 50 mins',
            description: 'We offer a limited number of 1-on-1 sessions to fundraise. All proceeds go towards covering expenses for running the organization, training and supporting our facilitators, and opening more groups.',
            bestFor: ['Focused Self-Discovery', 'Getting Unstuck', 'Faster Progress', 'Supporting Our Mission'],
            buttons: [
                { text: 'More Info', href: '../services.html#services-details-section', className: 'info-button' },
                { text: 'Sign Up', href: 'https://discord.gg/m9hVVajQU3' },
            ],
        },
        {
            id: 'facilitator-training',
            icon: 'fa fa-solid fa-graduation-cap',
            title: 'Facilitator Training',
            price: 'Pay What You Want',
            description: 'If you\'ve completed at least one of our 16-week groups and want to give back to the community, consider applying to join our team of volunteer facilitators.',
            bestFor: ['Giving Back to the Community', 'Learning New Skills & Theory', 'Challenging Yourself'],
            buttons: [
                { text: 'More Info', href: '../support_us.html#volunteer-section', className: 'info-button' },
                { text: 'Sign Up', href: 'https://forms.gle/Jxkh56WbbLVXzqGj8' },
            ],
        },
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