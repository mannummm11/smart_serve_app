import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homePageStyles } from '../styles/homePageStyles';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main style={homePageStyles.main}>
      <div style={{
        ...homePageStyles.heroContent,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
        opacity: isVisible ? 1 : 0,
      }}>
        <h1 style={homePageStyles.heroTitle}>Smart Serve</h1>
        
        <p style={homePageStyles.heroDescription}>
          The next generation platform that transforms how you serve and scale your applications. 
          Built for the future, ready today.
        </p>
        
        <div style={homePageStyles.buttonContainer}>
          <Link 
            to="/get-started"
            style={homePageStyles.primaryButton} 
            className="primary-button"
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Get Started
          </Link>
          
        </div>
      </div>
    </main>
  );
};

export default HomePage;