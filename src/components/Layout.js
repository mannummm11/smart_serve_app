import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useMousePosition } from '../hooks/useMousePosition';
import { layoutStyles } from '../styles/layoutStyles';

const Layout = ({ children }) => {
  const mousePosition = useMousePosition();

  return (
    <div style={layoutStyles.container}>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.6; transform: scale(1); }
            100% { opacity: 0.8; transform: scale(1.05); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .primary-button:hover {
            transform: scale(1.05) !important;
            background: linear-gradient(135deg, #8b5cf6, #3b82f6) !important;
          }
          .secondary-button:hover {
            background: rgba(168, 85, 247, 0.1) !important;
            transform: scale(1.05) !important;
          }
          .nav-link:hover {
            color: #d8b4fe !important;
          }
          .back-button:hover {
            background: rgba(107, 114, 128, 0.1) !important;
            transform: scale(1.05) !important;
            border-color: #9ca3af !important;
          }
          .input-field:focus {
            border-color: #a855f7 !important;
            box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1) !important;
          }
          .dropdown-item:hover {
            background-color: rgba(168, 85, 247, 0.2) !important;
          }
          .chip-remove:hover {
            background-color: rgba(255, 255, 255, 0.2) !important;
          }
          .confirm-button:hover {
            background: rgba(16, 185, 129, 0.1) !important;
            transform: scale(1.05) !important;
          }
          .table-row:hover {
            background: rgba(168, 85, 247, 0.05) !important;
            transform: translateY(-2px) !important;
          }
          @media (max-width: 640px) {
            .nav-links { display: none !important; }
          }
        `}
      </style>

      {/* Animated Background */}
      <div style={layoutStyles.backgroundElements}>
        <div 
          style={{
            ...layoutStyles.floatingElement1,
            left: `${mousePosition.x * 0.01}%`,
            top: `${mousePosition.y * 0.01}%`,
          }} 
        />
        <div style={layoutStyles.floatingElement2} />
        <div style={layoutStyles.floatingElement3} />
      </div>

      <Header />
      {children}
    </div>
  );
};

export default Layout;