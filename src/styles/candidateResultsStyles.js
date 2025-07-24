export const candidateResultsStyles = {
  main: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '40px 24px',
    marginTop: '-96px'
  },
  container: {
    textAlign: 'center',
    maxWidth: '1200px',
    width: '100%'
  },
  title: {
    fontSize: 'clamp(36px, 6vw, 64px)',
    fontWeight: 'bold',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, white, #e0e7ff, #bfdbfe)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1.2'
  },
  description: {
    fontSize: 'clamp(16px, 2.5vw, 20px)',
    color: '#d1d5db',
    marginBottom: '40px',
    lineHeight: '1.6'
  },
  tableContainer: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '40px',
    overflowX: 'auto',
    transition: 'all 1s ease-out'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0
  },
  headerRow: {
    background: 'rgba(168, 85, 247, 0.2)',
    borderRadius: '10px'
  },
  header: {
    padding: '16px 12px',
    color: '#f3f4f6',
    fontWeight: '600',
    fontSize: '16px',
    textAlign: 'left',
    borderBottom: '2px solid rgba(168, 85, 247, 0.3)',
    background: 'transparent'
  },
  row: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    animation: 'slideInUp 0.6s ease-out forwards',
    opacity: 0,
    transform: 'translateY(20px)'
  },
  cell: {
    padding: '16px 12px',
    color: '#d1d5db',
    fontSize: '14px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    textAlign: 'left'
  },
  skillsCell: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px'
  },
  skillChip: {
    background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
    whiteSpace: 'nowrap'
  },
  score: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'inline-block'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
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