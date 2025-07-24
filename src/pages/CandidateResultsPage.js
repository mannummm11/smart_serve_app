import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Inline styles with updated colors and animations
const candidateResultsStyles = {
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
    borderSpacing: 0
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
    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
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
    fontWeight: '500'
  },
  skillsCell: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px'
  },
  skillChip: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3)',
    animation: 'chipBounce 0.5s ease-out'
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
  },
  mobileNumber: {
    color: '#10b981',
    fontWeight: '600',
    fontFamily: 'monospace'
  }
};

const CandidateResultsPage = () => {
  const location = useLocation();
  const { candidates, skills, experience } = location.state || { 
    candidates: [], 
    skills: [], 
    experience: '' 
  };
  const [isVisible, setIsVisible] = useState(false);

  console.log('Received data:', { candidates, skills, experience });

  // Use API data if available, otherwise fall back to mock data
  const candidateData = candidates && candidates.length > 0 ? candidates : [
    {
      name: "RAHUL VERMA",
      email: "rahul.verma.dev@gmail.com",
      mobile: "+91 9123456789",
      experience: 5,
      skills: ["Java", "Kotlin", "Scala", "Spring Boot", "Play Framework", "MySQL"],
      score: 33
    },
    {
      name: "PRIYA SHARMA",
      email: "priya.sharma@email.com",
      mobile: "+91 9876543210",
      experience: 4,
      skills: ["Java", "Spring Boot", "MySQL", "Docker"],
      score: 28
    },
    {
      name: "AMIT KUMAR",
      email: "amit.kumar.tech@gmail.com",
      mobile: "+91 9988776655",
      experience: 3,
      skills: ["Java", "React", "Node.js", "MongoDB"],
      score: 31
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Enhanced CSS animations */}
      <style>
        {`
          @keyframes titleGlow {
            0% { 
              text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
              transform: scale(1);
            }
            100% { 
              text-shadow: 0 0 20px rgba(16, 185, 129, 0.8), 0 0 30px rgba(16, 185, 129, 0.3);
              transform: scale(1.02);
            }
          }
          
          @keyframes containerPulse {
            0%, 100% { 
              box-shadow: 0 20px 40px rgba(16, 185, 129, 0.1);
              border-color: rgba(16, 185, 129, 0.2);
            }
            50% { 
              box-shadow: 0 25px 50px rgba(16, 185, 129, 0.2);
              border-color: rgba(16, 185, 129, 0.3);
            }
          }
          
          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes chipBounce {
            0% { 
              transform: scale(0.8) translateY(10px);
              opacity: 0;
            }
            50% { 
              transform: scale(1.1) translateY(-5px);
            }
            100% { 
              transform: scale(1) translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes scorePulse {
            0%, 100% { 
              transform: scale(1);
              box-shadow: 0 4px 8px rgba(245, 158, 11, 0.3);
            }
            50% { 
              transform: scale(1.05);
              box-shadow: 0 6px 12px rgba(245, 158, 11, 0.5);
            }
          }
          
          .table-row:hover {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05)) !important;
            transform: translateY(-3px) scale(1.01) !important;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15) !important;
          }
          
          .back-button:hover {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.2)) !important;
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4) !important;
          }
        `}
      </style>

      <main style={candidateResultsStyles.main}>
        <div style={candidateResultsStyles.container}>
          <h1 style={candidateResultsStyles.title}>Candidate Results</h1>
          <p style={candidateResultsStyles.description}>
            Found {candidateData.length} candidates matching your requirements
            {skills && skills.length > 0 && (
              <span> for skills: <strong style={{color: '#10b981'}}>{skills.join(', ')}</strong> with <strong style={{color: '#10b981'}}>{experience}</strong> years of experience</span>
            )}
          </p>

          <div 
            style={{
              ...candidateResultsStyles.tableContainer,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            <table style={candidateResultsStyles.table}>
              <thead>
                <tr style={candidateResultsStyles.headerRow}>
                  <th style={candidateResultsStyles.header}>Name</th>
                  <th style={candidateResultsStyles.header}>Email</th>
                  <th style={candidateResultsStyles.header}>Mobile</th>
                  <th style={candidateResultsStyles.header}>Experience</th>
                  <th style={candidateResultsStyles.header}>Skills</th>
                  <th style={candidateResultsStyles.header}>Score</th>
                </tr>
              </thead>
              <tbody>
                {candidateData.map((candidate, index) => (
                  <tr 
                    key={index}
                    style={{
                      ...candidateResultsStyles.row,
                      animationDelay: `${index * 0.15}s`
                    }}
                    className="table-row"
                  >
                    <td style={candidateResultsStyles.cell}>
                      <strong style={{color: '#10b981'}}>{candidate.experience}</strong> years
                    </td>
                    <td style={candidateResultsStyles.cell}>
                      <div style={candidateResultsStyles.skillsCell}>
                        {candidate.skills.slice(0, 5).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            style={{
                              ...candidateResultsStyles.skillChip,
                              animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                        {candidate.skills.length > 5 && (
                          <span 
                            style={{
                              ...candidateResultsStyles.skillChip,
                              background: 'rgba(16, 185, 129, 0.3)',
                              animationDelay: `${(index * 0.1) + (5 * 0.05)}s`
                            }}
                          >
                            +{candidate.skills.length - 5} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td style={candidateResultsStyles.cell}>
                      <span 
                        style={{
                          ...candidateResultsStyles.score,
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        {candidate.score}/100
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={candidateResultsStyles.buttonContainer}>
            <Link 
              to="/get-started"
              style={candidateResultsStyles.backButton}
              className="back-button"
            >
              🔍 Search Again
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateResultsPage;