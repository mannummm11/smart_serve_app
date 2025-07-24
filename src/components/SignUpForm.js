import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formStyles } from '../styles/formStyles';

// Inline styles


const SignUpForm = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsSearch, setSkillsSearch] = useState('');
  const [experience, setExperience] = useState('');
  const [outputText, setOutputText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const availableSkills = [
    'Java', 'C', 'C++', 'Python', 'JavaScript', 'React', 'Node.js', 
    'Angular', 'Vue.js', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 
    'Kotlin', 'C#', 'TypeScript', 'HTML', 'CSS', 'SQL', 'MongoDB', 
    'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 
    'Azure', 'Git', 'Jenkins', 'Spring Boot', 'Django', 'Flask',
    'AI & ML Basics', 'TensorFlow', 'PyTorch', 'Prompt Engineering',
    'LLM Engineering', 'GitHub Copilot', 'Agentic AI Workflow',
    'Secure Coding Practices', 'DevSecOps', 'System Design',
    'Cloud-Native Architecture', 'Serverless Computing',
    'Low-Code Platforms', 'No-Code Tools', 'Quantum Computing Basics',
    'Quantum Software Engineering', 'Edge Computing', 'AIoT',
    'Progressive Web Apps', 'Microservices', 'API Design',
    'GraphQL', 'gRPC', 'CI/CD Pipelines', 'GitLab CI/CD',
    'GitHub Actions', 'Terraform', 'Ansible', 'Puppet', 'Chef',
    'Observability (Prometheus, Grafana)', 'Site Reliability Engineering (SRE)',
    'Blockchain Basics', 'Smart Contracts', 'Cybersecurity Awareness',
    'Ethical AI', 'XAI (Explainable AI)', 'Cryptography', 'OAuth2',
    'OpenID Connect', 'OAuth', 'Serverless Security',
    'Container Security', 'Static Code Analysis', 'SonarQube',
    'Data Structures & Algorithms', 'Performance Optimization',
    'System Thinking', 'Soft Skills (Communication, Empathy)',
    'Design Patterns', 'Clean Architecture', 'Domain-Driven Design',
    'Event-Driven Architecture', 'Reactive Programming',
    'State Management (Redux, MobX)', 'WebAssembly', 'Rust Web Dev',
    'Mobile Dev (SwiftUI, Jetpack Compose)', 'Cross-Platform (Flutter)',
    'UI/UX Fundamentals', 'Accessibility (a11y)', 'Localization (i18n)',
    'Observability', 'Logging & Tracing', 'Chaos Engineering',
    'Real-Time Systems (WebSockets, MQTT)', 'Testing (Unit, Integration)',
    'Test Automation (Selenium, Cypress)', 'BDD/TDD',
    'Data Engineering (ETL, Airflow)', 'Data Visualization (D3.js)',
    'Big Data (Spark, Hadoop)', 'BI Tools (PowerBI, Tableau)',
    'Redis Streams', 'Graph Databases (Neo4j)',
    'Time-Series DBs (InfluxDB)', 'Message Queues (Kafka, RabbitMQ)',
    'CI/CD Security Scanning', 'Compliance (GDPR, PCI)',
    'Observability as Code', 'Digital Twins', 'Neuromorphic Computing Basics',
    'Generative AI Models', 'Agentic AI', 'AI Ethics & Governance',
    'ChatOps', 'Voice UX', 'Robotics Software Integration',
    'Fintech Engineering', 'Cryptocurrency Platforms',
    'DevOps Culture', 'Collaboration Tools (Miro, Jira)',
    'Remote & Distributed Team Practices'
  ];

  const filteredSkills = availableSkills.filter(skill => 
    skill.toLowerCase().includes(skillsSearch.toLowerCase()) &&
    !selectedSkills.includes(skill)
  );

  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setSkillsSearch('');
      setShowDropdown(false);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 40)) {
      setExperience(value);
    }
  };

  const handleSubmit = () => {
    if (selectedSkills.length > 0 && experience) {
      const skillsText = selectedSkills.join(', ');
      const output = `I want the candidate detail which have skills like ${skillsText} and ${experience} years.`;
      setOutputText(output);
      setIsSubmitted(true);
    }
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    
    try {
      // Prepare request body
      const requestBody = {
        skill: selectedSkills,
        experience: parseInt(experience)
      };

      console.log('Sending request:', requestBody);

      // Make API call
      const response = await fetch('https://dummy.com/fakeApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const candidatesData = await response.json();
      console.log('API Response:', candidatesData);

      // Navigate to results page with API data
      navigate('/candidate-results', {
        state: {
          candidates: candidatesData,
          skills: selectedSkills,
          experience: experience
        }
      });

    } catch (error) {
      console.error('API call failed:', error);
      
      // Fallback to mock data if API fails
      const mockCandidatesData = [
        {
          name: "RAHUL VERMA",
          email: "rahul.verma.dev@gmail.com",
          mobile: "+91 9123456789",
          experience: 5,
          skills: ["Java", "Kotlin", "Scala", "Spring Boot", "Play Framework", "MySQL", "Cassandra", "Google Cloud Platform", "DigitalOcean", "Docker", "Jenkins", "Helm", "Prometheus", "Grafana", "Leadership", "Teamwork", "Communication"],
          score: 33
        },
        {
          name: "PRIYA SHARMA",
          email: "priya.sharma@email.com",
          mobile: "+91 9876543210",
          experience: 4,
          skills: selectedSkills.length > 0 ? selectedSkills : ["Java", "Spring Boot", "MySQL"],
          score: 28
        },
        {
          name: "AMIT KUMAR",
          email: "amit.kumar.tech@gmail.com",
          mobile: "+91 9988776655",
          experience: parseInt(experience) || 3,
          skills: selectedSkills.length > 0 ? selectedSkills : ["Java", "React", "Node.js"],
          score: 31
        }
      ];

      console.log('Using mock data:', mockCandidatesData);

      // Navigate with mock data
      navigate('/candidate-results', {
        state: {
          candidates: mockCandidatesData,
          skills: selectedSkills,
          experience: experience
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={formStyles.container}>
      {/* Add loading spinner animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* Skills Dropdown Section */}
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Skills</label>
        <div style={formStyles.skillsSection}>
          <div style={formStyles.searchContainer}>
            <input 
              type="text"
              placeholder="Search and select skills..."
              value={skillsSearch}
              onChange={(e) => {
                setSkillsSearch(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              style={formStyles.input}
              className="input-field"
            />
            {showDropdown && skillsSearch && filteredSkills.length > 0 && (
              <div style={formStyles.dropdown}>
                {filteredSkills.slice(0, 8).map((skill) => (
                  <div 
                    key={skill}
                    style={formStyles.dropdownItem}
                    className="dropdown-item"
                    onClick={() => handleSkillSelect(skill)}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Skills Chips */}
          {selectedSkills.length > 0 && (
            <div style={formStyles.chipsContainer}>
              {selectedSkills.map((skill) => (
                <div key={skill} style={formStyles.chip}>
                  <span>{skill}</span>
                  <button 
                    onClick={() => removeSkill(skill)}
                    style={formStyles.chipRemove}
                    className="chip-remove"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Experience Input */}
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Years of Experience (1-40)</label>
        <input 
          type="number"
          min="1"
          max="40"
          placeholder="Enter years of experience"
          value={experience}
          onChange={handleExperienceChange}
          style={formStyles.input}
          className="input-field"
        />
      </div>

      {/* Submit Button */}
      <div style={formStyles.inputGroup}>
        <button 
          onClick={handleSubmit}
          disabled={selectedSkills.length === 0 || !experience}
          style={{
            ...formStyles.submitButton,
            opacity: selectedSkills.length === 0 || !experience ? 0.5 : 1,
            cursor: selectedSkills.length === 0 || !experience ? 'not-allowed' : 'pointer'
          }}
          className="primary-button"
        >
          Submit
        </button>
      </div>

      {/* Output Text Box */}
      {isSubmitted && outputText && (
        <div style={formStyles.inputGroup}>
          <label style={formStyles.label}>Generated Requirement</label>
          <div style={formStyles.outputBox}>
            I want the candidate detail which have skills like{' '}
            <strong>{selectedSkills.join(', ')}</strong> and{' '}
            <strong>{experience}</strong> years.
          </div>
        </div>
      )}

      {/* Confirm Button */}
      {isSubmitted && (
        <div style={formStyles.inputGroup}>
          <button 
            onClick={handleConfirm}
            disabled={isLoading}
            style={{
              ...formStyles.confirmButton,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
            className="confirm-button"
          >
            {isLoading && <div style={formStyles.loadingSpinner}></div>}
            {isLoading ? 'Loading...' : 'Confirm'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;