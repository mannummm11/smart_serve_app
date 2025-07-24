import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { candidateResultsStyles } from '../styles/candidateResultsStyles';

// Updated inline styles with proper table layout and responsive design


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
  const candidateData = [...candidates].sort((a, b) => b.score - a.score);
 

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

          /* Responsive table styles */
          @media (max-width: 1024px) {
            .table-container {
              overflow-x: scroll;
            }
            
            .candidate-table {
              min-width: 900px;
            }
          }

          @media (max-width: 768px) {
            .candidate-table {
              min-width: 800px;
            }
            
            .skill-chip {
              font-size: 10px !important;
              padding: 3px 6px !important;
            }
          }
        `}
      </style>

      <main style={candidateResultsStyles.main}>
        <div style={candidateResultsStyles.container}>
          <h1 style={candidateResultsStyles.title}>Candidate Results</h1>
          <p style={candidateResultsStyles.description}>
            Found {candidateData.length} candidates matching your requirements
            {skills && skills.length > 0 && (
              <span> for skills: <strong style={{color: '#10b981'}}>{Array.isArray(skills) ? skills.join(', ') : skills}</strong> with <strong style={{color: '#10b981'}}>{experience}</strong> years of experience</span>
            )}
          </p>

          <div 
            className="table-container"
            style={{
              ...candidateResultsStyles.tableContainer,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            <table style={candidateResultsStyles.table} className="candidate-table">
              <thead>
                <tr style={candidateResultsStyles.headerRow}>
                  <th style={{...candidateResultsStyles.header, ...candidateResultsStyles.nameHeader}}>Name</th>
                  <th style={{...candidateResultsStyles.header, ...candidateResultsStyles.emailHeader}}>Email</th>
                  <th style={{...candidateResultsStyles.header, ...candidateResultsStyles.mobileHeader}}>Mobile</th>
                  <th style={{...candidateResultsStyles.header, ...candidateResultsStyles.experienceHeader}}>Experience</th>
                  <th style={{...candidateResultsStyles.header, ...candidateResultsStyles.skillsHeader}}>Skills</th>
                  <th style={{...candidateResultsStyles.header, ...candidateResultsStyles.scoreHeader}}>Score</th>
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
                    <td style={{...candidateResultsStyles.cell, ...candidateResultsStyles.nameCell}}>
                      {candidate.name}
                    </td>
                    <td style={{...candidateResultsStyles.cell, ...candidateResultsStyles.emailCell}}>
                      {candidate.email}
                    </td>
                    <td style={{...candidateResultsStyles.cell, ...candidateResultsStyles.mobileCell}}>
                      {candidate.mobile}
                    </td>
                    <td style={{...candidateResultsStyles.cell, ...candidateResultsStyles.experienceCell}}>
                      <strong>{candidate.experience}</strong> years
                    </td>
                    <td style={candidateResultsStyles.cell}>
                      <div style={candidateResultsStyles.skillsCell}>
                        {candidate.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="skill-chip"
                            style={{
                              ...candidateResultsStyles.skillChip,
                              animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                        {candidate.skills.length > 4 && (
                          <span 
                            className="skill-chip"
                            style={{
                              ...candidateResultsStyles.skillChip,
                              ...candidateResultsStyles.moreSkillsChip,
                              animationDelay: `${(index * 0.1) + (4 * 0.05)}s`
                            }}
                          >
                            +{candidate.skills.length - 4} more
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
                        {candidate.score/10} / 10
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
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