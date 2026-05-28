import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../components/NotFound.css'; // Make sure the relative path is correct

const NotFound = () => {
  // 1. STATE FOR LOCAL THEMING:
  // Instead of modifying the global document root/body styles (which would ruin 
  // the dark styles of other pages like Home and About), we keep theme class scoped locally.
  const [theme, setTheme] = useState('light');

  // 2. REFS FOR INTERACTIVE EYEBALLS:
  // We need refs to query the exact positions of the left and right eyes in the viewport.
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  // States to dynamically update inline CSS transform for the pupils
  const [leftPupilStyle, setLeftPupilStyle] = useState({ transform: 'translate(0px, 0px)' });
  const [rightPupilStyle, setRightPupilStyle] = useState({ transform: 'translate(0px, 0px)' });

  // 3. MOUSE TRACKING SIDE EFFECT:
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Function to calculate exact angle & relative offset of the pupil inside the eye
      const calculatePupilOffset = (eyeRef) => {
        if (!eyeRef.current) return 'translate(0px, 0px)';

        // Get actual size and position of the eye socket in the viewport
        const rect = eyeRef.current.getBoundingClientRect();
        
        // Find center coordinates of the eyeball
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Vector delta between cursor and eyeball center
        const deltaX = clientX - eyeCenterX;
        const deltaY = clientY - eyeCenterY;

        // Get angle in radians
        const angle = Math.atan2(deltaY, deltaX);

        // Maximum distance the pupil is physically allowed to travel before exiting the white circle.
        // Eye radius is 40px, Pupil radius is 15px.
        const maxDistance = 15;

        // Map mouse distance to a bounded coordinate
        const currentDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const mappedDistance = Math.min(currentDistance * 0.1, maxDistance); // scaling factor makes it smooth

        // Calculate translation vectors
        const pupilX = Math.cos(angle) * mappedDistance;
        const pupilY = Math.sin(angle) * mappedDistance;

        return `translate(${pupilX}px, ${pupilY}px)`;
      };

      // Set the dynamic inline styling for both pupils
      setLeftPupilStyle({ transform: calculatePupilOffset(leftEyeRef) });
      setRightPupilStyle({ transform: calculatePupilOffset(rightEyeRef) });
    };

    // Attach listener globally to window
    window.addEventListener('mousemove', handleMouseMove);

    // CLEANUP: Destroy listener when component unmounts to prevent severe memory leaks
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handler to toggle local dark/light theme classes
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`not-found-page-wrapper ${theme}`}>
      <div className="error-page">
        <div className="container">
          {/* INTERACTIVE EYEBALL CONTAINER */}
          <div className="eyes">
            <div className="eye" ref={leftEyeRef}>
              <div className="eye__pupil" style={leftPupilStyle}></div>
            </div>
            <div className="eye" ref={rightEyeRef}>
              <div className="eye__pupil" style={rightPupilStyle}></div>
            </div>
          </div>

          {/* ERROR HEADINGS */}
          <div className="error-page__heading">
            <h1 className="error-page__heading-title">Looks like you're lost</h1>
            <p className="error-page__heading-desciption">404 error</p>
          </div>

          {/* BACK TO HOME BUTTON (Using React Router Link for smooth virtual client routing) */}
          <Link 
            className="error-page__button" 
            to="/" 
            aria-label="back to home" 
            title="back to home"
          >
            back to home
          </Link>
        </div>
      </div>

      {/* FLOATING LOCAL THEME SWITCHER */}
      <button 
        className="color-switcher" 
        onClick={toggleTheme} 
        aria-label="Toggle local theme color"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default NotFound;