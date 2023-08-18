import React from 'react';
import '../Skills/Skills.css';
import { Element } from 'react-scroll';

const Skills = () => {

    return ( // ajouter ici 3 colonnes des compétences
        <Element name="Compétences">
            <div className="section-skills-page"></div>
            <div className="skills"> 
                <div className='skills-row'></div> 
                <div className='skills-row'></div>
                <div className='skills-row'></div>
            </div>
        </Element>

    );
};

export default Skills;