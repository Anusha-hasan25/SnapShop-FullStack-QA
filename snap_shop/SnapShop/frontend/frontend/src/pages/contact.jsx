import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Visit Our Store',
            details: ['123 Jewellery Street', 'Karachi, Sindh', 'Pakistan'],
            link: '/FlagshipStore'
        },
        {
            icon: '📞',
            title: 'Call Us',
            details: ['+92 300 1234567', '+92 321 9876543'],
            action: 'tel:+923001234567'
        },
        {
            icon: '✉️',
            title: 'Email Us',
            details: ['info@jewellerystore.com', 'support@jewellerystore.com'],
            action: 'mailto:info@jewellerystore.com'
        },
        {
            icon: '⏰',
            title: 'Business Hours',
            details: ['Monday - Saturday: 10:00 AM - 8:00 PM', 'Sunday: 11:00 AM - 6:00 PM']
        }
    ];

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Get in touch with us for any queries.</p>
            </div>

            <div className="contact-content">
                {/* Contact Info Cards */}
                <div className="contact-info">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="contact-card">
                            <div className="contact-icon">{info.icon}</div>
                            <h3>{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx}>{detail}</p>
                            ))}
                            {info.link && (
                                <a href={info.link} className="contact-link">View Store Details →</a>
                            )}
                            {info.action && (
                                <a href={info.action} className="contact-link">Contact Now →</a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="contact-form-section">
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a subject</option>
                                <option value="order">Order Inquiry</option>
                                <option value="product">Product Information</option>
                                <option value="custom">Custom Jewellery</option>
                                <option value="repair">Repair Services</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Enter your message here..."
                                rows="5"
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;