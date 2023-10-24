import React, { useState, useEffect } from 'react';
import '../Contact/Contact.scss';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com';

const Projects = () => { 
    const [formData, setFormData] = useState({ // objet qui suit l'état des données du formulaire comprenant les 3 champs :
        nom: '',
        email: '',
        message: ''
    });
    const [formError, setFormError] = useState('');// état  utilisé pour stocker des messages d'erreur potentiels liés au formulaire

    const validateForm = () => { //  définie pour vérifier si tous les champs du formulaire sont remplis
        const { nom, email, message } = formData;
        if (!nom || !email || !message) {
            setFormError('Veuillez remplir tous les champs.'); // msg d'erreur si champ manquant
            return false;
        }
        return true;
    };

    const { nom, email, message } = formData; // ces valeurs sont extraites de l'objet formData pour être utilisées dans les champs de formulaire

    const handleChange = e => { //met à jour l'état formData chaque fois que l'utilisateur saisit quelque chose dans les champs
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [successMessage, setSuccessMessage] = useState(''); 

    const handleSubmit = e => { //définie pour gérer la soumission du formulaire; est appelée lorsque l'utilisateur clique sur le bouton "Envoyer"
        e.preventDefault();

        if (validateForm()) { // vérifie si le formulaire est valide.
            // Envoie l'email en utilisant Email.js
            emailjs.send('service_apsf3r6', 'template_7wzydcx', {
                from_name: nom,
                from_email: email,
                message: message
            })
                .then(response => {
                    console.log('Email envoyé avec succès!', response);
                    setSuccessMessage('Email envoyé avec succès !');
                    // réinitialise le formulaire ou affiche un message de confirmation ici
                    setFormData({
                        nom: '',
                        email: '',
                        message: ''
                    });
                    setFormError('');
                })
                .catch(error => {
                    console.error('Erreur lors de l\'envoi de l\'email:', error);
                    // affiche un message d'erreur à l'utilisateur ici
                });
        }
    };

    useEffect(() => {
        // initialise Email.js avec ma clé API publique
        emailjs.init('yQ-R9zfiGCCwA2nDa');
    }, []);

    return (
        <Element name="Contact">
            <section className="section-contact-page">
                <div className="contact-block">
                    <div className="contact-title">
                        <h2 className='title'>ME CONTACTER</h2>
                    </div>
                    
                    <p className='contact-text'>Une question ? Vous pouvez me contacter via ce formulaire :</p>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <input className="contact-form-name" name="nom" value={nom} onChange={handleChange} placeholder='Nom' />  {/*les fonctions handleChange mettent à jour l'état formData*/}
                        <input className="contact-form-email" type="email" name="email" value={email} onChange={handleChange} placeholder='Email' />
                        <textarea className='contact-form-message' name="message" value={message} onChange={handleChange} placeholder='Message' />
                        <div className='submit'>
                            <button id='submit-form' type='submit'>Envoyer</button>
                        </div>
                        {successMessage && <div className="success-message">{successMessage}</div>}
                        {formError && <div className="error-message">{formError}</div>}
                    </form>
                </div>
            </section>
        </Element>
    );
}

export default Projects;
