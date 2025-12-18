import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content glass">
                    <div className="contact-text">
                        <h3>Let's work together!</h3>
                        <p>
                            I'm currently open for new opportunities. Whether you have a question or just want to say hi,
                            feel free to reach out. I'll get back to you as soon as possible.
                        </p>
                        <div className="social-links">
                            {/* Placeholder links with simple text for now, could use icons */}
                            <a href="#" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">GitHub</a>
                            <a href="#" className="social-link">Twitter</a>
                        </div>
                    </div>
                    <div className="contact-action">
                        <a href="mailto:hello@example.com" className="btn-primary email-btn">
                            Say Hello
                        </a>
                    </div>
                </div>
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Siddharth Lokhande. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
