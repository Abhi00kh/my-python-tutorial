// LandingPage.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to Our Tutorials</h1>
      <p>Learn the latest technologies with step-by-step tutorials.</p>
      <Button onClick={() => navigate('/tutorials')}>Start Learning</Button>
    </div>
  );
};

export default LandingPage;