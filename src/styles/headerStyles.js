export const headerStyles = {
  header: {
    position: 'relative',
    zIndex: 10,
    padding: '24px'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1280px',
    margin: '0 auto'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  navLinks: {
    display: 'flex',
    gap: '32px'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  }
};