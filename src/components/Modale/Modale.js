import React from 'react';
import '../Modale/Modale.scss';
import CloseButton from '../CloseModale/CloseModale';

function Modal({ selectedProject, closeModal }) {

    const handleBackgroundClick = (e) => { // click du background
        if (e.target.classList.contains('background-overlay')) {
            closeModal();
        }
    };

    return (
        <div>
            {/* Arrière-plan flouté */}
            <div className="background-overlay" onClick={handleBackgroundClick}></div>

            {/* Modale */}
            <div className="modal">
            <CloseButton onClick={closeModal} /> {/* Bouton de fermeture */}
                <div className="modal-content">
                    {selectedProject && ( // reçoit cette prop pour afficher ensuite les détails du projet :
                        <>
                            <h1 className='title-modale'>{selectedProject.title}</h1>
                            <div className="img-description-container">
                                <img className='img-modale' src={selectedProject.image} alt={selectedProject.title} />
                                <div className="description-block">
                                    <h2 className='description-context'>Contexte</h2>
                                    <div className='context'>{selectedProject.context}</div>
                                    <h2 className='subtitle-modale'>Challenges et Compétences relevées:</h2>
                                    <ul className='description-modale'>
                                        {selectedProject.description.split('\n').map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <h2 className='description-difficulties'>Difficultés surmontées :</h2>
                                    <div className='difficulties'>{selectedProject.difficulties.split('\n')}</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                
            </div>
        </div>
    );
}

export default Modal;