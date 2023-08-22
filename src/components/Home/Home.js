import React, { useEffect, useState } from 'react';
import '../Home/Home.css';
import Background from '../Particles/background';
import { Element } from 'react-scroll';
import Typewriter from "typewriter-effect";
import Photo from '../Home/Bienvenue.jpg';

const Home = () => {


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowUnderline(true);
    //     }, 9000); // Délai en millisecondes après le typing

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <Element name="home">
            <div className='home-section'>
                <Background />

                <div className='title-container'>
                    <div className='title-wrapper'>
                        <h1 id='hi-title'><br />
                        <span className='orange-letter'>J</span>e suis Laura<span className='orange-letter'>,</span></h1>
                    </div>
                    <div className='je-suis'>
                        <Typewriter onInit={(typewriter) => {
                            typewriter
                                .typeString("Web Developer")
                                .pauseFor(1500)
                                .deleteChars(13)
                                .typeString("<span class='developer-text'>Front-End Developer</span><span class='orange-letter'>.</span>")
                                .pauseFor(5500)
                                .deleteChars(20)
                                .pauseFor(12000)
                                .typeString("Web Developer")
                                .pauseFor(5500)
                                .deleteChars(13)
                                .pauseFor(1200)
                                .typeString("<span class='developer-text'>Front-End Developer</span><span class='orange-letter'>.</span>")
                                .start();
                        }}
                        />
                     
                    </div>
                    {/* {showUnderline && (
                            <div className='underline show'>
                            </div>
                        )} */}
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
