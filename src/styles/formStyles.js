export const formStyles = {
  container: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '500px',
    width: '100%',
    marginBottom: '20px'
  },
  inputGroup: {
    marginBottom: '24px',
    textAlign: 'left'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#d1d5db',
    fontSize: '16px',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box'
  },
  skillsSection: {
    position: 'relative'
  },
  searchContainer: {
    position: 'relative'
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(30, 41, 59, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    borderRadius: '10px',
    maxHeight: '200px',
    overflowY: 'auto',
    zIndex: 1000,
    marginTop: '4px'
  },
  dropdownItem: {
    padding: '12px 16px',
    cursor: 'pointer',
    color: '#d1d5db',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'background-color 0.2s ease'
  },
  chipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px'
  },
  chip: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500'
  },
  chipRemove: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '0',
    marginLeft: '4px',
    lineHeight: '1',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease'
  },
  submitButton: {
    background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '16px',
    color: 'white',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'all 0.2s ease',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    width: '100%'
  },
  confirmButton: {
    background: 'transparent',
    border: '2px solid #10b981',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '16px',
    color: '#10b981',
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'all 0.2s ease',
    width: '100%'
  },
  outputBox: {
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '10px',
    padding: '16px',
    color: '#d1d5db',
    fontSize: '16px',
    lineHeight: '1.5',
    marginTop: '8px'
  },
  loadingSpinner: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    border: '3px solid rgba(255,255,255,0.3)',
    borderRadius: '50%',
    borderTopColor: '#fff',
    animation: 'spin 1s ease-in-out infinite',
    marginRight: '8px'
  }
};