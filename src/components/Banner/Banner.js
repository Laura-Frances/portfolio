import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../Banner/Banner.css';

const Banner = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Accueil', 'A propos', 'Compétences', 'Projets', 'Contact'];

      for (const section of sections) {
        const sectionElement = document.getElementById(section.toLowerCase());
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="banner-container">
      <nav className="navigation">
        <ul className="menu">
          <li>
            <Link
              className={currentSection === 'Accueil' ? 'active' : ''}
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={currentSection === 'A propos' ? 'active' : ''}
              to="A propos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              A Propos
            </Link>
          </li>
          <li>
            <Link
              className={currentSection === 'Compétences' ? 'active' : ''}
              to="Compétences"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              className={currentSection === 'Projets' ? 'active' : ''}
              to="Projets"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className={currentSection === 'Contact' ? 'active' : ''}
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Banner;
