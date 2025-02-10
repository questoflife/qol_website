import React from 'react';

function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            text: '"Before joining this group I felt very alone, but since joining group coaching, I\'ve regained a sense of hope..."',
            author: '– joky6493',
        },
        // Add other testimonials here...
    ];

    return (
        <div id="testimonials-section" className="section">
            <div className="section-content-column">
                <div className="section-title">Testimonials</div>
                <div className="mycard clear-mycard">
                    <div className="mycard-content">
                        <div className="mycard-content-block">
                            <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
                                <div className="carousel-indicators">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={index}
                                            className={index === 0 ? 'active' : ''}
                                            aria-label={`Slide ${index + 1}`}
                                        ></button>
                                    ))}
                                </div>
                                <div className="carousel-inner">
                                    {testimonials.map((testimonial, index) => (
                                        <div key={testimonial.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <div className="testimonial">
                                                <p>{testimonial.text}</p>
                                                <p className="testimonial-author">{testimonial.author}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsSection;