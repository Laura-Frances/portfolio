import React, { useState, useEffect } from 'react';
import '../Welcome/Welcome.css';

function Welcome() {
  const messages = ["BIENVENUE !"];
  const [showFullscreen, setShowFullscreen] = useState(true);
  const [slideUp] = useState(false);

  useEffect(() => {
   
    const fullscreenTimeout = setTimeout(() => {
      setShowFullscreen(false);
    }, 3000);

    return () => {
      clearTimeout(fullscreenTimeout);
    };
  }, []);


  const welcomeClasses = `welcome ${showFullscreen ? 'fullscreen' : ''} ${
    slideUp ? '' : ''
  }`;

  return (
    <div className={welcomeClasses}>
      <div className='message'>{messages}</div>
    </div>
  );
}

export default Welcome;
