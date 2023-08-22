import React from 'react';
import '../Modale/Modale.css';

function Modal({ selectedProject, closeModal }) {

    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains('background-overlay')) {
            closeModal();
        }
    };

    return (
        <div>
            {/* Arrière-plan flouté */}
            <div className="background-overlay" onClick={handleBackgroundClick}></div>

            {/* Modal */}
            <div className="modal">
                <div className="modal-content">
                    {selectedProject && (
                        <>
                            <h1 className='title-modale'>{selectedProject.title}</h1>
                            <div className="img-description-container">
                                <img className='img-modale' src={selectedProject.image} alt={selectedProject.title} />
                                <div className="description-block">
                                    <h2 className='subtitle-modale'>Compétences acquises :</h2>
                                    <ul className='description-modale'>
                                        {selectedProject.description.split('\n').map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
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