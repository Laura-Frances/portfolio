import React, { useState, useEffect } from 'react';
import './About.css';
import { Element } from 'react-scroll';
import Profil from '../About/profil.png';
import MonCV from '../About/CV_2023.pdf';
import Scrollspy from 'react-scrollspy';


const About = () => {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const text = `Id etiam illud putabat comparandis aliquando adhiberemus aliquando aliquando possemus diligendo in ne in amicitiis quam inimicitiarum valet praecipiendum ne tollendam possemus Scipio potius illud potius in inciperemus Quin eum praeceptum odisse minus illud in possemus id inimicitiarum valet fuit cogitandum ne quam est ut quam inciperemus amare cogitandum amicitiis.`;

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector(".section-about-page");

            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2; setIsAboutVisible(isVisible);
                setIsAboutVisible(isVisible);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Element name="A propos">
            <div className="section-about-page">
                <div className="about-block">
                    <div className="titles">
                        <h2 className='about-me'>A PROPOS DE MOI</h2>
                    </div>
                    <div className={`text-about_me ${isAboutVisible ? "visible" : ""}`}>
                        {text}
                    </div>
                    <div className='picture-about'>
                        <img src={Profil} alt="Icone de profil" />
                    </div>
                    <div className="download-button">
                        <a href={MonCV} download="CV">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default About;