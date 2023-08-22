import React, { useState, useEffect } from 'react';
import './About.css';
import { Element } from 'react-scroll';
import Profil from '../About/profil.png';
import MonCV from '../About/CV_2023.pdf';
import Scrollspy from 'react-scrollspy';


const About = () => {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const text = `Mon parcours légèrement atypique a débuté dans le domaine du tourisme, mais ma soif d'apprendre et mon désir de relever de nouveaux défis m'ont conduite à entreprendre une reconversion enthousiaste dans le développement web.
    Je me suis rapidement immergée dans la création de sites web, en me concentrant principalement sur l'aspect front-end. J'ai découvert une manière passionnante d'allier ma créativité à mes compétences techniques, en veillant à ce que chaque site web que je crée est à la fois esthétiquement agréable et fonctionnel.`;

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