import React, { useState } from 'react';
import '../Projects/Projects.css';
import { Element } from 'react-scroll';

const Projects = () => {
    // création du tableau représentant mes projets
    const projectsData = [
        {
            id: 1,
            title: 'Projet 1',
            description: 'Description du projet 1.',
            image: 'image_projet_1.jpg',
        },
        {
            id: 2,
            title: 'Projet 2',
            description: 'Description du projet 2.',
            image: 'image_projet_2.jpg',
        },
        {
            id: 3,
            title: 'Projet 3',
            description: 'Description du projet 3.',
            image: 'image_projet_3.jpg',
        },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

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
                    <div className="titles-projects">
                        <h2 className='projets-title'>MES PROJETS</h2>
                    </div>
                    <div className="project-cards">
                        {projectsData.map((project) => (
                            <div className="project-card" key={project.id}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <button onClick={() => openModal(project)}>Voir détails</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Fenêtre modale */}
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>
                            &times;
                        </span>
                        {selectedProject && (
                            <>
                                <h2>{selectedProject.title}</h2>
                                <p>{selectedProject.description}</p>
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </>
                        )}
                    </div>
                </div>
            )}
        </Element>
    );
};

export default Projects;