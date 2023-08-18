import React, { useEffect, useState } from 'react';
import '../Home/Home.css';
import Background from '../Particles/background';
import { Element } from 'react-scroll';

const Home = () => {
    const [typedText1, setTypedText1] = useState('');
    const [typedText2, setTypedText2] = useState('');
    const text1 = "Je suis Laura,";
    const text2 = "Web Developer";
    const pipe = "|";
    let index1 = 0;
    let index2 = 0;

    useEffect(() => {
        const typeText1 = () => {
            setTypedText1(text1.substring(0, index1) + pipe);
            index1++;
            if (index1 <= text1.length) {
                setTimeout(typeText1, 130);
            } else {
                setTypedText1(text1); // Afficher le texte complet
                setTimeout(typeText2, 130); // Début de l'affichage du texte2
            }
        };

        const typeText2 = () => {
            setTypedText2(text2.substring(0, index2) + pipe); // Ajouter la barre à la fin du texte2
            index2++;
            if (index2 <= text2.length) {
                setTimeout(typeText2, 120);
            } else {
                // Clignoter la barre après que le texte soit entièrement tapé
                setInterval(() => {
                    setTypedText2((prev) => (prev.endsWith(pipe) ? text2 : text2 + pipe));
                }, 600);
            }
        };

        typeText1();
        // Afficher le texte2 une fois que le texte1 est complètement tapé
        if (typedText1) {
            typeText2();
        }

    }, []);

    return (
<Element name="home">
        <div className='home-section'>
            <Background />
            <div className='title-container'>
                <h1 id='hi-title'>Bonjour.</h1>
                    <div className='je-suis'>
                        <span className='orange-letter'>J</span>
                        <span className='name-title'>{typedText1.slice(1)}</span>
                        <br />
                        <span>{typedText2}</span>
                    </div>
                <div className='photo-myself'></div>
            </div>
        </div>
        </Element>
    );
};

export default Home;