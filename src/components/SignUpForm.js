import React, { useState } from 'react';
import { formStyles } from '../styles/formStyles';

const SignUpForm = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsSearch, setSkillsSearch] = useState('');
  const [experience, setExperience] = useState('');
  const [outputText, setOutputText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableSkills = [
    'Java', 'C', 'C++', 'Python', 'JavaScript', 'React', 'Node.js', 
    'Angular', 'Vue.js', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 
    'Kotlin', 'C#', 'TypeScript', 'HTML', 'CSS', 'SQL', 'MongoDB', 
    'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 
    'Azure', 'Git', 'Jenkins', 'Spring Boot', 'Django', 'Flask'
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

  const handleConfirm = () => {
    console.log('Confirmed:', { skills: selectedSkills, experience, outputText });
    // Handle confirmation logic here
    alert('Requirements confirmed successfully!');
  };

  return (
    <div style={formStyles.container}>
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
            style={formStyles.confirmButton}
            className="confirm-button"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;