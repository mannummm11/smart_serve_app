import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { candidateResultsStyles } from '../styles/candidateResultsStyles';

const CandidateResultsPage = () => {
  const location = useLocation();
  const { skills, experience } = location.state || { skills: [], experience: '' };
  const [isVisible, setIsVisible] = useState(false);

  console.log('Received data:', { skills, experience }); // Debug log

  // Mock candidate data based on selected skills and experience
  const generateCandidates = () => {
    const mockCandidates = [
      { name: 'John Smith', email: 'john.smith@email.com' },
      { name: 'Sarah Johnson', email: 'sarah.johnson@email.com' },
      { name: 'Michael Chen', email: 'michael.chen@email.com' },
      { name: 'Emily Davis', email: 'emily.davis@email.com' },
      { name: 'Robert Wilson', email: 'robert.wilson@email.com' },
      { name: 'Lisa Anderson', email: 'lisa.anderson@email.com' },
      { name: 'David Brown', email: 'david.brown@email.com' },
      { name: 'Jennifer Lee', email: 'jennifer.lee@email.com' }
    ];

    return mockCandidates.map((candidate, index) => ({
      ...candidate,
      skills: skills && skills.length > 0 ? skills : ['JavaScript', 'React', 'Node.js'],
      experience: experience || '5',
      score: Math.floor(Math.random() * 3) + 8 // Random score between 8-10
    }));
  };

  const candidates = generateCandidates();

  console.log('Generated candidates:', candidates); // Debug log

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={candidateResultsStyles.main}>
      <div style={candidateResultsStyles.container}>
        <h1 style={candidateResultsStyles.title}>Candidate Results</h1>
        <p style={candidateResultsStyles.description}>
          Found {candidates.length} candidates matching your requirements
          {skills && skills.length > 0 && (
            <span> for skills: {skills.join(', ')} with {experience} years of experience</span>
          )}
        </p>

        <div 
          style={{
            ...candidateResultsStyles.tableContainer,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          <table style={candidateResultsStyles.table}>
            <thead>
              <tr style={candidateResultsStyles.headerRow}>
                <th style={candidateResultsStyles.header}>Name</th>
                <th style={candidateResultsStyles.header}>Email</th>
                <th style={candidateResultsStyles.header}>Skills</th>
                <th style={candidateResultsStyles.header}>Experience</th>
                <th style={candidateResultsStyles.header}>Score</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr 
                  key={index}
                  style={{
                    ...candidateResultsStyles.row,
                    animationDelay: `${index * 0.1}s`
                  }}
                  className="table-row"
                >
                  <td style={candidateResultsStyles.cell}>{candidate.name}</td>
                  <td style={candidateResultsStyles.cell}>{candidate.email}</td>
                  <td style={candidateResultsStyles.cell}>
                    <div style={candidateResultsStyles.skillsCell}>
                      {candidate.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} style={candidateResultsStyles.skillChip}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td style={candidateResultsStyles.cell}>{candidate.experience} years</td>
                  <td style={candidateResultsStyles.cell}>
                    <span style={candidateResultsStyles.score}>{candidate.score}/10</span>
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
            Back to Search
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CandidateResultsPage;