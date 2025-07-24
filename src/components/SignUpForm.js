import React, { useState } from 'react';
import { formStyles } from '../styles/formStyles';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles.container}>
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Full Name</label>
        <input 
          type="text" 
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleInputChange}
          style={formStyles.input}
          className="input-field"
          required
        />
      </div>
      
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Email Address</label>
        <input 
          type="email" 
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          style={formStyles.input}
          className="input-field"
          required
        />
      </div>
      
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Company Name</label>
        <input 
          type="text" 
          name="company"
          placeholder="Enter your company name"
          value={formData.company}
          onChange={handleInputChange}
          style={formStyles.input}
          className="input-field"
        />
      </div>
      
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Project Type</label>
        <select 
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          style={formStyles.input}
          className="input-field"
          required
        >
          <option value="">Select project type</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile Application</option>
          <option value="api">API Service</option>
          <option value="microservices">Microservices</option>
          <option value="other">Other</option>
        </select>
      </div>
    </form>
  );
};

export default SignUpForm;