import React, { useState, useEffect } from 'react';
import './About.scss';
import { Element } from 'react-scroll'; //bibliothèque pour créer des liens qui effectuent des défilements vers différentes sections de la page
import Profil from '../About/profil.png';
import MonCV from '../About/CV-2023-Laura_Frances.pdf';

const About = () => { // le texte dans la variable 'text' est destiné à être affiché lorsque la section est visible
    
    const [isAboutVisible, setIsAboutVisible] = useState(false); //détermine si la section "About" est actuellement visible à l'écran (false au départ)
    const text = `Mon parcours légèrement atypique a débuté dans le domaine du tourisme, mais ma soif d'apprendre et mon désir de relever de nouveaux défis m'ont conduite à entreprendre une reconversion enthousiaste dans le développement web. C'est à travers la plateforme OpenClassrooms que je me suis tournée pour réaliser une formation en bootcamp (6 mois) de Développeur Web.
    A l'issue de cette formation j'ai appris à construire des sites web responsives et dynamiques. J'ai également créé des API et assuré un bon fonctionnement côté serveur. J'ai pu mettre en oeuvre l'optimisation des performances d'un site, et gérer un projet du début à la fin. La pédagogie par projets que la plateforme OpenClassrooms m'a proposée a été enrichissante tant sur l'acquisition de compétences que sur l'expérience en elle-même.`;

    useEffect(() => {
        const handleScroll = () => { // responsable de la gestion du défilement de la page pour déterminer si la section "About" est visible.
            const aboutSection = document.querySelector(".section-about-page");

            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect(); // permet de déterminer où se trouve la section par rapport à la fenêtre
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
                    <div className={`picture-about ${isAboutVisible ? "visible" : ""}`}>

                        <img src={Profil} alt="Icone de profil" />
                    </div>
                    <div className={`text-about_me ${isAboutVisible ? "visible" : ""}`}>
                        {text}
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