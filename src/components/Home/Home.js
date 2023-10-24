import React from 'react';
import '../Home/Home.scss';
import Background from '../Particles/background';
import { Element } from 'react-scroll'; //crée un lien qui effectue un défilement animé vers la section lorsque l'utilisateur clique sur le lien
import Typewriter from "typewriter-effect"; // effet de machine à écrire
import Photo from '../Home/AvatarMe.png';

const Home = () => {

    return (

        <Element name="home">
            <div className='home-section'>
                <Background />

                <div className='title-container'>
                    <div className='title-wrapper'>
                        <h1 id='hi-title'><br />
                        <span className='orange-letter'>J</span>e suis Laura<span className='orange-letter'>,</span></h1>
                    
                    <div className='je-suis'>
                        <Typewriter onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2200)
                                .typeString("Web Developer")
                                .pauseFor(1800)
                                .deleteChars(13)
                                .typeString("<span class='developer-text'>Front-end Developer</span><span class='orange-letter'>.</span>")
                                .pauseFor(5000)
                                .deleteChars(20)
                                .pauseFor(2000)
                                .typeString("Web Developer")
                                .pauseFor(5000)
                                .deleteChars(13)
                                .pauseFor(1200)
                                .typeString("<span class='developer-text'>Front-end Developer</span><span class='orange-letter'>.</span>")
                                .pauseFor(2000)
                                .deleteChars(20)
                                .typeString("Web Developer")
                                .pauseFor(1800)
                                .deleteChars(13)
                                .typeString("<span class='developer-text'>Front-end Developer</span><span class='orange-letter'>.</span>")
                                .pauseFor(5000)
                                .deleteChars(20)
                                .pauseFor(2000)
                                .typeString("Web Developer")
                                .pauseFor(5000)
                                .deleteChars(13)
                                .pauseFor(1200)
                                .typeString("<span class='developer-text'>Front-end Developer</span><span class='orange-letter'>.</span>")
                                .pauseFor(5000)
                                .deleteChars(20)
                                .pauseFor(2000)
                                .typeString("Web Developer")
                                .pauseFor(5000)
                                .deleteChars(13)
                                .pauseFor(1200)
                                .typeString("<span class='developer-text'>Front-end Developer</span><span class='orange-letter'>.</span>")
                                .start();
                        }}
                        />
                    </div>
                    </div>
                </div>
                <div className='photo-container'>
                    <div className='photo-myself'>
                        <img src={Photo} alt="" />
                    </div>
                </div>
            </div>
        </Element>

    );
};

export default Home;
