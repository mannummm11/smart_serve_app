import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import { getStartedPageStyles } from '../styles/getStartedPageStyles';

const GetStartedPage = () => {
  return (
    <main style={getStartedPageStyles.main}>
      <h1 style={getStartedPageStyles.title}>Welcome to Smart Serve</h1>
      <p style={getStartedPageStyles.description}>
        Let's get you started on your journey to the future of application serving.
      </p>
      
      <SignUpForm />
      
      <div style={getStartedPageStyles.buttonContainer}>
        <Link 
          to="/"
          style={getStartedPageStyles.backButton}
          className="back-button"
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Back
        </Link>
        <button 
          style={getStartedPageStyles.primaryButton} 
          className="primary-button"
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Create Account
        </button>
      </div>
    </main>
  );
};

export default GetStartedPage;
