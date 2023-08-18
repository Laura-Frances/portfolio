import React from 'react';
import './About.css';
import { Element } from 'react-scroll';
import Profil from '../About/profil.png';

const About = () => {

    return (
<Element name="A propos">
    <div className="section-about-page">
        <div className="about-block">
            <div className="titles">
            <div className="txt-title-about">
                <span>PRESENTATION</span>
                <h2 className='about-me'>A PROPOS DE MOI</h2>
            </div>
            </div>
       
            <div className='about-section'>
            Id etiam illud putabat comparandis aliquando adhiberemus aliquando aliquando possemus diligendo in ne in amicitiis quam inimicitiarum valet praecipiendum ne tollendam possemus Scipio potius illud potius in inciperemus Quin eum praeceptum odisse minus illud in possemus id inimicitiarum valet fuit cogitandum ne quam est ut quam inciperemus amare cogitandum amicitiis.
            </div>
            <div className='picture-about'>
                <img src={Profil} alt="Icone de profil"/>
            </div>
        </div>
    </div>
</Element>
    );
};

export default About;