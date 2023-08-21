import React, { useState, useEffect } from 'react';
import '../Skills/Skills.css';
import { Element } from 'react-scroll';
import HTML from '../Skills/logo-html5.png';
import JS from '../Skills/logo-js.png';
import CSS from '../Skills/logo-css.png';
import REACT from '../Skills/logo-react.png';
import SASS from '../Skills/logo-sass.png';
import MONGO from '../Skills/logo-mongo.png';
import NODE from '../Skills/logo-node.png';
import GIT from '../Skills/logo-git.png';

const Skills = () => {
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector(".section-skills-page");

            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2; setIsAboutVisible(isVisible);
                setIsAboutVisible(isVisible);
                
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return ( 
        <Element name="Compétences">
            <div className="section-skills-page">
                <div className="skills-block">
                    <h2 className='skills-title'>COMPETENCES</h2>
                    <div className={`skills-row-1 ${isAboutVisible ? "visible" : ""}`}>
               
                        <div className='skill-item'>
                            <img src={HTML}></img>
                            <div className='skill-item-txt'>HTML</div>
                        </div>
                        <div className='skill-item'>
                            <img src={JS}></img>
                            <div className='skill-item-txt'>JAVASCRIPT
                            </div>
                        </div>
                        <div className='skill-item'>
                            <img src={CSS}></img>
                            <div className='skill-item-txt'>CSS
                            </div>
                        </div>
                    </div>
                   <div className={`skills-row-2 ${isAboutVisible ? "visible" : ""}`}>
                    <div className='skill-item'>
                            <img src={REACT}></img>
                            <div className='skill-item-txt'>REACT.JS
                            </div>
                        </div>
                        <div className='skill-item'>
                            <img src={SASS}></img>
                            <div className='skill-item-txt'>SASS
                            </div>
                        </div>
                    </div>
                    <div className={`skills-row-3 ${isAboutVisible ? "visible" : ""}`}>
                    <div className='skill-item'>
                            <img src={MONGO}></img>
                            <div className='skill-item-txt'>MONGODB
                            </div>
                        </div>
                        <div className='skill-item'>
                            <img src={NODE}></img>
                            <div className='skill-item-txt'>NODE.JS
                            </div>
                        </div>
                        <div className='skill-item'>
                            <img src={GIT}></img>
                            <div className='skill-item-txt'>GIT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>

    );
};

export default Skills;