export const layoutStyles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #581c87 35%, #0f172a 100%)',
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
    width: '384px',
    height: '384px',
    background: 'rgba(147, 51, 234, 0.2)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'pulse 2s ease-in-out infinite alternate',
    transform: 'translate(-50%, -50%)'
  },
  floatingElement2: {
    position: 'absolute',
    top: '25%',
    right: '25%',
    width: '256px',
    height: '256px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'bounce 3s ease-in-out infinite'
  },
  floatingElement3: {
    position: 'absolute',
    bottom: '25%',
    left: '33%',
    width: '320px',
    height: '320px',
    background: 'rgba(99, 102, 241, 0.1)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'pulse 4s ease-in-out infinite alternate'
  }
};