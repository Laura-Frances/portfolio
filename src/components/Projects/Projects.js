import React, { useState } from 'react';
import '../Projects/Projects.scss';
import { Element } from 'react-scroll'; ////bibliothèque pour créer des liens qui effectuent des défilements vers différentes sections de la page
import Modale from '../Modale/Modale';
import ImageBooki from '../Projects/Booki-img.png';
import SophieBluel from '../Projects/SophieBluel-img.png';
import Kasa from '../Projects/Kasa-img.png';
import KasaURL from '../Projects/KASA-banner.png';
import BookiURL from '../Projects/BOOKI-banner.png';
import SophieURL from '../Projects/SOPHIE-banner.png';

const Projects = () => {
    // création du tableau représentant mes projets
    const projectsData = [ // liste des projets stockés ici
        {
            id: 1,
            title: 'PAGE D\'ACCUEIL D\'UNE AGENCE DE VOYAGE',
            description: 'Installer un environnement de développement front-end \n Intégrer du contenu conformément à une maquette avec HTML et CSS \nImplémenter une interface responsive avec les Media Queries \nVersionner le projet avec Git et Github',
            image: ImageBooki,
            imageUrl: BookiURL,
            link: 'https://laura-frances.github.io/Projet2/',
            context: 'L’entreprise souhaitait développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix',
            difficulties: 'Respect des spécifications techniques en s\'appuyant sur les directives et la note de synthèse. \nCréation des versions responsives mobiles et tablettes en utilisant les techniques CSS. '
        },
        {
            id: 2,
            title: 'PORTFOLIO D\'UNE ARCHITECTE D\'INTERIEUR',
            description: 'Manipuler les éléments du DOM avec JavaScript \nRécupérer les données utilisateurs dans le JavaScript via des formulaires \nGérer les événements utilisateurs avec JavaScript',
            image: SophieBluel,
            imageUrl: SophieURL,
            link: 'https://github.com/Laura-Frances/Projet3.git',
            context: 'Travailler pour une équipe qui conçoit le site portfolio d\'une architecte d\'intérieur, en étant chargée de la partie front-end.',
            difficulties: 'Assurer la sécurité des données et de l\'authentification en utilisant les mécanismes de sécurité appropriées (utilisation de jsonwebtoken). Création de la modale d\'upload de médias en utilisant Javascript et l\'API Swagger pour tester avec le back-end.',
        },
        {
            id: 3,
            title: 'APPLICATION WEB DE LOCATION IMMOBILIERE',
            description: 'Initialiser une application avec Create React App \n Configurer la navigation entre les pages de l\'application avec React Router \nDévelopper une interface web avec Sass \nMettre en œuvre des animations \n Développer des éléments d\'un site web grâce à des composants React',
            image: Kasa,
            imageUrl: KasaURL,
            link: 'https://laurafrances.fr/app-kasa/',
            context: 'Recrutée en freelance par Kasa, une entreprise dans la location d\'appartements, pour refaire leur site web en React. Le projet nécessite une refonte totale, avec des maquettes Figma, malgré l\'absence momentanée de backend.',
            difficulties: 'Animations créées en utilisant CSS. Création d\'un carrousel et d\'un collapse en utlisant les Hook de React.',
        },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    
// gestion modal open/close
    const openModal = (project) => {
        setSelectedProject(project); // sélectionne le projet cliqué
        setModalOpen(true); // ouverture de la modale
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalOpen(false); // fermeture de la modale
    };

    return (
        <Element name="Projets">
            <section className="section-projects-page">
                <div className="projects-block">
                    <h2 className='projets-title'>MES PROJETS</h2>

                    <div className="project-cards">
                        {projectsData.map((project) => ( // card générée en utilisant la méthode map sur le tableau projectsData
                            <div className="card card-hover card-vibrate" key={project.id}>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="card-banner" src={project.imageUrl} /></a>
                                <h3 className="card-title">{project.title}</h3>
                                <button className="card-button" onClick={() => openModal(project)}>Voir détails</button> 
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fenêtre modale */}
            {modalOpen && (
                <Modale selectedProject={selectedProject} closeModal={closeModal} />
            )}
        </Element>
    );
};

export default Projects;