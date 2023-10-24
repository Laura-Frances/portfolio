import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; //bibliothèque pour créer des liens qui effectuent des défilements vers différentes sections de la page
import '../Banner/Banner.scss';

const Banner = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {//Utilisation de useEffect pour définir un gestionnaire de scroll qui surveille le défilement de la page et met à jour "currentSection" en fonction de la section actuellement visible à l'écran.
    const handleScroll = () => { //appelée chaque fois que l'utilisateur fait défiler la page 
      const sections = ['Accueil', 'A propos', 'Compétences', 'Projets', 'Contact'];

      for (const section of sections) { // parcourt chaque nom de section dans le tableau
        const sectionElement = document.getElementById(section.toLowerCase());
        if (sectionElement) { //condition qui vérifie si l'élément de la section existe réellement dans le document
          const rect = sectionElement.getBoundingClientRect(); //permet de déterminer où se trouve l'élément par rapport à la fenêtre.
          const sectionHeight = rect.bottom - rect.top; // calcule la hauteur de la section visible à l'écran en soustrayant la position supérieure de la position inférieure
          
          // Calcule la hauteur nécessaire pour que 2/3 de la section soit visible
          const windowHeightRequired = sectionHeight * 2 / 3;

          if (sectionHeight >= windowHeightRequired) { //verifie si la hauteur réelle de la section visible est supérieure ou égale à la hauteur nécessaire calculée
            setCurrentSection(section); // Si la section est suffisamment visible, cette ligne met à jour l'état currentSection
            break; //boucle est arrêtée 
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll); //écouteur d'événement de défilement à la fenêtre. Chaque fois que l'utilisateur fait défiler la page, la fonction handleScroll sera appelée.

    return () => {
      window.removeEventListener('scroll', handleScroll); //supprime l'écouteur d'événement de défilement pour éviter les fuites de mémoire lorsque le composant n'est plus nécessaire.
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
