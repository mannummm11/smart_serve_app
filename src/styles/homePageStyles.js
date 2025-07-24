export const homePageStyles = {
  main: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '0 24px',
    marginTop: '-96px'
  },
  heroContent: {
    textAlign: 'center',
    transition: 'all 1s ease-out'
  },
  heroTitle: {
    fontSize: 'clamp(48px, 8vw, 128px)',
    fontWeight: 'bold',
    marginBottom: '24px',
    background: 'linear-gradient(135deg, white, #e0e7ff, #bfdbfe)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1'
  },
  heroDescription: {
    fontSize: 'clamp(18px, 3vw, 24px)',
    color: '#d1d5db',
    marginBottom: '32px',
    maxWidth: '768px',
    margin: '0 auto 32px auto',
    lineHeight: '1.6'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'center',
    marginBottom: '48px'
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '18px',
    color: 'white',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'all 0.2s ease',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center'
  },
  secondaryButton: {
    background: 'transparent',
    border: '2px solid #a855f7',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '18px',
    color: 'white',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'all 0.2s ease'
  }
};