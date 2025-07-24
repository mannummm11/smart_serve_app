import React, { useState, useEffect } from 'react';
import Header from './Header';

// Custom hook for mouse position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

// Enhanced inline styles with dynamic background
const layoutStyles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #064e3b 25%, #1e3a8a 50%, #581c87 75%, #0f172a 100%)',
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  backgroundElements: {
    position: 'absolute',
    inset: 0,
    zIndex: 0
  },
  floatingElement1: {
    position: 'absolute',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.08) 50%, transparent 100%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    animation: 'floatPulse 3s ease-in-out infinite alternate',
    transform: 'translate(-50%, -50%)'
  },
  floatingElement2: {
    position: 'absolute',
    top: '20%',
    right: '20%',
    width: '350px',
    height: '350px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(37, 99, 235, 0.06) 50%, transparent 100%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'floatBounce 4s ease-in-out infinite'
  },
  floatingElement3: {
    position: 'absolute',
    bottom: '20%',
    left: '30%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(79, 70, 229, 0.05) 50%, transparent 100%)',
    borderRadius: '50%',
    filter: 'blur(70px)',
    animation: 'floatRotate 6s linear infinite'
  },
  floatingElement4: {
    position: 'absolute',
    top: '60%',
    left: '10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 50%, transparent 100%)',
    borderRadius: '50%',
    filter: 'blur(50px)',
    animation: 'floatDrift 5s ease-in-out infinite alternate'
  },
  floatingElement5: {
    position: 'absolute',
    top: '10%',
    left: '70%',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.06), rgba(245, 158, 11, 0.04))',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'floatSpin 8s linear infinite'
  }
};

const Layout = ({ children }) => {
  const mousePosition = useMousePosition();

  return (
    <div style={layoutStyles.container}>
      <style>
        {`
          @keyframes floatPulse {
            0% { 
              opacity: 0.4; 
              transform: translate(-50%, -50%) scale(1);
            }
            100% { 
              opacity: 0.8; 
              transform: translate(-50%, -50%) scale(1.1);
            }
          }
          
          @keyframes floatBounce {
            0%, 100% { 
              transform: translateY(0) scale(1);
              opacity: 0.6;
            }
            50% { 
              transform: translateY(-30px) scale(1.05);
              opacity: 0.8;
            }
          }
          
          @keyframes floatRotate {
            0% { 
              transform: rotate(0deg) scale(1);
              opacity: 0.5;
            }
            50% {
              opacity: 0.7;
            }
            100% { 
              transform: rotate(360deg) scale(1.02);
              opacity: 0.5;
            }
          }
          
          @keyframes floatDrift {
            0% { 
              transform: translateX(0) translateY(0);
              opacity: 0.3;
            }
            100% { 
              transform: translateX(50px) translateY(-20px);
              opacity: 0.6;
            }
          }
          
          @keyframes floatSpin {
            0% { 
              transform: rotate(0deg) scale(0.8);
            }
            50% {
              transform: rotate(180deg) scale(1.1);
            }
            100% { 
              transform: rotate(360deg) scale(0.8);
            }
          }
          
          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .primary-button:hover {
            transform: scale(1.08) !important;
            background: linear-gradient(135deg, #10b981, #059669) !important;
            box-shadow: 0 15px 35px rgba(16, 185, 129, 0.4) !important;
          }
          
          .secondary-button:hover {
            background: rgba(16, 185, 129, 0.15) !important;
            transform: scale(1.05) !important;
            border-color: #10b981 !important;
          }
          
          .nav-link:hover {
            color: #6ee7b7 !important;
            text-shadow: 0 0 10px rgba(110, 231, 183, 0.5) !important;
          }
          
          .back-button:hover {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.2)) !important;
            transform: scale(1.05) translateY(-2px) !important;
            border-color: #10b981 !important;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4) !important;
          }
          
          .input-field:focus {
            border-color: #10b981 !important;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2) !important;
          }
          
          .dropdown-item:hover {
            background-color: rgba(16, 185, 129, 0.2) !important;
            color: #6ee7b7 !important;
          }
          
          .chip-remove:hover {
            background-color: rgba(255, 255, 255, 0.3) !important;
            transform: scale(1.1) !important;
          }
          
          .confirm-button:hover {
            background: rgba(16, 185, 129, 0.15) !important;
            transform: scale(1.05) !important;
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3) !important;
          }
          
          .table-row:hover {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05)) !important;
            transform: translateY(-3px) scale(1.01) !important;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15) !important;
          }
          
          @media (max-width: 640px) {
            .nav-links { display: none !important; }
          }
        `}
      </style>

      {/* Enhanced Animated Background */}
      <div style={layoutStyles.backgroundElements}>
        <div 
          style={{
            ...layoutStyles.floatingElement1,
            left: `${30 + mousePosition.x * 0.02}%`,
            top: `${40 + mousePosition.y * 0.015}%`,
          }} 
        />
        <div style={layoutStyles.floatingElement2} />
        <div style={layoutStyles.floatingElement3} />
        <div style={layoutStyles.floatingElement4} />
        <div style={layoutStyles.floatingElement5} />
      </div>

      <Header />
      {children}
    </div>
  );
};

export default Layout;