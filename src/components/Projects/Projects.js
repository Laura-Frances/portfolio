import React, { useState } from 'react';
import '../Projects/Projects.scss';
import { Element } from 'react-scroll';
import Modale from '../Modale/Modale';
import ImageBooki from '../Projects/Booki-img.png';
import SophieBluel from '../Projects/SophieBluel-img.png';
import Kasa from '../Projects/Kasa-img.png';
import KasaURL from '../Projects/KASA-banner.png';
import BookiURL from '../Projects/BOOKI-banner.png';
import SophieURL from '../Projects/SOPHIE-banner.png';

const Projects = () => {
    // création du tableau représentant mes projets
    const projectsData = [
        {
            id: 1,
            title: 'PAGE D\'ACCUEIL D\'UNE AGENCE DE VOYAGE',
            description: 'Installer un environnement de développement front-end \n Intégrer du contenu conformément à une maquette avec HTML et CSS \nImplémenter une interface responsive avec les Media Queries \nVersionner le projet avec Git et Github',
            image: ImageBooki,
            imageUrl: BookiURL,
            link: 'https://laura-frances.github.io/Projet2/',
        },
        {
            id: 2,
            title: 'PORTFOLIO D\'UNE ARCHITECTE D\'INTERIEUR',
            description: 'Manipuler les éléments du DOM avec JavaScript \nRécupérer les données utilisateurs dans le JavaScript via des formulaires \nGérer les événements utilisateurs avec JavaScript',
            image: SophieBluel,
            imageUrl: SophieURL,
            link: 'https://github.com/Laura-Frances/Projet3.git',
        },
        {
            id: 3,
            title: 'APPLICATION WEB DE LOCATION IMMOBILIERE',
            description: 'Initialiser une application avec Create React App \n Configurer la navigation entre les pages de l\'application avec React Router \nDévelopper une interface web avec Sass \nMettre en œuvre des animations CSS \n Développer des éléments d\'un site web grâce à des composants React',
            image: Kasa,
            imageUrl: KasaURL,
            link: 'https://github.com/Laura-Frances/Projet6.git',
        },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    
// gestion modal open/close
    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalOpen(false);
    };

    return (
        <Element name="Projets">
            <section className="section-projects-page">
                <div className="projects-block">
                    <h2 className='projets-title'>MES PROJETS</h2>

                    <div className="project-cards">
                        {projectsData.map((project) => (
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