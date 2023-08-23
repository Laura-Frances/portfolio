import React from 'react';
import '../Footer/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


const Projects = () => {

    return (

        <footer className="footer">
            <div className='return-home'>
                <Link to="home" smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </Link>
            </div>
            <div className='socials'>
                {/* insérer icon MAIL */}
            </div>
            <div className="copyrights">LAURA FRANCES ©2023
            </div>
        </footer>

    );
}

export default Projects;