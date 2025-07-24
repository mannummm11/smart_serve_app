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
    maxWidth: '1400px',
    width: '100%'
  },
  title: {
    fontSize: 'clamp(36px, 6vw, 64px)',
    fontWeight: 'bold',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #10b981, #059669, #047857)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1.2',
    animation: 'titleGlow 2s ease-in-out infinite alternate'
  },
  description: {
    fontSize: 'clamp(16px, 2.5vw, 20px)',
    color: '#d1d5db',
    marginBottom: '40px',
    lineHeight: '1.6'
  },
  tableContainer: {
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))',
    backdropFilter: 'blur(15px)',
    borderRadius: '25px',
    padding: '25px',
    border: '2px solid rgba(16, 185, 129, 0.2)',
    marginBottom: '40px',
    overflowX: 'auto',
    transition: 'all 1s ease-out',
    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)',
    animation: 'containerPulse 3s ease-in-out infinite'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    tableLayout: 'fixed'
  },
  headerRow: {
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.2))',
    borderRadius: '15px'
  },
  header: {
    padding: '18px 14px',
    color: '#f3f4f6',
    fontWeight: '700',
    fontSize: '16px',
    textAlign: 'left',
    borderBottom: '3px solid rgba(16, 185, 129, 0.4)',
    background: 'transparent',
    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
    wordWrap: 'break-word'
  },
  // Fixed column widths
  nameHeader: {
    width: '15%',
    minWidth: '120px'
  },
  emailHeader: {
    width: '20%',
    minWidth: '180px'
  },
  mobileHeader: {
    width: '15%',
    minWidth: '140px'
  },
  experienceHeader: {
    width: '12%',
    minWidth: '100px'
  },
  skillsHeader: {
    width: '28%',
    minWidth: '200px'
  },
  scoreHeader: {
    width: '10%',
    minWidth: '80px'
  },
  row: {
    borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
    transition: 'all 0.4s ease',
    animation: 'slideInUp 0.8s ease-out forwards',
    opacity: 0,
    transform: 'translateY(30px)'
  },
  cell: {
    padding: '18px 14px',
    color: '#e5e7eb',
    fontSize: '15px',
    borderBottom: '1px solid rgba(16, 185, 129, 0.08)',
    textAlign: 'left',
    fontWeight: '500',
    wordWrap: 'break-word',
    verticalAlign: 'top'
  },
  nameCell: {
    fontWeight: '700',
    color: '#10b981'
  },
  emailCell: {
    color: '#a3a3a3',
    fontSize: '14px',
    fontFamily: 'monospace',
    wordBreak: 'break-all'
  },
  mobileCell: {
    color: '#10b981',
    fontWeight: '600',
    fontFamily: 'monospace'
  },
  experienceCell: {
    color: '#10b981',
    fontWeight: '700',
    textAlign: 'center'
  },
  skillsCell: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    alignItems: 'flex-start'
  },
  skillChip: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3)',
    animation: 'chipBounce 0.5s ease-out',
    marginBottom: '2px'
  },
  moreSkillsChip: {
    background: 'rgba(16, 185, 129, 0.3)',
    border: '1px solid rgba(16, 185, 129, 0.5)'
  },
  score: {
    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: '700',
    display: 'inline-block',
    boxShadow: '0 4px 8px rgba(245, 158, 11, 0.3)',
    animation: 'scorePulse 2s ease-in-out infinite'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  },
  backButton: {
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1))',
    border: '2px solid #10b981',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '16px',
    color: '#10b981',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)'
  }
};