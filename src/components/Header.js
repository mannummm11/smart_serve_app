import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { headerStyles } from '../styles/headerStyles';

const Header = () => {
  return (
    <header style={headerStyles.header}>
      <nav style={headerStyles.nav}>
        <Link to="/" style={headerStyles.logo}>
          <Sparkles size={32} color="#a855f7" />
          <span style={headerStyles.logoText}>Smart Serve</span>
        </Link>
        <div style={headerStyles.navLinks} className="nav-links">
          <a href="#features" style={headerStyles.navLink} className="nav-link">Features</a>
          <a href="#about" style={headerStyles.navLink} className="nav-link">About</a>
          <a href="#contact" style={headerStyles.navLink} className="nav-link">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;