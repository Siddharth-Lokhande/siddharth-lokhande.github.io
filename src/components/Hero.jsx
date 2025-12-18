import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const toRotate = ["Web Developer", "UI/UX Designer", "Software Engineer"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, typingSpeed);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(prev => prev / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(2000); // Pause at end of word
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(150); // Reset speed for new word
        } else {
            setTypingSpeed(isDeleting ? 100 : 150); // Normal typing speed
        }
    };

    return (
        <section className="hero section" id="home">
            <div className="hero-container container">
                <div className="hero-content">
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>Hi! I'm <span className="highlight">Siddharth</span></h1>
                    <h2>I am a <span className="wrap">{text}</span><span className="cursor">|</span></h2>
                    <p>
                        Building high-performance web applications with modern technologies.
                        Focused on creating seamless user experiences and robust backend systems.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn-primary">Let's Connect</a>
                        <a href="#projects" className="btn-secondary">View Work</a>
                    </div>
                </div>
                <div className="hero-visual">
                    {/* Abstract geometric shape or 3D element could go here */}
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
