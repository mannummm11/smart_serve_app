export const getStartedPageStyles = {
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
    maxWidth: '600px',
    width: '100%'
  },
  title: {
    fontSize: 'clamp(36px, 6vw, 64px)',
    fontWeight: 'bold',
    marginBottom: '24px',
    background: 'linear-gradient(135deg, white, #e0e7ff, #bfdbfe)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1.2'
  },
  description: {
    fontSize: 'clamp(18px, 3vw, 20px)',
    color: '#d1d5db',
    marginBottom: '40px',
    lineHeight: '1.6'
  },
  buttonContainer: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    marginTop: '24px',
    flexWrap: 'wrap'
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
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
  },
  backButton: {
    background: 'transparent',
    border: '2px solid #6b7280',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '16px',
    color: '#d1d5db',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center'
  }
};