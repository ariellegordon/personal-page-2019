import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [imageClass, setImageClass] = useState('');
  const [overlayClass, setOverlayClass] = useState('');
  useEffect(() => {
    console.log(navigator.userAgent);
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setImageClass('mobile-image');
      setOverlayClass('mobile-overlay');
      // some code..
    } else {
      setImageClass('image');
      setOverlayClass('overlay');
    }
  }, []);
  return (
    <div className="main">
      <div className="project-grid">
        {imageClass.length > 0 && overlayClass.length > 0 && (
          <div className="project">
            <h3>ILD</h3>
            <div className="project-inner">
              <img src="ild.png" className={imageClass} />
              <div className={overlayClass}>
                <p>
                  Book annotation tool inspired by Chris Kraus's novel{' '}
                  <a
                    href="https://mitpress.mit.edu/books/i-love-dick"
                    target="_blank"
                  >
                    I Love Dick
                  </a>
                  , built with React Native, which translates human handwriting
                  into written annotations through an image content analysis API
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
